import $ from "jquery"

$(document).ready(function () {

    let imgs = $("img");
    let btn = $(".list-item:first").hover(function () {
        $(this).toggleClass("active")

    })

    $(".list-item:eq(2)").on("click", function () {
        $(".image:even").fadeToggle();
    });


    $(".list-item:eq(4)").on("click", function () {
        $(".image:odd").animate({
            opacity: "toggle",
            height: "toggle"
        }, 2000);
    });

    console.log(btn);
    console.log(imgs);

})
