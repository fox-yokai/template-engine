// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email);

    }
    getOfficeNumber() {
        if (!this.officeNumber) {
            console.log("Please enter the office number");
        } else {
            return this.officeNumber;
        } 
    }

    getRole() {
        // returns manager
    }
}