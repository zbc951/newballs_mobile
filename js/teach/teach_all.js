$(document).ready(function () {

    console.log("teach_all.js");

    let nav = $('aside.teach .nav div');
    nav.click(function () {
        $(this).siblings().removeClass('active');
        return $(this).addClass('active');
    })
});