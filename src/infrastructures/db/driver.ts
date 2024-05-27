import { Database, Spanner } from '@google-cloud/spanner'
import { Injectable } from '@nestjs/common';

@Injectable()
export class Driver {
    private readonly db: Database;
    constructor() {
        const spanner = new Spanner({ projectId: process.env.PROJECT_ID })
        const instance = spanner.instance(process.env.INSTANCE_ID);
        this.db = instance.database(process.env.DATABASE_ID);
    }
    getDB() {
        return this.db;
    }
}

