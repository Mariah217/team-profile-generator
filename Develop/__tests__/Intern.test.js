const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")

describe ("Intern", ()=>{
    it("Test interns's properties", () =>{
        const intern = new Intern ('Locke', 4, 'locke@ymail.com', 'OSU')
        expect(engineer.name).toEqual('Locke')
        expect(engineer.id).toEqual(4)
        expect(engineer.email).toEqual('locke@ymail.com')
        expect(engineer.school).toEqual('OSU')
    })
})

describe("Intern", ()=>{
    it("Test intern's methods", ()=>{
        const engineer = new Employee ('Willow', 5, 'willow19@gmail.com', 'UC')
        expect(engineer.getName()).toEqual('Willow')
        expect(engineer.getID()).toEqual(5)
        expect(engineer.getEmail()).toEqual('willow19@gmail.com')
        expect(engineer.getSchool()).toEqual('UC') //not working
})
})