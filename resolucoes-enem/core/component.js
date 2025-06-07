import { RouterOutletComponent } from "../src/app/components/router-outlet/router-outlet.component.js";

export class Component extends HTMLElement {
    templateUrl;
    styleUrl;
    globalStyleUrl = "../src/style.css";

    constructor(templateUrl, styleUrl) {
        super();
        this.attachShadow({ mode: "open" });

        this.templateUrl = templateUrl;
        this.styleUrl = styleUrl;
    }

    connectedCallback() {
        Promise.all([
            fetch(this.templateUrl).then(m => m.text()),
            fetch(this.styleUrl).then(m => m.text()),
            fetch(this.globalStyleUrl).then(m => m.text())
        ]).then(([html, css, globalCss]) => {
            try {
                const template = document.createElement("template");
                const style = document.createElement("style");
                const globalStyle = document.createElement("style");

                template.innerHTML = html;
                style.textContent = css;
                globalStyle.textContent = globalCss;

                const shadow = this.shadowRoot;
                shadow.append(globalStyle);
                shadow.append(style);
                shadow.append(template.content);

                this.onChildEvent();
            } catch(error) {
                console.error(error);
            }
        });
    }

    onChildEvent() {
        this.shadowRoot.querySelectorAll("[routerLink]").forEach(link =>
            link.addEventListener("click", () => {
                const path = link.getAttribute("routerLink");
                history.pushState({}, "", path);
                this.dispatchEvent(new Event("popstate"));
            })
        );
    }
}