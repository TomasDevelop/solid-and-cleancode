(() => {
   
    // No responsabilidad unica
    // type Gender = 'M'|'F'
    
    // class Person {

    //     constructor( 
    //         public name: string,
    //         public gender: Gender,
    //         public birthdate: Date){
    //     this.name = name;
    //     this.gender = gender;
    //     this.birthdate = birthdate;
    //     }
    // }

    // const newPerson = new Person('Tomas', 'M', new Date('1999-06-25'))
    // console.log({newPerson})

    // Principio de responsabilidad unica
    type Gender = 'M'|'F'
    
    class Person {
        constructor( 
            public name: string,
            public gender: Gender,
            public birthdate: Date){}
    }

    class User extends Person {
        
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date

        ){
            super(name, gender, birthdate)
            this.lastAccess = new Date()
        }
        checkCredentials(){
            return true;
        }
    } 

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public openFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate)
        }
    }

})();