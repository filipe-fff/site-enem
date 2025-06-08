// import { MathComponent } from "../../pages/math.component";

export class RouterOutletComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        window.addEventListener("popstate", () => {
            console.log("popstate");
            this.render();
        });
        this.render();
    }

    render = () => {
        const route = window.location.pathname;
        const routes = {
            "/": "",
            "/math": "<app-math></app-math>ok"
        };
        console.log("route.endsWith()", route.endsWith());
        this.shadowRoot.innerHTML = routes[route.endsWith()];
    }
}

customElements.define("router-outlet", RouterOutletComponent);