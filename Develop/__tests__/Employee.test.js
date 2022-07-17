const Employee = require("../lib/Employee") //imported employee constructor into test

describe("Employee", ()=>{ //create label and then the call back
    describe("test Employee's properties", ()=>{
        it("Test all properties", () =>{
            const employee = new Employee ('Mark', 1, 'mark@yahoo.com') //whatever is written here will be stored into the parameters name, id and email.
            expect(employee.name).toEqual('Mark') //expect is a built in fuction to test input vs the output. employee is the variable.
            expect(employee.id).toEqual(1)
            expect(employee.email).toEqual('mark@yahoo.com')
        })
})

    describe("test Employee's methods", ()=>{
        it ("Test all methods", () =>{
       const employee = new Employee ('Brad', 2, 'brad@yahoo.com') 
            expect(employee.getName()).toEqual('Brad')
            expect(employee.getID()).toEqual(2)
            expect(employee.getEmail()).toEqual('brad@yahoo.com')
    })
})})