const user = {
    name:'Max',
    age: 34,
    greet() {
        console.log("Hello!");
        console.log(this.age);
    }
};

console.log(user.name);
user.greet();


// pode ser utilizada futuramente 
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
