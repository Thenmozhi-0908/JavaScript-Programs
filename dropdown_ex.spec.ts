import {chromium, test } from "@playwright/test"
test("Test of dropdowns leafground", async ({page}) =>{

await page.goto(`https://leafground.com/select.xhtml`);
await page.waitForTimeout(2000);

const favtoollist =page.locator(`.ui-selectonemenu>option`);
const favtoolcount = await favtoollist.count();
console.log(favtoolcount);
for (let index = 0; index < favtoolcount ; index++) {
    console.log(await favtoollist.nth(index).innerText());
     
}
await page.selectOption(`.ui-selectonemenu`, {label: "Playwright"});

await page.locator(`//label[text()="Select Country"]`).click();
await page.locator(`//li[text()="India"]`).click(); 
await page.locator(`//label[text()="Select City"]`).click();
await page.locator(`//li[text()="Delhi"]`).click(); 

await page.locator(`//span[@class="ui-button-text"]`).click();
await page.locator(`//li[text()="Selenium WebDriver"]`).click(); 
await page.locator(`//span[@class="ui-button-text"]`).click();
await page.locator(`//li[text()="PostMan"]`).click(); 
await page.locator(`//span[@class="ui-button-text"]`).click();
await page.locator(`//li[text()="ReactJs"]`).click();

const languagelist =page.locator(`//select[contains(@id,"lang_input")]/option`);
const languagecount = await favtoollist.count();
console.log(languagecount);
for (let index = 0; index < languagecount ; index++) {
    console.log(await languagelist.nth(index).innerText());  
}
await page.locator(`//label[text()="Select Language"]`).click();
await page.locator(`//li[text()="Kannada"]`).click();
await page.locator(`//label[text()="Select Values"]`).click();
await page.locator(`//li[text()="ಒಂದು"]`).click();

})