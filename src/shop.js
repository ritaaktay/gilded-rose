class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality();
      this.items[i].updateSellIn();
    }
    return this.items;
  }
}

module.exports = Shop;
