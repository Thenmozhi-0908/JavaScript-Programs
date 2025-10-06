import{chromium, webkit, test} from "@playwright/test"
test ("Lauch Redbus in edge & Flipkart in Webkit", async()=>{
    const browser = await chromium.launch({channel:'msedge'});
    const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.redbus.in/");
    
    const Title = await page.title();
    console.log("Current page Title is  " +Title );
    
    const currntUrl = page.url();
    console.log("Current page url is  " + currntUrl );

    const browser2 = await webkit.launch();
    const context2 =  await browser2.newContext();
    const page2 = await context2.newPage();
    await page2.goto("http://flipkart.com/"); 
    
    const Title2 = await page2.title();
    console.log("Current page Title is  " +Title2 );
    
    const currntUrl2 = page2.url();
    console.log("Current page url is  " + currntUrl2 );
})
