import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {

readonly page: Page;

readonly addBackpackButton: Locator;
readonly addBikeLightButton: Locator;
readonly shoppingCart: Locator;

readonly sortDropdown: Locator;
readonly productPrices: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.addBikeLightButton = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.shoppingCart = page.locator('.shopping_cart_link');
        
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.productPrices = page.locator('.inventory_item_price');
        
    }
    async addProductsToCart() {
      await this.addBackpackButton.click();
      await this.addBikeLightButton.click();
    }

    async openCart() {
      await this.shoppingCart.click();
    }

    async sortByHighToLow() {
        await this.sortDropdown.selectOption('hilo');
    }

    async getAllPrices(): Promise<number[]> {

        const prices = await this.productPrices.allTextContents();

        return prices.map(price =>
            Number(price.replace('$', ''))
        );
    }
}