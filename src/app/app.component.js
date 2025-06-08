import { Component } from "../../core/component.js";

export class AppComponent extends Component {

    constructor() {
        super("../src/app/app.component.html", "../src/app/app.component.css");
    }
}

customElements.define("app-root", AppComponent);