import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("KucTextField", () => {
  describe("class", () => {
    it("should be empty when dont set attribute", async () => {
      const container = document.createElement("kuc-text-field");
      const el = await fixture(container);

      expect(el.classList.length).to.equal(0);
    });

    it("should be 'my-class' when set in attribute", async () => {
      const container = document.createElement("kuc-text-field");
      container.setAttribute("class", "my-class");
      const el = await fixture(container);

      expect(el.className).to.equal("my-class");
    });
  });
});
