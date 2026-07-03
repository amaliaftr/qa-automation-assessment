import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }

    async fillCustomerInformation(first: string, last: string, zip: string) {

        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(zip);

        await this.continueButton.click();

    }

}