// TODO: Write code to define and export the Employee class
 class Employee {
     constructor(name, phone, email){
         this.name = name
         this.phone = phone
         this.email = email
     }
     getName(){
         return this.name
     }
     getPhone(){
         return this.phone
     }
     getEmail(){
         return this.email
     }
     getPosition(){
         return "Employee"
     }
 }

 module.exports = Employee