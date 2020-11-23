$(document).ready(function(){
    console.log("my_swiper.js");
   let mySwiper = new Swiper('.swiper-container', {
       speed:1500,
       loop: true,
       spaceBetween:50,
       autoplay:{
           delay:2000,
       }
   });
//    var mySwiper = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100
// });

});//total