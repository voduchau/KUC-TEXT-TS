import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("KucTextField", () => {
  describe("error", () => {
    it("should not display when not assigning in constructor", async () => {
      const container = document.createElement("kuc-text-field");
      const el = await fixture(container);

      const errorEl = el.shadowRoot?.querySelector(
        ".kuc-text-group-error"
      ) as HTMLDivElement;

      expect(errorEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should 'error-message' when assigning", async () => {
      const container = document.createElement("kuc-text-field");
      container.setAttribute("error", "error-message");
      const el = await fixture(container);

      const errorEl = el.shadowRoot?.querySelector(
        ".kuc-text-group-error"
      ) as HTMLDivElement;

      expect(errorEl.innerText).to.equal("error-message");
    });
  });
});
