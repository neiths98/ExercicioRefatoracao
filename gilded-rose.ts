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

    improveQuality(item: Item) {
        item.quality += 1;
    }

    deteriorateQuality(item: Item) {
        item.quality -= 1;
    }

    updateQuality() {
        this.items.forEach(item => {
            // Casos especiais
            if (item.name === 'Sulfuras, Hand of Ragnaros') {
                return;
            }

            if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn < 0) {
                    item.quality = 0;
                }
                else if (item.sellIn < 11) {
                    this.improveQuality(item);
                }
                return;
            }

            if (item.name === 'Aged Brie') {
                this.improveQuality(item);
                if (item.sellIn < 0) {        
                    this.improveQuality(item);
                }
                return;
            }

            // Casos gerais
            item.sellIn = item.sellIn - 1;

            if (item.quality > 0) {
                this.deteriorateQuality(item);
            }

            if (item.sellIn < 0 && item.quality > 0) {
                this.deteriorateQuality(item);
            }

        });

        return this.items;
    }
}
