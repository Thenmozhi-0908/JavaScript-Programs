function stringreversal() {
let companyNmae = "testleaf";
let ch = companyNmae.split("");
console.log(ch);

let reversed = "";
for (let i =((companyNmae.length)-1); i >= 0; i--) {
   reversed= reversed + ch[i];
}
   console.log(reversed);
}
stringreversal();

// shorcut using inbuild method reverse

let bank = "Testleaf";
let newName = bank.split("").reverse().join("");
console.log(newName);
