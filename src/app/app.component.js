import { Component } from "../../core/component.js";
import "./components/router-outlet/router-outlet.component.js";

export class AppComponent extends Component {

    constructor() {
        // super("../src/app/app.component.html", "../src/app/app.component.css");
        this.shadowRoot.innerHTML = "Olá, Mundo!";
    }

    connectedCallback() {
        super.connectedCallback().then(() => {
        });
    }
}

customElements.define("app-root", AppComponent);