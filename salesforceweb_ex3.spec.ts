 import {chromium, test } from "@playwright/test"
test("Test of login to Salaesforce and explore apps", async ({page}) =>{

// Browser launch
await page.goto("https://login.salesforce.com/?locale=in")

//login screen
await page.locator(`#username`).fill(`thenmozhipandi2006753@agentforce.com`);
await page.locator(`#password`).fill(`Allthebest@1`);
await page.locator(`#Login`).click();
await page.waitForTimeout(1000);

//App Launcher
await page.locator('//div[@class="slds-icon-waffle"]').click();
await page.locator('(//button[@class="slds-button"])[2]').getByText("View All").click();
//await page.getByText
await page.waitForTimeout(1000);
await page.getByPlaceholder('Search apps or items...').fill("Service");
await page.locator('(//div[@class="slds-truncate"])[1]').click();
await page.locator('(//span[@class="slds-truncate"])[4]').click();
await page.getByRole('button', { name: 'New' }).click();
await page.locator('//input[@name="Name"]').fill("Thenmozhi");
await page.locator('//button[@name="SaveEdit"]').click();

//getting page title
await page.waitForTimeout(2000);
const Title =  await page.title();
console.log("Current page Title is  " +Title );
    
})
