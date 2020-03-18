var string = "banana monkey5 dancer 2fridge happy66 juicy swatty";
var email1 = "queen@email.domain.tu.uk";
var email2 = "queenemail.domain.tu.uk";
var email3 = "queensland.bounty@dancer.au";

let regex = new RegExp(/.+@.+\..+/g);
let reg2 = new RegExp(/fridge|monkey|happy|swatty/g);

// var e1 = email1.match(regex);
// var e2 = email2.match(regex);
// var e3 = email3.match(regex);
// console.log(e1);
// console.log(e2);
// console.log(e3);
console.log(string.match(reg2));


// string.match(regex).forEach((match) => {
// 	console.log(match);
// })

















