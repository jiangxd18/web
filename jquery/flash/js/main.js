/**
 * Created by Administrator on 2016/5/18.
 */


$(function () {

    /*根据可视区大小的变化而改变大小*/
    //var scrollHeight = document.documentElement.offsetHeight > document.documentElement.clientHeight ? document.documentElement.offsetHeight + 50:
      //  document.documentElement.clientHeight - 250;
    var height = $(document).height() - 230;
    var scrollWidth = document.documentElement.scrollWidth;
    $('#footer').css({'width':scrollWidth + 'px'});
    $('.web-nav').css('width',scrollWidth + 'px');

    /*蒙版的大小变化*/
    var filterHeight = $(document).height();
    var filterWidth = $(document).width();
    $('.filter').css({'height':filterHeight + 'px','width':filterWidth + 'px'});

    /*注册界面*/
    $('.choose-phone input').focus(function () {
        $(this).attr({'placeholder':''});
        $(this).css({'border':'1px solid black'});
    }).blur(function () {
        $(this).attr({'placeholder':'用于注册的手机号'});
        $(this).css({'border':'1px solid gray'});
    });

    $('.choose-secret input').focus(function () {
        $(this).attr({'placeholder':''});
        $(this).css({'border':'1px solid black'});
    }).blur(function () {
        $(this).attr({'placeholder':'密码,6到20位英文及数字组成'});
        $(this).css({'border':'1px solid gray'});
    });

    $('.choose-secret2 input').focus(function () {
        $(this).attr({'placeholder':''});
        $(this).css({'border':'1px solid black'});
    }).blur(function () {
        $(this).attr({'placeholder':'再次输入密码'});
        $(this).css({'border':'1px solid gray'});
    });

    $('.choose-vertify input').focus(function () {
        $(this).attr({'placeholder':''});
        $(this).css({'border':'1px solid black'});
    }).blur(function () {
        $(this).attr({'placeholder':'收到的短信验证码'});
        $(this).css({'border':'1px solid gray'});
    });

    /**表单验证**/

    ///登录界面的表单验证
    $('#login .login_btn').click(function () {
        var loginStr = $('#login .choose-phone input').val();
        var registerStr = $('#login .choose-secret input').val();


        var ans = checkPhone(loginStr);

        if(ans == false || loginStr.length != 11) {
            $('#login .warn').html('*  您填写的手机号有误,请重新填写');
            $('#login .choose-phone input').val('');
            return false;
        }

        var sign2 = false;
        for(var j = 0 ; j < registerStr.length ;++j){
            if( (registerStr.charAt(j) < '0' || registerStr.charAt(j) > '9') && (registerStr.charAt(j) < 'a' ||
                registerStr.charAt(j) > 'z') && ( registerStr.charAt(j) < 'A' || registerStr.charAt(j) > 'Z') ){
                sign2 = true;
                break;
            }
        }

        if(registerStr.length < 6 || registerStr.length > 20 || sign2 == true){
            $('#login .warn').html('*  您填写的密码有误,请重新填写');
            $('#login .choose-secret input').val('');
            return false;
        }

        $('#login .warn').html('');
    }).hover(function () {
        $(this).css({'color':'white','background':'#ed4c3a'});
    },function () {
        $(this).css({'color':'#ed4c3a','background':'white'});
    });
    /////注册界面的表单验证
    $('#register #btn').click(function () {

        //手机号
        var loginStr = $('#register .choose-phone input').val();
        var sign = checkPhone(loginStr);

        if(sign == false || loginStr.length != 11) {
            $('#register .warn').html('*  您填写的手机号有误,请重新填写');
            $('#register .choose-phone input').val('');
            return false;
        }
        //密码
        var registerStr = $('#register .choose-secret input').val();
        var sign2 = false;
        for(var j = 0 ; j < registerStr.length ;++j){
            if( (registerStr.charAt(j) < '0' || registerStr.charAt(j) > '9') && (registerStr.charAt(j) < 'a' ||
                registerStr.charAt(j) > 'z') && ( registerStr.charAt(j) < 'A' || registerStr.charAt(j) > 'Z') ){
                sign2 = true;
                break;
            }
        }

        if(registerStr.length < 6 || registerStr.length > 20 || sign2 == true){
            $('#register .warn').html('*  您填写的密码有误,请重新填写');
            $('#register .choose-secret input').val('');
            return false;
        }

        //确认密码
        var registerStr2 = $('#register .choose-secret2 input').val();
        if(registerStr2 != registerStr) {
            $('#register .warn').html('*  两次输入密码不一致');
            $('#register .choose-secret2 input').val('');
            return false;
        }


        //////验证通过
        $('#register .warn').html('');
    });

    /////忘记密码界面的表单验证
    $('.forget_sure').click(function () {

        //手机号
        var loginStr = $('#forget .choose-phone input').val();
        var sign = checkPhone(loginStr);
        if(sign == false || loginStr.length != 11) {
            $('#forget .warn').html('*  您填写的手机号有误,请重新填写');
            $('#forget .choose-phone input').val('');
            return false;
        }
        //密码
        var registerStr = $('#forget .choose-secret input').val();
        var sign2 = false;
        for(var j = 0 ; j < registerStr.length ;++j){
            if( (registerStr.charAt(j) < '0' || registerStr.charAt(j) > '9') && (registerStr.charAt(j) < 'a' ||
                registerStr.charAt(j) > 'z') && ( registerStr.charAt(j) < 'A' || registerStr.charAt(j) > 'Z') ){
                sign2 = true;
                break;
            }
        }

        if(registerStr.length < 6 || registerStr.length > 20 || sign2 == true){
            $('#forget .warn').html('*  您填写的密码有误,请重新填写');
            $('#forget .choose-secret input').val('');
            return false;
        }

        //确认密码
        var registerStr2 = $('#forget .choose-secret2 input').val();
        if(registerStr2 != registerStr) {
            $('#forget .warn').html('*  两次输入密码不一致');
            $('#forget .choose-secret2 input').val('');
            return false;
        }


        //////验证通过
        $('#forget .warn').html('');
    }).hover(function () {
        $(this).css({'color':'white','background':'#ed4c3a'});
    },
    function () {
        $(this).css({'color':'#ed4c3a','background':'white'});
    });


    /*注册界面JS实现手机号注册时候*/
    var timer = null;
    $('#register .transfer').hover(function () {
        $(this).css('cursor','pointer');
    },function () {
        $(this).css('cursor','normal');
    }).click(function () {
        var count = 60;
        clearInterval(timer);
        $(this).attr('disabled',true);
        $(this).attr('value','60 (s)');
        $(this).css({'background':'white','color':'#ed4c3a','border':'1px solid #ed4c3a'});
        timer = setInterval(function () {
            count --;
            $('#register .transfer').attr('value',count+' (s)');
            if(count == 0){
                $('#register .transfer').attr({'value':'立即发送','disabled':false}).css({'background':'#ed4c3a','color':'white'});
                count = 60;
                clearInterval(timer);
            }
        },1000);
    });

    //////忘记密码界面
    $('#forget .choose-phone input').focus(function () {
        $(this).attr({'placeholder':''});
        $(this).css({'border':'1px solid black'});
    }).blur(function () {
        $(this).attr({'placeholder':'用于注册的手机号'});
        $(this).css({'border':'1px solid gray'});
    });

    $('#forget .choose-secret input').focus(function () {
        $(this).attr({'placeholder':''});
        $(this).css({'border':'1px solid black'});
    }).blur(function () {
        $(this).attr({'placeholder':'新密码,6到20位英文及数字组成'});
        $(this).css({'border':'1px solid gray'});
    });

    $('.choose-secret2 input').focus(function () {
        $(this).attr({'placeholder':''});
        $(this).css({'border':'1px solid black'});
    }).blur(function () {
        $(this).attr({'placeholder':'再次输入新密码'});
        $(this).css({'border':'1px solid gray'});
    });

    $('.choose-vertify input').focus(function () {
        $(this).attr({'placeholder':''});
        $(this).css({'border':'1px solid black'});
    }).blur(function () {
        $(this).attr({'placeholder':'收到的短信验证码'});
        $(this).css({'border':'1px solid gray'});
    });

    ////忘记密码界面的JS
    var timer2 = null;
    $('#forget .transfer').hover(function () {
        $(this).css('cursor','pointer');
    },function () {
        $(this).css('cursor','normal');
    }).click(function () {
        var count = 60;
        clearInterval(timer2);
        $(this).attr('disabled',true);
        $(this).attr('value','60 (s)');
        $(this).css({'background':'white','color':'#ed4c3a','border':'1px solid #ed4c3a'});
        timer2 = setInterval(function () {
            count --;
            $('#forget .transfer').attr('value',count+' (s)');
            if(count == 0){
                $('#forget .transfer').attr({'value':'立即发送','disabled':false}).css({'background':'#ed4c3a','color':'white'});
                clearInterval(timer2);
            }
        },1000);
    });



    //////导航栏hover的JS
    $('.navMenu .option').each(function () {
        $(this).hover(function () {
            $(this).css('background','#525252');
            $(this).find('.content').css('color','white');
            $(this).find('ul').slideDown('100ms');
        },function () {
            $(this).find('ul').slideUp('100ms');
            $(this).css('background','white');
            $(this).find('.content').css('color','#737373');
        });
    });

    //行业动态页面的每则新闻的字数限制
    
    //闪电简介页面最上边导航栏选择的JS
    var that = $('.brief_introduction_content ul:first-child');
    var page = 1;
    $('.brief_introduction_content ul li').each(function () {

         $(this).hover(function () {
             that.find('a').removeClass('active11');
             $(this).find('a').addClass('active11');
             that = $(this);
             var str = 'brief_introduction_content_show' + ($(this).index() + 1);
             $('.brief_introduction_content_show' + page).css('display','none');
             $('.' + str).css('display','block');
             page = $(this).index() + 1;
         },function () {

         });
    });
    /**政策界面导航栏选择JS问题***/
    var policy_that = $('.policy_content .policy_content_ul:first-child');
    $('.policy_content .policy_content_ul li').each(function () {

        $(this).hover(function () {
            policy_that.find('a').removeClass('active2');
            $(this).find('a').addClass('active2');
            policy_that = $(this);
            if($(this).index() == 0){
                $('.total').css('display','block');
                $('.policy_china').css('display','none');
                $('.policy_border').css('display','none');
                $('.policy_america').css('display','none');
            }
            else if($(this).index() == 1){
                $('.total').css('display','none');
                $('.policy_china').css('display','block');
                $('.policy_border').css('display','none');
                $('.policy_america').css('display','none');
            }
            else if($(this).index() == 2){
                $('.total').css('display','none');
                $('.policy_china').css('display','none');
                $('.policy_border').css('display','block');
                $('.policy_america').css('display','none');
            }
            else if($(this).index() == 3){
                $('.total').css('display','none');
                $('.policy_china').css('display','none');
                $('.policy_border').css('display','none');
                $('.policy_america').css('display','block');
            }

        },function () {

        });
    });

    //////电商学堂导航栏选择问题
    var flash_class_that = $('.flash_class_content .flash_class_ul:first-child');
    $('.flash_class_content .flash_class_ul li').each(function () {

        $(this).hover(function () {
           flash_class_that.find('a').removeClass('active3');
            $(this).find('a').addClass('active3');
            flash_class_that = $(this);
            if($(this).index() == 0){
                $('.flash_class_total').css('display','block');
                $('.flash_class_commerce').css('display','none');
                $('.flash_class_operation').css('display','none');
                $('.flash_class_download').css('display','none');
                $('.flash_class_question').css('display','none');
            }
            else if($(this).index() == 1){
                $('.flash_class_total').css('display','none');
                $('.flash_class_commerce').css('display','block');
                $('.flash_class_operation').css('display','none');
                $('.flash_class_download').css('display','none');
                $('.flash_class_question').css('display','none');
            }
            else if($(this).index() == 2){
                $('.flash_class_total').css('display','none');
                $('.flash_class_commerce').css('display','none');
                $('.flash_class_operation').css('display','block');
                $('.flash_class_download').css('display','none');
                $('.flash_class_question').css('display','none');
            }
            else if($(this).index() == 3){
                $('.flash_class_total').css('display','none');
                $('.flash_class_commerce').css('display','none');
                $('.flash_class_operation').css('display','none');
                $('.flash_class_download').css('display','block');
                $('.flash_class_question').css('display','none');
            }
            else if($(this).index() == 4){
                $('.flash_class_total').css('display','none');
                $('.flash_class_commerce').css('display','none');
                $('.flash_class_operation').css('display','none');
                $('.flash_class_download').css('display','none');
                $('.flash_class_question').css('display','block');
            }

        },function () {

        });

    });


    //////蒙版层显示与隐藏
    $('.filter').click(function () {


        if($('#register .transfer').attr('disabled') === 'disabled' || $('#forget .transfer').attr('disabled') === 'disabled') return false;

        $('#login').css('display','none');
        $(this).css('display','none');
        $('#register').css('display','none');
        $('#forget').css('display','none');
    });
    $('.click_login').click(function () {
        $('.filter').css('display','block');
        $('#login').css('display','block');
    });
    $('.click_register').click(function () {
        $('.filter').css('display','block');
        $('#register').css('display','block');
    });
    $('.click_forget').click(function () {
        $('.filter').css('display','block');
        $('#forget').css('display','block');

    });


    //注册接口
    $('#btn').click(function(){
        $.ajax({
            type: "POST",
            url:"",
            data:{'user_mobile':$('#user_mobile').val(),
            'user_password':$('#user_password').val(),
            'user_repassword':$('#user_repassword').val(),
            'vertify_code':$('#vertify_code').val()
            }
            success:function(data){

            }
        });
    });

});

function checkPhone(str){

    if(!(/^1[3|4|5|7|8]\d{9}$/.test(str))){
        return false;
    }
    return true;
}
function checkIdcard(str){
    if(!(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(idcard)) || !(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/.test(str))){
        return false;
    }
    return true;
}
function checkMail(str){
    var reg=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
    if(!reg.test(str)){
        return false;
    }
    return true;
}
function pwagain(str1,str2){
    if(str1 != str2){
        return false;
    }
    return true;
}
