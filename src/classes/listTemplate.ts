import { hasFormatter } from '../interfaces/hasFormatter.js'

export class listTemplate {
    constructor(private container : HTMLUListElement){}

    render(item : hasFormatter, header : string, pos: 'start' | 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');

        h4.innerText = header;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format()
        
        li.append(p)
        if(pos === 'start'){
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }

    }
}