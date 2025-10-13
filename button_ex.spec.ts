import {chromium, expect, test } from "@playwright/test"
test("Test of dropdowns leafground", async ({page}) =>{

await page.goto(`https://leafground.com/button.xhtml`);
await page.waitForTimeout(2000);

await page.locator(`//span[text()="Click"]`).click();
await page.waitForTimeout(2000);
const pagetiltle= await page.title();
console.log("Title is ",pagetiltle);
await page.goBack();

const disablebuton =  page.locator(`//span[text()="Disabled"]`);
await expect(disablebuton).toBeDisabled();

page.locator(`//span[text()="Image"]`).dblclick
await page.locator(`//span[text()="Primary"]`).click();

})