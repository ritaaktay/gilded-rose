const ConjuredItem = require("../src/conjured_item");

describe("ConjuredItem", () => {
  it("has name, sellIn and quality properties", () => {
    const conjuredItem = new ConjuredItem("Conjured Mana Cake", 4, 10);
    expect(conjuredItem.name).toEqual("Conjured Mana Cake");
    expect(conjuredItem.sellIn).toEqual(4);
    expect(conjuredItem.quality).toEqual(10);
  });

  it("decrease by 2 in quality each day before sell by date", function () {
    const conjuredItem = new ConjuredItem("Conjured Mana Cake", 2, 4);
    conjuredItem.updateQuality();
    expect(conjuredItem.quality).toBe(2);
  });
  it("decrease by 2 in quality each day before sell by date but never more than 0", function () {
    const conjuredItem = new ConjuredItem("Conjured Mana Cake", 2, 1);
    conjuredItem.updateQuality();
    expect(conjuredItem.quality).toBe(0);
  });
  it("decrease by 4 in quality each day after sell by date", function () {
    const conjuredItem = new ConjuredItem("Conjured Mana Cake", -1, 4);
    conjuredItem.updateQuality();
    expect(conjuredItem.quality).toBe(0);
  });
  it("decrease by 4 in quality each day after sell by date but never less than 0", function () {
    const conjuredItem = new ConjuredItem("Conjured Mana Cake", -1, 0);
    conjuredItem.updateQuality();
    expect(conjuredItem.quality).toBe(0);
  });
  it("decrease by 4 in quality each day after sell by date but never less than 0", function () {
    const conjuredItem = new ConjuredItem("Conjured Mana Cake", -1, 3);
    conjuredItem.updateQuality();
    expect(conjuredItem.quality).toBe(0);
  });
  it("decrease by 4 in quality each day after sell by date but never less than 0", function () {
    const conjuredItem = new ConjuredItem("Conjured Mana Cake", -1, 2);
    conjuredItem.updateQuality();
    expect(conjuredItem.quality).toBe(0);
  });
  it("decrease by 4 in quality each day after sell by date but never less than 0", function () {
    const conjuredItem = new ConjuredItem("Conjured Mana Cake", -1, 1);
    conjuredItem.updateQuality();
    expect(conjuredItem.quality).toBe(0);
  });
});
