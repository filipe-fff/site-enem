import "../../pages/math.component.js";

export class RouterOutletComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.handleLocation = this.handleLocation.bind(this);
        this.route = this.route.bind(this);
    }

    connectedCallback() {
        window.onpopstate = this.handleLocation;
        window.route = this.route;

        this.handleLocation();
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
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
        const element = document.createElement(route);
        this.shadowRoot.appendChild(element);
    }
}

customElements.define("router-outlet", RouterOutletComponent);