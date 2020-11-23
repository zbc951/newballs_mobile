//

$(document).ready(function(){
    console.log("double.js");
   

//double賽事串關



$('.double_mode').click(
    function (){
       
        if($('.window_double_mode').hasClass('active') === true){
            return $('.window_double_mode').removeClass('active');
            //  return $('.window_double_mode .hide_area').slideToggle(300,'linear');
            
        }else{
            return $('.window_double_mode').addClass('active');
            //  return $('.window_double_mode .hide_area').slideToggle(300,'linear');
        }




        // console.log('click');
        // $('.window_double_mode .hide_area').slideToggle(300,'linear');
    })
});//total