export enum Attribute {
    'text' = 'text',
    'image' = 'image',
    
}


class Card extends HTMLElement {
    text?: string;
    image?: string;
    
    constructor(){ 
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      text: null,
      image: null
    };

    return Object.keys(attrs);
  }

    attributeChangedCallback(propname:Attribute , oldV0alue: string|undefined, newValue: string|undefined) {
        this[propname] = newValue;
        this.render()
    }



    render() {
      if (this.shadowRoot){
        this.shadowRoot.innerHTML=''
      }

        const catDive = this.ownerDocument.createElement('div');
        
       
        
        // buttoncats.addEventListener('click', );
        
        const texth1 = this.ownerDocument.createElement('h1')
        texth1.className= 'text'
        texth1.textContent= `${this.text}`

        const imagen = this.ownerDocument.createElement('img')
        texth1.className= 'imagen'
        texth1.textContent= `${this.image}`

    
        
        this.shadowRoot?.appendChild(catDive);
        this.shadowRoot?.appendChild(imagen);
        this.shadowRoot?.appendChild(texth1);
      }
}
export default Card
customElements.define('card-card', Card)