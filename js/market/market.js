$(document).ready(function() {
  console.log('market.js');

//初始開啟新手版0811
let beg = $("main.market aside ul li.beginner");
beg.css('display','block');


//換膚 0522
function check_play_type (){
  let t_day = localStorage.getItem('type');
  if(t_day == 'night'){
    $('body').addClass('dk');
    $('aside.set_window ul.side_bar li.g_style div.box div.check span.p_left').removeClass('active');
    $('aside.set_window ul.side_bar li.g_style div.box div.check span.p_right').addClass('active');

    return  console.log('nn');
  }else{
    $('body').removeClass('dk');
    $('aside.set_window ul.side_bar li.g_style div.box div.check span.p_right').removeClass('active');
    $('aside.set_window ul.side_bar li.g_style div.box div.check span.p_left').addClass('active');
    return  console.log('ll');
  }
}

check_play_type();
  //***設置頁面_切換
  $('aside.set_window ul.side_bar li div.box div.check span').click(
    function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active')
    }
  );


//***設置n&l_切換
//light
$('aside.set_window ul.side_bar li.g_style div.box div.check span.p_left').click(
  function(){
  if($(this).hasClass('active') == true)
  {
    localStorage.setItem('type','light');
    check_play_type();
    return
  }
  }
);
//night
$('aside.set_window ul.side_bar li.g_style div.box div.check span.p_right').click(
  function(){
  if($(this).hasClass('active') == true)
  {
    localStorage.setItem('type','night');
    check_play_type();
    return
  }
  }
);




  //今日_滾球_早盤_串關

  $("header ul li.title").click(function(){
    console.log("title");
   
    if($(this).hasClass('active') != true){

                $('aside.type_ch,aside.type_ch ul').addClass('active');
                $(this).addClass('active');
       return   $(this).parent().parent().css('z-index','502');
    }else{
                      $('aside.type_ch,aside.type_ch ul').removeClass('active');
                      $(this).removeClass('active');
          return      $(this).parent().parent().css('z-index','100');
    }

  });


  //抓取種類座標&定位
  // $("nav.kinds ul").scrollLeft(300);
  // $("nav.kinds ul").scroll(
  //   function()
  //   {
  //     let scroll_pos = $(this).scrollLeft();
  //     console.log('scroll_pos ='+scroll_pos);
  //   }
  // );

  //種類_active 未綁定
  $("nav.kinds ul li").click(function() {
    if ($(this).hasClass("active") == false) {
      $(this).addClass("active");
      $(this)
        .siblings()
        .removeClass("active");
    }
  });
  //***切換_新手/專業 版
  $("main.market aside article.option div.mode span").click(function() {
    if ($(this).hasClass("active") == false) {
      $(this).addClass("active");
      $(this)
        .siblings()
        .removeClass("active");
    }
    
    if ($(this).hasClass("beginner") === true) {
      $("main.market aside ul li.beginner").css("display", "block");
      $("main.market aside ul li.senior").css("display", "none");
   
    } else if ($(this).hasClass("senior") === true) {
      $("main.market aside ul li.senior").css("display", "block");
      $("main.market aside ul li.beginner").css("display", "none");
    }
  });
  //專業版波膽_active
  $(
    "main.market aside ul li.senior section.content span.point_box span.num_group span div"
  ).click(function() {
  
    if ($(this).hasClass("active") != true) {
      return $(this).addClass("active");
    } else {
      return $(this).removeClass("active");
    }
  });
  //新手版_bet_active
  let market_bet_btn = $('.content .box .in');

  market_bet_btn.click(function() {
    if ($(this).hasClass("active") != true && $('main.market').hasClass("early_page") == true) {
      return $(this).addClass("active");
    } else {
      return $(this).removeClass("active");
    }
  });
  //專業版_bet_active
  let market_senior_bet = $('aside ul li.senior .content span.point_box span.num_group span div');
  market_senior_bet.click(function(){
    console.log('double senior_mode');
    if ($(this).hasClass("active") == true ) {
      console.log('double true');
      return $(this).addClass("active");
    } 
    else if($(this).hasClass('active') == false){
      console.log('double false');
      return $(this).removeClass("active");
    }
  })

  //開啟_投注頁面
  //新手
  $("main.market section.content .box .in").click(function() {
    if ($("aside.bet_window").hasClass("active") != true && $('main.market').hasClass("early_page") != true) {
      return $("aside.bet_window").addClass("active");
    }else if( $("aside.bet_window").hasClass("active") == true){
      return $("aside.bet_window").removeClass("active");
  }
  });
  //專業
  $(".content .point_box .num_group span div").click(function() {
    if ($("aside.bet_window").hasClass("active") != true && $('main.market').hasClass("early_page") != true) {
      return $("aside.bet_window").addClass("active");
    }else if( $("aside.bet_window").hasClass("active") == true){
        return $("aside.bet_window").removeClass("active");
    }
  });
  //close
  let bet_close = $('aside.bet_window div.bet_page span.close');
  bet_close.click(function(){
    return $("aside.bet_window").removeClass("active");
  })
  
  //開啟_設置頁面
  $('footer ul li.set_table ,aside.set_window ul.side_bar li.close').click(
    function (){
      if($('aside.set_window').hasClass('active') != true){
        return $('aside.set_window').addClass('active');
      }
      else{
        return $('aside.set_window').removeClass('active');
      }
    }
  );

  //開啟_賽事選擇頁面_search_window
  $('header ul.market li.search , aside.search_window div.header ul li.close').click(
    function(){
      if($('aside.search_window').hasClass('active') != true){
        return $('aside.search_window').addClass('active');
      }else{
        return $('aside.search_window').removeClass('active');
      }
    }
  );
//0827 賽事隱藏
let hidden_group = $('.search_window div.content div.group ul');
    hidden_group.addClass('hidden');
let btn_group = $('.search_window div.content div.group p.title');
    btn_group.click(function(){
      if($(this).hasClass('active') != true){
        $(this).siblings('ul').removeClass('hidden');
        $(this).siblings('ul').slideDown('slow');
        $(this).addClass('active');
        
      }else{
        $(this).removeClass('active');
        $(this).siblings('ul').addClass('hidden');
      }
    })

  //開啟_未結算注單
  $('footer ul li.not_yet , aside.yet_bill .windows span.close').click(
    function(){
      if($('aside.yet_bill').hasClass('active') != true){
        return $('aside.yet_bill').addClass('active');
      }else{
        return $('aside.yet_bill').removeClass('active');
      }
    }
  );
  //開啟_已結算注單
  // $('footer ul li.yes_do , aside.finish_bill .windows span.close').click(
  //   function(){
  //     if($('aside.finish_bill').hasClass('active') != true){
  //       return $('aside.finish_bill').addClass('active');
  //     }else{
  //       return $('aside.finish_bill').removeClass('active');
  //     }
  //   }
  // );
  //注單收合
  $('.content .bill').click(
    function(){
        if($(this).hasClass('active') != true){
        return  $(this).addClass('active');
        }else{
            return $(this).removeClass('active');
        }
    }
)

//live_page
let double_header = $('header.double_inner');
let live_page = $('header.live_page.live_page');
let live_re = $('article.game_live div.wrap div:first-child');
let live_back = $('.live_back');
let main = $('main.double_inner_page');

live_re.addClass('g_live');
double_header.addClass('active');
live_page.removeClass('active');

live_re.click(function(){
  double_header.removeClass('active');
  live_page.addClass('active');
  main.addClass('live_mode');
})
live_back.click(function(){
  double_header.addClass('active');
  live_page.removeClass('active');
  main.removeClass('live_mode');
})

}); //total
