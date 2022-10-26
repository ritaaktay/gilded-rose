const Shop = require("../src/shop");
const GenericItem = require("../src/generic_item");
const ConjuredItem = require("../src/conjured_item");
const BrieItem = require("../src/brie_item");
const BackstagePassItem = require("../src/backstagepass_item");
const SulfurasItem = require("../src/sulfuras_item");

describe("Gilded Rose", function () {
  it("initially has an empty items array", () => {
    const shop = new Shop();
    expect(shop.items).toEqual([]);
  });
  it("calls updateQuality() on all items", () => {
    const items = [
      new GenericItem("+5 Dexterity Vest", 10, 20),
      new BrieItem("Aged Brie", 2, 0),
      new GenericItem("Elixir of the Mongoose", 5, 7),
      new SulfurasItem("Sulfuras, Hand of Ragnaros", 0, 80),
      new SulfurasItem("Sulfuras, Hand of Ragnaros", -1, 80),
      new BackstagePassItem(
        "Backstage passes to a TAFKAL80ETC concert",
        15,
        20
      ),
      new BackstagePassItem(
        "Backstage passes to a TAFKAL80ETC concert",
        10,
        49
      ),
      new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new ConjuredItem("Conjured Mana Cake", 3, 6),
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toEqual(19);
    expect(updatedItems[1].quality).toEqual(1);
    expect(updatedItems[2].quality).toEqual(6);
    expect(updatedItems[3].quality).toEqual(80);
    expect(updatedItems[4].quality).toEqual(80);
    expect(updatedItems[5].quality).toEqual(21);
    expect(updatedItems[6].quality).toEqual(50);
    expect(updatedItems[7].quality).toEqual(50);
    expect(updatedItems[8].quality).toEqual(4);
  });

  it("calls updateSellIn() on all items", () => {
    const items = [
      new GenericItem("+5 Dexterity Vest", 10, 20),
      new BrieItem("Aged Brie", 2, 0),
      new GenericItem("Elixir of the Mongoose", 5, 7),
      new SulfurasItem("Sulfuras, Hand of Ragnaros", 0, 80),
      new SulfurasItem("Sulfuras, Hand of Ragnaros", -1, 80),
      new BackstagePassItem(
        "Backstage passes to a TAFKAL80ETC concert",
        15,
        20
      ),
      new BackstagePassItem(
        "Backstage passes to a TAFKAL80ETC concert",
        10,
        49
      ),
      new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new ConjuredItem("Conjured Mana Cake", 3, 6),
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].sellIn).toEqual(9);
    expect(updatedItems[1].sellIn).toEqual(1);
    expect(updatedItems[2].sellIn).toEqual(4);
    expect(updatedItems[3].sellIn).toEqual(0);
    expect(updatedItems[4].sellIn).toEqual(-1);
    expect(updatedItems[5].sellIn).toEqual(14);
    expect(updatedItems[6].sellIn).toEqual(9);
    expect(updatedItems[7].sellIn).toEqual(4);
    expect(updatedItems[8].sellIn).toEqual(2);
  });
});
