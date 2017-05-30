/**
 * Created by donng on 17-5-30.
 */
$(function () {
    $('#btn').click(function () {
        var str = $('#key').val();
        var count = 0;
        var time = setInterval(function () {
            var img = $('#loadimg');
            if(img.hasClass('rotate')) img.removeClass('rotate');
            else img.addClass('rotate');
            count ++;
            if(count == 5){
                clearInterval(time);
                $('#fliter').css({'display':'none'});
            }
        },1000);
        $('#fliter').css({'display':'block'});

        //遍历
        $('.em').each(function () {
            if($(this).html().match(str) == null) $(this).parent().css('display','none');
        });

    });
});