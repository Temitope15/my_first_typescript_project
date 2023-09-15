"use strict";
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
type.addEventListener('click', () => {
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.description = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes #${this.amount} for ${this.description}`;
    }
}
const invOne = new Invoice("Temitope", "Website creation", 500);
const invTwo = new Invoice("Ayodeji", "Website creation", 400);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.description, inv.amount, inv.format());
});
console.log(invOne.format());
