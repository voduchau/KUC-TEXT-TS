import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("KucTextField", () => {
  describe("label", () => {
    it("should be display none when not assigning", async () => {
      const container = document.createElement("kuc-text-field");
      const el = await fixture(container);

      const labelEl = el.shadowRoot?.querySelector(
        ".kuc-text-group-label"
      ) as HTMLLabelElement;

      expect(labelEl.textContent).to.equal("");
    });

    it("should be display 'username' when assigning", async () => {
      const container = document.createElement("kuc-text-field");
      container.setAttribute("label", "username");
      const el = await fixture(container);

      const labelEl = el.shadowRoot?.querySelector(
        ".kuc-text-group-label"
      ) as HTMLLabelElement;

      expect(labelEl.textContent).to.equal("username");
    });
  });
});
