"use strict"

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({name: "NIKITOZ"})
})
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "GET"
})
    .then(response => response.json())
    .then(json => console.log(json))