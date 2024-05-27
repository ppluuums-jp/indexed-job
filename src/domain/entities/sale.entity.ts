export class Sale {
    readonly id: string;
    readonly name: string;
    readonly isDone: boolean;
    constructor(
        id: string,
        name: string,
        isDone: boolean,
    ) {
        this.id = id;
        this.name = name;
        this.isDone = isDone;
    }

    static fromJson(json: any): Sale {
        return new Sale(json.id, json.name, json.isDone);
    }

    static toJson(sale: Sale): any {
        return {
            id: sale.id,
            name: sale.name,
            isDone: sale.isDone,
        };
    }
}

