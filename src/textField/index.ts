import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit-element/decorators.js";

@customElement("kuc-text-field")
export class KucTextField extends LitElement {

  @property({ type: String }) className = "";

  @property({ type: String }) id = "";

  @property({ type: String }) label = "";

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

  private changeHandler (e: Event) {
      e.stopPropagation();
      const event = new CustomEvent('change', {bubbles: true, composed: true});
      this.dispatchEvent(event)
  }

  static override styles = css`
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
}
