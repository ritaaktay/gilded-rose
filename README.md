## Gilded Rose Kata

#### Approach

- The approach relies on inheritance and polymorphism, extending the parent class to two generations of children (`BaiscItem` extends `Item` and all others extend `BasicItem`). Progressively specialising behaviour allows to keep code DRY and shorten the `Shop` class `updateQuality()` function, which now delegates updating to instance methods of classes derived from `Item`.

- Tests to satifsy all rules and pass with the initial unrefactored kata were written beofre attempting solution, thus ensuring nothing was broken. Test coverage is 100% (Run `npm run test:coverage`)

#### Structure

- `BasicItem` extends `Item` with a `updateSellIn()` method that minuses one from the `sellIn` property, as almost all items exhibit this behaviour, and a `maintinQualityInBounds()` method to make sure `quality` is always less than 50 and grater than 0.
- A class per item type extends `BasicItem` with an `updateQuality()` method that applies logic based on the rules to update the `quality` property, and finally calls `this.maintainQualityInBounds()` to ensure adherence to rules. This approach reduces repetition of `if this.quality > 0` and `if this.quality < 50` conditionals.
- There are special items (ex. `ConjuredItem` or `BackstagePassItem`) with their own rules and a `GenericItem` that applies the basic rule (that quality decreases by 1 before sell by date, and 2 thereafter)
- A `Shop` class iterates over items and calls both `updateQuality()` and `updateSellIn()` methods on each item.
- The `SulfurasItem` overrieds the `updateSellIn()` with an empty method as well as adding an empty method for `updateQuality()`. This allows a default approach in the `Shop` class `updateQuality()` function with less logic, plus leaves room to alter `SulfrasItem` behaviour if wanted.

#### Use

- Run `npm install` to install dependencies
- Run `npm run test` for all tests
- Run `npm run test:coverage` for all tests with coverage

#### Resources

- Check out (this great talk)[https://www.youtube.com/watch?v=8bZh5LMaSmE&ab_channel=Confreaks] by Sandi Metz on how she's solved the Gilded Rose Kata.
