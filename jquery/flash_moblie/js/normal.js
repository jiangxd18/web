$(function(){
	var thewinheight = $(window).height();
	var thewinwidth = $(window).width();
	var thedocheight = $(document).height();
	//将带有底部按钮的页面撑开
	if(parseFloat(thewinheight) >= parseFloat(thedocheight)){
        $('.special_section').css('min-height',thewinheight);
    }

	//监听事件，左右菜单弹出时禁止滚动
	document.addEventListener("touchmove",function(e){
		if($('.left_menu').attr('data') == 0 || $('.right_menu').attr('data') == 0){
			e.preventDefault();
			e.stopPropagation();
		}
	},false);

	//首页 8个理由 第一个图片垂直居中
	var thereasondiv = $('.reason_content_div').css('height');
	$('.reason_content_imgspecial').css('height',thereasondiv);

	//首页右边侧栏隐藏
	var thestart_left = parseFloat(thewinwidth)+10;
	$('.hidden_rightmenu').css('left',thestart_left+'px');

	//点击蒙板回收左右菜单
	var theleft_width = parseFloat($('.hidden_leftmenu').css('width')) + 10;
	var theright_width = $('.hidden_rightmenu').css('width');
	var theend_left = parseFloat(thewinwidth)-parseFloat(theright_width);
	$('.hidden_mask').click(function(){
		if($('.left_menu').attr('data') == 0){
			$('.hidden_mask').css('display','none');
			$('.hidden_leftmenu').animate({left:'-'+theleft_width+'px'});
			$('.left_menu').attr('data','1');
			
		}
		if($('.right_menu').attr('data') == 0){
			$('.hidden_mask').css('display','none');
			$('.hidden_rightmenu').animate({left:thestart_left+'px'});
			$('.right_menu').attr('data','1');
			 
		}
	});

	//首页左边侧栏拉伸
	$('.left_menu').click(function(){
		if($('.right_menu').attr('data') == 0){
			$('.hidden_mask').css('display','none');
			$('.hidden_rightmenu').animate({left:thestart_left+'px'});
			$('.right_menu').attr('data','1');
			 
		}
		if($('.left_menu').attr('data') == 1){
			$('.hidden_mask').css('display','block');
			$('.hidden_mask').css('height',thewinheight);
			$('.hidden_leftmenu').css('height',thewinheight);
			$('.hidden_leftmenu').animate({left:'0'});
			$('.left_menu').attr('data','0');

		}
		else{
			$('.hidden_mask').css('display','none');
			$('.hidden_leftmenu').animate({left:'-'+theleft_width+'px'});
			$('.left_menu').attr('data','1');
			  
		}
	});
	//首页右边侧栏拉伸
	$('.right_menu').click(function(){
		if($('.left_menu').attr('data') == 0){
			$('.hidden_mask').css('display','none');
			$('.hidden_leftmenu').animate({left:'-'+theleft_width+'px'});
			$('.left_menu').attr('data','1');
			
		}
		if($('.right_menu').attr('data') == 1){
			$('.hidden_rightmenu').css('display','block');
			$('.hidden_mask').css('display','block');
			$('.hidden_mask').css('height',thewinheight);
			$('.hidden_rightmenu').css('height',thewinheight);
			$('.hidden_rightmenu').animate({left:theend_left+'px'});
			$('.right_menu').attr('data','0');
	
		}
		else{
			$('.hidden_mask').css('display','none');
			$('.hidden_rightmenu').animate({left:thestart_left+'px'});
			$('.right_menu').attr('data','1');
			setTimeout(function(){
				$('.hidden_rightmenu').css('display','none');
			},300);
		}
	});
	//表单radio选中事件
	$('.diy_radio label,.diy_radio img').click(function(){
		var thelabel = $(this).parent().find('label');
		var thecontrol = $(this).closest('.control_group_inline');
		$(thecontrol).find('img').attr('src','css/images/btn-radio-n@3x.png')
		$(thelabel).parent().find('img').attr('src','css/images/btn-radio-s@3x.png');
		if($(thelabel).attr('for') == 'product_type1'){
			$(thecontrol).find('.f_tips2').css('display','none');
			$(thecontrol).find('.f_tips1').css('display','none');
			$(thecontrol).find('.product_type1').prop("checked",true);
			$(thecontrol).find('.diy_radio_label1').css('color','#353535');
			$(thecontrol).find('.diy_radio_label2').css('color','#737373');
			$(thecontrol).find('.diy_radio_label3').css('color','#737373');
		}
		if($(thelabel).attr('for') == 'product_type3'){
			$(thecontrol).find('.f_tips1').css('display','none');
			$(thecontrol).find('.f_tips2').css('display','block');
			$(thecontrol).find('.product_type3').prop("checked",true);
			$(thecontrol).find('.diy_radio_label3').css('color','#353535');
			$(thecontrol).find('.diy_radio_label1').css('color','#737373');
			$(thecontrol).find('.diy_radio_label2').css('color','#737373');
		}
		if($(thelabel).attr('for') == 'product_type2'){
			$(thecontrol).find('.f_tips1').css('display','block');
			$(thecontrol).find('.f_tips2').css('display','none');
			$(thecontrol).find('.product_type2').prop("checked",true);
			$(thecontrol).find('.diy_radio_label2').css('color','#353535');
			$(thecontrol).find('.diy_radio_label3').css('color','#737373');
			$(thecontrol).find('.diy_radio_label1').css('color','#737373');
		}
	});
	$('.diy_radio2 label,.diy_radio2 img').click(function(){
		var thelabel = $(this).parent().find('label');
		var thecontrol = $(this).closest('.control_group_inline');
		$(thecontrol).find('img').attr('src','css/images/btn-radio-n@3x.png')
		$(thelabel).parent().find('img').attr('src','css/images/btn-radio-s@3x.png');
		if($(thelabel).attr('for') == 'product_type1'){
			$(thecontrol).find('.f_tips2').css('display','none');
			$(thecontrol).find('.f_tips1').css('display','block');
			$(thecontrol).find('.product_type1').prop("checked",true);
			$(thecontrol).find('.diy_radio_label1').css('color','#353535');
			$(thecontrol).find('.diy_radio_label2').css('color','#737373');
			$(thecontrol).find('.diy_radio_label3').css('color','#737373');
		}
		if($(thelabel).attr('for') == 'product_type3'){
			$(thecontrol).find('.f_tips1').css('display','none');
			$(thecontrol).find('.f_tips2').css('display','block');
			$(thecontrol).find('.product_type3').prop("checked",true);
			$(thecontrol).find('.diy_radio_label3').css('color','#353535');
			$(thecontrol).find('.diy_radio_label1').css('color','#737373');
			$(thecontrol).find('.diy_radio_label2').css('color','#737373');
		}
		if($(thelabel).attr('for') == 'product_type2'){
			$(thecontrol).find('.f_tips1').css('display','none');
			$(thecontrol).find('.f_tips2').css('display','none');
			$(thecontrol).find('.product_type2').prop("checked",true);
			$(thecontrol).find('.diy_radio_label2').css('color','#353535');
			$(thecontrol).find('.diy_radio_label3').css('color','#737373');
			$(thecontrol).find('.diy_radio_label1').css('color','#737373');
		}
	});
	//起运地服务复选框选中事件
	$('.startsite_serve label').click(function(){
		var theparent = $(this).parent();
		if($(this).attr('data') == 1){
			if($(this).attr('for') == 'site_serve1'){
				$(theparent).find('.startsite_serve1').attr('src','css/images/btn-multiple-s@3x.png');
				$(this).css('color','#353535');
				$(theparent).find('.site_serve1').prop("checked",true);
			}
			else if($(this).attr('for') == 'site_serve2'){
				$(theparent).find('.startsite_serve2').attr('src','css/images/btn-multiple-s@3x.png');
				$(this).css('color','#353535');
				$(theparent).find('.site_serve2').prop("checked",true);
			}
			$(this).removeAttr('data');
		}
		else{
			if($(this).attr('for') == 'site_serve1'){
				$(theparent).find('.startsite_serve1').attr('src','css/images/btn-multiple-n@3x.png');
				$(this).css('color','#737373');
				$(theparent).find('.site_serve1').prop("checked",false);
			}
			else if($(this).attr('for') == 'site_serve2'){
				$(theparent).find('.startsite_serve2').attr('src','css/images/btn-multiple-n@3x.png');
				$(this).css('color','#737373');
				$(theparent).find('.site_serve1').prop("checked",false);
			}
			$(this).attr('data','1');
		}
	});
	$('.startsite_serve1').click(function(){
		var theparent = $(this).parent();
		if($(theparent).find('.site_serve1_label').attr('data') == 1){
			$(theparent).find('.startsite_serve1').attr('src','css/images/btn-multiple-s@3x.png');
			$(theparent).find('.site_serve1_label').css('color','#353535');
			$(theparent).find('.site_serve1_label').removeAttr('data');
			$(theparent).find('.site_serve1').prop("checked",true);
		}
		else{
			$(theparent).find('.startsite_serve1').attr('src','css/images/btn-multiple-n@3x.png');
			$(theparent).find('.site_serve1_label').css('color','#737373');
			$(theparent).find('.site_serve1_label').attr('data','1');
			$(theparent).find('.site_serve1').prop("checked",false);
		}
		
	});
	$('.startsite_serve2').click(function(){
		var theparent = $(this).parent();
		if($(theparent).find('.site_serve2_label').attr('data') == 1){
			$(theparent).find('.startsite_serve2').attr('src','css/images/btn-multiple-s@3x.png');
			$(theparent).find('.site_serve2_label').css('color','#353535');
			$(theparent).find('.site_serve2_label').removeAttr('data');
			$(theparent).find('.site_serve2').prop("checked",true);
		}
		else{
			$(theparent).find('.startsite_serve2').attr('src','css/images/btn-multiple-n@3x.png');
			$(theparent).find('.site_serve2_label').css('color','#737373');
			$(theparent).find('.site_serve2_label').attr('data','1');
			$(theparent).find('.site_serve2').prop("checked",false);
		}
	});
	//报关复选框选中事件
	$('.agency_clearance label').click(function(){
		var theparent = $(this).parent();
		if($(this).attr('data') == 1){
			if($(this).attr('for') == 'clearance1'){
				$(theparent).find('.agency_clearance1').attr('src','css/images/btn-multiple-s@3x.png');
				$(this).css('color','#353535');
			}
			else if($(this).attr('for') == 'clearance2'){
				$(theparent).find('.agency_clearance2').attr('src','css/images/btn-multiple-s@3x.png');
				$(this).css('color','#353535');
			}
			$(this).removeAttr('data');
		}
		else{
			if($(this).attr('for') == 'clearance1'){
				$(theparent).find('.agency_clearance1').attr('src','css/images/btn-multiple-n@3x.png');
				$(this).css('color','#737373');
			}
			else if($(this).attr('for') == 'clearance2'){
				$(theparent).find('.agency_clearance2').attr('src','css/images/btn-multiple-n@3x.png');
				$(this).css('color','#737373');
			}
			$(this).attr('data','1');
		}
	});
	$('.agency_clearance1').click(function(){
		var theparent = $(this).parent();
		if($('.clearance1_label').attr('data') == 1){
			$('.agency_clearance1').attr('src','css/images/btn-multiple-s@3x.png');
			$('.clearance1_label').css('color','#353535');
			$('.clearance1_label').removeAttr('data');
			$('#clearance1').prop("checked",true);
		}
		else{
			$('.agency_clearance1').attr('src','css/images/btn-multiple-n@3x.png');
			$('.clearance1_label').css('color','#737373');
			$('.clearance1_label').attr('data','1');
			$('#clearance1').prop("checked",false);
		}
		
	});
	$('.agency_clearance2').click(function(){
		if($('.clearance2_label').attr('data') == 1){
			$('.agency_clearance2').attr('src','css/images/btn-multiple-s@3x.png');
			$('.clearance2_label').css('color','#353535');
			$('.clearance2_label').removeAttr('data');
			$('#clearance2').prop("checked",true);
		}
		else{
			$('.agency_clearance2').attr('src','css/images/btn-multiple-n@3x.png');
			$('.clearance2_label').css('color','#737373');
			$('.clearance2_label').attr('data','1');
			$('#clearance2').prop("checked",false);
		}
	});
	//出口许可权单选框选中事件
	$('.export_right label,.export_right img').click(function(){
		var thelabel = $(this).parent().find('label');
		var theparent = $(this).closest('.export_right');
		if($(thelabel).attr('for') == 'export1'){
			$(theparent).find('.export_right1').attr('src','css/images/btn-radio-s@3x.png');
			$(theparent).find('.export_right2').attr('src','css/images/btn-radio-n@3x.png');
			$(theparent).find('.export_right_div1').css('color','#353535');
			$(theparent).find('.export_right_div2').css('color','#737373');
			$(theparent).find('.export1').prop("checked",true);
		}
		else if($(thelabel).attr('for') == 'export2'){
			$(theparent).find('.export_right2').attr('src','css/images/btn-radio-s@3x.png');
			$(theparent).find('.export_right1').attr('src','css/images/btn-radio-n@3x.png');
			$(theparent).find('.export_right_div2').css('color','#353535');
			$(theparent).find('.export_right_div1').css('color','#737373');
			$(theparent).find('.export2').prop("checked",true);
		}
	});
	//代理清关
	$('.destination_serve label,.destination_serve img').click(function(){
		var theparent = $(this).parent();
		if($(theparent).find('.destination_label').attr('data') == 1){
			$(theparent).find('.destination_serveimg').attr('src','css/images/btn-multiple-s@3x.png');
			$(theparent).find('.destination_label').css('color','#353535');
			$(theparent).find('.destination_check').prop("checked",true);
			$(theparent).find('.destination_label').removeAttr('data');
		}
		else{
			$(theparent).find('.destination_serveimg').attr('src','css/images/btn-multiple-n@3x.png');
			$(theparent).find('.destination_label').css('color','#737373');
			$(theparent).find('.destination_check').prop("checked",false);
			$(theparent).find('.destination_label').attr('data','1');
		}
	});
	//发票
	$('.invoice label').click(function(){
		var theparent = $(this).parent();
		if($(this).attr('for') == 'invoice_radio1'){
			$(theparent).find('.invoice_img1').attr('src','css/images/btn-radio-s@3x.png');
			$(theparent).find('.invoice_img2').attr('src','css/images/btn-radio-n@3x.png');
			$(theparent).find('.invoice_radio1_label').css('color','#353535');
			$(theparent).find('.invoice_radio2_label').css('color','#737373');
			$(theparent).find('.invoice_radio1').prop("checked",true);
		}
		else if($(this).attr('for') == 'invoice_radio2'){
			$(theparent).find('.invoice_img2').attr('src','css/images/btn-radio-s@3x.png');
			$(theparent).find('.invoice_img1').attr('src','css/images/btn-radio-n@3x.png');
			$(theparent).find('.invoice_radio1_label').css('color','#737373');
			$(theparent).find('.invoice_radio2_label').css('color','#353535');
			$(theparent).find('.invoice_radio2').prop("checked",true);
		}
	});
	$('.invoice img').click(function(){
		var theparent = $(this).parent();
		if($(this).attr('class') == 'invoice_img1'){
			$(theparent).find('.invoice_img1').attr('src','css/images/btn-radio-s@3x.png');
			$(theparent).find('.invoice_img2').attr('src','css/images/btn-radio-n@3x.png');
			$(theparent).find('.invoice_radio1_label').css('color','#353535');
			$(theparent).find('.invoice_radio2_label').css('color','#737373');
			$(theparent).find('.invoice_radio1').prop("checked",true);
		}
		else if($(this).attr('class') == 'invoice_img2'){
			$(theparent).find('.invoice_img2').attr('src','css/images/btn-radio-s@3x.png');
			$(theparent).find('.invoice_img1').attr('src','css/images/btn-radio-n@3x.png');
			$(theparent).find('.invoice_radio1_label').css('color','#737373');
			$(theparent).find('.invoice_radio2_label').css('color','#353535');
			$(theparent).find('.invoice_radio2').prop("checked",true);
		}
	});
	//添加货物
	var thenumber1 = 1;
	$('.add-goods1').click(function(){
		var theenquiry_goods = $(this).parent().parent().find('.enquiry_goods');
		var thelast = $(this).parent().parent().next().find('.enquiry_goods_goods:last');
		thenumber1++;
		$(this).parent().before('<div class="enquiry_goods newadd_goods"><div class="control_group"><span>货物'+thenumber1+'</span><a class="dele_goods">X</a><input class="input_span" type="text" placeholder="中文描述" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="英文描述" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="产品型号" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="箱数" /></div><div class="control_group"><span></span><input class="input_span2" type="text" placeholder="货物毛重" style="margin-right:"/><input class="input_span3" type="text" placeholder="KGS" /></div><div class="control_group"><span></span><input class="input_span2" type="text" placeholder="货物体积" /><input class="input_span3" type="text" placeholder="CBM" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="报关单价(￥)" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="PCS数" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="报关总价(￥)" /></div></div>');
		$(thelast).after('<div class="enquiry_goods_goods newgoods_goods"><div class="control_group"><span class="thenewadd_span">货物'+thenumber1+'</span><input class="input_span" type="text" placeholder="英文描述" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="目的地海关编码" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="产品型号" /></div></div>');
	});
	var thenumber2 = 1;
	$('.add-goods2').click(function(){
		var theenquiry_goods = $(this).parent().parent().find('.enquiry_goods');
		var thelast = $(this).parent().parent().next().find('.enquiry_goods_goods:last');
		thenumber2++;
		$(this).parent().before('<div class="enquiry_goods newadd_goods"><div class="control_group"><span>货物'+thenumber2+'</span><a class="dele_goods">X</a><input class="input_span" type="text" placeholder="中文描述" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="英文描述" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="产品型号" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="箱数" /></div><div class="control_group"><span></span><input class="input_span2" type="text" placeholder="货物毛重" style="margin-right:"/><input class="input_span3" type="text" placeholder="KGS" /></div><div class="control_group"><span></span><input class="input_span2" type="text" placeholder="货物体积" /><input class="input_span3" type="text" placeholder="CBM" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="报关单价(￥)" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="PCS数" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="报关总价(￥)" /></div></div>');
		$(thelast).after('<div class="enquiry_goods_goods newgoods_goods"><div class="control_group"><span class="thenewadd_span">货物'+thenumber2+'</span><input class="input_span" type="text" placeholder="英文描述" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="目的地海关编码" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="产品型号" /></div></div>');
	});
	var thenumber3 = 1;
	$('.add-goods3').click(function(){
		var theenquiry_goods = $(this).parent().parent().find('.enquiry_goods');
		var thelast = $(this).parent().parent().next().find('.enquiry_goods_goods:last');
		thenumber3++;
		$(this).parent().before('<div class="enquiry_goods newadd_goods"><div class="control_group"><span>货物'+thenumber3+'</span><a class="dele_goods">X</a><input class="input_span" type="text" placeholder="中文描述" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="英文描述" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="产品型号" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="箱数" /></div><div class="control_group"><span></span><input class="input_span2" type="text" placeholder="货物毛重" style="margin-right:"/><input class="input_span3" type="text" placeholder="KGS" /></div><div class="control_group"><span></span><input class="input_span2" type="text" placeholder="货物体积" /><input class="input_span3" type="text" placeholder="CBM" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="报关单价(￥)" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="PCS数" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="报关总价(￥)" /></div></div>');
		$(thelast).after('<div class="enquiry_goods_goods newgoods_goods"><div class="control_group"><span class="thenewadd_span">货物'+thenumber3+'</span><input class="input_span" type="text" placeholder="英文描述" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="目的地海关编码" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="产品型号" /></div></div>');
	});
	//快递添加货物
	$('#add-goods-express').click(function(){
		var thenumber = $(this).parent().parent().find('.enquiry_goods').length + 1;
		$(this).parent().before('<div class="enquiry_goods newadd_goods"><div class="control_group"><span>货物'+thenumber+'</span><input class="input_span" type="text" placeholder="长(cm)" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="宽(cm)" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="高(cm)" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="重量(kg)" /></div><div class="control_group"><span></span><input class="input_span" type="text" placeholder="件数" /></div><a class="dele_goods2">X</a></div>');
	});
	//删除货物
	$(document).on('click','.dele_goods',function(){
		var thehtml = $(this).prev().html();
		var thespan = $(this).closest('.tab_content').find('.enquiry_goods_goods').find('.thenewadd_span');
		for(var i=0;i<thespan.length;i++){
			if($(thespan[i]).html() == thehtml){
				$(thespan[i]).parent().parent().remove();
			}
		}
		$(this).parent().parent().remove();
	});
	$(document).on('click','.dele_goods2',function(){
		$(this).parent().remove();
	});
	//下一步
	$('.abtn_next').click(function(){
		$(this).parent().next().css('display','block');
		$(this).parent().css('display','none');
		$('html, body').animate({scrollTop:0});
	});
	//自定义下拉框
	$('.diy_select_input').focus(function(){
		var therem = (window.screen.width)/10 ;
		var theparent = $(this).parent();
		$(theparent).find('.diy_select_hiden').css('display','block');
		$(theparent).find('.diy_select_hiden').animate({'max-height':6.67*therem});
		$(theparent).find('li').click(function(){
			var value = $(this).html();
			$(theparent).find('.diy_select_input').attr('value',value);
		});

		
	});
	$('.diy_select_input').blur(function(){
		$('.diy_select_hiden').animate({'max-height':0});
		setTimeout(function(){
			$('.diy_select_hiden').css('display','none');
		},300);
	});
});


//函数库
