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
    <div class="kuc-text-group${this.required ? " kuc-text-group_required" : null}${ this.className}">
          <label for="kuc-${this.label}" class="kuc-label">${this.label}</label>
          <div class="group-input">
            <input 
              class="kuc-input${this.error ? " kuc-input-error" : null }"
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

  private changeHandler (e: Event) {
      e.stopPropagation();
      const event = new CustomEvent('change', {bubbles: true, composed: true});
      this.dispatchEvent(event)
  }

  static override styles = css`
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
      verflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
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
}
