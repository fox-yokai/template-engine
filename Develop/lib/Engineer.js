// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(gitHub) {
        // inherit name, id, and email from Employee superclass
        this.gitHub = gitHub;
        
        super(name, id, email)

    }
    getGitHub(){
        if (!this.gitHub) {
            console.log("Please enter a GitHub username");
        } else {
            return this.gitHub;
        } 

    }

    getRole() {
        // returns Engineer
    }
}






module.exports = Employee;