class MyDropDown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
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
        }

        .open .icon {
            rotate: 180deg;
        }

        .list {
            width: 100%;
            position: relative;
            cursor: pointer;
        }
    </style>
    <div class="dorp-block">
        <div class="header">
            <div class="title">Текст</div>
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
    };
}

customElements.define('my-drop-down', MyDropDown); /* здесь указываем как будет называться тэг кастомного элемента и откуда будет брать вид и логику*/