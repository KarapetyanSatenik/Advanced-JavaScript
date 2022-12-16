class User {
    constructor (name) {
        this.name = name
    }
}

class Person extends User{
    constructor (name, age) {
        super(name)
        this.age = age
        //console.log(this) // object
    }
}

let x = new Person("Sat", 23)
console.log(x.__proto__ === Person.prototype); //true
console.log(Person.__proto__ === User); //true
console.log(Person.__proto__ === User.prototype); // false
console.log(Person.prototype.__proto__ === User.prototype); //true
console.log(Person.prototype.__proto__ === User); //false
