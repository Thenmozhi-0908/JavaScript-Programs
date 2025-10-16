import { expect, test } from "@playwright/test";

test("Test to launch a browser", async({page}) => {
   await page.goto("https://leafground.com/frame.xhtml");

//Interact with the Click Me button inside frame
    const frameurl = page.frameLocator(`//iframe[@src="default.xhtml"]`)
    const clickmebtn = frameurl.locator("#Click");
    await clickmebtn.click();
    await page.waitForTimeout(3000)

//Assert the text changed after clicking the button
    await expect.soft(clickmebtn).toHaveText("Hurray! You Clicked Me.")

//Get the total count of frames present in the page
const totalFrames = page.frames();
const numofFrames = totalFrames.length;
console.log(`Total no of Frames in the page `,numofFrames);

//Interact with the Click Me button present inside the nested frames
const frameurl1 = page.frameLocator(`//iframe[@src="page.xhtml"]`)
const frameurl2 = frameurl1.frameLocator(`//iframe[@src="framebutton.xhtml"]`)
const btn2 = frameurl2.locator("#Click");
await btn2.click();
await page.waitForTimeout(3000)

//Assert the text changed after clicking the button
await expect(btn2).toContainText("Hurray! You Clicked Me.")
} )
 

