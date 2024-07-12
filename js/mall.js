const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}
function getMallVolume(shoppingMallData) {
    let totalVolume = 0;
    for(let shop of shoppingMallData.shops) {
        totalVolume += shop.length * shop.width * shoppingMallData.height;
    }
    return totalVolume;
}

function isBudgetEnough(data) {
    let mallVolume = getMallVolume(data);
    let moneyToPay = mallVolume * data.moneyPer1m3;
    let budgetEnough = data.budget >= moneyToPay;
    return budgetEnough ? 'Бюджета достаточно' : 'Бюджета недостаточно';
}

console.log(isBudgetEnough(shoppingMallData));