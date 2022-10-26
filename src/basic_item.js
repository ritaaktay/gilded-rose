const Item = require("./item");

class BasicItem extends Item {
  updateSellIn() {
    this.sellIn -= 1;
  }
  maintainQualityInBounds() {
    if (this.quality < 0) this.quality = 0;
    if (this.quality > 50) this.quality = 50;
  }
}

module.exports = BasicItem;
