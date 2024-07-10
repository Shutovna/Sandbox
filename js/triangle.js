const lines = 5;
let result = '';


for(let sp = 5; sp >= 0; sp --) {
    let line = '';
    for(let i = 0; i < sp; i ++) {
        line += ' ';
    }

    for(let i = 5 -sp; i >=0; i--) {
        line += '*'
    }
    
    for(let i = 0; i < 5 - sp; i++) {
        line += '*'
    }

    line += '\n';
    result += line;
}

console.log(result);

