const EventEmitter = require("node:events");
const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
    console.log("There is a new sale!");
});

myEmitter.on("newSale", () => {
    console.log("We're gonna earn money!");
});

myEmitter.on("customerName", () => {
    console.log("Customer name: Looney");
});

myEmitter.on("newSale", stock => {
    console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);
myEmitter.emit("customerName", "Looney");

console.log("=========================================");

myEmitter.on("refund", () => {
    console.log("There is a refund request.");
});

myEmitter.on("refund", (howMuch) => {
    console.log(`${howMuch}$ refund has been requested.`);
});

myEmitter.on("isRefundAccepted", (answer) => {
    console.log("\nstart")
    
    if (answer === "yes") {
        console.log("The price has been refunded.");
    } else if (answer === "no") {
        console.log("Refund request is not accepted.");
        return;
    } else {
        console.log("What?");
    }

    console.log("end\n");
});

myEmitter.emit("refund", 55);
myEmitter.emit("isRefundAccepted", "no");

// if .emit() function isn't used then the function won't invoke.

