const n = 6;

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {
        str += '*';
    }
    console.log(str);
}

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;        
    } else {
        console.log(i);
        i++;
    }    
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let arr = [];
let nn = 0;
for(let i = 5; i <= 10; i++) {
    arr[nn++] = i;
}

console.log(arr);
