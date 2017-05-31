function tabChange(param){
    var pDiv = document.getElementsByClassName('content-tag-p');
    for(var i=0;i < pDiv.length;i++){
        if( i == param){
            pDiv[i].style.background = "#292929";
        }
        else{
            pDiv[i].style.background = "none";
        }
        
    }
    if(param == 3){
        $('.tag-form-content').css('display','none');
        $('.tag-form-content2').css('display','block');
    }
    else{
        $('.tag-form-content').css('display','block');
        $('.tag-form-content2').css('display','none');
    }
}
function tagChange(param){
    var itag = document.getElementsByClassName('info-tag');
    var idiv = document.getElementsByClassName('info-tag-div');
    for(var i=0;i < itag.length;i++){
        if( i == param){
            itag[i].style.background = "#737373";
            itag[i].style.color = "#fff";
            idiv[i].style.display = "block";
        }
        else{
            itag[i].style.color = "#737373";
            itag[i].style.background = "#fff";
            idiv[i].style.display = "none";
        }
        
    } 
}
function tagChange2(param){
    var itag = document.getElementsByClassName('info-fbatag');
    var idiv = document.getElementsByClassName('info-tag-div');
    for(var i=0;i < itag.length;i++){
        if( i == param){
            itag[i].style.background = "#737373";
            itag[i].style.color = "#fff";
            idiv[i].style.display = "block";
        }
        else{
            itag[i].style.background = "#fff";
            itag[i].style.color = "#737373";
            idiv[i].style.display = "none";
        }
        
    } 
}
function TagChange(param){
    var itag = document.getElementsByClassName('info-tag2');
    var idiv = document.getElementsByClassName('info-tag-div');
    for(var i=0;i < itag.length;i++){
        if( i == param){
            itag[i].style.background = "#737373";
            itag[i].style.color = "#fff";
            idiv[i].style.display = "block";
        }
        else{
            itag[i].style.background = "#fff";
            itag[i].style.color = "#737373";
            idiv[i].style.display = "none";
        }
        
    } 
}

function getstyle(obj,name){
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
        
    }

}

/** 定制table 功能按钮**/
function tableRow_checked(who){
    if($(who).attr('data')==undefined){
        $(who).css('background','#FECC37');
        $(who).attr('data','1');
    }
    else{
        $(who).css('background','#fff');
        $(who).removeAttr('data','1');
    }
    
}
/**首页表单提交
function sumbit_enquiry(){
    /**
    $.ajax({
        type: "POST",
        url: "",
        data: {username:$("#username").val(), content:$("#content").val()},
        dataType: "json",
        success: function(data){}
            
    });
}**/


$(function(){
    // logo 链接首页
    $('.nav-title img').click(function(){
        document.location='index.html';
    });
    //个人中心
    var menutimer = null;
    $('#person-menu').mouseover(function(){
        clearInterval(menutimer);
        var theheight = parseFloat($('#person-menu').css('height'));
        $('#person-menu ul li').css('color','#fff');
        $('#person-menu').css('background','#525252');
        $('.personal_pull').attr('src','css/images/btn-pull-h.png');
        if(theheight < 320){
            menutimer = setInterval(function(){
                var thecurheight = parseFloat($('#person-menu').css('height'));
                var speed = (320-thecurheight)/6;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if(thecurheight == 320){
                    clearInterval(menutimer);
                }
                else{
                    $('#person-menu').css('height',thecurheight + speed + 'px');
                }
            },30);
        }
    });
    $('#person-menu').mouseout(function(){
        clearInterval(menutimer);
        menutimer = setInterval(function(){
            var thecurheight = parseFloat($('#person-menu').css('height'));
            var speed = (thecurheight-80)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(thecurheight == 80){
                clearInterval(menutimer);
                $('#person-menu ul li').css('color','rgb(116,115,115)');
                $('#person-menu').css('background','#fff');
                $('.personal_pull').attr('src','css/images/btn-pull-n.png');
            }
            else{
                $('#person-menu').css('height',thecurheight - speed + 'px');
            }
        },30);
        
    });
    //创建新地址
    $('#createNewaddress').click(function(){
        if($('#adress-managediv').length != 0){
            return false;
        }
        else{
            if($('.adress-manage').length == 0){
                $('.adress-managediv').before('<div class="adress-manage" id="adress-managediv"><div class="control-group"><label>公司名:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width24"><input type="button" class="input-width4 adress-managealter" value="修改 " style="display:none;"><input type="button" class="input-width4 adress-managesave" value="保存 "><input type="button" class="input-width4 adress-managedele" value="删除"></div><div class="control-group"><label>地&nbsp;&nbsp;&nbsp;址:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width30"></div><div class="control-group"><label>国家/地区:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width30"></div><div class="control-group"><label>州/省:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width10"></div><div class="control-group"><label>城市:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width10"></div><div class="control-group"><label>电&nbsp;&nbsp;&nbsp;话:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width30"></div><div class="control-group"><label>邮&nbsp;&nbsp;&nbsp;箱:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width30"></div></div>');
            }
            else{
                $('.adress-manage:first').before('<div class="adress-manage" id="adress-managediv"><div class="control-group"><label>公司名:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width24"><input type="button" class="input-width4 adress-managealter" value="修改 " style="display:none;"><input type="button" class="input-width4 adress-managesave" value="保存 "><input type="button" class="input-width4 adress-managedele" value="删除"></div><div class="control-group"><label>地&nbsp;&nbsp;&nbsp;址:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width30"></div><div class="control-group"><label>国家/地区:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width30"></div><div class="control-group"><label>州/省:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width10"></div><div class="control-group"><label>城市:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width10"></div><div class="control-group"><label>电&nbsp;&nbsp;&nbsp;话:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width30"></div><div class="control-group"><label>邮&nbsp;&nbsp;&nbsp;箱:<i>*</i>&nbsp;&nbsp;</label><input type="text" class="input-width30"></div></div>');
            }
        }
      
    })
    //地址信息修改
    $(document).on("click",".adress-managealter", function() {
        var theparent = $(this).closest('.adress-manage');
        $(theparent).find('span').each(function(){
            $(this).after('<input type="text" class="input-width24" value="'+$(this).html()+'" >');
            $(this).remove();
        });
        $(this).css('display','none');
        $(this).next().css('display','inline-block');
    });
    //地址信息保存
    $(document).on("click",".adress-managesave",function(){
        var theparent = $(this).closest('.adress-manage');
        $(theparent).attr('id','');
        $(theparent).find('input[type=text]').each(function(){
            $(this).after('<span>'+$(this).val()+'</span>');
            $(this).remove();
        });
        $(this).css('display','none');
        $(this).prev().css('display','inline-block');
    });
    //地址信息删除
    $(document).on("click",".adress-managedele",function(){
        $(this).closest('.adress-manage').remove();
    });
    /**
    //地址信息修改
    $('.adressalter').click(function(){
        var theparent = $(this).parent().parent();
        $(theparent).find('span').each(function(){
            $(this).after('<input type="text" class="input-span input-width6" value="'+$(this).html()+'" >');
            $(this).remove();
        });
        $(this).css('display','none');
        $(this).next().css('display','block');
    });**/
    //收货人开关按钮
    $('#roundswitchnormal-gain').click(function () {
        var data = $(this).prev().attr('data');
        if (data == 1)
        {
            $(this).prev().attr('data', 0).attr('title','已关闭');
            $(this).css('background', '#fff');
            $(this).parent().next().css('display','block');
            $(this).css('left', '50px').html('已关闭');
        }
        else {
            $(this).prev().attr('data', 1).attr('title', '已开启');
            $(this).parent().next().css('display','none');
            $(this).css('background', '#F6A197');
            $(this).css('left', '0px').html('已开启');
        }
    });
    //通知人开关按钮
    $('#roundswitchnormal-mes').click(function () {
        var data = $(this).prev().attr('data');
        if (data == 1)
        {
            $(this).prev().attr('data', 0).attr('title','已关闭');
            $(this).css('background', '#fff');
            $(this).parent().next().css('display','block');
            $(this).parent().next().next().css('display','none');
            $(this).parent().next().next().next().css('display','none');
            $(this).css('left', '50px').html('已关闭');
        }
        else {
            $(this).prev().attr('data', 1).attr('title', '已开启');
            $(this).parent().next().css('display','none');
            $(this).parent().next().next().css('display','block');
            $(this).parent().next().next().next().css('display','block');
            $(this).css('background', '#F6A197');
            $(this).css('left', '0px').html('已开启');
        }
    })
    //定制文件上传样式
    $('#idCardz,#businessL,#idCardf,#mtimg').change(function (){
        var path = $(this).val();
        var theinfo = $(this).parent().next();
        $(theinfo).html(path);
        var thebtn = $(this).parent().parent().find("button");
        $(thebtn).html('上传');
        $(thebtn).css('background','#F17669');
        $(thebtn).attr('data','1');
    });
    //文件上传按钮点击
    $('.file_up').click(function (){
        var data = $(this).attr('data')
        if(data == 1){
            $(this).css('background','#373535');
            $(this).html('上传成功');
            $(this).attr('data','0');
        }
        else{

        }
        
    });
    /** 添加货物**/ 
    $(document).on('click','.addgoods',function(){
        var thenumber = $('.addgoods-div').length + 1;
        $($(this).parent().parent()).after('<div class="control-group addgoods-div" index=""><label class="info-control-label minifloat-left">货物<span class="goodsnumber">'+thenumber+'</span><a class="deleaddgoods" style="cursor:pointer;color:red;">&nbsp;&nbsp;×</a></label><div class="controls"><input class="input-span input-width20" type="text" placeholder="中文描述"><input class="input-span input-width192" type="text" placeholder="英文描述"><input class="input-span input-width15" type="text" placeholder="产品型号"><input class="input-span input-width6" type="text" placeholder="箱数"></div><div class="controls"><input class="input-span input-width135 addborderright" type="text" placeholder="货物毛重" style="margin-right:0px;"><select class="input-span input-width6"><option>KGS</option></select><input class="input-span input-width128 addborderright" type="text" placeholder="货物体积" style="margin-right:0px;"><select class="input-span input-width6"><option>CBM</option></select><input class="input-span input-width15" type="text" placeholder="报关单价(¥)"><input class="input-span input-width6" type="text" placeholder="PCS数"><input class="input-span input-width10" type="text" placeholder="报关总价(¥)"></div> <div class="controls"><div class="addgoods"><h4><a>+添加货物</a></h4></div></div><div class="float-clear"></div></div>');
        $($(this).parent()).css('display','none');
        $('.addgoods-goods:last').after('<div class="control-group add-uppadding addgoods-goods"><label class="info-control-label minifloat-left">货物<span class="goodsnumber-goods">'+thenumber+'</span></label><div class="controls"><input class="input-span input-width20" type="text" placeholder="英文描述" title="英文描述"><input class="input-span input-width192" type="text" placeholder="目的地国海关编码"><input class="input-span input-width15" type="text" placeholder="官税率(%)"></div></div>');
        
    });
    $(document).on('click','.addgoods1',function(){
        var thenumber = $('.addgoods-div1').length + 1;
        $($(this).parent().parent()).after('<div class="control-group addgoods-div1"><label class="info-control-label minifloat-left">货物<span class="goodsnumber1">'+thenumber+'</span><a class="deleaddgoods1" style="cursor:pointer;color:red;">&nbsp;&nbsp;×</a></label><div class="controls"><input class="input-span input-width20" type="text" placeholder="中文描述"><input class="input-span input-width192" type="text" placeholder="英文描述"><input class="input-span input-width15" type="text" placeholder="产品型号"><input class="input-span input-width6" type="text" placeholder="箱数"></div><div class="controls"><input class="input-span input-width135 addborderright" type="text" placeholder="货物毛重" style="margin-right:0px;"><select class="input-span input-width6"><option>KGS</option></select><input class="input-span input-width128 addborderright" type="text" placeholder="货物体积" style="margin-right:0px;"><select class="input-span input-width6"><option>CBM</option></select><input class="input-span input-width15" type="text" placeholder="报关单价(¥)"><input class="input-span input-width6" type="text" placeholder="PCS数"><input class="input-span input-width10" type="text" placeholder="报关总价(¥)"></div><div class="controls"><div class="addgoods1"><h4><a>+添加货物</a></h4></div></div><div class="float-clear"></div></div>');
        $($(this).parent()).css('display','none');
        $('.addgoods-goods1:last').after('<div class="control-group add-uppadding addgoods-goods1"><label class="info-control-label minifloat-left">货物<span class="goodsnumber-goods1">'+thenumber+'</span></label><div class="controls"><input class="input-span input-width20" type="text" placeholder="英文描述" title="英文描述"><input class="input-span input-width192" type="text" placeholder="目的地国海关编码"><input class="input-span input-width15" type="text" placeholder="官税率(%)"></div></div>');
 
    });
    $(document).on('click','.addgoods2',function(){
        var thenumber = $('.addgoods-div2').length + 1;
        $($(this).parent().parent()).after('<div class="control-group addgoods-div2"><label class="info-control-label minifloat-left">货物<span class="goodsnumber2">'+thenumber+'</span><a class="deleaddgoods2" style="cursor:pointer;color:red;">&nbsp;&nbsp;×</a></label><div class="controls"><input class="input-span input-width20" type="text" placeholder="中文描述"><input class="input-span input-width192" type="text" placeholder="英文描述"><input class="input-span input-width15" type="text" placeholder="产品型号"><input class="input-span input-width6" type="text" placeholder="箱数"></div><div class="controls"><input class="input-span input-width135 addborderright" type="text" placeholder="货物毛重" style="margin-right:0px;"><select class="input-span input-width6"><option>KGS</option></select><input class="input-span input-width128 addborderright" type="text" placeholder="货物体积" style="margin-right:0px;"><select class="input-span input-width6"><option>CBM</option></select><input class="input-span input-width15" type="text" placeholder="报关单价(¥)"><input class="input-span input-width6" type="text" placeholder="PCS数"><input class="input-span input-width10" type="text" placeholder="报关总价(¥)"></div><div class="controls"><div class="addgoods2"><h4><a>+添加货物</a></h4></div></div><div class="float-clear"></div></div>');
        $($(this).parent()).css('display','none');
        $('.addgoods-goods2:last').after('<div class="control-group add-uppadding addgoods-goods2"><label class="info-control-label minifloat-left">货物<span class="goodsnumber-goods2">'+thenumber+'</span></label><div class="controls"><input class="input-span input-width20" type="text" placeholder="英文描述" title="英文描述"><input class="input-span input-width192" type="text" placeholder="目的地国海关编码"><input class="input-span input-width15" type="text" placeholder="官税率(%)"></div></div>');
 
    });
    /** 添加货物2**/ 
    $(document).on('click','.addexpressGoods',function(){
        var thenumber = $('.goodsnumber3').length + 1;
        $($(this).parent().prev()).after('<div class="control-group addgoods-div3"><label class="info-control-label minifloat-left">货物<span class="goodsnumber3">'+thenumber+'</span><a class="deleaddgoods3" style="cursor:pointer;color:red;">&nbsp;&nbsp;×</a></label><div class="controls"><input class="input-span input-width72" type="text" placeholder="长(cm)"><input class="input-span input-width72" type="text" placeholder="宽(cm)"><input class="input-span input-width72" type="text" placeholder="高(cm)"><input class="input-span input-width6" type="text" placeholder="重量(kg)"><input class="input-span input-width6" type="text" placeholder="件数"></div></div>');
        
    });
    //首页添加货物
    $(document).on('click','.indexaddgoods',function(){
        var thenumber = $('.goodsnumber').length + 1;
        $('.goodsnumber:last').after('<div class="control-group goodsnumber"><label class="control-label" for="fba_code">货物信息'+thenumber+'</label><div class="controls"><input class="input-span input-width72" type="text" placeholder="长(cm)"><input class="input-span input-width72" type="text" placeholder="宽(cm)"><input class="input-span input-width72" type="text" placeholder="高(cm)"><input id="express-goodsweight2" class="input-span input-width6" type="text" placeholder="重量(kg)"><input class="input-span input-width6" type="text" placeholder="件数"><span class="indexdelegoods">-</span><span class="express-goodsweight2">提示:&nbsp;快递是21kg起步的哦,获得更多帮助请咨询400-7117-800</span></div></div>');
        
    });
    //首页删除货物
    $(document).on('click','.indexdelegoods',function(){
        $(this).parent().parent().remove();
    });
    //删除已添加的货物
    $(document).on('click','.deleaddgoods',function(){
        var thecount = 1;
        $(this).parent().parent().remove();
        $('.addgoods:last').parent().css('display','block');
        $('.addgoods-div').each(function(){
            $(this).find('.goodsnumber').html(thecount);
            thecount++;
        });
        var thenumber =  $(this).parent().parent().find('.goodsnumber').html();
        var thecount1 = 1;
        $('.goodsnumber-goods').each(function(){
            thecount1++;
            $(this).html(thecount1);
            if($(this).html() == thenumber){
                $(this).parent().parent().remove();
            }
        });
        var thecount2 = 1;
        $('.goodsnumber-goods').each(function(){
            thecount2++;
            $(this).html(thecount2);
        });
    });
    $(document).on('click','.deleaddgoods1',function(){
        var thecount = 1;
        $(this).parent().parent().remove();
        $('.addgoods1:last').parent().css('display','block');
        $('.addgoods-div1').each(function(){
            $(this).find('.goodsnumber1').html(thecount);
            thecount++;
        });
        var thenumber =  $(this).parent().parent().find('.goodsnumber1').html();
        var thecount1 = 1;
        $('.goodsnumber-goods1').each(function(){
            thecount1++;
            $(this).html(thecount1);
            if($(this).html() == thenumber){
                $(this).parent().parent().remove();
            }
        });
        var thecount2 = 1;
        $('.goodsnumber-goods1').each(function(){
            thecount2++;
            $(this).html(thecount2);
        });
    });
    $(document).on('click','.deleaddgoods2',function(){
        var thecount = 1;
        $(this).parent().parent().remove();
        $('.addgoods-div2').each(function(){
            $(this).find('.goodsnumber2').html(thecount);
            thecount++;
        });
        var thenumber =  $(this).parent().parent().find('.goodsnumber2').html();
        var thecount1 = 1;
        $('.goodsnumber-goods2').each(function(){
            thecount1++;
            $(this).html(thecount1);
            if($(this).html() == thenumber){
                $(this).parent().parent().remove();
            }
        });
        var thecount2 = 1;
        $('.goodsnumber-goods2').each(function(){
            thecount2++;
            $(this).html(thecount2);
        });
    });
    $(document).on('click','.deleaddgoods3',function(){
        var thecount = 1;

        $(this).parent().parent().remove();
        $('.addgoods-div3').each(function(){
            console.log(thecount);
            $(this).find('.goodsnumber3').html(thecount);
            thecount++;
        });
    });

    //兼容IE8的placeholder
    if( !('placeholder' in document.createElement('input')) ){  
        $('input[placeholder],textarea[placeholder]').each(function(){   
        var that = $(this),   
        text= that.attr('placeholder');   
        if(that.val()===""){   
          that.val(text).addClass('placeholder');   
        }   
        that.focus(function(){   
          if(that.val()===text){   

            that.val("").removeClass('placeholder');   
          }   
        })   
        .blur(function(){   
          if(that.val()===""){   
            that.val(text).addClass('placeholder');   
          }   
        })   
        .closest('form').submit(function(){   
          if(that.val() === text){   
            that.val('');   
          }   
        });   
      });   
    }
    //立即询价提示
    $('#exactequirybt').click(function (){
        alert('由于您询价的部分要求需要额外的报价流程，我的销售将在24小时内很快与您联系。您也可以随时与分配给您的销售联系。');
    });
    /**收起详情**/
    $('.pickuptips').click(function(){
        $(this).css('display','none');
        $(this).next().css('display','block');
        $('#themoredetail').css('display','none');
    });
    /**展开详情**/
    $('.unfoldtips').click(function(){
        $(this).css('display','none');
        $(this).prev().css('display','block');
        $('#themoredetail').css('display','block');
    });
    //ie8兼容classname 
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (className, element) {
            var children = (element || document).getElementsByTagName('*');
            var elements = new Array();
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var classNames = child.className.split(' ');
                for (var j = 0; j < classNames.length; j++) {
                    if (classNames[j] == className) {
                        elements.push(child);
                        break;
                    }
                }
            }
        return elements;
        };
    }
    /*蒙版的大小变化*/
    var filterHeight = $(document).height();
    var filterWidth = $(document).width();
    $('.tipsMask').css({'height':filterHeight + 'px','width':filterWidth + 'px'});
    $('.customMasktip').css({'top':$(window).height()/2-150 + 'px','left':$(window).width()/2-200 + 'px'});
    //订舱成功弹出提示
    $('.Bookingspacebt').click(function(){
        $('.tipsMask').css('display','block');
        $('.customMasktip').css('display','block');
    });
    //订舱成功提示确定
    $(document).on('click','.cancelMask',function(){
        $('.tipsMask').css('display','none');
        $('.customMasktip').css('display','none');
    });
    //快递询价最小重量提示
    $('#express-goodsweight').change(function(){
        var theweight = parseFloat($('#express-goodsweight').val());
        if( theweight != '' && theweight < 21){
            $('.express-goodsweight').css('display','block');
            $('#express-goodsweight').val('');
        }
        else{
            $('.express-goodsweight').css('display','none');
        }
    });
    $('#express-goodsweight2').change(function(){
        var theweight = parseFloat($('#express-goodsweight2').val());
        if( theweight != '' && theweight < 21){
            $('.express-goodsweight2').css('display','block');
            $('#express-goodsweight2').val('');
        }
        else{
            $('.express-goodsweight2').css('display','none');
        }
    });
    //通知选项
    $('#section-inform').prop("checked",false);
    $('#section-inform').click(function(){
        console.log($(this).is(':checked'));
        if($(this).is(':checked') == true){
            console.log(1);
            $(this).parent().next().find("input[type='checkbox']").prop("checked",true);
        }
        else{
            console.log(2);
            $(this).parent().next().find("input[type='checkbox']").prop("checked",false);
        }
    });
    $('#section-inform1,#section-inform2,#section-inform3,#section-inform4,#section-inform5').click(function(){
        if( $('#section-inform1').is(':checked') || $('#section-inform2').is(':checked') || $('#section-inform3').is(':checked')|| $('#section-inform4').is(':checked')||$('#section-inform5').is(':checked')){
            $('#section-inform').prop("checked",true);
        }
        else{
            $('#section-inform').prop("checked",false);
        }
    });

    //首页货物跟踪查询跳转
    $('.btn-large2P').click(function(){
        if($(".goods_style").val() == 'FBA快递'){
            document.location='express-goodstail.html';
        }
        else{
            document.location='airsea-goodstail.html';
        }
    });
    //发货人收货人通知人弹出
    
});


//地址栏select
function adress_select(obj){
    var offset = $(obj).offset();
    var thecontainer = $(obj).parents('.info-bk2').offset();
    $('#select_adress').css('display','block');
    $('#select_adress').css('top',offset.top-thecontainer.top+10);
    $('#select_adress').css('left',offset.left-thecontainer.left-120);
}

//解析url
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
      return unescape(r[2]);
   return 0;
} 
