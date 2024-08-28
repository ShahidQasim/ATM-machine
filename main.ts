import inquirer from "inquirer"


type anstype = {
    userId :  string,
    pin : number
    accountType : string
    transactiontype : string
    amount : number
}

console.log("**************  WELCOME TO ATM BY SHAHID QASIM *****************");


let answers : anstype  = await inquirer.prompt([
    {
    type :  "input",
    message : "enter you Identity",
    name : "userId",
    },

{
    type : "input",
    message : "enter you pin plz",
    name : "pin",

},
{
    type : "list",
    message : "select your account type",
    name: "accountType",
    choices : ["current","saving"],
   
},
{
    type : "list",
    message :  "select you transaction type",
    name : "transactiontype",
    choices : ["withdrawal", "fast cash"],
    when(answers){
        return answers.accountType
    },

},
{
    type : "list",
    name : "amount",
    message : "select your amount",
    choices : [1000,5000,10000,50000],
    when(answers){
        return answers.transactiontype==="fast cash"
    }
},
{
    type : "number",
    name  :"amount",
    message : "enter your required amount",
    when(answers) {
        return answers.transactiontype==="withdrawal"
    },
}
]);




// WITHOUT USERNAME  AND PASSWORD//////////////////////////////////////////////////////

// if (answers.userId && answers.pin) {
    
    
//     //let blance  = Math.floor(Math.random()*5000)
//     let blance =  5000
//     console.log("your original balance",blance);
   
//     let manualAmount = answers.amount
//     if (blance> manualAmount){
//     let remaining  = blance-manualAmount
//     console.log("your remiaing balane is :", remaining);
//     }

// else {
//     console.log("insufficient balance for withdrawing", manualAmount ,"you need",manualAmount-blance, "more to withdraw, INSERT card again and try another amount");
    
// }
// }


/// WITH SPECIFIC USERNAME AND PASSWORD ////////////////////////////////////////

if (answers.userId=="shahid" && answers.pin==1997) {
    
    console.clear()
    //let blance  = Math.floor(Math.random()*5000)
    let blance =  5000
    console.log("\n \n \n \n your original balance",blance);
   
    let manualAmount = answers.amount
    if (blance>= manualAmount){
    let remaining  = blance-manualAmount
    console.log("your remiaing balane is :", remaining ,"\n\n\n\n\n\n");
    }

else {
    console.log("insufficient balance for withdrawing", manualAmount ,"you need",manualAmount-blance, "more to withdraw, INSERT card again and try another amount");
    
}
}
else{
    console.log("invalid username or password, sorry!!! we could not proceed further, check your credentials and try again");
    
}