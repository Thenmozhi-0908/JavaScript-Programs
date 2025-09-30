
let browser = "Chrome";
function checkBrowserversion(callback) {
setTimeout(() => {
    console.log("Delay time 2s");
    
    callback(browser);
}, 2000);
    
}
function callback() {
    console.log(`The ${browser} version is `+ (193.1));
    
}
checkBrowserversion(callback);