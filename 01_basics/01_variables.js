const accountId = 144553;
let accountEmail = "rajdeep2003@gmail.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountState;
// accountId=2 // not allowed

accountEmail="hc@hcverma"
accountPassword="098766"
accountCity="Jaipur"

console.log(accountId);

/*
prefer not to use var 
because of issue of block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
