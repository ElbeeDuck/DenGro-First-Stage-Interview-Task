const { test, expect } = require('@playwright/test');

test.describe('DenGro Website Tests', () => {
    test.beforeEach(async ({page}) => {
        const url = "https://dengro.com/"
        await page.goto(url);
        expect(page).toHaveTitle("Best CRM Software for Dentists | DenGro");
        await page.getByRole('button', { name: 'Reject All' }).click();
      });

    test('Assert that a piece of text appears on a given page', async({page}) => {
        await expect(page.locator('h1')).toContainText('Practice growth never felt so easy');
    });

    test('Assert that clicking a button does some functionality', async({page}) => {
        await page.locator('#hero-item-1').getByRole('link', { name: 'Get a demo' }).click();
        await expect(page.locator('body')).toContainText(/Would you like to know more/);
    });

    
    test('Assert that clicking a link navigates correctly', async({page}) => {
        await page.getByRole('link', { name: 'Login' }).click();
        await expect(page).toHaveURL(/login/i);
    });

    test('Assert that the pricing page allows users to change their currency and page reflects that', async({page}) => {
        await page.getByLabel('Navigation').getByRole('link', { name: 'Pricing' }).click();
        //Click the currency dropdown to access options
        await page.getByText('GBP EUR').click();
        await expect(page.locator('#pricing-header')).toContainText(/£/);
        await page.getByRole('img', { name: 'Republic of Ireland Flag' }).click();
        await expect(page.locator('#pricing-header')).toContainText(/€/);
        await page.getByText('GBP EUR').click();
        await page.getByText('GBP').click();
        await expect(page.locator('#pricing-header')).toContainText(/£/);
    });

    test('Capture a screenshot of any page', async({page}) => {
        await page.getByLabel('Navigation').getByRole('link', { name: 'Integrations' }).click();
        await page.screenshot({ path: 'screenshot.png' });
    });
    
});
