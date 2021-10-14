import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("KucTextField", () => {
  describe("id", () => {
    it('should be "" when not assigning', async () => {
      const container = document.createElement("kuc-text-field");
      const el = await fixture(container);

      expect(el.id).to.equal("");
    });

    it('should be "options-id" when assigning', async () => {
      const container = document.createElement("kuc-text-field");
      container.id = "options-id";
      const el = await fixture(container);

      expect(el.id).to.equal("options-id");
    });
  });
});
