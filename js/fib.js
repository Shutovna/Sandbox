function fib(n) {
    let res = '';
    let first =0, second = 1;
    for(let i = 0; i< n; i++) {
        if(i == n -1) {
            res += first;
        } else {
            res += first + ' ';
        }
        
        
        let third = first + second;
        first = second;
        second = third;

    }

    return res;
}

console.log(fib(4));// => ''0 1 1 2"

console.log(fib(7));// => ''0 1 1 2 3 5 8"

console.log(fib('7'));// => ''"

console.log(fib(1));// => "0"

console.log(fib(0));// => ''"