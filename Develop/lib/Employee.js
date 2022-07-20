class Employee{ //parent class
    constructor(name,id,email){ //name, id and email are common parameters that will be shared among the children
        this.name = name //this.name(key), name(value)
        this.id = id
        this.email = email
    }
    getName(){
        return this.name
    }
    getID(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
}

//exports so children can use
module.export=Employee
