import { hasFormatter } from './../interfaces/hasFormatter.js';
 
 export class Payment implements hasFormatter {

    constructor(
        readonly recipient : string,
        private description : string,
        public amount : number,   // there should be modifiers if we want this...if not declare it above
    ){}

    format(){
        return `${this.recipient} is owed #${this.amount} for ${this.description}`;
    }
}