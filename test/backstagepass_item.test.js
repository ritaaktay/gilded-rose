const BackstagePassItem = require("../src/backstagepass_item");

describe("BackstagePassItem", () => {
  it("has name, sellIn and quality properties", () => {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      4,
      10
    );
    expect(backstagePassItem.name).toEqual(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(backstagePassItem.sellIn).toEqual(4);
    expect(backstagePassItem.quality).toEqual(10);
  });
  it("increases by 1 in quality each day more than 10 days before sell by date", function () {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      12,
      0
    );
    backstagePassItem.updateQuality();
    expect(backstagePassItem.quality).toBe(1);
  });
  it("increases by 1 in quality each day more than 10 days before sell by date but never more than 50", function () {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      12,
      50
    );
    backstagePassItem.updateQuality();
    expect(backstagePassItem.quality).toBe(50);
  });
  it("increases by 2 in quality each day between 10 and 5 days before sell by date", function () {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      0
    );
    backstagePassItem.updateQuality();
    expect(backstagePassItem.quality).toBe(2);
  });
  it("increases by 2 in quality each day lbetween 10 and 5 days before sell by date but never mroe than 50", function () {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      49
    );
    backstagePassItem.updateQuality();
    expect(backstagePassItem.quality).toBe(50);
  });
  it("increases by 3 in quality each day 5 or less days before sell by date", function () {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      0
    );
    backstagePassItem.updateQuality();
    expect(backstagePassItem.quality).toBe(3);
  });
  it("increases by 3 in quality each day 5 or less days before sell by date but never more than 50", function () {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      48
    );
    backstagePassItem.updateQuality();
    expect(backstagePassItem.quality).toBe(50);
  });
  it("drops to 0 in quality after sell by date", function () {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      -1,
      10
    );
    backstagePassItem.updateQuality();
    expect(backstagePassItem.quality).toBe(0);
  });
  it("backstage passes drop to 0 in quality after sell by date and always stay at 0", function () {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      -1,
      10
    );
    backstagePassItem.updateQuality();
    backstagePassItem.updateQuality();
    expect(backstagePassItem.quality).toBe(0);
  });
  it("passes drops to 0 in quality after sell by date", function () {
    const backstagePassItem = new BackstagePassItem(
      "Backstage passes to a TAFKAL80ETC concert",
      -1,
      10
    );
    backstagePassItem.updateQuality();
    expect(backstagePassItem.quality).toBe(0);
  });
});
