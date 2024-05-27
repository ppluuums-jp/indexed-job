#!/bin/bash

source ./env.sh

################
# Cloud Spanner
################
gcloud spanner instances create indexed-job-instance \
    --config=regional-${REGION} \
    --processing-units=100 \
    --description="Indexed Job Instance" \
    --project=${PROJECT_ID}

gcloud spanner databases create sales \
    --instance=indexed-job-instance \
    --ddl-file=../sql/sales.sql \
    --project=${PROJECT_ID}

################
# GKE Standard
################
gcloud container clusters create cluster-1 \
    --region ${REGION} \
    --release-channel None \
    --num-nodes=1 \
    --workload-pool=${PROJECT_ID}.svc.id.goog \
    --project=${PROJECT_ID}

kubectl apply -f ../manifests/sa.yaml

################
# IAM
################
gcloud projects add-iam-policy-binding projects/${PROJECT_ID} \
  --role=roles/spanner.admin \
  --member=principal://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${PROJECT_ID}.svc.id.goog/subject/ns/${NAMESPACE}/sa/${SERVICE_ACCOUNT} 

gcloud projects add-iam-policy-binding projects/${PROJECT_ID} \
  --role=roles/artifactregistry.reader \
  --member=principal://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${PROJECT_ID}.svc.id.goog/subject/ns/${NAMESPACE}/sa/${SERVICE_ACCOUNT} 

###############
# Job
###############
kubectl apply -f ../manifests/job.yaml

