import { Component } from "../../../core/component.js";

export class MathComponent extends Component {
    constructor() {
        super("../main/app/pages/math.component.html", "../main/app/pages/math.component.css")
    }
}

customElements.define("app-math", MathComponent);