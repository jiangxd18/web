/**
 * Created by Administrator on 2016/3/23.
 */
window.onload = function(){
    /*变量声明区*/
    var oShow = document.getElementById('show');
    var oHead = document.getElementById('head');
    var oSubmit = document.getElementById('submit');
    var oContent = document.getElementById('in');
    var bool_Head = true;
    var num = 1;

    oHead.onmousemove = function(){
        oHead.style.border = '2px solid orange';
    };
    oHead.onmouseout = function () {
      oHead.style.border = '2px solid gray';
    };
    oHead.onclick = function(){
        if(bool_Head == true){
            num = 2;
            bool_Head = false;
            oHead.src = '2.png';
        }
        else{
            num = 1;
            bool_Head = true;
            oHead.src = '1.png';
        }
    };

    oSubmit.onmousemove = function(){
        oSubmit.style.color = 'orange';
    };
    oSubmit.onmouseout = function(){
        oSubmit.style.color = 'gray';
    };
    oSubmit.onclick = function(){
        if(oContent.value == "" || oContent.value == " ") alert('内容不能为空');
        else {
            if (bool_Head == true) {
                oShow.innerHTML += "<img " + "src = '" + num + ".png' class='hh1'/> ";
                oShow.innerHTML += "<span class = 'me'>" + oContent.value + "</span>";

            }
            else {
                oShow.innerHTML += "<img " + "src = '" + num + ".png' class='hh2'/> ";
                oShow.innerHTML += "<span class = 'you'>" + oContent.value + "</span>";
            }
            oShow.innerHTML += " <br /><br />"
            oContent.value = " ";
        }
    };


};
