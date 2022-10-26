const BasicItem = require("./basic_item");

class ConjuredItem extends BasicItem {
  updateQuality() {
    this.quality -= 2;
    if (this.sellIn < 0) this.quality -= 2;
    this.maintainQualityInBounds();
  }
}

module.exports = ConjuredItem;
