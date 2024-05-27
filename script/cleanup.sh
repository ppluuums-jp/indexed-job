#!/bin/bash

source ./env.sh

################
# GKE Standard
################
kubectl delete -f ../manifests/job.yaml
kubectl delete -f ../manifests/sa.yaml

gcloud container clusters delete cluster-1 \
    --region ${REGION} \
    --quiet \
    --project=${PROJECT_ID}

################
# IAM
################
gcloud projects remove-iam-policy-binding ${PROJECT_ID} \
  --role=roles/spanner.admin \
  --member=principal://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${PROJECT_ID}.svc.id.goog/subject/ns/${NAMESPACE}/sa/${SERVICE_ACCOUNT}

gcloud projects remove-iam-policy-binding ${PROJECT_ID} \
  --role=roles/artifactregistry.reader \
  --member=principal://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${PROJECT_ID}.svc.id.goog/subject/ns/${NAMESPACE}/sa/${SERVICE_ACCOUNT}

################
# Cloud Spanner
################
gcloud spanner databases delete sales \
    --instance=indexed-job-instance \
    --project=${PROJECT_ID}

gcloud spanner instances delete indexed-job-instance \
    --project=${PROJECT_ID}
