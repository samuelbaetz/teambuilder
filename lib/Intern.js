const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, phone, email, uni){
        super(name, phone, email)

        this.uni = uni
    }
    getUni(){
        return this.uni
    }
    getPosition(){
        return 'Intern'
    }
}

module.exports = Intern