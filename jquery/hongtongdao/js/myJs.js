/**
 * Created by Administrator on 2016/6/2.
 */
$(function () {

    /**图形验证码**/


    ////注册界面部分
    $('.myRegister_pic_input').blur(function () {

        var json = {'register_pic':$('.myRegister_pic_input').val()};
        commonAjax(json,'phpurl',$('.myRegister_pic_warn'));
    });
    $('.myRegister_change_click').click(function () {

        $('.myRegister_pic').attr('src','' + Math.random());
    });

    /////忘记密码界面部分
    $('.myForget_pic_input').blur(function () {
        var json = {'forget_pic':$('.myForget_pic_input').val()};
        commonAjax(json,'phpurl',$('.myForget_pic_warn'));
    });
    $('.myForget_change_click').click(function () {
       $('.myForget_pic').attr('src','' + Math.random());
    });

    /**注册页面JS代码的编写**/

    ///手机号
    var reg_tel_input = $('.myRegister_tel input');
    changeInputText(reg_tel_input,'.myRegister_tel_warn','* 您填写的手机号有误' ,checkPhone ,'* 手机号填写不能为空');

    //邮箱
    var reg_mail_input = $('.myRegister_mail input');
    changeInputText(reg_mail_input ,'.myRegister_mail_warn' ,'* 您填写的邮箱有误',checkMail,'* 邮箱填写不能为空');

    //姓名
    var reg_name_input = $('.myRegister_name input');
    changeInputText(reg_name_input,'.myRegister_name_warn',null,null,'* 姓名填写不能为空');

    //密码
    var reg_secret_input = $('.myRegister_secret input');
    changeInputText(reg_secret_input , '.myRegister_secret_warn' ,'* 您填写的密码有误',checkSecret,'* 密码填写不能为空');

    //密码确认
    var reg_secret_sure = $('.myRegister_secret2 input');
    changeInputText(reg_secret_sure , '.myRegister_name_warn');
    reg_secret_sure.blur(function () {
        if(reg_secret_input.val() != reg_secret_sure.val()) reg_secret_sure.parent().find('.myRegister_secret2_warn').html('* 两次填写密码不一致,请重新填写');
        else reg_secret_sure.parent().find('.myRegister_secret2_warn').html('');
    });
    //验证码获取框
    var reg_mess = $('.myRegister_message_input');
    changeInputText(reg_mess);

    //点击获取验证码
    var timer_code = null;
    var reg_code_btn = $('.myRegister_message_btn');
    reg_code_btn.click(function () {

        btnCountDown(reg_code_btn,60,1000,timer_code,'秒后重新发送');
        transmit_captcha($('.myRegister_tel input'),'');  //aJAX
    });

    ///点击注册按钮
    $('.myRegister_btn').click(function () {

        var sign = true;
        $('.myRegister .warn').each(function () {

            if($(this).html() != '') {
                sign = false;
                return false;
            }
        });

        if(sign === false) return false;

        $(this).css({'background':'lightgray','border':'1px solid lightgray'});
        $(this).attr('disabled',true);
        var myRegister_message_warn = $('.myRegister_message_warn');
        myRegister_message_warn.html('请稍后,正在提交...');

        var json = {'mob':reg_tel_input.val(),'email':reg_mail_input.val(),'name':reg_name_input.val(),
        'passw':reg_secret_input.val(),'repassw':reg_secret_sure.val(),'check':reg_mess.val()};
        commonAjax(json,'',myRegister_message_warn);
        
        $(this).attr('disabled',false);
        $(this).css({'background':'#f64850','border':'1px solid #f64850'});

    });


    /**登录界面的JS**/

    //登录界面账号
    var login_user = $('.myLogin_user input');
    changeInputText(login_user);

    //登录界面密码
    var login_psw = $('.myLogin_secret input');
    changeInputText(login_psw);

    var myLogin_remember = $('#myLogin_remember');
    var login_check = 0;
    if(myLogin_remember.attr('checked') === 'checked') login_check = 1;

    //登录按钮响应
    $('.myLogin_btn').click(function () {
        $(this).css({'background':'lightgray','border':'1px solid lightgray'});
        $(this).attr('disabled',true);
        
        var login_error_warn = $('.login_error_warn');
        login_error_warn.html('正在验证...');
        
        var json = {'user':login_user.val(),'passw':login_psw.val(),'rember':login_check};
        commonAjax(json,'',login_error_warn);

        $(this).attr('disabled',false);
        $(this).css({'background':'#f64850','border':'1px solid #f64850'});
    });

    //登录界面账号检测
    login_user.blur(function () {
        check_exist();
    });



    /**忘记密码界面的JS**/

    //忘记密码手机号
    var forget_user = $('.myForget_user input');
    changeInputText(forget_user);

    //忘记密码验证码
    var forget_code = $('.myForget_message input');
    changeInputText(forget_code);

    //获取验证码按钮
    var timer2 = null;
    var forget_code_btn = $('.myForget_message_btn');
    forget_code_btn.click(function () {
        btnCountDown(forget_code_btn,60,1000,timer2,'s后重新发送');
        transmit_captcha($('.myForget_user input'),''); ///ajax
    });

    //密码输入框确定
    var forget_secret_input = $('.myForget_secret input');
    changeInputText(forget_secret_input , '.myForget_secret_warn' ,'* 您填写的密码有误',checkSecret,'* 密码填写不能为空');

    //密码再次输入确定
    var forget_secret_sure = $('.myForget_secret2 input');
    changeInputText(forget_secret_sure , '.myForget_secret2_warn');
    forget_secret_sure.blur(function () {
        if(forget_secret_input.val() != forget_secret_sure.val()) forget_secret_sure.parent().find('.myForget_secret2_warn').html('* 两次填写密码不一致,请重新填写');
        else forget_secret_sure.parent().find('.myForget_secret2_warn').html('');
    });

    //忘记密码按钮
    $('.myForget_btn').click(function () {

        var json = {};

    });


    /**渠道推广界面JS**/

    ///选中时改变边框颜色
    changeText($('.channel_name input'));
    changeText($('.channel_core_resource input'));
    changeText($('.channel_experience textarea'));
    changeText($('.channel_place input'));


    //复选框的筛选

    //第一组
    var that = $('#channel_person');
    $('#channel_person').click(function () {
        if(that.attr('id') === 'channel_person') return false;
        that.attr('checked',false);
        $(this).attr('checked',true);
        that = $(this);
    });
    $('#channel_company').click(function () {
        if(that.attr('id') === 'channel_company') return false;
        that.attr('checked',false);
        $(this).attr('checked',true);
        that = $(this);
    });
    $('#channel_business').click(function () {
        if(that.attr('id') === 'channel_business') return false;
        that.attr('checked',false);
        $(this).attr('checked',true);
        that = $(this);
    });

    //第二组
    var that2 = $('#channel_team1');
    $('#channel_team1').click(function () {
        if(that2.attr('id') === 'channel_team1') return false;
        that2.attr('checked',false);
        $(this).attr('checked',true);
        that2 = $(this);
    })
    $('#channel_team2').click(function () {
        if(that2.attr('id') === 'channel_team2') return false;
        that2.attr('checked',false);
        $(this).attr('checked',true);
        that2 = $(this);
    })
    $('#channel_team3').click(function () {
        if(that2.attr('id') === 'channel_team3') return false;
        that2.attr('checked',false);
        $(this).attr('checked',true);
        that2 = $(this);
    })


    //第三组
    var that3 = $('#channel_up');
    $('#channel_up').click(function () {
        if(that3.attr('id') === 'channel_up') return false;
        that3.attr('checked',false);
        $(this).attr('checked',true);
        that3 = $(this);
    });
    $('#channel_down').click(function () {
        if(that3.attr('id') === 'channel_down') return false;
        that3.attr('checked',false);
        $(this).attr('checked',true);
        that3 = $(this);
    });
    ///提交按钮响应
    $('.channel_btn').click(function () {
        var warn = $('.channel_warn');
        warn.html('');

        if($('.channel_name input').val() === ''){
            warn.html('* 渠道方的名称不能为空');
            return false;
        }
        else if($('.channel_core_resource input').val() === ''){
            warn.html('* 核心资源不能为空');
            return false;
        }
        else if($('.channel_experience textarea').val() === ''){
            warn.html('* 推广经验输入不能为空');
            return false;          
        }
        else if($('.channel_place input').val() === ''){
            warn.html('* 主营地点输入不能为空');
            return false;
        }

        $(this).css({'background':'lightgray','border':'1px solid lightgray'});
        $(this).attr('disabled',true);

        channel_submit();

        $(this).attr('disabled',false);
        $(this).css({'background':'#f64850','border':'1px solid #f64850'});

    });


    /**企业页面**/

    //点击初创企业或成型企业进行切换
    var that_active = $('.enterprise_title1');
    $('.enterprise_title1').click(function () {
        that_active.removeClass('enterprise_title_active');
        $(this).addClass('enterprise_title_active');
        that_active = $(this);
        $('.mature_enterprise').css('display','none');
        $('.initial_enterprise').css('display','block');
    });
    $('.enterprise_title2').click(function () {
        that_active.removeClass('enterprise_title_active');
        $(this).addClass('enterprise_title_active');
        that_active = $(this);
        $('.mature_enterprise').css('display','block');
        $('.initial_enterprise').css('display','none');
    });

    ////成型企业JS

    //输入框获取焦点时的border改变

    //产品名称输入框
    var enterprise_name = $('.enterprise_name input');
    changeText(enterprise_name);
    //产品链接输入框
    var enterprise_link = $('.enterprise_link input');
    changeText(enterprise_link);
    //推广需求textarea
    var enterprise_experience = $('.enterprise_experience textarea');
    changeText(enterprise_experience);
    //推广地区输入框
    var enterprise_place = $('.enterprise_place input');
    changeText(enterprise_place);
    //推广量级日量
    var enterprise_level_daily = $('#enterprise_level_daily');
    changeText(enterprise_level_daily);
    //推广量级月量
    var enterprise_level_month = $('#enterprise_level_month');
    changeText(enterprise_level_month);
    //预算
    var enterprise_prepay = $('.enterprise_prepay input');
    changeText(enterprise_prepay);
    

    //checkBox单选

    //the first group
    var that_type = $('#enterprise_app');
    $('#enterprise_app').click(function () {
       if(that_type.attr('id') === 'enterprise_app') return false;
        that_type.attr('checked',false);
        $(this).attr('checked',true);
        that_type = $(this);
    });
    $('#enterprise_public').click(function () {

        if(that_type.attr('id') === 'enterprise_public') return false;
        that_type.attr('checked',false);
        $(this).attr('checked',true);
        that_type = $(this);

    });
    $('#enterprise_other').click(function () {
        if(that_type.attr('id') === 'enterprise_other') return false;
        that_type.attr('checked',false);
        $(this).attr('checked',true);
        that_type = $(this);
    });

    //the second group
    var that_person = $('#enterprise_casual');
    $('#enterprise_casual').click(function () {
       if(that_person.attr('id') === 'enterprise_casual') return false;
        that_person.attr('checked',false);
        $(this).attr('checked',true);
        that_person = $(this);
    });

    $('#enterprise_B').click(function () {
        if(that_person.attr('id') === 'enterprise_B') return false;
        that_person.attr('checked',false);
        $(this).attr('checked',true);
        that_person = $(this);
    });
    $('#enterprise_sure').click(function () {
        if(that_person.attr('id') === 'enterprise_sure') return false;
        that_person.attr('checked',false);
        $(this).attr('checked',true);
        that_person = $(this);
    });

    //the click of mature_sure
    $('.mature_sure').click(function () {
        
        ////input框判空
        var warn = $('.mature_warn');
        warn.html('');
        if(enterprise_name.val() === ''){
            warn.html('* 您输入的产品名称不能为空');
            return false;
        }
        else if(enterprise_link.val() === ''){
            warn.html('* 您输入的产品链接不能为空');
            return false;
        }
        else if(enterprise_experience.val() === ''){
            warn.html('* 您输入的产品需求不能为空');
            return false;
        }
        else if(enterprise_place.val() === ''){
            warn.html('* 您输入的产品地点不能为空');
            return false;
        }
        else if(enterprise_level_daily.val() === ''){
            warn.html('* 您输入的产品日量不能为空');
            return false;
        }
        else if(enterprise_level_month.val() === ''){
            warn.html('* 您输入的产品月量不能为空');
            return false;
        }
        else if(enterprise_prepay.val() === ''){
            warn.html('* 您输入的产品预算不能为空');
            return false;
        }

        $(this).css({'background':'lightgray','border':'1px solid lightgray'});
        $(this).attr('disabled',true);
        mature_submit();
        $(this).attr('disabled',false);
        $(this).css({'background':'#f64850','border':'1px solid #f64850'});

    });
    $('.mature_cancle').click(function () {
    });

    ///初创企业的JS

    //框的改变
    //归属地
    var initial_enterprise_place = $('.initial_enterprise_place input');
    changeText(initial_enterprise_place);
    //公司名称
    var initial_enterprise_name = $('.initial_enterprise_name input');
    changeText(initial_enterprise_name);
    //产品介绍
    var enterprise_introduction = $('.enterprise_introduction textarea');
    changeText(enterprise_introduction);

    ///checkbox单选
    var that_modle = $('#enterprise_team1');
    $('#enterprise_team1').click(function () {
       if(that_modle.attr('id') === 'enterprise_team1') return false;
        that_modle.attr('checked',false);
        $(this).attr('checked',true);
        that_modle = $(this);
    });

    $('#enterprise_team2').click(function () {
        if(that_modle.attr('id') === 'enterprise_team2') return false;
        that_modle.attr('checked',false);
        $(this).attr('checked',true);
        that_modle = $(this);
    });
    $('#enterprise_team3').click(function () {
        if(that_modle.attr('id') === 'enterprise_team3') return false;
        that_modle.attr('checked',false);
        $(this).attr('checked',true);
        that_modle = $(this);
    });

    var that_lun = $('#enterprise_seed');
    $('#enterprise_seed').click(function () {
        if(that_lun.attr('id') === 'enterprise_seed') return false;
        that_lun.attr('checked',false);
        $(this).attr('checked',true);
        that_lun = $(this);
    });
    $('#enterprise_angle').click(function () {
        if(that_lun.attr('id') === 'enterprise_angle') return false;
        that_lun.attr('checked',false);
        $(this).attr('checked',true);
        that_lun = $(this);
    });
    $('#enterprise_A').click(function () {
        if(that_lun.attr('id') === 'enterprise_A') return false;
        that_lun.attr('checked',false);
        $(this).attr('checked',true);
        that_lun = $(this);
    });
    $('#enterprise_Aup').click(function () {
        if(that_lun.attr('id') === 'enterprise_Aup') return false;
        that_lun.attr('checked',false);
        $(this).attr('checked',true);
        that_lun = $(this);
    });


    ///初创企业按钮的响应
    $('.initial_sure').click(function () {

        var warn = $('.initial_warn');
        warn.html('');
        if(initial_enterprise_place.val() === ''){
            warn.html('* 您输入的归属地不能为空');
            return false;
        }
        else if(initial_enterprise_name.val() === ''){
            warn.html('* 您输入的企业名称不能为空');
            return false;
        }
        else if(enterprise_introduction.val() === ''){
            warn.html('* 您输入的企业介绍不能为空');
            return false;
        }

        $(this).css({'background':'lightgray','border':'1px solid lightgray'});
        $(this).attr('disabled',true);
        initial_submit();
        $(this).attr('disabled',false);
        $(this).css({'background':'#f64850','border':'1px solid #f64850'});

    });

    $('.initial_cancle').click(function () {

    });

});

function changeInputText(obj , obj_warn , obj_str ,checkFn ,str_null) {
    obj.focus(function () {
        obj.parent().find(obj_warn).html('');
        $(this).css({'border':'1px solid rgb(38,38,38)'});
        $(this).parent().find('i').css('color','rgb(38,38,38)');
    });
    obj.blur(function () {

        $(this).css({'border':'1px solid lightgrey'});
        $(this).parent().find('i').css('color','lightgrey');

    });
    obj.change(function () {

        if(obj.val() == '') {obj.parent().find(obj_warn).html(str_null); return false;}
        if(checkFn(obj) === false){ obj.parent().find(obj_warn).html(obj_str); return false;}
        else obj.parent().find(obj_warn).html('');
        return true;

    });

}


function btnCountDown(obj , count , unit,timer ,str) {

    clearInterval(timer);
    obj.attr({'value':count + str,'disabled':true});
    obj.css({'background':'gray','border':'1px solid gray'});
    timer = setInterval(function () {
        count--;
        obj.attr({'value':count + str});
        if(count === 0){
            obj.css({'background':'#f64850','border':'1px solid #f64850'});
            obj.attr({'value':'获取验证码','disabled':false});
            clearInterval(timer);
        }
    },unit);

}


function checkPhone(obj){
    var str = obj.val();
    return /^(13\d{9}$)|(15[012356789]{1}\d{8}$)|(18\d{9}$)|(17[0678]{1}\d{8}$)/.test(str);
}
function checkMail(obj) {
    var str = obj.val();
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}
function checkSecret(obj) {
    var str = obj.val();
    if(str.length < 6 || str.length > 20) return false;
    return true;
}

////当text框获取到焦点的时候改变边框的颜色
function changeText(obj) {

    obj.focus(function () {
        $(this).css({'border':'1px solid rgb(38,38,38)'});
    });

    obj.blur(function () {
        $(this).css({'border':'1px solid lightgrey'});
    });

}
//判断表单的内容是否为空
function judgeEmpty(obj) {
    if(obj.html() === '') return false;
    else return true;
}

///Ajax封装函数

function getXmlHttp() {
    var xmlHttp;
    if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest){
        xmlHttp  = new XMLHttpRequest();
    }
    return xmlHttp;
}


function check_exist() {
    var warn = $('.myLogin_user_warn').html('正在验证用户名...');
    var user = $('.myLogin_user input').val();
    var xmlHttp = getXmlHttp();
    xmlHttp.onreadystatechange = function () {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var res = xmlHttp.responseText;
            warn.html(res);
        }
    };
    var url = "?";
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}

///渠道推广的Ajax传值
function channel_submit() {

    var  channel_name = $('.channel_name input').val();

    //获取类型的checkbox
    var  channel_type = '';
    $('.channel_type input').each(function () {
        if($(this).attr('checked') === 'checked') {
            channel_type = $('label[for=' + $(this).attr('id') + ']').html();
            return false;
        }
    });

    //获取团队规模的checkbox
    var channel_team = '';
    $('.channel_team input').each(function () {

       if($(this).attr('checked') === 'checked'){
           channel_team = $('label[for=' + $(this).attr('id') + ']').html();
           return false;
       }
    });

    //获取推广资源的checkbox
    var channel_resource = '';
    $('.channel_resource input').each(function () {

        if($(this).attr('checked') === 'checked'){
            channel_resource = $('label[for=' + $(this).attr('id') + ']').html();
            return false;
        }
    });
    
    var channel_core_resource = $('.channel_core_resource input').val();
    var channel_experience = $('.channel_experience textarea').val();
    var channel_place = $('.channel_place input').val();

    /*alert(channel_name);
    alert(channel_type);
    alert(channel_team);
    alert(channel_resource);
    alert(channel_core_resource);
    alert(channel_experience);
    alert(channel_place);*/

    var xmlHttp = getXmlHttp();
    var warn = $('.channel_warn');
    warn.html('正在提交表单,请稍后...');
    xmlHttp.open('POST','channel.html',true);   //将channel.html改为php地址
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                var res = xmlHttp.responseText;
                warn.html(res);
            }
        };
    
    var data = 'chname=' + channel_name + '&chtype=' + channel_type + '&chsize=' + channel_team + '&chfun=' + channel_resource
    + '&coresour=' + channel_core_resource + '&proexper=' + channel_experience + '&mainadd=' + channel_place;
    xmlHttp.send(data);

}

//成型企业ajax

function mature_submit() {

    var  enterprise_name = $('.enterprise_name input').val();
    var  enterprise_link = $('.enterprise_link input').val();

    //获取类型的checkbox

    var enterprise_type = '';
    var enterprise_person = '';
    var sign = false;
    $('.enterprise_type input').each(function () {
        if($(this).attr('checked') === 'checked') {
            if(sign === false) {
                enterprise_type = $('label[for=' + $(this).attr('id') + ']').html();
                sign = true;
            }
            else {
                enterprise_person = $('label[for=' + $(this).attr('id') + ']').html();
                return false;
            }
        }
    });

    var enterprise_experience = $('.enterprise_experience textarea').val();
    var enterprise_place = $('.enterprise_place input').val();
    var enterprise_level_daily = $('#enterprise_level_daily').val();
    var enterprise_level_month = $('#enterprise_level_month').val();
    var enterprise_prepay = $('.enterprise_prepay input').val();

    /*alert(enterprise_name);
     alert(enterprise_link);
     alert(enterprise_type);
     alert(enterprise_person);
     alert(enterprise_experience);
     alert(enterprise_place);
     alert(enterprise_level_daily);
     alert(enterprise_level_month);
     alert(enterprise_prepay);*/

    var xmlHttp = getXmlHttp();
    var warn = $('.mature_warn');
    warn.html('正在提交表单,请稍后...');
    xmlHttp.open('POST','channel.html',true);   //将channel.html改为php地址
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                var res = xmlHttp.responseText;
                warn.html(res);
            }
        };

    var data = 'proname=' + enterprise_name + '&prolink=' + enterprise_link + '&protype=' + enterprise_type + '&procrowd=' + enterprise_person
        + '&proneed=' + enterprise_experience + '&proarea=' + enterprise_place + '&prorder_day=' + enterprise_level_daily + '&prorder_mon='+
        enterprise_level_month + '&budget=' + enterprise_prepay;
    xmlHttp.send(data);

}

///初创企业的AJAX
function initial_submit() {

    var  initial_enterprise_place = $('.initial_enterprise_place input').val();
    var  initial_enterprise_name = $('.initial_enterprise_name input').val();

    //获取类型的checkbox

    var initial_enterprise_type = '';
    var initial_enterprise_lun = '';

    $('.initial_enterprise_type input').each(function () {
        if($(this).attr('checked') === 'checked') {
            initial_enterprise_type = $('label[for=' + $(this).attr('id') + ']').html();
        }
    });
    $('.initial_enterprise_lun input').each(function () {

        if($(this).attr('checked') === 'checked') {
            initial_enterprise_lun = $('label[for=' + $(this).attr('id') + ']').html();
        }
    });


    var enterprise_introduction = $('.enterprise_introduction textarea').val();
    var show_path = $('.show_path').val();

    /* alert(initial_enterprise_name);
     alert(initial_enterprise_place);
     alert(initial_enterprise_type);
     alert(initial_enterprise_lun);
     alert(enterprise_introduction);
     alert(show_path);
     */

    var xmlHttp = getXmlHttp();
    var warn = $('.initial_warn');
    warn.html('正在提交表单,请稍后...');
    xmlHttp.open('POST','channel.html',true);   //将channel.html改为php地址
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                var res = xmlHttp.responseText;
                warn.html(res);
            }
        };

    var data = 'straddress=' + initial_enterprise_place + '&strname=' + initial_enterprise_name + '&strleval=' + initial_enterprise_type + '&stround=' + initial_enterprise_lun
        + '&prointro=' + enterprise_introduction;
    xmlHttp.send(data);

}


///验证码发送ajax

function transmit_captcha(obj,phpurl) {
    var mobile = obj.val();
    var xmlHttp = getXmlHttp();

    xmlHttp.onreadystatechange = function () {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var res = xmlHttp.responseText;  ///返回的字符串

        }
    };
    var url = phpurl + "?mob=" + mobile + "&send_code=123";
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}

///登录ajax、注册ajax、忘记密码ajax
function commonAjax(json,phpurl,obj) {
    var str = "";

    for(var key in json){
        str += key + '=' + json[key] + '&';
    }

    var xmlHttp = getXmlHttp();
    var ans = "";

    xmlHttp.onreadystatechange = function () {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            ans = xmlHttp.responseText;
            obj.html(ans);
        }
    };

    var url = phpurl + "?" + str;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);

    return ans;
}