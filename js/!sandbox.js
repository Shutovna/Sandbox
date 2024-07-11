let user = {
    name: "Nikitos",
    hobbies: [
        { name: "Coding", exp: 5 },
        { name: "Gaming", exp: 25 }
    ],
    salary: 40800,
    ndfl: 13,
    workedMonths: 1.2,

    toString: function () {
        let res = "";
        for (let key in this) {
            if (typeof (this[key]) == "object") {
                for (let jkey in this[key]) {
                    res += `\t${jkey}=${this[key][jkey]} ${typeof (jkey)} ${typeof (this[key][jkey])}\n`;
                }
            } else if (typeof (this[key]) != "function") {
                res += `${key}=${this[key]} ${typeof (key)} ${typeof (this[key])}\n`;
            }

        }
        return res;
    },

    income: function () {
        let income = this.salary * this.workedMonths;
        income = income - income * (this.ndfl / 100);
        return income;
    }
};

console.log(user);
console.log(user.toString());
console.log(user.income());

const { name, exp } = user.hobbies[0];
console.log(name + " " + exp);

let arr = [8, 3, 7, 1, 10];
arr.forEach(function (item, idx, arr) {
    console.log(`${idx}: ${item} ${item * item} in array ${arr}`);
});

arr.sort((a, b) => a - b);
