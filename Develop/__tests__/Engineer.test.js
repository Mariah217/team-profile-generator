const Employee = require ("../lib/Employee")
const Engineer = require ("../lib/Engineer")

describe ("Engineer", ()=>{
    it("Test engineer's properties", () =>{
        const engineer = new Engineer ('Brandon', 2, 'brandon@outlook.com', 'brandon123')
        expect(engineer.name).toEqual('Brandon')
        expect(engineer.id).toEqual(2)
        expect(engineer.email).toEqual('brandon@outlook.com')
        expect(engineer.github).toEqual('brandon123')
    })
})
    describe("Engineer", ()=>{
        it("Test engineer's methods", ()=>{
            const engineer = new Engineer ('Samantha', 3, 'samantha123@gmail.com', 'samantha30')
            expect(engineer.getName()).toEqual('Samantha')
            expect(engineer.getID()).toEqual(3)
            expect(engineer.getEmail()).toEqual('samantha123@gmail.com')
            expect(engineer.getGithub()).toEqual('samantha30') 
    })
})