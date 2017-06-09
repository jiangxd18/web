/**
 * Created by Administrator on 2016/6/14.
 */
$(function () {

    //登录页面JS
    ///1、登录页面checkbox的点击响应
    var check_autologin = false;
    $('#login_auto_check').click(function () {
        if(check_autologin === false){
            $(this).attr('src','css/images/btn-multiple-s@3x.png');
            check_autologin = true;
        }
        else{
            $(this).attr('src','css/images/btn-multiple-n@3x.png');
            check_autologin = false;
        }
    });

    //注册页面JS
    ///1、注册页面checkbox的点击响应
    var check_autoregister = false;
    $('#register_protocal').click(function () {
        if(check_autoregister === false){
            $(this).attr('src','css/images/btn-multiple-s@3x.png');
            check_autoregister = true;
        }
        else{
            $(this).attr('src','css/images/btn-multiple-n@3x.png');
            check_autoregister = false;
        }
    });
    ///2、注册页面验证码获取按钮的响应
    var timer_register = null;
    $('#register_captcha_btn').click(function () {
        btnCountDown($(this),60,1000,timer_register);
    });

    //忘记密码页面JS
    ///1、忘记密码页面获取验证码的点击响应
    var timer_forget = null;
    $('#forget_captcha_btn').click(function () {
       btnCountDown($(this),60,1000,timer_forget);
    });

    //关于闪电和合作伙伴页面JS
    ///1、根据导航栏进行相应的切换
    var about_flash_article = $('#about_flash_article');
    var cooperation_article = $('#cooperation_article');
    var attr = [];
    var about_flash = $('#about_flash');
    var cooperation = $('#cooperation');
    var attr_nav = [];
    attr.push(about_flash_article);
    attr.push(cooperation_article);
    attr_nav.push(about_flash);
    attr_nav.push(cooperation);
    changePage(about_flash_article,attr,about_flash,attr_nav);


    //闪电学堂页面JS
    ///1、根据导航栏进行相应的切换
    var attr_school_nav = [];
    $('.style_nav_li').each(function () {
       attr_school_nav.push($(this));
    });
    var attr_school_detail = [];
    $('.for_attr').each(function () {
       attr_school_detail.push($(this));
    });
    changePage($('.for_attr:eq(0)'),attr_school_detail,$('.style_nav_li:eq(0)'),attr_school_nav);

    //已保存详情报价JS
    ///1、radio框选中选出改变radio状态
    var sign_radio = false;
    $('#replace_radio').click(function () {
        if(!sign_radio) $('#waybill_radio').attr('src','css/images/btn-radio-s@3x.png');
        else $('#waybill_radio').attr('src','css/images/btn-radio-n@3x.png');
        sign_radio = !sign_radio;
    });
    $('#waybill_radio_warn').click(function () {
        if(!sign_radio) $('#waybill_radio').attr('src','css/images/btn-radio-s@3x.png');
        else $('#waybill_radio').attr('src','css/images/btn-radio-n@3x.png');
        sign_radio = !sign_radio;
    });

    ///2、选中文件时JS
    $('#replace_marks_text').change(function () {
        $('#marks_pic_address').val($(this).val());
        $('#marks_choose').css({'border':'1px solid #737373','background':'#737373','color':'#fff'});
        $('#marks_transmit').css({'border':'1px solid #ed4c3a','background':'#fff','color':'#ed4c3a'}).attr('disabled',false);
        $(this).attr('disabled',true);
    });

    ///3、上传按钮JS
    $('#marks_transmit').click(function () {
        $('#marks_choose').css({'border':'1px solid #ed4c3a','background':'#fff','color':'#ed4c3a'});
        $(this).css({'border':'1px solid #737373','background':'#737373','color':'#fff'});
        $('#replace_marks_text').attr('disabled',false);
        $(this).attr('disabled',true);
    });

});

///倒计时封装函数
function btnCountDown(obj , count , unit,timer) {
    clearInterval(timer);
    obj.html( count + '(s)' );
    obj.attr('disabled',true);
    timer = setInterval(function () {
        count--;
        if(count === 0){
            obj.html('获取验证码');
            obj.attr('disabled',false);
            clearInterval(timer);
        }
        else{
            obj.html(count + '(s)');
        }
    },unit);
}

///根据导航栏进行切换
function changePage(init,attr,init_nav,attr_nav) {
    for (var i = 0; i < attr_nav.length; ++i) {
        attr_nav[i].bind('click',(function (i) {
            return function () {
                init_nav.removeClass('about_active');
                attr_nav[i].addClass('about_active');
                init_nav  = attr_nav[i];

                init.css('display','none');
                attr[i].css('display','block');
                init = attr[i];
            };
        })(i));
    }
}