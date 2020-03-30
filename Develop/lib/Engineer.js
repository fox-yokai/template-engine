// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // inherit name, id, and email from Employee superclass
        
        
        super(name, id, email);
        this.gitHub = gitHub;

    }
    getGitHub() {
        if (!this.gitHub) {
            console.log("Please enter a GitHub username");
        } else {
            return this.gitHub;
        } 

    }

    getRole() {
        return "Engineer";
    }
}






module.exports = Engineer;