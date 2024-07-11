// Место для первой задачи
function getTimeFromMinutes(min) {
    if (!Number.isInteger(min) || min < 0) {
        return "Ошибка, проверьте данные";
    }

    let hour = Math.floor(min / 60);
    let mm = min % 60;

    let hourStr = '' + hour;
    let lastHourNum = hourStr.charAt(hourStr.length - 1)
    if (lastHourNum == 1) {
        hourStr = "час";
    } else if (lastHourNum >= 2 && lastHourNum <= 4) {
        hourStr = "часа";
    } else {
        hourStr = "часов";
    }

    return `Это ${hour} ${hourStr} и ${mm} минут`;
}

console.log(getTimeFromMinutes(15000));
console.log(getTimeFromMinutes(60));
console.log(getTimeFromMinutes(120));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

