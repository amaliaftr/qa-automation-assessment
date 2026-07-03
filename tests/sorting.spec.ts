import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Sorting Feature', () => {

  test('Verify products are sorted by Price (high to low)', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify login success
    await expect(page).toHaveURL(/inventory.html/);

    // Sort High to Low
    await inventoryPage.sortByHighToLow();

    // Get all prices
    const prices = await inventoryPage.getAllPrices();

    // Copy array then sort descending
    const sortedPrices = [...prices].sort((a, b) => b - a);

    // Assert
    expect(prices).toEqual(sortedPrices);

    // Optional: verify first product is highest price
    expect(prices[0]).toBe(Math.max(...prices));

  });

});
