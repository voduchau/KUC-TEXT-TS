import { __decorate } from "tslib";
import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit-element/decorators.js";
let KucTextField = class KucTextField extends LitElement {
    constructor() {
        super(...arguments);
        this.className = "";
        this.id = "";
        this.label = "";
        this.placeholder = "";
        this.disabled = false;
        this.required = false;
    }
    updated(changedProperties) {
        var _a, _b;
        if (changedProperties.has('id') && this.id) {
            (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.kuc-text-group')) === null || _b === void 0 ? void 0 : _b.setAttribute('id', this.id);
        }
    }
    render() {
        return html `
    <div class="kuc-text-group${this.required ? " kuc-text-group_required" : null}${this.className}">
        <label for="kuc-${this.label}">${this.label}</label>
        <input 
            name="kuc-${this.label}"
            placeholder="${this.placeholder}"
            @change="${this.changeHandler}"
            ?disabled="${this.disabled}"
        />
    </div>
    `;
    }
    changeHandler(e) {
        e.stopPropagation();
        const event = new CustomEvent('change', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
};
KucTextField.styles = css `
    :host {
        witdh: 100%;
    }
    .kuc-text-group {
        display: flex;
    }
    .kuc-text-group_required label:after {
        content: "*";
        color: red
    }
    label {
    }
    input {
        flex: 1
    }
  `;
__decorate([
    property({ type: String })
], KucTextField.prototype, "className", void 0);
__decorate([
    property({ type: String })
], KucTextField.prototype, "id", void 0);
__decorate([
    property({ type: String })
], KucTextField.prototype, "label", void 0);
__decorate([
    property({ type: String })
], KucTextField.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], KucTextField.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], KucTextField.prototype, "required", void 0);
KucTextField = __decorate([
    customElement("kuc-text-field")
], KucTextField);
export { KucTextField };
