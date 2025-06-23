import "../../pages/math.component.js";

export class RouterOutletComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        window.addEventListener("routerLink", (event) => {
            this.render(event.detail);
        });
        this.render("/");
    }

    render = (route) => {
        this.shadowRoot.innerHTML = "";
        const routes = {
            "/": "div",
            "/math": "app-math"
        };
        const element = document.createElement(routes[route] || "div");
        this.shadowRoot.appendChild(element);
    }
}

customElements.define("router-outlet", RouterOutletComponent);