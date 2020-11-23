$(document).ready(function(){
    console.log("my_bet_record.js");
    let type_arr = ['.title .save','.title .get','.title .transfer'];
    // type_arr.forEach(item => console.log(item));
    type_arr.forEach(item => 
      $(item).click(function(){
        if($(this).hasClass('active') != true){
          $(this).siblings().removeClass('active');
          $(this).addClass('active');
          type_ch(item);
        }
      })
      );
    function type_ch(name){
      console.log(name);
      if(name == '.title .save'){
        $('.save_page').siblings().css('display','none');
        $('.save_page').css('display','block');
      }
      else if(name == '.title .get'){
        $('.get_page').siblings().css('display','none');
        $('.get_page').css('display','block');
      }
      else if(name == '.title .transfer'){
        $('.transfer_page').siblings().css('display','none');
        $('.transfer_page').css('display','block');
      }
    }
    // const callback = (item,index) => {
    //   if(index%2===0) return;
    //   console.log(item);
    //  }
    //  [0,1,2,3,4,5,6,7].forEach(callback)
});//total