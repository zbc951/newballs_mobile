$(document).ready(function() {
  console.log("index ready");


  //切換_熱門賽事
  $("li.hot_btn , article.bg span.close").click(function() {
    if ($("aside.hot_windows").hasClass("active") != true) {
      return $("aside.hot_windows").addClass('active');
     }else{
       return  $("aside.hot_windows").removeClass('active');
     }
    
  });
 


  //切換_賭盤種類
  $('main article.menu aside.btn_group button').click(
    function () {
        if($(this).hasClass('hot') == false){
            $(this).addClass('hot');
            $(this).siblings().removeClass('hot');
        }

        if($(this).hasClass('today') === true)
        {
           $('.game_wrap.t1').css('display','block');
           $('.game_wrap.t2').css('display','none');
           $('.game_wrap.t3').css('display','none');
           $('.game_wrap.t4').css('display','none');
        }
        else if($(this).hasClass('run_ball') === true){
          $('.game_wrap.t1').css('display','none');
          $('.game_wrap.t2').css('display','block');
          $('.game_wrap.t3').css('display','none');
          $('.game_wrap.t4').css('display','none');
        }
        else if($(this).hasClass('early') === true){
          $('.game_wrap.t1').css('display','none');
          $('.game_wrap.t2').css('display','none');
          $('.game_wrap.t3').css('display','block');
          $('.game_wrap.t4').css('display','none');
        }
        else if($(this).hasClass('double') === true){
          $('.game_wrap.t1').css('display','none');
          $('.game_wrap.t2').css('display','none');
          $('.game_wrap.t3').css('display','none');
          $('.game_wrap.t4').css('display','block');
        }
    });
  
//切換_訊息視窗
// $("header ul li.message_icon , aside.title_windows div.close").click(function() {
//   console.log('message click');
//  if ($("aside.title_windows").hasClass("active") != true) {
//   return $("aside.title_windows").addClass('active');
//  }else{
//    return  $("aside.title_windows").removeClass('active');
//  }
// });

  
  
  //switch
  $('aside.my_windows_mb_transfer div.auto div.box_empty div.check').click(function(){
    if($(this).hasClass('active') !== true)
    {
      return $(this).addClass('active');    
    }else{
      return $(this).removeClass('active');   
    }
  });
    //切換_我的視窗_錢包_存款
    $('aside.my_windows_mb_save div.header ul li.back , aside.my_windows_mb div.mb_content div.title div.save_money').click(function(){
      console.log('mb');
      if($('aside.my_windows_mb_save').hasClass('active') !== true)
      {
        return $('aside.my_windows_mb_save').addClass('active');    
      }else{
        return $('aside.my_windows_mb_save').removeClass('active');   
      }
    });
//切換_我的視窗_卡片管理
$('aside.my_windows_card div.header ul li.back , aside.my_windows_mb div.mb_content div.btns div.card').click(function(){
  console.log('mb');
  if($('aside.my_windows_card').hasClass('active') !== true)
  {
    return $('aside.my_windows_card').addClass('active');    
  }else{
    return $('aside.my_windows_card').removeClass('active');   
  }
});





}); //total
