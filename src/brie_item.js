const AgingItem = require("./aging_item");

class BrieItem extends AgingItem {
  updateQuality() {
    if (this.quality < 50) this.quality += 1;
    if (this.sellIn < 0 && this.quality < 50) {
      this.quality += 1;
    }
  }
}

module.exports = BrieItem;
