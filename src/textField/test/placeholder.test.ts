import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("KucTextField", () => {
  describe("placeholder", () => {
    it("should be '' when not assigning", async () => {
      const container = document.createElement("kuc-text-field");
      const el = await fixture(container);

      const inputEl = el.shadowRoot?.querySelector(
        ".kuc-text-group-input_item"
      ) as HTMLInputElement;

      expect(inputEl.placeholder).to.equal("");
    });

    it("should be 'abc' when assigning", async () => {
      const container = document.createElement("kuc-text-field");
      container.setAttribute("placeholder", "abc");
      const el = await fixture(container);

      const inputEl = el.shadowRoot?.querySelector(
        ".kuc-text-group-input_item"
      ) as HTMLInputElement;

      expect(inputEl.placeholder).to.equal("abc");
    });
  });
});
