import { Component } from "../../../core/component.js";

export class MathComponent extends Component {
    constructor() {
        super("../src/app/pages/math.component.html", "../src/app/pages/math.component.css")
    }
}

// export class MathComponent extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' });
//     }

//     connectedCallback() {
//         this.shadowRoot.innerHTML = "Olá, Mundo!";
//     }
// }

customElements.define("app-math", MathComponent);