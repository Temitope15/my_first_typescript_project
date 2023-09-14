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
