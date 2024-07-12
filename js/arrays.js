const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length == 0) {
        return 'Семья пуста';
    }
    let res = 'Семья состоит из: ';
    for (let n of arr) {
        res += n + " ";
    }

    res = res.slice(0, res.length - 1);
    return res;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let i of arr) {
        console.log(i.toLowerCase());
    }
}

standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) != "string") {
        return "Ошибка!";
    }
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;

}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let res = arr.length == 0 ? "Нет доступных валют" : "Доступные валюты:\n";

    arr.forEach(element => {
        if (element != missingCurr) {
            res += `${element}\n`;
        }
    });

    return res;

}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));