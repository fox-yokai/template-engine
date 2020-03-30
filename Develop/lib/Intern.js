// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        

        super(name, id, email);
        this.school = school;

    }
    getSchool() {
        if (!this.school) {
            console.log("Please enter the name of your school");
        } else {
            return this.school;
        } 
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;