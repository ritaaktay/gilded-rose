const Item = require("./item");

class AgingItem extends Item {
  updateSellIn() {
    this.sellIn -= 1;
  }
}

module.exports = AgingItem;
