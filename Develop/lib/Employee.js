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
    getId() {
        return this.id;
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
        return "Employee";

    }
}

// var test = new Employee("Patrick", "1234", "Email")
// console.log(test)

module.exports = Employee;