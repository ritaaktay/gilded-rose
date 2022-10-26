const Item = require("../src/item");

describe("Item", () => {
  it("has name, sellIn and quality properties", () => {
    const item = new Item("Banana", 4, 10);
    expect(item.name).toEqual("Banana");
    expect(item.sellIn).toEqual(4);
    expect(item.quality).toEqual(10);
  });
});
