import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit-element/decorators.js";

@customElement("kuc-text-field")
export class KucTextField extends LitElement {
  @property({ type: String }) className = "";
  @property({ type: String}) error = "";
  @property({ type: String }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: String }) placeholder = "";
  @property({type: Boolean}) disabled = false;
  @property({type: Boolean}) required = false;
  
  updated(changedProperties) {
    if(changedProperties.has('id') && this.id){
      this.shadowRoot?.querySelector('.kuc-text-group')?.setAttribute('id',this.id);
    }
  }

  override render() {
    return html`
    <div class="kuc-text-group ${this.required ? "kuc-text-group_required" : null} ${this.className}">
          <label for="kuc-text-group-${this.label}" class="kuc-text-group-label">${this.label}</label>
          <div class="kuc-text-group-input">
            <input 
              class="kuc-text-group-input_item ${this.error ? "kuc-text-group-input_error" : null }"
              name="kuc-${this.label}"
              placeholder="${this.placeholder}"
              value="${this.value}"
              @change="${this.changeHandler}"
              ?disabled="${this.disabled}"
            />
            ${this.error ? html`<div class="kuc-text-group-error">${this.error}</div>` : ""}
          </div>
    </div>
    `;
  }

  private changeHandler (e: Event) {
      e.stopPropagation();
      const event = new CustomEvent('change', {bubbles: true, composed: true});
      this.dispatchEvent(event)
  }

  static override styles = css`
    .kuc-text-group  {
      display: flex;
    }
    .kuc-text-group_required .kuc-text-group-label:after {
      content: "*";
      color: #ff0000;
    }
    .kuc-text-group-input {
      flex: 1;
      min-width: 100px;
    }
    .kuc-text-group-label {
      margin-right: 5px;
      position: relative;
      display: inline-flex;
      align-items: center;
      max-width: 100%;
      height: 42px;
      font-size: 16px;
      verflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
    }
    .kuc-text-group-input_item {
      flex: 1;
      box-sizing: border-box;
      margin: 0;
      position: relative;
      display: inline-block;
      width: 100%;
      min-width: 100px;
      padding: 8px 14px;
      font-size: 16px;
      line-height: 1.5;
      background-color: #ffffff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      transition: all 0.3s;
    }
    .kuc-text-group-input_error {
      border-color: #ff0000;
    }
    .kuc-text-group-error {
      color: #ff0000;
      padding: 5px 0;
    }
    .kuc-input::placeholder {
      color: #b0aeae;
    }
  `;
}
