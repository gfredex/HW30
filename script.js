class MyDropDown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        
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