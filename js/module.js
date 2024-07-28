"use strict"

function myModule() {
    this.hello = function() {
        console.log("hello")
    }

    this.goodbuy = function () {
        console.log("goodbuy")
    }
}

module.exports = myModule;