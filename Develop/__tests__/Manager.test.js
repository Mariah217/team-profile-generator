const Employee = require ("../lib/Employee")
const Manager = require("../lib/Manager")

describe ("Manager", ()=>{
    it("Test manager's properties", () =>{
        const manager = new Manager ('Amanda', 6, 'amanda@outlook.com', 55555)
        expect(manager.name).toEqual('Amanda')
        expect(manager.id).toEqual(6)
        expect(manager.email).toEqual('amanda@outlook.com')
        expect(manager.officeNumber).toEqual(55555)
    })
})
    describe("Manager", ()=>{
        it("Test manager's methods", ()=>{
            const manager = new Manager ('Billy', 7, 'billy@gmail.com')
            expect(manager.getName()).toEqual('Billy')
            expect(manager.getID()).toEqual(7)
            expect(manager.getEmail()).toEqual('billy@gmail.com')
    })
})