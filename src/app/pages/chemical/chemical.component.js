import { Component } from "../../../../core/component.js";

export class ChemicalComponent extends Component {
    constructor() {
        super("../src/app/pages/chemical/chemical.component.html", "../src/app/pages/chemical/chemical.component.css");
    }
}

customElements.define("app-chemical", ChemicalComponent);