export enum Attribute {
    'text' = 'text'
}


class card extends HTMLElement {
    text?: string;
    
    constructor(){ 
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      text: null
    };

    return Object.keys(attrs);
  }

    attributeChangedCallback(propname:Attribute , oldV0alue: string|undefined, newValue: string|undefined) {
        this[propname] = newValue;
        this.render()
    }



    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('card-card', card)