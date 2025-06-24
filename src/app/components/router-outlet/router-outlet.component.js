import "../../pages/math/math.component.js";
import "../../pages/portuguese/portuguese.component.js";
import "../../pages/physical/physical.component.js";
import "../../pages/chemical/chemical.component.js";
import "../../pages/biology/biology.component.js";

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
            "/math": "app-math",
            "/portuguese": "app-portuguese",
            "/physical": "app-physical",
            "/chemical": "app-chemical",
            "/biology": "app-biology"
        };
    }

    handleLocation() {
        const path = window.location.pathname;
        const route = this.routes[path];

        console.log("rota =>", route);

        this.shadowRoot.innerHTML = "";

        const element = document.createElement(route);
        this.shadowRoot.appendChild(element);
    }
}

customElements.define("router-outlet", RouterOutletComponent);