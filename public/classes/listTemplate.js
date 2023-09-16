export class listTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, header, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = header;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
