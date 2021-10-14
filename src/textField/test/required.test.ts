import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("KucTextField", () => {
  describe("required", () => {
    it("should dont set class 'kuc-text-group_required' when not assigning", async () => {
      const container = document.createElement("kuc-text-field");
      const el = await fixture(container);

      const kucGroupEl = el.shadowRoot?.querySelector(
        ".kuc-text-group"
      ) as HTMLDivElement;

      expect(kucGroupEl.classList.contains("kuc-text-group_required")).to.equal(
        false
      );
    });

    it("should add class 'kuc-text-group_required' when assigning", async () => {
      const container = document.createElement("kuc-text-field");
      container.setAttribute("required", "true");
      const el = await fixture(container);

      const kucGroupEl = el.shadowRoot?.querySelector(
        ".kuc-text-group"
      ) as HTMLDivElement;

      expect(kucGroupEl.classList.contains("kuc-text-group_required")).to.equal(
        true
      );
    });
  });
});
