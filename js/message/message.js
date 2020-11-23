$(document).ready(function() {
    console.log("message ready");
//右上編輯開關
    $('header ul li.pure_text.for_edit').click(function(){

        if($('header ul li.pure_text.for_edit').hasClass('active')!= true){
            $('header ul li.pure_text.for_edit').addClass('active');
            $('aside.edit').addClass('active');
        return    $('section.message ul li').addClass('editing');
        }
        else{
            $('header ul li.pure_text.for_edit').removeClass('active');
            $('aside.edit').removeClass('active');
        return    $('section.message ul li').removeClass('editing');
        }
    })
   
    //信件內容右上
    $('header ul li.edit_point').click(function(){
        if($('aside.jump_window').hasClass('active')!= true){
          return  $('aside.jump_window').addClass('active');
        }
    });
    //信件內容_編輯關閉
    $('aside.inner_edit .wrap p.cancel').click(function(){
        return  $('aside.jump_window').removeClass('active');
    })

}); //total