/**
 * Created by Administrator on 2016/3/28.
 */
$(document).ready(function(){

    var $filter = $("#filter");
    var $show_img = $("#show_img");
    var $leftBtn = $("#left");
    var $rightBtn = $("#right");
    var $arrow = $(".arrow");
    var $show = $("#show");
    var $main_img = $("#main");
    var $checkout = $("#checkout");
    var $final = $("#final");
    var $total = $("#total");
    var cal = 0;


   $(".colors-large a").click(function(){   //防止链接跳转
      return false;
   });


    /*主要函数 遍历所有的product进行响应*/
   $(".product").each(function(index){


       $(this).find(".make3D").hover(function(){
            $(this).addClass("animate")
                .parent().css('z-index' ,'20');  //改变层级使得当前的product处在最上面
       },function(){
           $(this).removeClass("animate")
               .parent().css('z-index','0');
       });
       $(this).find(".view_gallery").click(function(){

           var num = $(document).scrollTop() + 100;
           var str = "img/" + (index+1) +"0.jpg";
           var dex = 0;

           $show_img.css("top",num);
           $main_img.attr("src",str);
           $main_img.css("margin-left","-175px");
           $show_img.css("display","block");
           $filter.css({"opacity":"0.7","z-index":"21"});

           $leftBtn.click(function(){
               dex--;
               $main_img.css("margin-left","-375px");
               if(dex == 0) {$main_img.css("margin-left","-175px");}
               if(dex == -1) dex = 2;
               var str2 = "img/" + (index+1) + dex + ".jpg";
               $main_img.attr("src",str2);
           });
           $rightBtn.click(function(){
                dex++;
                $main_img.css("margin-left","-375px");
               if(dex == 3) dex = 0;
               if(dex == 0) {$main_img.css("margin-left","-175px");}
               var str2 = "img/" + (index+1) + dex + ".jpg";
               $main_img.attr("src",str2);
           });
       });
   });



    $filter.click(function(){
        $(this).css({"opacity":"0" , "z-index":"0"});
        $show_img.css("display","none");
    });
    $show.mouseover(function(){
        $arrow.css("opacity","1");
    }).mouseout(function(){
        $arrow.css("opacity","0");
    });

   $(".add_to_cart").click(function(){

       var productCard = $(this).parent();  //find its father product_front
       var position  = productCard.offset();
       var productImage  = $(productCard).find("img")[0].src;
       var productName = $(productCard).find(".product_name").get(0).innerHTML;
       var productPrice = $(productCard).find(".product_price")[0].innerHTML;
       $("body").append("<div class='floating-cart'></div>");  //add a floating div
       var cart = $("div.floating-cart");
       productCard.clone().appendTo(cart);  //
       $(cart).css({'top':position.top + 'px','left':position.left + 'px'})
           .fadeIn('slow')
           .addClass('moveToCart');
       setTimeout(function(){
          $('body').addClass('MakeFloatingCart');
       },1000);  //call the function after 1s


       var tmp = "";
       for(var i = 1; i < productPrice.length;++i) tmp += productPrice.charAt(i);


       setTimeout(function(){
           $('div.floating-cart').remove();
           $('body').removeClass('MakeFloatingCart');
           var cartItem = "<div class='cart-item'><div class='img-wrap'><img src=" + productImage+"  alt=''/></div>" +
               "<span>"+ productName+"</span><strong>"+ productPrice+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";

           $("#cart .empty").hide();

           $('#cart').append(cartItem);


           $('#final').css("top","+=80");
           cal += parseInt(tmp);
           $("#total").html("TOTAL:$"+cal);
           $('#final').fadeIn(500);

           var $use = $("#cart .cart-item");

           $use.last().addClass('flash');
           $use.find('.delete-item').click(function () {

               var ss = $(this).parent().find("strong")[0].innerHTML;
               var ss1 = "";

               for(var i= 1 ; i < ss.length ; ++i){
                   ss1 += ss.charAt(i);
               }

               $(this).parent().fadeOut(300, function () {

                   $(this).remove();
                   cal -= parseInt(ss1);
                   $("#total").html("TOTAL:$"+cal);
                   $("#final").css("top","-=80");
                   if ($("#cart .cart-item").size() == 0) {
                       $('#cart .empty').fadeIn(500);
                       $('#final').fadeOut(500)
                           .css("top","100px");
                   }
               });
           });

           $use.last().addClass("flash");

           setTimeout(function(){
               $use.last().removeClass("flash");
           },500)

       },1200);
   });

    $checkout.click(function(){
        $("#cart").empty();
        var str3 = "<span class='empty'>No items in cart now.</span>";
        $("#cart").append(str3);
        $('#cart .empty').show();
        $('#final').hide()
            .css("top","100px");
        alert("Pay Successfully! The consume is " + $total[0].innerHTML);
        cal = 0;
    });

});