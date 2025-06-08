import { Component } from "../../../core/component.js";

export class MathComponent extends Component {
    constructor() {
        super("../src/app/pages/math.component.html", "../src/app/pages/math.component.css")
    }
}

customElements.define("app-math", MathComponent);