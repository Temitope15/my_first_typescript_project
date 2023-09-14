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