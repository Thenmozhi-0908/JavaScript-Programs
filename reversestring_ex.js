function stringreversal() {
let companyNmae = "testleaf";
let ch = companyNmae.split("");
console.log(ch);

let reversed = "";
for (let i =((companyNmae.length)-1); i >= 0; i--) {
   reversed += ch[i];
}
   console.log(reversed);
}
stringreversal();




