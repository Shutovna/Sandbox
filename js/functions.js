// Место для первой задачи
function sayHello(name) {
    return 'Привет, ' + name + '!';

}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num-1, num, num+1];

}

// Место для третьей задачи
function getMathResult(num, count) {
    if(typeof(count) != "number"|| count <= 0) {
        return num;
    }
    
    let res = '';
    let elem = num;
    for(let i = 0; i<count; i++) {
        res += elem;
        if(i < count-1) {
            res += '---';
        }
        elem += num;
    }

    return res;
}

console.log(getMathResult(3, 10));
