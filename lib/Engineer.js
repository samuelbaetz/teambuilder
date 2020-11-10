const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, phone, email, github){
        super(name, phone, email)

        this.github = github
    }
    getGithub(){
        return this.github
    }
    getPosition(){
        return 'Engineer'
    }
}

module.exports = Engineer