$(document).ready(function(){
    console.log('rule ready');

//先隱藏
    // $('.rule_inner').hide();
    // //each迴圈判斷
    // console.log(main_rules[0]);
    // console.log(main_rules.length);
    // for(i = 0;i<main_rules.length;i++){
    //     $(main_rules[i]).click(function(){
    //       console.log('c');
    //       $(main_rules[i]).addClass('active');
    //     })
    // }
        $('aside.my_windows_help .content .li_wrap').each(function(){

            
            $(this).click(function(){
                if($(this).hasClass('active') != true){
                    $(this).addClass('active');
                    // $('.rule_inner').slideDown("300");
                }else{
                  $(this).removeClass('active');
                //   $('.rule_inner').hide();
                }
            });
        });




      
  
});//total