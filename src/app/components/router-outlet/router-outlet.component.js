import "../../pages/math.component.js";

export class RouterOutletComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.handleLocation = this.handleLocation.bind(this);
        this.route = this.routerLink.bind(this);
    }

    connectedCallback() {
        window.onpopstate = this.handleLocation.bind(this);
        window.route = this.routerLink.bind(this);

        this.handleLocation();
    }

    routerLink(event) {
        event = event || window.event;

        if (!event.target.hasAttribute("routerLink")) return;

        event.preventDefault();
        window.history.pushState({}, "", event.target.getAttribute("routerLink"));
        this.handleLocation();
    }

    get routes () {
        return {
            "/": "div",
            "/math": "app-math"
        };
    }

    handleLocation() {
        const path = window.location.pathname;
        const route = this.routes[path];

        if(!route) return;

        this.shadowRoot.innerHTML = "";
        const element = document.createElement(route);
        this.shadowRoot.appendChild(element);
    }
}

customElements.define("router-outlet", RouterOutletComponent);