import { Component } from "../../core/component.js";
import "/components/router-outlet/router-outlet.component.js";

// export class AppComponent extends Component {

//     constructor() {
//         super("../src/app/app.component.html", "../src/app/app.component.css");
//     }

//     connectedCallback() {
//         super.connectedCallback().then(() => {
//         });
//     }
// }

export class AppComponent extends HTMLElement {
    constructor() {
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = "Olá, Mundo!";
    }
}

customElements.define("app-root", AppComponent);