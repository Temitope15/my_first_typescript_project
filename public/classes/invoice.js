export class Invoice {
    constructor(client, description, amount) {
        this.client = client;
        this.description = description;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes #${this.amount} for ${this.description}`;
    }
}
