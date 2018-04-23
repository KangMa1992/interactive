/*
    var aabb = new Photon.Light();
    var face1 = new Photon.Face($("#front")[0]);
    var face2 = new Photon.Face($("#back")[0]);
    var face3 = new Photon.Face($("#right")[0]);
    var face4 = new Photon.Face($("#floor")[0]);
*/
/// 星期二三点班-六点半
var critique=0
var water=0
var day
var hour
var minute
var day1


$(document).ready(function(){
    setInterval(function(){
        day1=new Date();
        day = day1.getDay();
        hour = day1.getHours();
        minute = day1.getMinutes();
        console.log(day+"/"+hour+"/"+minute+"/");
        if(day == 2 && hour > 16 && hour < 18 && critique == 0 || day == 2 && hour == 15 && minute > 30 && critique == 0 || day == 2 && hour == 18 && minute < 30 && critique == 0){
                critique = 1;
                water = 1;
                setTimeout(function(){
                    $("#water").removeClass("nowater");
                },4500)
            }else if(critique == 0 && water == 0){
                water = 1;
                setTimeout(function(){
                    $("#water").removeClass("nowater");
                    console.log("addWAter")
                },9500);
            }
        },1000)
	//face1.render(aabb, true);
    $(".duck").on("click",function(){
        $("#water").addClass("nowater");
        water = 0;
    });
        console.log("no water");
    $(".front-top-half").on("click",function(){
        $("#water").addClass("nowater");
        console.log("no water");
    })
})