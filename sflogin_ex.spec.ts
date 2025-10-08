 import {chromium, test } from "@playwright/test"
test("Test of Launch browser and login to Salaesforce", async ({page}) =>{

    // Browser launch
await page.goto("https://login.salesforce.com/?locale=in")

//login screen
await page.locator(`#username`).fill(`thenmozhipandi2006-dgjq@force.com`);
await page.locator(`#password`).fill(`Allthebest@1`);
await page.locator(`#Login`).click();

page.setDefaultTimeout(10000);

const Title =  page.title();
console.log("Current page Title is  " +Title );
    
const currntUrl =  page.url();
console.log("Current page url is  " + currntUrl );

// // print details
// setTimeout(() => {
//     const Title =  page.title();
// console.log("Current page Title is  " +Title );
    
// const currntUrl =  page.url();
// console.log("Current page url is  " + currntUrl );
// }, 10000);

// close the browser
await page.close();

})
