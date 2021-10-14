import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("KucTextField", () => {
  describe("change event", () => {
    it("should triggered when input element triggered change event", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-text-field");
      const el = await fixture(container);
      const inputEl = el.shadowRoot?.querySelector(
        ".kuc-text-group-input_item"
      ) as HTMLInputElement;

      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      inputEl.dispatchEvent(new Event("change"));

      expect(triggeredEvent.type).to.equal("change");
    });
  });
});
