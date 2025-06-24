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
        if(this.hasError) return;

        return Promise.all([
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
                shadow.innerHTML = "",
                shadow.append(globalStyle);
                shadow.append(style);
                shadow.append(template.content);

            } catch(error) {
                console.error(error);
                this.hasError = true;
            }
        }).catch(error => {
            console.log(error);
            this.hasError = true;
            this.shadowRoot.innerHTML = `<p style="color:red;">Erro ao carregar componente</p>`;
        });
    }
}