// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for(let i = 0; i< arr.length; i++) {
        result[i] = arr[i];
    }
    
    
    // Не трогаем
    return result;
}

let res = firstTask();
console.log(res);
console.log(res.length);


// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for(let i =0; i < data.length; i++) {
        let type = typeof(data[i]);
        if(type === "number") {
            data[i] = data[i] * 2;
        } else if(type === "string") {
            data[i] = data[i] + " - done";
        }
    }
    
    
    // Не трогаем
    return data;
}

res = secondTask();
console.log(res);
console.log(res.length);

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    let n = 0;
    for(let i = data.length -1; i>=0; i--) {
        result[n++] = data[i];
    }
    
    
    // Не трогаем
    return result;
}

res = thirdTask();
console.log(res);
console.log(res.length);