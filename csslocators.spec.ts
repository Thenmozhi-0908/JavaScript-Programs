 import {chromium, test } from "@playwright/test"
test("Test of Launch browser", async () =>{
//const browser = await chromium.launch();       //step-1
const browser = await chromium.launch({channel:'chrome'});    // only open Chrome browser use channel keyword
const context = await browser.newContext();    //step-2 
const page = await context.newPage();          //step-3

await page.goto("https://login.salesforce.com/?locale=in")

  const Title = await page.title();
    console.log("Current page Title is  " +Title );
    
    const currntUrl = page.url();
    console.log("Current page url is  " + currntUrl );

//locators
await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
await page.locator(`#password`).fill(`RaviSalesforce#1234`);
await page.locator(`#Login`).click();

})