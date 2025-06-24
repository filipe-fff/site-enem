import { Component } from "../../../../core/component.js";

export class BiologyComponent extends Component {
    constructor() {
        super("../src/app/pages/biology/biology.component.html", "../src/app/pages/biology/biology.component.css");
    }
}

customElements.define("app-biology", BiologyComponent);