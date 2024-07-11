// Место для первой задачи
function calculateVolumeAndArea(len) {
    if (!Number.isInteger(len) || len < 0) {
        return 'При вычислении произошла ошибка';
    }
    let volume = len * len * len;
    let square = 6 * (len * len);

    return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
}

// Место для второй задачи
function getCoupeNumber(place) {
    if (!Number.isInteger(place) || place < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    if (place == 0 || place > 36) {
        return 'Таких мест в вагоне не существует';
    }

    let coupe;
    if (place % 4 == 0) {
        coupe = place / 4;
    } else {
        coupe = Math.floor(place / 4) + 1;
    }

    return coupe;

}

console.log(getCoupeNumber(4));