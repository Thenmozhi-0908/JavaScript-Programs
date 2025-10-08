import {chromium, test } from "@playwright/test"
test("Test of Launch browser and login to crm to add lead", async ({page}) =>{

await page.goto(" http://leaftaps.com/opentaps/control/main")
// Login with creads
await page.locator(`#username`).fill("Demosalesmanager");
await page.locator(`#password`).fill("crmsfa");
await page.locator(`.decorativeSubmit`).click();

await page.getByText('CRM/SFA').click();

// Adding lead
await page.locator('//a[contains(text(), "Leads")]').click();
//await page.getByText('Leads').click();
await page.locator('//a[contains(text(), "Create Lead")]').click();
//await page.getByText('Create Lead').click();

// Adding details
await page.locator(`#createLeadForm_companyName`).fill("One flo");
await page.locator(`#createLeadForm_firstName`).fill("Thenmozhi");
await page.locator(`#createLeadForm_lastName`).fill("qa");
await page.locator(`#createLeadForm_personalTitle`).fill("Mrs");
await page.locator(`#createLeadForm_annualRevenue`).fill("1000000");
await page.locator(`#createLeadForm_departmentName`).fill("Qauality Asurance");
await page.locator(`#createLeadForm_primaryPhoneNumber`).fill("9997676789");
await page.locator(`#createLeadForm_generalProfTitle`).fill("Female");
await page.locator(`.smallSubmit`).click();

//verification on test data
await page.waitForTimeout(5000);
const title= await page.title();
console.log("current page title is ",title );

})