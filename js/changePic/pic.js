/**
 * Created by Administrator on 2016/3/22.
 */
window.onload = function(){
    /*变量初始化*/
    var oHead = document.getElementById('head');
    var oBottom = document.getElementById('name');
    var oPre = document.getElementById('pre');
    var oNext = document.getElementById('next');
    var oImg = document.getElementById('dis');
    var oSet = document.getElementById('set');
    var oFilter = document.getElementById('filter');
    var oChoose = document.getElementById('choose');
    var oCircle = document.getElementById('circle');
    var oStep = document.getElementById('step');
    var num = 1 ;
    var arrAddress = ['1.jpg' , '2.jpg' , '3.jpg' , '4.jpg' , '5.jpg'];
    var arrName = ['车轮' , '皇冠' , '女花旦','香蕉','衬衫'];
    var bool = true;

    oSet.onmouseover = function () {
      oSet.style.color = 'orange';
        oSet.style.border = '2px solid orange';
    };
    oSet.onmouseout = function(){
        oSet.style.color = 'white';
        oSet.style.border = 'none';
    };
    oSet.onclick = function(){
        oFilter.style.display = 'block';
        oChoose.style.display = 'block';
    };

    oCircle.onmouseover = function () {
        oCircle.style.color = 'orange';
        oCircle.style.border = '1px solid orange';
    };
    oCircle.onmouseout = function(){
        oCircle.style.color = 'white';
        oCircle.style.border = 'none';
    };
    oCircle.onclick = function(){
        bool = true;
        oFilter.style.display = 'none';
        oChoose.style.display = 'none';
    };

    oStep.onmouseover = function () {
        oStep.style.color = 'orange';
        oStep.style.border = '1px solid orange';
    };
    oStep.onmouseout = function(){
        oStep.style.color = 'white';
        oStep.style.border = 'none';
    };
    oStep.onclick = function(){
        bool = false;
        oFilter.style.display = 'none';
        oChoose.style.display = 'none';
    };
    function show(){
        oHead.innerHTML = num + '/5';
        oBottom.innerHTML = arrName[num - 1];
    }


    function changePic(){
        oImg.src = arrAddress[num - 1];
    }

    oPre.onclick = function(){
        num --;
        if(bool == true) {
            if(num == 0) num = 5;
            if(num == 6) num = 1;

        }
        else if(bool == false){
            if(num == 0){
                num = 1;
                alert('这已经是第一张了');
            }
        }
        show();
        changePic();

    };

    oNext.onclick = function(){
        num ++;
        if(bool == true) {
            if(num == 0) num = 5;
            if(num == 6) num = 1;
        }
        else if(bool == false){
            if(num == 6){
                num = 5;
                alert('这已经是最后一张');
            }
        }
        show();
        changePic();
    };

};