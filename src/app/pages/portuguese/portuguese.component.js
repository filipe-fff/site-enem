import { Component } from "../../../../core/component.js";

export class PortugueseComponent extends Component {
    constructor() {
        super("../src/app/pages/portuguese/portuguese.component.html", "../src/app/pages/portuguese/portuguese.component.css");
    }
}

customElements.define("app-portuguese", PortugueseComponent);