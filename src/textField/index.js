import { __decorate } from "tslib";
import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit-element/decorators.js";
let KucTextField = class KucTextField extends LitElement {
    constructor() {
        super(...arguments);
        this.className = "";
        this.error = "";
        this.id = "";
        this.label = "";
        this.value = "";
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
          <label for="kuc-${this.label}" class="kuc-label">${this.label}</label>
          <div class="group-input">
            <input 
              class="kuc-input${this.error ? " kuc-input-error" : null}"
              name="kuc-${this.label}"
              placeholder="${this.placeholder}"
              value="${this.value}"
              @change="${this.changeHandler}"
              ?disabled="${this.disabled}"
            />
            <div class="kuc-error-text">${this.error}</div>
          </div>
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
    .kuc-text-group  {
      display: flex;
    }
    .kuc-text-group_required .kuc-label:after {
      content: "*";
      color: #ff0000
    }
    .group-input {
      flex: 1;
    }
    .kuc-label {
      margin-right: 5px;
      position: relative;
      display: inline-flex;
      align-items: center;
      max-width: 100%;
      height: 32px;
      font-size: 15px;
    }
    .kuc-input {
      flex: 1;
      box-sizing: border-box;
      margin: 0;
      position: relative;
      display: inline-block;
      width: 100%;
      min-width: 0;
      padding: 4px 11px;
      font-size: 14px;
      line-height: 1.5715;
      background-color: #ffffff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      transition: all 0.3s;
    }
    .kuc-input-error {
      border-color: #FF0000;
    }
    .kuc-error-text {
      color: #ff0000;
      margin-top: 5px;
    }
    .kuc-input::placeholder {
      color: #b0aeae;
    }
  `;
__decorate([
    property({ type: String })
], KucTextField.prototype, "className", void 0);
__decorate([
    property({ type: String })
], KucTextField.prototype, "error", void 0);
__decorate([
    property({ type: String })
], KucTextField.prototype, "id", void 0);
__decorate([
    property({ type: String })
], KucTextField.prototype, "label", void 0);
__decorate([
    property({ type: String })
], KucTextField.prototype, "value", void 0);
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
