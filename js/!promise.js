/_ ES5 _/
var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // Всё выполнено
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// Вызываем промис
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
            // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();


console.log("Start")
var myPromise = new Promise(function (resolve, reject) {
    console.log("Loading...");
    setTimeout(() => {
        console.log("Loaded")
        if ((Math.random() * 10).toFixed() % 2 === 0) {
            reject("Error");
        } else {
            resolve("Succeed");
        }

    }, 1500)

});

myPromise.then(msg => {
        console.log(msg)
    }
).catch(msg => {
    console.log(msg)
}).finally(() => {
        console.log("Finally")
    }
);

function delay(ms) {
    return new Promise(resolve => setTimeout(() => {
        resolve(ms)
    }, ms))
}


delay(3000).then((ms) => console.log(`Executed in ${ms} seconds`))