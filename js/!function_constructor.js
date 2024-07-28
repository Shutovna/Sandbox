function Person(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.referal = false;
}

const p1 = new Person(1, "Ivan", "Ivan@gmail.com")
const p2 = new Person(2, "Alex", "Alex@gmail.com")

Person.prototype.save = function () {
    console.log(`Saving ${this.name}`);
}

console.log(p1)
console.log(p2)

p1.save()
p2.save()

function Test() {
    this.first = function() {
        alert("first")
    }
}

