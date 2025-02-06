import { test, expect } from '@playwright/test';

test.describe('DenGro Website Tests', () => {
    test.beforeEach(async ({page}) => {
        //runs before each test to go to DenGro homepage
        let url : string = 'https://dengro.com/';
        await page.goto(url);
        expect(page).toHaveTitle("Best CRM Software for Dentists | DenGro");
        //rejects the cookies 
        await page.getByRole('button', { name: 'Reject All' }).click();
      });

    test('Assert that a piece of text appears on a given page', async({page}) => {
        //asserts that h1 on homepage is 'Practice growth never felt so easy'
        await expect(page.locator('h1')).toContainText('Practice growth never felt so easy');
    });

    test('Assert that clicking a button does some functionality', async({page}) => {
        //Clicks the 'View all Features & Benefits' button on homepage
        await page.getByRole('link', { name: 'View all Features & Benefits' }).click();
        //Asserts the page contains the text 'Time to power up your practice'
        await expect(page.locator('h1')).toContainText('Time to power up your practice');
    });
    
    test('Assert that clicking a link navigates correctly', async({page}) => {
        //Click on the Login link in nav bar 
        await page.getByRole('link', { name: 'Login' }).click();
        //Asserts navigated to the login page
        await expect(page).toHaveURL(/login/i);
    });

    test('Assert that the pricing page allows users to change their currency and page reflects that', async({page}) => {
        //Click 'Pricing' in nav bar
        await page.getByLabel('Navigation').getByRole('link', { name: 'Pricing' }).click();
        //Select currency dropdown 
        await page.getByText('GBP EUR').click();
        //Assert prices are in £ in pricing table
        await expect(page.locator('#pricing-header')).toContainText(/£/);
        //Select EUR/Irish flag pricing changes to EUR in pricing table
        await page.getByRole('img', { name: 'Republic of Ireland Flag' }).click();
        //Assert prices are in EUR in pricing table
        await expect(page.locator('#pricing-header')).toContainText(/€/);
        await page.getByText('GBP EUR').click();
        await page.getByText('GBP').click();
        await expect(page.locator('#pricing-header')).toContainText(/£/);
    });

    test('Capture a screenshot of any page', async({page}) => {
        //Go to the Integrations page and take a screenshot of the page
        await page.getByLabel('Navigation').getByRole('link', { name: 'Integrations' }).click();
        await expect(page).toHaveURL(/integrations-with-dengro/i);
        await page.screenshot({ path: 'screenshot.png' });
    }); 
});
