import {chromium, test } from "@playwright/test"
test("Test of Edit lead in CRM", async ({page}) =>{

await page.goto(" http://leaftaps.com/opentaps/control/main")
// Login with creads
await page.locator(`#username`).fill("Demosalesmanager");
await page.locator(`#password`).fill("crmsfa");
await page.locator(`.decorativeSubmit`).click();

await page.getByText('CRM/SFA').click();

// Find lead
await page.locator('//a[contains(text(), "Leads")]').click();
await page.locator('//a[contains(text(), "Find Leads")]').click();
await page.locator('(//input[@name="firstName"])[3]').fill("Thenmozhi");
await page.locator('//button[contains(text(), "Find Leads")]').click();
await page.locator('//a[text()="Thenmozhi"]').click();
//(//a[contains(text(), "Thenmozhi")])[2]

// Edit lead
await page.locator('//a[contains(text(), "Edit")]').click();

await page.locator(`#updateLeadForm_companyName`).fill("Infinity flo");
await page.locator(`#updateLeadForm_annualRevenue`).fill("2000000");
await page.locator(`#updateLeadForm_departmentName`).fill("Qauality Dept");
await page.locator(`#updateLeadForm_description`).fill("Lead successfully edited");
await page.locator('//input[@value="Update"]').click();

// Verify data 
await page.waitForTimeout(5000);
const title = await page.title();
console.log("Title is ",title );

})
