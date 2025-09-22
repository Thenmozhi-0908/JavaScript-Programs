function launchBrowser(){
let browserName = "edge"
if (browserName === "chrome") {
    console.log("browser is " + (browserName));
    
}
else  {
    console.log("browser is " + (browserName));
}  
}
launchBrowser();

function runTests(testType){
switch (testType) {
    case "smoke":
    console.log("current test is Somke");
    break;
    case "sanity":
    console.log("current test is sanity"); 
    break;
    case "regression":
    console.log("current test is regression");
    break;
    default:
    console.log("current test is default");
    break;
}
}
runTests("sanity");
