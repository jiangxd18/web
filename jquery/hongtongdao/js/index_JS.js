/**
 * Created by Administrator on 2016/6/11.
 */
$(function () {

    ////菜单栏滑上滑下效果
    var sign = false;
    $('.menu_btn').click(function () {
        if(sign === false) {
            $('.menu_ul').slideDown(500);
            sign = true;
        }
        else {
            $('.menu_ul').slideUp(500);
            sign = false;
        }
    });

    ///鼠标滑过图片时候效果
    var sign2 = false;
    $('.pic').click(function () {

        if(sign2 === false){
            $(this).find('.hint').slideUp(100);
            sign2 = true;
        }
        else{
            $(this).find('.hint').slideDown(100);
            sign2 = false;
        }
    });

    //点击vip区进行切换
    var that_letter = $('.vip_letter1:eq(0)');
    var that_vip = $('.vip_choose:eq(0)');
    $('.vip_choose').each(function () {
        var index = $(this).index();
        $(this).click(function () {
            that_vip.removeClass('vip_active');
            $(this).addClass('vip_active');
            that_vip = $(this);

            var letter = $('.vip_letter1:eq(' + index + ')');
            that_letter.css('display','none');
            letter.css('display','block');
            that_letter = letter;
        });
    });
    
    ///detail_main
    var that_main = $('.detail_main:eq(0)');
    $('.detail_main').click(function () {
        that_main.removeClass('main_active');
        $(this).addClass('main_active');
        that_main = $(this);
    });
});