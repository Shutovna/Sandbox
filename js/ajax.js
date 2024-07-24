"use strict"

const inputRub = document.querySelector("#input-rub");
const inputUsd = document.querySelector("#input-usd");

inputRub.addEventListener("input", () => {
    const request = new XMLHttpRequest();

    request.open("GET", "js/current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    request.addEventListener("load", () => {
        if (request.status === 200) {
            console.log(request.response);
            let responseText = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / responseText.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Произошла ошибка";
        }
    })
})