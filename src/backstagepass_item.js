const BasicItem = require("./basic_item");

class BackstagePassItem extends BasicItem {
  updateQuality() {
    if (this.sellIn < 0) {
      this.quality = 0;
    } else {
      this.updateApproachingSellIn();
      this.maintainQualityInBounds();
    }
  }
  updateApproachingSellIn() {
    this.quality += 1;
    if (this.sellIn <= 10) this.quality += 1;
    if (this.sellIn <= 5) this.quality += 1;
  }
}

module.exports = BackstagePassItem;
