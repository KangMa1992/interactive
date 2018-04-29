/*

    var aabb = new Photon.Light();
    var face1 = new Photon.Face($("#front")[0]);
    var face2 = new Photon.Face($("#back")[0]);
    var face3 = new Photon.Face($("#right")[0]);
    var face4 = new Photon.Face($("#floor")[0]);
*/

/// 星期二三点班-六点半
var critique=0
var water=1
var day
var hour
var minute
var day1
var audionumber
var currentaud
var frontrotateX = Math.random() * 360
var fronttop = Math.random()* 100
var frontleft = Math.random() * 100
var backtranslateZ = Math.random() * (-9.15)
var backrotateZ = Math.random() * 360
var leftrotateY = Math.random() * 360
var rightrotateY = Math.random() * 360
var rightright = Math.random() * 100
var floorbottom = Math.random() * 10 - 20
var floorrotateX = Math.random() * 360
var string1 = 'rotateX(' + frontrotateX + 'deg)'
var string2 = fronttop + '%'
var string3 = frontleft + '%'
var string4 = 'translateZ('+ backtranslateZ + 'em)'
var string5 = 'rotateY(' + leftrotateY + 'deg)'
var string6 = 'rotateY(' + rightrotateY + 'deg)'
var string7 = rightright+'%'
var string8 = 'rotateX(' + floorrotateX +'deg) '
var string9 = floorbottom + 'px'

/////
function blowup(){
$("#front").css({"transform":string1,"top":string2,"left":string3});
$("#whatever").css({"transform":"translateZ(1.5em)"});
$("#left").css({"transform":string5});
$("#right").css({"transform":string6,"right":string7});
$("#floor").css({"transform":string8,"bottom":string9});
                 console.log("the pool is blowed up")}

/*function blowup(){$("#front").css({"transform":"'rotateX(' + frontrotateX + 'deg)'","top":"fronttop + '%'","left":"frontleft + '%'"});
$("#back").css({"transform":"'translateZ('+ backtranslateZ + '%) ' + 'rotateZ(' + backrotateZ + 'deg)'"});
$("#left").css({"transform":"'rotateY(' + leftrotateY + 'deg)'"});
$("#right").css({"transform":"'rotateY(' + rightrotateY + 'deg)'","right":"rightright+'%'"});
$("#floor").css({"transform":"'rotateX(' + floorrotateX +'deg) ',","bottom":"floorbottom + 'px'"});
                 console.log("the pool is blowed up")}*/


$(document).ready(function(){
        audionumber = 1;
  /*  face1.render(light, true);*/
    /*setInterval(function(){
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
        },1000)*/
	//face1.render(aabb, true);
    $("#1yes").on("click",function(){
        $("#opening2").show();
        $("#opening1").hide();
    });
    $("#1no").on("click",function(){
        $("#pleaseclose").show();
        $("#opening1").hide();
    });    
    $("#2yes").on("click",function(){
        $("#opening3").show();
        $("#opening2").hide();
    });
    $("#2no").on("click",function(){
        $("#pleaseclose").show();
        $("#opening2").hide();
    });   
    $("#3yes").on("click",function(){
        $("#opening4").show();
        $("#opening3").hide();
    });
    $("#3no").on("click",function(){
        $("#pleaseclose").show();
        $("#opening3").hide();
    });    
    $("#ready").on("click",function(){
        $("#opening4").hide();
    });
    $(".duck").on("click",function(){
        $("span").hide();
        if(audionumber == 1 && water == 1){
            $("#water").addClass("nowater");
            water = 0;
            console.log("no water");
            currentaud = document.getElementById("aud1"); 
            currentaud.play();
            $("#a1").css("display","inline"); 
            setTimeout(function(){
                $("#water").removeClass("nowater");
                audionumber = audionumber + 1;
                water = 1
            },2750)
        }else if(audionumber == 2 && water == 1){
            $("#water").addClass("nowater");
            water = 0;
            console.log("no water");
            currentaud = document.getElementById("aud2"); 
            currentaud.play();
            $("#b1").css("display","inline"); 
            setTimeout(function(){
                $("#b2").css("display","inline"); 
            },500); 
            setTimeout(function(){
                $("#b3").css("display","inline"); 
            },1000); 
            setTimeout(function(){
                $("#b4").css("display","inline"); 
            },1500);
            setTimeout(function(){
                $("#water").removeClass("nowater");
                audionumber = audionumber + 1;
                water = 1},2750)
        }else if(audionumber == 3 && water == 1){
            $("#water").addClass("nowater");
            water = 0;
            console.log("no water");
            currentaud = document.getElementById("aud3"); 
            currentaud.play();
            $("#c1").css("display","inline"); 
            setTimeout(function(){
                $("#c2").css("display","inline"); 
            },500); 
            setTimeout(function(){
                $("#c3").css("display","inline"); 
            },1000); 
            setTimeout(function(){
                $("#c4").css("display","inline"); 
            },1500); 
            setTimeout(function(){
                $("#c5").css("display","inline"); 
            },2000); 
            setTimeout(function(){
                $("#c6").css("display","inline"); 
            },2500); 
            setTimeout(function(){
                $("#c7").css("display","inline"); 
            },3000);
            setTimeout(function(){
                $("#water").removeClass("nowater")
                audionumber = audionumber + 1;
                water = 1},2750)
        }else if(audionumber == 4 && water == 1){
            $("#water").addClass("nowater");
            water = 0;
            console.log("no water");
            currentaud = document.getElementById("aud4"); 
            currentaud.play();
            $("#d1").css("display","inline"); 
            setTimeout(function(){
                $("#d2").css("display","inline"); 
            },500); 
            setTimeout(function(){
                $("#d3").css("display","inline"); 
            },1000); 
            setTimeout(function(){
                $("#d4").css("display","inline"); 
            },1500); 
            setTimeout(function(){
                $("#d5").css("display","inline"); 
            },2000); 
            setTimeout(function(){
                $("#d6").css("display","inline"); 
            },2500); 
            setTimeout(function(){
                $("#d7").css("display","inline"); 
            },3000); 
            setTimeout(function(){
                $("#d8").css("display","inline"); 
            },3500); 
            setTimeout(function(){
                $("#d9").css("display","inline"); 
            },4000); 
            setTimeout(function(){
                $("#d10").css("display","inline"); 
            },4500); 
            setTimeout(function(){
                $("#d11").css("display","inline"); 
            },5000); 
            setTimeout(function(){
                $("#d12").css("display","inline"); 
            },5500); 
            setTimeout(function(){
                $("#d13").css("display","inline"); 
            },6000); 
            setTimeout(function(){
                $("#d14").css("display","inline"); 
            },6500);
            blowup();
            setTimeout(function(){
                //$("#water").removeClass("nowater")
                audionumber = audionumber + 1;
                water = 1},2750)
        }else if(audionumber == 5 && water == 1){
            $("#water").addClass("nowater");
            water = 0;
            console.log("no water");
            currentaud = document.getElementById("aud5"); 
            currentaud.play();
            $("#e1").css("display","inline"); 
            setTimeout(function(){
                $("#e2").css("display","inline"); 
            },500); 
            setTimeout(function(){
                $("#e3").css("display","inline"); 
            },1000); 
            setTimeout(function(){
                $("#e4").css("display","inline"); 
            },1500); 
            setTimeout(function(){
                $("#e5").css("display","inline"); 
            },2000); 
            setTimeout(function(){
                $("#e6").css("display","inline"); 
            },2500); 
            setTimeout(function(){
                $("#e7").css("display","inline"); 
            },3000); 
            setTimeout(function(){
                $("#e8").css("display","inline"); 
            },3500); 
            setTimeout(function(){
                $("#e9").css("display","inline"); 
            },4000); 
            setTimeout(function(){
                $("#e10").css("display","inline"); 
            },4500); 
            setTimeout(function(){
                $("#e11").css("display","inline"); 
            },5000); 
            setTimeout(function(){
                $("#e12").css("display","inline"); 
            },5500); 
            setTimeout(function(){
                $("#e13").css("display","inline"); 
            },6000); 
            setTimeout(function(){
                $("#e14").css("display","inline"); 
            },6500); 
            setTimeout(function(){
                $("#e15").css("display","inline"); 
            },7000); 
            setTimeout(function(){
                $("#e16").css("display","inline"); 
            },7500); 
            setTimeout(function(){
                $("#e17").css("display","inline"); 
            },8000); 
            setTimeout(function(){
                $("#e18").css("display","inline"); 
            },8500); 
            setTimeout(function(){
                $("#e19").css("display","inline"); 
            },9000); 
            setTimeout(function(){
                $("#e20").css("display","inline"); 
            },9500); 
            setTimeout(function(){
                $("#e21").css("display","inline"); 
            },10000); 
            setTimeout(function(){
                $("#e22").css("display","inline"); 
            },10500); 
            setTimeout(function(){
                $("#e23").css("display","inline"); 
            },11000);
            setTimeout(function(){
                //$("#water").removeClass("nowater")
                audionumber = audionumber + 1;
                water = 1},2750)
        }else if(audionumber == 6 && water == 1){
            $("#water").addClass("nowater");
            water = 0;
            console.log("no water");
            currentaud = document.getElementById("aud6"); 
            currentaud.play()
            $("#f1").css("display","inline"); 
            setTimeout(function(){
                $("#f2").css("display","inline"); 
            },500); 
            setTimeout(function(){
                $("#f3").css("display","inline"); 
            },1000); 
            setTimeout(function(){
                $("#f4").css("display","inline"); 
            },1500); 
            setTimeout(function(){
                $("#f5").css("display","inline"); 
            },2000); 
            setTimeout(function(){
                $("#f6").css("display","inline"); 
            },2500); 
            setTimeout(function(){
                $("#f7").css("display","inline"); 
            },3000); 
            setTimeout(function(){
                $("#f8").css("display","inline"); 
            },3500); 
            setTimeout(function(){
                $("#f9").css("display","inline"); 
            },4000); 
            setTimeout(function(){
                $("#f10").css("display","inline"); 
            },4500); 
            setTimeout(function(){
                $("#f11").css("display","inline"); 
            },5000); 
            setTimeout(function(){
                $("#f12").css("display","inline"); 
            },5500); 
            setTimeout(function(){
                $("#f13").css("display","inline"); 
            },6000); 
            setTimeout(function(){
                $("#f14").css("display","inline"); 
            },6500); 
            setTimeout(function(){
                $("#f15").css("display","inline"); 
            },7000); 
            setTimeout(function(){
                $("#f16").css("display","inline"); 
            },7500); 
            setTimeout(function(){
                $("#f17").css("display","inline"); 
            },8000); 
            setTimeout(function(){
                $("#f18").css("display","inline"); 
            },8500); 
            setTimeout(function(){
                $("#f19").css("display","inline"); 
            },9000); 
            setTimeout(function(){
                $("#f20").css("display","inline"); 
            },9500); 
            setTimeout(function(){
                $("#f21").css("display","inline"); 
            },10000); 
            setTimeout(function(){
                //$("#water").removeClass("nowater")
                audionumber = audionumber - 1;
                water = 1},2750)
        }
    });

})