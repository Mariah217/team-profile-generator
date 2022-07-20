const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")

describe ("Intern", ()=>{
    it("Test interns's properties", () =>{
        const intern = new Intern ('Locke', 4, 'locke@ymail.com', 'OSU')
        expect(intern.name).toEqual('Locke')
        expect(intern.id).toEqual(4)
        expect(intern.email).toEqual('locke@ymail.com')
        expect(intern.school).toEqual('OSU')
    })
})

describe("Intern", ()=>{
    it("Test intern's methods", ()=>{
        const intern = new Intern ('Willow', 5, 'willow19@gmail.com', 'UC')
        expect(intern.getName()).toEqual('Willow')
        expect(intern.getID()).toEqual(5)
        expect(intern.getEmail()).toEqual('willow19@gmail.com')
        expect(intern.getSchool()).toEqual('UC')
})
})