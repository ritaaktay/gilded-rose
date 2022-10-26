class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        console.log("not brie and not backstage pass");
        if (this.items[i].quality > 0) {
          console.log("quality is greater than 0");
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            console.log("it is not sulfuras");
            this.items[i].quality = this.items[i].quality - 1;
            console.log(this.items[i]);
          }
          if (this.items[i].name === "Conjured Mana Cake") {
            console.log("it is a conjured mana cake");
            if (this.items[i].quality > 0) {
              console.log("quality is grater than 0");
              this.items[i].quality = this.items[i].quality - 1;
              console.log(this.items[i]);
            }
          }
        }
      } else {
        console.log("aged brie or backstage pass");
        if (this.items[i].quality < 50) {
          console.log("quality is less than 50");
          this.items[i].quality = this.items[i].quality + 1;
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            console.log("is backstage pass");
            if (this.items[i].sellIn < 11) {
              console.log("sells in 10 or less");
              if (this.items[i].quality < 50) {
                console.log("quality is less than 50");
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              console.log("sells in 5 or less");
              if (this.items[i].quality < 50) {
                console.log("quality is less than 50");
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        console.log("is not sulfuras");
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        console.log("sell date passed");
        if (this.items[i].name != "Aged Brie") {
          console.log("is not aged brie");
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            console.log("is not backstage pass");
            if (this.items[i].quality > 0) {
              console.log("quality is grater than 0");
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                console.log("is not sulfuras");
                console.log(this.items[i]);
                this.items[i].quality = this.items[i].quality - 1;
              }
              if (this.items[i].name == "Conjured Mana Cake") {
                console.log("is mana cake");
                console.log(this.items[i]);
                if (this.items[i].quality > 0) {
                  console.log("quality is grater than 0");
                  this.items[i].quality = this.items[i].quality - 1;
                }
              }
            }
          } else {
            console.log("is concert pass");
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          console.log("is aged brie");
          if (this.items[i].quality < 50) {
            console.log("quality is less than 50");
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
