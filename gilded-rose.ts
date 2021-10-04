export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            if (item.name === 'Sulfuras, Hand of Ragnaros') {
                return;
            }
            if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn < 11) {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1
                    }
                }
                if (item.sellIn < 6) {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1
                    }
                }
                if (item.sellIn < 0) {
                    item.quality = 0;
                }
                return;
            }
            if (item.name === 'Aged Brie') {
                item.quality = item.quality + 1
                if (item.sellIn < 0) {        
                    item.quality = item.quality + 1
                }
                return;
            }
            if (item.quality > 0) {
                item.quality = item.quality - 1
            }
            item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0) {
                if (item.quality > 0) {
                    item.quality = item.quality - 1
                }
            }
        });

        return this.items;
    }
}
