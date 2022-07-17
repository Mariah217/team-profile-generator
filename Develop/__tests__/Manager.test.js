const Employee = require ("../lib/Employee")
const Manager = require("../lib/Manager")

describe ("Manager", ()=>{
    it("Test manager's properties", () =>{
        const manager = new Manager ('Amanda', 6, 'amanda@outlook.com', 55555)
        expect(engineer.name).toEqual('Amanda')
        expect(engineer.id).toEqual(6)
        expect(engineer.email).toEqual('amanda@outlook.com')
        expect(engineer.officeNumber).toEqual(55555)
    })
})
    describe("Manager", ()=>{
        it("Test manager's methods", ()=>{
            const manager = new Manager ('Billy', 7, 'billy@gmail.com')
            expect(engineer.getName()).toEqual('Billy')
            expect(engineer.getID()).toEqual(7)
            expect(engineer.getEmail()).toEqual('billy@gmail.com')
    })
})