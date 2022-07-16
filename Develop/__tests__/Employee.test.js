const Employee = require("../lib/Employee") //imported employee constructor into test

describe("Employee", ()=>{ //create label and then the call back
    describe("test Employee's properties", ()=>{
        const employee = new Employee ('Mark', 1, 'mark@yahoo.com') //whatever is written here will be stored into the parameters name, id and email.

        expect(employee.name).toEqual('Mark') //expect is a built in fuction to test input vs the output. employee is the variable.
        expect(employee.id).toEqual(1)
        expect(employee.email).toEqual('mark@yahoo.com')
    })

    describe("test Employee's methods", ()=>{
            const employee = new Employee ('Brad', 2, 'brad@yahoo.com') 
    
            expect(employee.name).toEqual('Brad')
            expect(employee.id).toEqual(2)
            expect(employee.email).toEqual('brad@yahoo.com')
    })
})