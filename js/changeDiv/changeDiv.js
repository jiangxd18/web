

window.onload = function(){

    /*变量声明*/
    var set = document.getElementById('set');
    var filter = document.getElementById('filter');
    var show = document.getElementById('show');
    var red = document.getElementById('red');
    var blue = document.getElementById('blue');
    var green = document.getElementById('green');
    var w_two = document.getElementById('w_two');
    var w_three = document.getElementById('w_three');
    var w_four = document.getElementById('w_four');
    var h_two = document.getElementById('h_two');
    var h_three = document.getElementById('h_three');
    var h_four = document.getElementById('h_four');
    var reset = document.getElementById('reset');
    var sure = document.getElementById('sure');
    var win  = document.getElementById('win');

    /*点击设置按钮*/
    set.onmouseover = function(){
        set.style.border = '2px solid orange';
    };
    set.onmouseout = function(){
        set.style.border = 'none';
    };
    set.onclick = function(){
        filter.style.display = 'block';
        win.style.display = 'block';
    };

    /*颜色按钮*/
    red.onmousemove = function(){
        red.style.border = '1px solid orange';
        red.style.background = 'red';
    };
    red.onmouseout = function(){
        red.style.border = 'none';
        red.style.background = 'palevioletred';
    };
    red.onclick = function(){
        show.style.background = 'red';
    };

    green.onmousemove = function(){
        green.style.border = '1px solid orange';
        green.style.background = 'green';
    };
    green.onmouseout = function(){
        green.style.border = 'none';
        green.style.background = 'greenyellow';
    };
    green.onclick = function(){
        show.style.background = 'green';
    };

    blue.onmousemove = function(){
        blue.style.border = '1px solid orange';
        blue.style.background = 'blue';
    };
    blue.onmouseout = function(){
        blue.style.border = 'none';
        blue.style.background = 'cornflowerblue';
    };
    blue.onclick = function(){
        show.style.background = 'blue';
    };

    /*改变宽度*/
    w_two.onmousemove = function(){
        w_two.style.border = '2px solid orange';
    };
    w_two.onmouseout = function(){
        w_two.style.border = 'none';
    };
    w_two.onclick = function(){
        show.style.width = '200px';
    };


    w_three.onmousemove = function(){
        w_three.style.border = '2px solid orange';
    };
    w_three.onmouseout = function(){
        w_three.style.border = 'none';
    };
    w_three.onclick = function(){
        show.style.width = '300px';
    };

    w_four.onmousemove = function(){
        w_four.style.border = '2px solid orange';
    };
    w_four.onmouseout = function(){
        w_four.style.border = 'none';
    };
    w_four.onclick = function(){
        show.style.width = '400px';
    };

    /**改变高度*/

    h_two.onmousemove = function(){
        h_two.style.border = '2px solid orange';
    };
    h_two.onmouseout = function(){
        h_two.style.border = 'none';
    };
    h_two.onclick = function(){
        show.style.height = '200px';
    };

    h_three.onmousemove = function(){
        h_three.style.border = '2px solid orange';
    };
    h_three.onmouseout = function(){
        h_three.style.border = 'none';
    };
    h_three.onclick = function(){
        show.style.height = '300px';
    };

    h_four.onmousemove = function(){
        h_four.style.border = '2px solid orange';
    };
    h_four.onmouseout = function(){
        h_four.style.border = 'none';
    };
    h_four.onclick = function(){
        show.style.height = '400px';
    };

    reset.onmousemove = function(){
        reset.style.border = '2px solid orange';
    };
    reset.onmouseout = function(){
        reset.style.border = 'none';
    };
    reset.onclick = function(){
        show.style.width = '100px';
        show.style.height = '100px';
        show.style.background = 'azure';
    };

    sure.onmousemove = function(){
        sure.style.border = '2px solid orange';
    };
    sure.onmouseout = function(){
        sure.style.border = 'none';
    };
    sure.onclick = function(){
        filter.style.display = 'none';
        win.style.display = 'none';
    };
};