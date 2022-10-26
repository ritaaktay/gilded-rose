const SulfurasItem = require("../src/sulfuras_item");

describe("SulfurasItem", () => {
  it("has name, sellIn and quality properties", () => {
    const sulfurasItem = new SulfurasItem("Sulfuras, Hand of Ragnaros", 4, 10);
    expect(sulfurasItem.name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(sulfurasItem.sellIn).toEqual(4);
    expect(sulfurasItem.quality).toEqual(10);
  });

  it("sulfuras never decrease in sell by date", function () {
    const sulfurasItem = new SulfurasItem("Sulfuras, Hand of Ragnaros", 1, 10);
    sulfurasItem.updateSellIn();
    expect(sulfurasItem.sellIn).toBe(1);
  });
  it("sulfuras never decrease in quality", function () {
    const sulfurasItem = new SulfurasItem("Sulfuras, Hand of Ragnaros", 1, 80);
    sulfurasItem.updateQuality();
    expect(sulfurasItem.quality).toBe(80);
  });
  it("sulfuras never decrease in quality even if sell by date is negative", function () {
    const sulfurasItem = new SulfurasItem("Sulfuras, Hand of Ragnaros", -1, 80);
    sulfurasItem.updateQuality();
    expect(sulfurasItem.quality).toBe(80);
  });
});
