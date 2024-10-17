class DropItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
    <style>    
        .container {           
            background-color: inherit;
            color: inherit;
            font-size: inherit;
            overflow: hidden;
            padding: 0 20px;
        }

        .item {
            width: 100%;
            line-height: 130%;
            margin: 0;
        }

        .item:hover {
            background-color: #757575
        }
    </style>
    <div class="container">
        <p class="item">
            <slot></slot>
        </p>
    </div>
        `;
    }
    // connectedCallback() {
    //     this.insertDropItem(); /* */
    // }
    // insertDropItem() { }
}
customElements.define('drop-item', DropItem);


class MyDropDown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
        .dorp-block {
            width: fit-content;
        }
        .header {
            display: flex;
            width: fit-content;
            padding: 10px 10px 10px 20px;
            border: 1px solid #494949;
            font-size: 20px;
            cursor: pointer;
            border-radius: 5px;
        }

        .title {
            margin-right: 20px;
        }

        .header .icon {
            color: #494949;
            transition: rotate 0.3s;
        }

        .open .icon {
            rotate: 180deg;            
        }

        .list {
            width: 100%;
            position: relative;
            cursor: pointer;
        }
        .list {
            max-height: 0;
            overflow: hidden;
            transition: max-height 3s;
        }
        .list.open {
            max-height: fit-content;
        }
    </style>
    <div class="dorp-block">
        <div class="header">
            <div class="title"></div>
            <div class="icon">&#9660;</div>
        </div>
        <div class="list">
            <slot></slot>
        </div>
    </div>
        `;
    }

    // этот метод необходим для подключения кастомного элемента к теневому дереву
    connectedCallback() {
        this.render(); /* */
    }

    render() {
        // здесь будет описано как будет выглядеть и что будет происходить с элементом при каких-то событиях
        const headerDrop = this.shadowRoot.querySelector('.header');
        const title = this.shadowRoot.querySelector('.title');
        const text = this.getAttribute('text') || 'CustomDropDown';
        const background = this.getAttribute('background') || '#ffffff';
        const color = this.getAttribute('color') || '#494949';
        title.textContent = text;
        headerDrop.style.background = background;
        headerDrop.style.color = color;
        // console.log(text);
        const list = this.shadowRoot.querySelector('.list');

        const myDrop = this.shadowRoot.querySelector('.dorp-block');
        myDrop.addEventListener('click', () => {
            headerDrop.classList.toggle('open');
            list.classList.toggle('open');
            list.addEventListener('click', e => {
                title.textContent = e.target.textContent;
            });
        });
    };
}

customElements.define('my-drop-down', MyDropDown); /* здесь указываем как будет называться тэг кастомного элемента и откуда будет брать вид и логику*/