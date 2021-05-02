const Employee = require('../lib/Employee');

class Inter extends Employee {

    constructor(name, id, email, school) {
        
        super(name, id, email);
        this.school= school;
    }

    getSchool() {
        return `School: ${this.school}`
    }
    
    getRole() {
        return `Intern`
    }
}

module.exports= Inter;