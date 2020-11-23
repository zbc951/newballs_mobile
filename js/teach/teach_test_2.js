$(document).ready(function() {
    console.log("teach_test_2");
    //切換_我的視窗_卡片管理
    
    //答錯
$('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice:first-child div.c_content').click(function(){
    console.log('choice_fail');
    if($('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option').hasClass('a') === true){
        console.log('has a');
        //choice_wrap
        $('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option.a').addClass('fail');
        $('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option.a').removeClass('a');
        $('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option.b').addClass('success');
        $('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option.b').removeClass('b');

        //result_wrap
        $('aside.teach .content.teach_bs .card .question_wrap .result_wrap .fail').addClass('active');
        //answer
        $('aside.teach .content.teach_bs .card .question_wrap .result_wrap .answer').addClass('active');
        //button_area
        
     return   $('aside.teach .content.teach_bs .card .button_wrap').addClass('active');
    }
    
  });
    //答對
  $('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice:last-child div.c_content').click(function(){
    console.log('choice_fail');
    if($('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option').hasClass('b') === true){
        console.log('has a');
        //choice_wrap
        $('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option.a').addClass('fail');
        $('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option.a').removeClass('a');
        $('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option.b').addClass('success');
        $('aside.teach .content.teach_bs .card .question_wrap .choice_wrap .choice div.option.b').removeClass('b');

        //result_wrap
        $('aside.teach .content.teach_bs .card .question_wrap .result_wrap .success').addClass('active');
        //answer
        $('aside.teach .content.teach_bs .card .question_wrap .result_wrap .answer').addClass('active');
        //button_area
        
     return   $('aside.teach .content.teach_bs .card .button_wrap').addClass('active');
    }
    
  });


}); //total