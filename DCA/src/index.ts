import { getdata } from "./types/datafech";
import Card, {Attribute} from "./components/card/card";


class AppContainer extends HTMLElement {


	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

	}

	async connectedCallback() {
		const dataGatos = await getdata();
		this.render(dataGatos);
	}

	render(dataGatos: any) {
		if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <style>
				
                </style>

                `}

            const cardgatos=this.ownerDocument.createElement("card-card") as Card
          cardgatos.setAttribute(Attribute.text, dataGatos)
          cardgatos.setAttribute(Attribute.image, dataGatos)

          this.shadowRoot?.appendChild(cardgatos);

          const buttoncats = this.ownerDocument.createElement('button')
          buttoncats.className= 'get gatos'
          buttoncats.textContent='gatos'
          
          this.shadowRoot?.appendChild(buttoncats)
		
		


			
		
	}

}

customElements.define('app-container', AppContainer);