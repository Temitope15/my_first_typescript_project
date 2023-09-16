import { hasFormatter } from './../interfaces/hasFormatter.js';
 
 export class Invoice implements hasFormatter {

    constructor(
        readonly client : string,
        private description : string,
        public amount : number,   // there should be modifiers if we want this...if not declare it above
    ){}

    format(){
        return `${this.client} owes #${this.amount} for ${this.description}`;
    }
}
