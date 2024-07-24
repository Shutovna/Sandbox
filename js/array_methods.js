"use strict"

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter((item) => item.rating >= 8)
}

function showListOfFilms(arr) {
    let reduce = arr.reduce((res, curr) => `${res},${curr.name}`, "")
    reduce = reduce.slice(1, reduce.length)
    return reduce;
}

function setFilmsIds(arr) {
    arr.forEach((item, idx) => item.id = idx)
    return arr
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => "id" in item)
}

console.log(showGoodFilms(films))
console.log(showListOfFilms(films))
console.log(checkFilms(tranformedArray));


const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.reduce((sum, current) => current.amount > 0 ? sum + current.amount : sum, 0)
};

const getTotalIncomeAmount = (data) => {
    let hasNeg = data.some(item => item.amount < 0)
    if (hasNeg) {
        return data.reduce((sum, current) => sum + current.amount, 0)
    } else {
        return getPositiveIncomeAmount(data)
    }
};

console.log(getPositiveIncomeAmount(funds))
console.log(getTotalIncomeAmount(funds))