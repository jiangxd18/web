/**
 * Created by Administrator on 2016/4/9.
 */
$(function () {

    //根据可视区变化改变
    var i = document.documentElement.scrollWidth;
    $('.footer_bottom').css('width' , i + 'px');
    $('.footer_letter').css('width', i + 'px');
    $('.topbar').css('width',i + 'px');
    $('.wrap_inner_bottom').css('width',i+'px');

    //购物车滑动效果
    var isHover = false;
    $('.buy_car_img').hover(function () {
        isHover = true;
        $(this).attr('src','images/shopcarhover.png');
        $('.buy_car_spec').animate(
            {'height':'100px'},
            200,
            function () {
                $('.buy_car_spec p').html('购物车中还没有商品，赶紧选购吧！');
            }
        );
    },function () {
        isHover = false;
        setTimeout(function () {
            if(isHover == false){
                $('.buy_car_img').attr('src','images/shopcar.png');
                $('.buy_car_spec').animate(
                    {'height':'0'},
                    200,
                    function () {
                        $('.buy_car_spec p').html('');
                    }
                );
            }
        },100);
    });

    $('.buy_car_spec').hover(function () {
        isHover = true;
    },function () {
        isHover = false;
        setTimeout(function () {
            if(isHover == false){
                $('.buy_car_img').attr('src','images/shopcar.png');
                $('.buy_car_spec').animate(
                    {'height':'0'},
                    200,
                    function () {
                        $('.buy_car_spec p').html('');
                    }
                );
            }
        },100);
    });

    //导航栏显示div
    var first_come = false;
    var flag = false;
    var flag_nav = false;
    var flag_index = [false , false , false , false , false ,false,false ];

    $('.nav_list li').hover(function () {
        var index = $(this).index();
        if(index >= 0 && index <= 6){

            for(var i = 0 ; i < 7 ; ++i) {
                i == index ? flag_index[i] = true : flag_index[i] = false;
            }

            flag = true;
            if(first_come == false){
                appearDiv(index);
                first_come = true;
            }
            else appearDiv2(index);
        }
    },function () {
        var index = $(this).index();
        if(index >= 0 && index <= 6){
            flag = false;
            flag_index[index] = false;
            var timer = setInterval(function () {
                    if (flag_nav == false && flag_index[index] == false) {
                        if (flag == false) {
                            disappearDiv(index);
                            first_come = false;
                        }
                        else disappearDiv2(index);
                        clearInterval(timer);
                    }
                }
            ,80);
        }
    });

    function myHover(obj) {
        obj.hover(function () {
            flag_nav = true;
        },function () {
            flag_nav = false;
        })
    }

    myHover($('.nav_menu_show1'));
    myHover($('.nav_menu_show2'));
    myHover($('.nav_menu_show3'));
    myHover($('.nav_menu_show4'));
    myHover($('.nav_menu_show5'));
    myHover($('.nav_menu_show6'));
    myHover($('.nav_menu_show7'));

    function appearDiv(index) {
        switch(index){
            case 0: $('.nav_menu_show1').slideDown(300);break;
            case 1: $('.nav_menu_show2').slideDown(300);break;
            case 2: $('.nav_menu_show3').slideDown(300);break;
            case 3: $('.nav_menu_show4').slideDown(300);break;
            case 4: $('.nav_menu_show5').slideDown(300);break;
            case 5: $('.nav_menu_show6').slideDown(300);break;
            case 6: $('.nav_menu_show7').slideDown(300);break;
        }
    }
    function disappearDiv(index) {
        switch(index){
            case 0: $('.nav_menu_show1').slideUp(300);break;
            case 1: $('.nav_menu_show2').slideUp(300);break;
            case 2: $('.nav_menu_show3').slideUp(300);break;
            case 3: $('.nav_menu_show4').slideUp(300);break;
            case 4: $('.nav_menu_show5').slideUp(300);break;
            case 5: $('.nav_menu_show6').slideUp(300);break;
            case 6: $('.nav_menu_show7').slideUp(300);break;
        }
    }
    function appearDiv2(index) {
        switch(index){
            case 0: $('.nav_menu_show1').css('display','block');break;
            case 1: $('.nav_menu_show2').css('display','block');break;
            case 2: $('.nav_menu_show3').css('display','block');break;
            case 3: $('.nav_menu_show4').css('display','block');break;
            case 4: $('.nav_menu_show5').css('display','block');break;
            case 5: $('.nav_menu_show6').css('display','block');break;
            case 6: $('.nav_menu_show7').css('display','block');break;
        }
    }
    function disappearDiv2(index) {
        switch(index){
            case 0: $('.nav_menu_show1').css('display','none');break;
            case 1: $('.nav_menu_show2').css('display','none');break;
            case 2: $('.nav_menu_show3').css('display','none');break;
            case 3: $('.nav_menu_show4').css('display','none');break;
            case 4: $('.nav_menu_show5').css('display','none');break;
            case 5: $('.nav_menu_show6').css('display','none');break;
            case 6: $('.nav_menu_show7').css('display','none');break;
        }
    }

    //搜索栏
    function change() {
        $('.search_txt').css('border-color','#ff6700');
        $('.search_btn').css('border-color','#ff6700');
        $('.hot_word1').animate({'opacity':0},400);
        $('.hot_word2').animate({'opacity':0},400);
        $('.search_extra').css('display','block');
    }

    $('.search_txt').focus(function () {
        change();
    }).blur(function () {
        $('.search_txt').css('border-color','#e0e0e0');
        $('.search_btn').css('border-color','#e0e0e0');
        $('.hot_word1').animate({'opacity':'1'},200);
        $('.hot_word2').animate({'opacity':'1'},200);
        $('.search_extra').css('display','none');
    });
    $('.search_btn').click(function () {
        change();
        $('.search_txt').focus();
    });

    //图片播放定时器
    var num = 0;
    var that = $('.category_hot_list li:eq(0)').find('img');
    var tmp_index = 0;
    var span_that = $('.category_move li:eq(0)').find('span');
    function myTimer() {

       return setInterval(function () {

            $('.category_hot_list li a img').each(function (index) {


                if (index == num + 1 || num == 4) {
                    tmp_index = index;
                    that.animate({'opacity': '0'}, 700);
                    $(this).animate({'opacity': '1'}, 700);
                    that = $(this);
                    return false;
                }
            });

            $('.category_move li span').each(function (index) {

                if (index == num + 1 || num == 4) {
                    span_that.removeClass('cur_move');
                    $(this).addClass('cur_move');
                    span_that = $(this);
                    return false;
                }
            });
            num = tmp_index;
        }, 5000);

    }
    var timer = myTimer();
    $('.category_move li').click(function () {
        var index = $(this).index();

        if(index == num) return false;

        clearInterval(timer);
        //改变图片
        var tmp = $('.category_hot_list li:eq('+index+')').find('img');
        that.animate({'opacity': '0'}, 700);
        tmp.animate({'opacity': '1'}, 700);
        that = tmp;

        //图标
        var tmp2 = $('.category_move li:eq('+index+')').find('span');
        span_that.removeClass('cur_move');
        tmp2.addClass('cur_move');

        span_that = tmp2;

        num = index;
        timer = myTimer();
    });

    //category栏的category_item_box显示隐藏
    var boxflag = false;
    $(".category_item").hover(function(){
        var index = $(this).index();
        $(".category_item_box:eq("+index+")").css("display","block");
        var category_item_list = $(this).find(".category_item_box").children(".category_item_list");
        var width = $(this).index() == 0 ? 270 : 220;
        var len = category_item_list.length;
        category_item_list.width(width);
        width = len == 1 ? len*width : len*width + 70;
        $(".category_list .category_item_box").width(width);
        console.log(len*width);
    },function(){
        var index = $(this).index();
        var timer = setInterval(function () {
            if(boxflag == false) {
                $(".category_item_box:eq(" + index + ")").css("display", "none");
                clearInterval(timer);
            }
        },80);
    });
    
    $('.category_item_box').hover(function () {
        boxflag = true;
        
    },function () {
        $(this).css('display','none');
        boxflag = false;
    });
    
    $('.category_item_btn').hover(function () {
        $(this).css({'background':'#ff6700','color':'white'});
    },function () {
        $(this).css({'background':'white','color':'#ff6700'});
    });



    //自动播放明星产品
    var first = true;

    function turnRight() {
        $('.left_img img').attr('src','images/icon/left1.png');
        $('.right_img img').attr('src','images/icon/right2.png');
        $('.star_spec .spec_item_list').animate({'left':'-1250px'},500);
        first = false;
    }
    function turnLeft() {
        first = true;
        $('.left_img img').attr('src','images/icon/left2.png');
        $('.right_img img').attr('src','images/icon/right1.png');
        $('.star_spec .spec_item_list').animate({'left':'0'},500);
    }

    function myTimer2() {
        return setInterval(function () {
            if(first == true){
                turnRight();
            }
            else{
                turnLeft();
            }
        },6000);
    }
    var timer2 = myTimer2();
    $('.left_img').click(function () {
        if(first == false) {
            clearInterval(timer2);
            turnLeft();
            timer2 = myTimer2();
        }
    });
    $('.right_img').click(function () {
        if(first == true) {
            clearInterval(timer2);
            turnRight();
            timer2 = myTimer2();
        }
    });

    //硬件查看
    $('.view_all').hover(function () {
        $(this).find('img').attr('src','images/icon/view_all2.jpg');
    },function () {
        $(this).find('img').attr('src','images/icon/view_all1.png');
    });

    //搭配导航栏
    var init = $('.match .spec_type_nav li:first-child').find('a');
    $('.match .spec_type_nav li').hover(function () {
        if(init != $(this).find('a')) {
            var tmp = $(this).find('a');
            init.removeClass('cur');
            tmp.addClass('cur');
            init = tmp;
        }
    },function () {

    });

    var init2 = $('.accessory .spec_type_nav li:first-child').find('a');
    $('.accessory .spec_type_nav li').hover(function () {
        if(init2 != $(this).find('a')) {
            var tmp = $(this).find('a');
            init2.removeClass('cur');
            tmp.addClass('cur');
            init2 = tmp;
        }
    },function () {

    });

    var init3 = $('.surround .spec_type_nav li:first-child').find('a');
    $('.surround .spec_type_nav li').hover(function () {
        if(init3 != $(this).find('a')) {
            var tmp = $(this).find('a');
            init3.removeClass('cur');
            tmp.addClass('cur');
            init3 = tmp;
        }
    },function () {

    });

    //评论显示
    var innate = "";
    $('.match_list li').hover(function () {
        innate = $(this).find('.content').text();
        if(innate.length >= 26)
            $(this).find('.content').text(innate.substr(0,26) + '...');
        $(this).find('.critic').animate({'bottom':'0'},300);
    },function () {
        $(this).find('.critic').animate({'bottom':'-80px'},300);
        if(innate.length >= 26)
            setTimeout(function () {
                $(this).find('.content').text(innate);
            },500);
    });

    //推荐模块JS代码
    var right = true;
    var count = 1;
    var clickLeft = false;
    var clickRight = true;

    function turnRight2() {
        if(count == 1) {
            $('.recommend .img1').find('img').attr('src', 'images/icon/left_b_1.png');
            clickLeft = true;
        }
        else if(count == 2) {
            $('.recommend .img2').find('img').attr('src', 'images/icon/right_b_2.png');
            right = false;
            clickRight = false;
        }
        $('.recommend .recommend_list').animate({'left':'-=1250px'},500);
        count ++;
    }
    function turnLeft2() {
        if(count == 3) {
            $('.recommend .img2').find('img').attr('src', 'images/icon/right_b_1.png');
            clickRight = true;
        }
        else if(count == 2) {
            $('.recommend .img1').find('img').attr('src', 'images/icon/left_b_2.png');
            right = true;
            clickLeft = false;
        }
        $('.recommend .recommend_list').animate({'left':'+=1250px'},500);
        count --;
    }

    function myTimer3() {
        return setInterval(function () {
            if(right) turnRight2();
            else turnLeft2();
        },6000);
    }
    var timer3 = myTimer3();

    $('.recommend .img1').click(function () {

        clearInterval(timer3);
        if(clickLeft) turnLeft2();
        timer3 = myTimer3();
    });
    $('.recommend .img2').click(function () {

        clearInterval(timer3);
        if(clickRight) turnRight2();
        timer3 = myTimer3();
    });

    //视频播放
    $('.video_spec li').hover(function () {
        $(this).find('.filter').css('display','block');
        $(this).find('.filter span').animate({'opacity':'1'},800);
    },function () {
        $(this).find('.filter').css('display','none');
        $(this).find('.filter span').css('opacity','0');
    });

    //内容
    $('.content_spec li').hover(function () {
        $(this).find('.content_left').fadeIn(300);
        $(this).find('.content_right').fadeIn(300);
    },function () {
        $(this).find('.content_left').fadeOut(300);
        $(this).find('.content_right').fadeOut(300);
    });

    $('.orange').hover(function () {
        $(this).css({'background':'#ff920f','color':'white'});
    },function () {
        $(this).css({'background':'white','color':'#ff920f'});
    });
    $('.green').hover(function () {
        $(this).css({'background':'#71b639','color':'white'});
    },function () {
        $(this).css({'background':'white','color':'#71b639'});
    });
    $('.red').hover(function () {
        $(this).css({'background':'#e42a27','color':'white'});
    },function () {
        $(this).css({'background':'white','color':'#e42a27'});
    });
    $('.blue').hover(function () {
        $(this).css({'background':'#0c80dc','color':'white'});
    },function () {
        $(this).css({'background':'white','color':'#0c80dc'});
    });


    var countarr = [1,1,1,1];

    var arr = [$('.content_spec .spec_top_border7 .content_page li:first-child span'),
               $('.content_spec .spec_top_border8 .content_page li:first-child span'),
               $('.content_spec .spec_top_border9 .content_page li:first-child span'),
               $('.content_spec .spec_top_border10 .content_page li:first-child span')];

    function changeSpan(obj , tmpcount ,index) {
        arr[index].removeClass('active');
        obj.find('li').each(function () {
            if($(this).index() == tmpcount) {
                $(this).find('span').addClass('active');
                arr[index] = $(this).find('span');
                return false;
            }
        });
    }

    function clickSpan(obj , index) {
        obj.find('li').click(function () {
            arr[index].removeClass('active');
            $(this).find('span').addClass('active');
            arr[index] = $(this).find('span');

            var tmp_count = countarr[index];
            var now_count = $(this).index() + 1;
            var dis = Math.abs(now_count - tmp_count);
            if(now_count - tmp_count > 0){
                $(this).parent().parent().find('.content_spec_list').animate({'left':'-=' + dis * 296 + 'px'} ,400);
            }
            else if(now_count - tmp_count < 0){
                $(this).parent().parent().find('.content_spec_list').animate({'left':'+=' + dis * 296 + 'px'} , 400);
            }
            countarr[index] =  now_count;
        });
    }

    function rightHC(obj , index) {
        obj.find('.content_right').hover(function () {
            $(this).attr('src','images/icon/content_right_hover.png');
        },function () {
            $(this).attr('src','images/icon/content_right.png');
        }).click(function () {
            if(countarr[index] < 4) {
                $(this).parent().find('.content_spec_list').animate({'left': '-=296px'}, 300);
                countarr[index] ++;
                changeSpan($(this).parent().find('.content_page'),countarr[index] - 1, index);
            }
        });
    }
    function leftHC(obj , index) {
        obj.find('.content_left').hover(function () {
            $(this).attr('src','images/icon/content_left_hover.png');
        },function () {
            $(this).attr('src','images/icon/content_left.png');
        }).click(function () {
            if(countarr[index] > 1) {
                $(this).parent().find('.content_spec_list').animate({'left': '+=296px'}, 300);
                countarr[index] --;
                changeSpan($(this).parent().find('.content_page'),countarr[index] - 1, index);
            }
        });
    }



    rightHC($('.content_spec .spec_top_border7') , 0);
    leftHC($('.content_spec .spec_top_border7') , 0);
    clickSpan($('.content_spec .spec_top_border7 .content_page'), 0 );
    rightHC($('.content_spec .spec_top_border8') , 1);
    leftHC($('.content_spec .spec_top_border8') , 1);
    clickSpan($('.content_spec .spec_top_border8 .content_page'), 1 );
    rightHC($('.content_spec .spec_top_border9') , 2);
    leftHC($('.content_spec .spec_top_border9') , 2);
    clickSpan($('.content_spec .spec_top_border9 .content_page'), 2 );
    rightHC($('.content_spec .spec_top_border10') , 3);
    leftHC($('.content_spec .spec_top_border10') , 3);
    clickSpan($('.content_spec .spec_top_border10 .content_page'), 3 );
});

