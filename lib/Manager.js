const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, phone, email, numofsuper){
        super(name, phone, email)

        this.numofsuper = numofsuper
    }
    getnumofsuper(){
        return this.numofsuper
    }
    getPosition(){
        return 'Manager'
    }
}

module.exports = Manager