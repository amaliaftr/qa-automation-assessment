import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';

test('Complete Checkout Flow', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const overviewPage = new OverviewPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Add Product
    await inventoryPage.addProductsToCart();

    // Open Cart
    await inventoryPage.openCart();

    // Checkout
    await cartPage.clickCheckout();

    // Customer Information
    await checkoutPage.fillCustomerInformation(
        'Amalia',
        'Fitri',
        '12345'
    );

    // ===========================
    // Verify Total
    // ===========================

    const itemTotalText = await overviewPage.itemTotal.textContent();
    const taxText = await overviewPage.tax.textContent();
    const totalText = await overviewPage.total.textContent();

    const itemTotal = Number(itemTotalText?.replace('Item total: $', ''));
    const tax = Number(taxText?.replace('Tax: $', ''));
    const total = Number(totalText?.replace('Total: $', ''));

    expect(itemTotal + tax).toBe(total);

    // Finish

    await overviewPage.clickFinish();

    // Verify Success

    await expect(overviewPage.thankYouMessage)
        .toContainText('Thank you for your order!');

});