// define class called employee
class Employee {
    // use a constuctor function to pass parameters name, id, and email
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    // set up method to getName
    getName() {
        if (!this.name) {
            console.log("Please provide a name");
        } else {
            return this.name;
        } 
    }

    // setup method to getID
    getID() {
        if (!this.id) {
            console.log("Please provide a ID number");
        } else {
            return this.id;
        } 

    }

    // set up method to getEmail
    getEmail() {
        if (!this.email) {
            console.log("Please provide a email");
        } else {
            return this.email;
        } 

    }

    // set up method to getRole
    getRole(){
        // this will return that the individual is an employee

    }
}

module.exports = Employee;