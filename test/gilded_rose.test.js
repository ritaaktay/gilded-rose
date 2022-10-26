const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  // it("should foo", function () {
  //   const gildedRose = new Shop([new Item("foo", 0, 0)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toBe("foo");
  // });
  // it("aged brie increases by 1 in quality each day before sell by date", function () {
  //   const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(1);
  // });
  // it("aged brie increases by 1 in quality each day before sell by date and never more than 50", function () {
  //   const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(50);
  // });
  // it("aged brie increases by 2 in quality each day after sell by date", function () {
  //   const gildedRose = new Shop([new Item("Aged Brie", -1, 10)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(12);
  // });
  // it("aged brie increases by 2 in quality each day after sell by date and never more than 50", function () {
  //   const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(50);
  // });
  // it("backstage passes increase by 1 in quality each day more than 10 days before sell by date", function () {
  //   const gildedRose = new Shop([
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 12, 0),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(1);
  // });
  // it("backstage passes increase by 1 in quality each day more than 10 days before sell by date but never more than 50", function () {
  //   const gildedRose = new Shop([
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 12, 50),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(50);
  // });
  // it("backstage passes increase by 2 in quality each day between 10 and 5 days before sell by date", function () {
  //   const gildedRose = new Shop([
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(2);
  // });
  // it("backstage passes increase by 2 in quality each day lbetween 10 and 5 days before sell by date but never mroe than 50", function () {
  //   const gildedRose = new Shop([
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(50);
  // });
  // it("backstage passes increase by 3 in quality each day 5 or less days before sell by date", function () {
  //   const gildedRose = new Shop([
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(3);
  // });
  // it("backstage passes increase by 3 in quality each day 5 or less days before sell by date but never more than 50", function () {
  //   const gildedRose = new Shop([
  //     new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(50);
  // });
  // it("backstage passes drop to 0 in quality after sell by date", function () {
  //   const gildedRose = new Shop([
  //     new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  // });
  // it("backstage passes drop to 0 in quality after sell by date and always stay at 0", function () {
  //   const gildedRose = new Shop([
  //     new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10),
  //   ]);
  //   gildedRose.updateQuality();
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  // });
  // it("backstage passes drop to 0 in quality after sell by date", function () {
  //   const gildedRose = new Shop([
  //     new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  // });
  // it("sulfuras never decrease in sell by date", function () {
  //   const gildedRose = new Shop([
  //     new Item("Sulfuras, Hand of Ragnaros", 1, 10),
  //   ]);
  //   gildedRose.updateQuality();
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].sellIn).toBe(1);
  // });
  // it("sulfuras never decrease in quality", function () {
  //   const gildedRose = new Shop([
  //     new Item("Sulfuras, Hand of Ragnaros", 1, 80),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(80);
  // });
  // it("sulfuras never decrease in quality even if sell by date is negative", function () {
  //   const gildedRose = new Shop([
  //     new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(80);
  // });
  // it("any other items decrease in quality by 1 each day before sell by date", function () {
  //   const gildedRose = new Shop([
  //     new Item("+5 Dexterity Vest", 2, 10),
  //     new Item("Elixir of the Mongoose", 2, 20),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(9);
  //   expect(items[1].quality).toBe(19);
  // });
  // it("any other items decrease in quality by 1 each day before sell by date but never less than 0", function () {
  //   const gildedRose = new Shop([
  //     new Item("+5 Dexterity Vest", 2, 0),
  //     new Item("Elixir of the Mongoose", 2, 0),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  //   expect(items[1].quality).toBe(0);
  // });
  // it("any other items decrease in quality by 2 each day after sell by date", function () {
  //   const gildedRose = new Shop([
  //     new Item("+5 Dexterity Vest", -1, 10),
  //     new Item("Elixir of the Mongoose", -1, 20),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(8);
  //   expect(items[1].quality).toBe(18);
  // });
  // it("any other items decrease in quality by 2 each day after sell by date but never less than 0", function () {
  //   const gildedRose = new Shop([
  //     new Item("+5 Dexterity Vest", -1, 1),
  //     new Item("Elixir of the Mongoose", -1, 1),
  //   ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  //   expect(items[1].quality).toBe(0);
  // });
  it("conjured items decrease by 2 in quality each day before sell by date", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 1, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });
  it("conjured items decrease by 2 in quality each day before sell by date but never more than 0", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("conjured items decrease by 4 in quality each day after sell by date", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", -1, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("conjured items decrease by 4 in quality each day after sell by date but never less than 0", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("conjured items decrease by 4 in quality each day after sell by date but never less than 0", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", -1, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("conjured items decrease by 4 in quality each day after sell by date but never less than 0", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", -1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("conjured items decrease by 4 in quality each day after sell by date but never less than 0", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
