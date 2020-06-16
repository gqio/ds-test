import { l as litElement } from './components,lit-element,lit-html,react,react-dom,theme-ui-c3d2a715.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync("table {\n  width: 100%;\n  font-size: small;\n  border-collapse: collapse; }\n  table th {\n    text-align: start;\n    opacity: 0.6; }\n  table th,\n  table td {\n    padding: 12px; }\n  table td {\n    border-top: 1px solid #d5d5d5;\n    vertical-align: top; }\n  table tr:hover {\n    background-color: #f6f6f6; }\n\n.sample {\n  height: 96px;\n  width: 192px; }\n");

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const { LitElement,html,property } = litElement;class BaseSwatch extends LitElement {
    static get styles() {
        return { styleSheet: sheet, cssText: sheet.text };
    }
    renderVariables(token) {
        return html `${["$" + token.name, `var(--${token.name})`].map((a) => html `<pre><code>${a}</code></pre>`)}`;
    }
    renderAttributes(token) {
        return html `<span style="font-family:monospace">${token.value}</span>`;
    }
    name(token) {
        return token.path.splice(1).join(" ");
    }
    renderSample(token, minHeight) {
        return html ``;
    }
    renderToken(token) {
        return html `
      <tr>
        <td>
          ${this.renderSample(token, "64px")}
        </td>
        <td>
          <h2 style="white-space:nowrap">${this.name(token)}</h2>
          <p style="word-break:word">${token.comment}</p>
        </td>
        <td>${this.renderVariables(token)}</td>
        <td>${this.renderAttributes(token)}</td>
      </tr>
    `;
    }
    render() {
        return html `
      <table>
        <thead>
          <th>Example</th>
          <th>Description</th>
          <th>Tokens</th>
          <th>Values</th>
        </thead>
        ${this.tokens.map(this.renderToken.bind(this))}
      </table>
    `;
    }
}
__decorate([
    property(),
    __metadata("design:type", Object)
], BaseSwatch.prototype, "tokens", void 0);

export { BaseSwatch as B };
