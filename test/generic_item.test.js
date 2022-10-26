const GenericItem = require("../src/generic_item");

describe("GenericItem", () => {
  it("has name, sellIn and quality properties", () => {
    const genericItem = new GenericItem("+5 Dexterity Vest", 4, 10);
    expect(genericItem.name).toEqual("+5 Dexterity Vest");
    expect(genericItem.sellIn).toEqual(4);
    expect(genericItem.quality).toEqual(10);
  });

  it("decrease in quality by 1 each day before sell by date", function () {
    const genericItem = new GenericItem("+5 Dexterity Vest", 2, 10);
    genericItem.updateQuality();
    expect(genericItem.quality).toBe(9);
  });
  it("decrease in quality by 1 each day before sell by date but never less than 0", function () {
    const genericItem = new GenericItem("+5 Dexterity Vest", 2, 0);
    genericItem.updateQuality();
    expect(genericItem.quality).toBe(0);
  });
  it("decrease in quality by 2 each day after sell by date", function () {
    const genericItem = new GenericItem("+5 Dexterity Vest", -1, 10);
    genericItem.updateQuality();
    expect(genericItem.quality).toBe(8);
  });
  it("decrease in quality by 2 each day after sell by date but never less than 0", function () {
    const genericItem = new GenericItem("+5 Dexterity Vest", -1, 1);
    genericItem.updateQuality();
    expect(genericItem.quality).toBe(0);
  });
});
