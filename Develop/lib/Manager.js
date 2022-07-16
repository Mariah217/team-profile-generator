const Employee = require("./Employee") //importing Employee constructor

//manager is a child class
class Manager extends Employee{ //attatching parent class to manager class 
    constructor(name,id,email, officeNumber){ //adding properties from employee contructor PLUS additional propertie officeNumber
        super(name,id,email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return 'Manager'
    }
}

module.exports=Manager
