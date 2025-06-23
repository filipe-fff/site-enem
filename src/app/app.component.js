import { Component } from "../../core/component.js";
import "./components/router-outlet/router-outlet.component.js";

export class AppComponent extends Component {

    constructor() {
        super("../src/app/app.component.html", "../src/app/app.component.css");
    }

    connectedCallback() {
        super.connectedCallback().then(() => {
            // this.onChildEvent();
        });
    }

    // onChildEvent() {
    //     this.shadowRoot.querySelectorAll("[routerLink]").forEach(link =>
    //         link.addEventListener("click", () => {
    //             const event = new CustomEvent("routerLink", {
    //                 bubbles: true,
    //                 composed: true,
    //                 detail: link.getAttribute("routerLink")
    //             });
    //             this.dispatchEvent(event);
    //         })
    //     );
    // }
}

customElements.define("app-root", AppComponent);