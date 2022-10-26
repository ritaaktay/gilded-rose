const BrieItem = require("../src/brie_item");

describe("BrieItem", () => {
  it("has name, sellIn and quality properties", () => {
    const brieItem = new BrieItem("Banana", 4, 10);
    expect(brieItem.name).toEqual("Banana");
    expect(brieItem.sellIn).toEqual(4);
    expect(brieItem.quality).toEqual(10);
  });

  it("increases by 1 in quality each day before sell by date", function () {
    const brieItem = new BrieItem("Aged Brie", 2, 0);
    brieItem.updateQuality();
    expect(brieItem.quality).toBe(1);
  });
  it("increases by 1 in quality each day before sell by date and never more than 50", function () {
    const brieItem = new BrieItem("Aged Brie", 2, 50);
    brieItem.updateQuality();
    expect(brieItem.quality).toBe(50);
  });
  it("increases by 2 in quality each day after sell by date", function () {
    const brieItem = new BrieItem("Aged Brie", -1, 10);
    brieItem.updateQuality();
    expect(brieItem.quality).toBe(12);
  });
  it("increases by 2 in quality each day after sell by date and never more than 50", function () {
    const brieItem = new BrieItem("Aged Brie", -1, 50);
    brieItem.updateQuality();
    expect(brieItem.quality).toBe(50);
  });
});
