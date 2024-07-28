function* gen(text, n) {
    for (let i = 0; i < n && i < text.length; i++) {
        yield  text[i];
    }
}

const str = gen("Preved medved", 20);

/*let res;
do {
    res = str.next();
    console.log(res.value);

} while (!res.done);*/

for(let c of str) {
    console.log(c)
}
