$(function () {
    
    console.log('tip.js');

    $('.okb').on('click', function () {
        let parent = $(this).parent();
        $(parent.next()).toggleClass('none');
    });

    $('.nxb,.mnxb').on('click', function () {
        let parent = $(this).parent();
        $(parent.next()).toggleClass('none');
    });
    $('.againb').on('click', function () {
        $('section').addClass('none');
        $('section.1').removeClass('none');
    });

});