const Item = require("./aging_item");

class GenericItem extends Item {
  updateQuality() {
    if (this.quality > 0) this.quality -= 1;
    if (this.sellIn < 0 && this.quality > 0) this.quality -= 1;
  }
}

module.exports = GenericItem;
