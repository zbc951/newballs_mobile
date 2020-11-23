$(document).ready(function(){
    console.log("my_windows_transfer.js");

    let drow_down = $('.groups div.line.last.last');
    let hidden = $('.groups .hidden');
    let d_text = $('.groups div.line.last.last span p:first-child');
    drow_down.click(function(){
        console.log("click");
        if(drow_down.parent('.groups').hasClass('active') == false){
                   drow_down.parent('.groups').addClass('active');
                   d_text.text('收起');
            return hidden.slideDown('slow');
        }else{
                    drow_down.parent('.groups').removeClass('active');
                    d_text.text('展開');
            return  hidden.hide();
        }
    })
});//total