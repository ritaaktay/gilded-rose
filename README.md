## Gilded Rose Kata

#### Approach

- An `AgingItem` class extends `Item` with a `updateSellIn()` method that minuses one from the `sellIn` property, as almost all items exhibit this behaviour.
- A class per item type extends `AgingItem` with an `updateQuality()` method that applies logic based on the rules to update the `quality` property. There are special items (ex. `ConjuredItem` or `BackstagePassItem`) as well as a `GenericItem` that applies the basic rule to all others.(The basic rule being, quality decreases by 1 before sell by date, and 2 thereafter)
- A `Shop` class iterates over items and calls both `updateQuality()` and `updateSellIn()` methods on each item.
- The `SulfurasItem` overrieds the `updateSellIn()` with an empty method as well as adding an empty method for `updateQuality()`. This allows less logic and default approach in the `Shop` class `updateQuality()` function, plus leaves room to alter `SulfrasItem` behaviour if wanted.

#### Use

- Run `npm install` to install dependencies
- Run `npm run test` for all tests
- Run `npm run test:coverage` for all tests with coverage
