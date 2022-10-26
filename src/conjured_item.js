const AgingItem = require("./aging_item");

class ConjuredItem extends AgingItem {
  updateQuality() {
    if (this.quality > 0) this.quality -= 2;
    if (this.sellIn < 0) this.quality -= 2;
    if (this.quality < 0) this.quality = 0;
  }
}

module.exports = ConjuredItem;
