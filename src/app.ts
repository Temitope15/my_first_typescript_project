const form =  document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement;

const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

type.addEventListener('click', ()=>{
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})

class Invoice {
    client : string;
    description : string;
    amount : number;

    constructor(c: string, d: string, a:number){
        this.client = c;
        this.description = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes #${this.amount} for ${this.description}`
    }
}

const invOne = new Invoice("Temitope", "Website creation", 500);
const invTwo = new Invoice("Ayodeji", "Website creation", 400);

let invoices : Invoice [] = []

invoices.push(invOne)
invoices.push(invTwo)
console.log(invoices)

invoices.forEach(inv =>{
    console.log(inv.client, inv.description, inv.amount, inv.format())
})
console.log(invOne.format())
