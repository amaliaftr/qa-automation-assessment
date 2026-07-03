import { Page, Locator } from '@playwright/test';

export class OverviewPage {

    readonly page: Page;

    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;

    readonly finishButton: Locator;
    readonly thankYouMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.itemTotal = page.locator('.summary_subtotal_label');
        this.tax = page.locator('.summary_tax_label');
        this.total = page.locator('.summary_total_label');

        this.finishButton = page.locator('#finish');

        this.thankYouMessage = page.locator('.complete-header');

    }

    async clickFinish() {
        await this.finishButton.click();
    }

}
