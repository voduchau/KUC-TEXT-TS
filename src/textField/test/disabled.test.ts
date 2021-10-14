import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("KucTextField", () => {
  describe("disabled", () => {
    it("should not disabled when not assigning", async () => {
      const container = document.createElement("kuc-text-field");
      const el = await fixture(container);

      const inputEl = el.shadowRoot?.querySelector(
        ".kuc-text-group-input_item"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should disabled when assigning", async () => {
      const container = document.createElement("kuc-text-field");
      container.setAttribute("disabled", "true");
      const el = await fixture(container);

      const inputEl = el.shadowRoot?.querySelector(
        ".kuc-text-group-input_item"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
    });
  });
});
