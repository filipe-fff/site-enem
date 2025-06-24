import { Component } from "../../../../core/component.js";

export class PhysicalComponent extends Component {
    constructor() {
        super("../src/app/pages/physical/physical.component.html", "../src/app/pages/physical/physical.component.css")
    }
}

customElements.define("app-physical", PhysicalComponent);