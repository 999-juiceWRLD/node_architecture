const EventEmitter = require("node:events");


class Sales extends EventEmitter {
    constructor() {
        super();
    }

    getCustomer(name) {
        this.emit("customerName", name);
    }

    isReturned(answer) {
        this.emit("returnProduct", answer);
    }
};

const libInstance = new Sales();


function checkDataEmitter() {
    console.log("\n1-) checkDateEmitter() func invoked\n\n")
    libInstance.on("data", (data) => {
        console.log("Received Data: " + data);
    });
    libInstance.emit("data", "info package about software company yeni soft");
}

checkDataEmitter();
console.log("=========================================\n");

function checkCustomerNameEmitter() {
    console.log("2-) checkCustomerNameEmitter() func invoked\n")

    libInstance.on("customerName", (name) => {
        console.log("start\ncustomerName is on");
        console.log("Customer Name:", name, "\nend\n");
    });
    console.log("\nScene 1:");
    libInstance.getCustomer("Lyonne");
    console.log("Scene 2:");
    libInstance.getCustomer("Marco-Pierre White");
}

checkCustomerNameEmitter();
console.log("=========================================\n");

function checkReturnProductEmitter() {
    console.log("3-) checkReturnProductEmitter() func invoked");

    libInstance.on("returnProduct", (ans) => {
        if (ans === "no" || ans === "false") {
            console.log("Refund request is declined");
        } else if (ans === "yes" || ans === "true") {
            console.log("Refund request is accepted");
        } else {
            console.log("incomprehensible request\n");
        }
    });
    console.log("\nPossibility 1");
    libInstance.isReturned("yes");
    console.log("\nPossibility 2");
    libInstance.isReturned("no");
    console.log("\nPossibility 3");
    libInstance.isReturned("asdfghjkl");
}

checkReturnProductEmitter();