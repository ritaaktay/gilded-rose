const BasicItem = require("../src/basic_item");

describe("BasicItem", () => {
  it("has name, sellIn and quality properties", () => {
    const basicItem = new BasicItem("Banana", 4, 10);
    expect(basicItem.name).toEqual("Banana");
    expect(basicItem.sellIn).toEqual(4);
    expect(basicItem.quality).toEqual(10);
  });

  it("decreases sellIn date by one each day", () => {
    const basicItem = new BasicItem("Banana", 4, 10);
    basicItem.updateSellIn();
    expect(basicItem.sellIn).toEqual(3);
  });
});
