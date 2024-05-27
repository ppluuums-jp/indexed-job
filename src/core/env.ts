declare namespace NodeJS {
    interface ProcessEnv {
        readonly PROJECT_ID: string;
        readonly INSTANCE_ID: string;
        readonly DATABASE_ID: string;
        readonly PARALLELISM: string;
        readonly JOB_COMPLETION_INDEX: string;
    }
}

