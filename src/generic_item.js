const BasicItem = require("./basic_item");

class GenericItem extends BasicItem {
  updateQuality() {
    this.quality -= 1;
    if (this.sellIn < 0) this.quality -= 1;
    this.maintainQualityInBounds();
  }
}

module.exports = GenericItem;
