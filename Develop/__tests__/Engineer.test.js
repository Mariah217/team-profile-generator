const Employee = require ("../lib/Employee")

describe ("Employee", ()=>{
    it("Test engineer's properties", () =>{
        const engineer = new Employee ('Brandon' 2, 'brandon@outlook.com')
        expect(engineer.name).toEqual('Brandon')
        expect(engineer.id).toEqual(2)
        expect(engineer.email).toEqual('brandon@outlook.com')
    })
})