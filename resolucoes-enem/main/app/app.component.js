import { Component } from "../../core/component.js";

export class AppComponent extends Component {

    constructor() {
        super("../main/app/app.component.html", "../main/app/app.component.css");
    }
}

customElements.define("app-root", AppComponent);