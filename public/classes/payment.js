export class Payment {
    constructor(recipient, description, amount) {
        this.recipient = recipient;
        this.description = description;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed #${this.amount} for ${this.description}`;
    }
}
