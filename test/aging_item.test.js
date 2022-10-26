const AgingItem = require("../src/aging_item");

describe("AgingItem", () => {
  it("has name, sellIn and quality properties", () => {
    const agingItem = new AgingItem("Banana", 4, 10);
    expect(agingItem.name).toEqual("Banana");
    expect(agingItem.sellIn).toEqual(4);
    expect(agingItem.quality).toEqual(10);
  });

  it("decreases sellIn date by one each day", () => {
    const agingItem = new AgingItem("Banana", 4, 10);
    agingItem.updateSellIn();
    expect(agingItem.sellIn).toEqual(3);
  });
});
