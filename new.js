import inquirer from "inquirer";
//
let mybalance = 10000;
let mypin = 1997;
let pinAnswer = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "Enter you Pin...\n"
    }
]);
if (pinAnswer.pincode === mypin) { ////or ===1997 simply
    console.log("!!!! PIN ACCEPTED !!!!!!");
    let answers = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "select option from the following...\n",
            choices: ["withdrawal", "fastCash", "viewbalance"]
        },
    ]);
    if (answers.select === "withdrawal") {
        let withdraw = await inquirer.prompt([
            {
                name: "amount",
                type: "input",
                message: "Enter your required amount for withdrawal...\n"
            }
        ]);
        if (mybalance >= withdraw.amount) {
            let remaining = mybalance - withdraw.amount;
            console.clear();
            console.log("\n\n", withdraw.amount, "withraws successfully");
            console.log("your remaining balance is :", remaining);
        }
        else {
            console.log("insufficient balance left...\n your balance is", mybalance);
        }
    }
    if (answers.select === "fastCash") {
        let cash = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "select amount for fast withdrawal...\n\n",
                choices: ["1000", "3000", "5000", "8000", "10000"]
            }
        ]);
        if (mybalance >= cash.options) {
            let remaining = mybalance - cash.options;
            console.clear();
            console.log("\n\n\n", cash.options, " withdraws success fullyyour remainig balance is :", remaining, "\n\n\n");
        }
        else {
            console.log("insuffficient balance : your balance is\n", mybalance);
        }
    }
    if (answers.select === "viewbalance") {
        console.clear();
        console.log("\n \n \n \n your current balance is:", mybalance);
    }
}
else {
    console.log("incorrect pin  !!!!");
}
