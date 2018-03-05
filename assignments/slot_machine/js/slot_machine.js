////////////////////////////////////////
var windowheight;
var windowwidth;
var rolling;
var resultnumber1;
var resultnumber2;
var resultnumber3;
var mode;
var looped1 = 0;
var looped2 = 0;
var looped3 = 0;
var roll1roundnumber;
var roll2roundnumber;
var roll3roundnumber;
var roll1resultnumber;
var roll2resultnumber;
var roll3resultnumber;
////////////////////////////////////////
function resize(){
    windowwidth = $(window).width();
    windowheight = $(window).height();
    console.log(windowheight);
    console.log(windowwidth);
    if (windowheight/windowwidth < 0.5835){
        console.log("ture");
        $("#frame").css("height", "100%");
        $("#frame").css("width", windowheight/0.5835 + "px");
        
    }else{
        console.log("false");
        $("#frame").css("width", "100%");
        $("#frame").css("height", windowwidth*0.5835 + "px");
    }
};
function loop1(){
        $("#container_1").animate({top:"-300%"},3000,"linear",function(){
            $("#container_1").animate({top:"0%"},0,"linear",function(){
                looped1 = looped1 + 1;
                if(mode == 0){
                    console.log("random1");
                    console.log(roll1roundnumber + "应该转的圈数");
                    console.log(looped1 + "已经转的圈数");
                    if(looped1 > roll1roundnumber || looped1 == roll1roundnumber){
                        console.log("random stop")
                        $("#container_1").stop();
                        looped = 0;
                        if(roll1resultnumber == 1) {
                            console.log("橘子");
                            $("#container_1").animate({top:"-300%"},2000);
                        }else if(roll1resultnumber == 2){
                            console.log("炸弹");
                            $("#container_1").animate({top:"-100%"},2000);
                        }else{
                            console.log("猕猴桃");
                            $("#container_1").animate({top:"-200%"},2000);
                        };
                    }else{loop1();}
                }else{loop1();};
        })})};
function loop2(){
        $("#container_2").animate({top:"-300%"},2000,"linear",function(){
            $("#container_2").animate({top:"0%"},0,"linear",function(){
                looped2 = looped2 + 1;
                if(mode == 0){
                    console.log("random2");
                    console.log(roll2roundnumber + "colunm 2应该转的圈数");
                    console.log(looped2 + "colunm 2已经转的圈数");
                    if(looped2 > roll2roundnumber || looped2 == roll2roundnumber){
                        console.log("random 2 stop")
                        $("#container_2").stop();
                        looped = 0;
                        if(roll2resultnumber == 1) {
                            console.log("橘子");
                            $("#container_2").animate({top:"-300%"},2000);
                        }else if(roll2resultnumber == 2){
                            console.log("炸弹");
                            $("#container_2").animate({top:"-100%"},2000);
                        }else{
                            console.log("猕猴桃");
                            $("#container_2").animate({top:"-200%"},2000);
                        };
                    }else{loop2();}
                }else{loop2();};
        })})};
function loop3(){
        $("#container_3").animate({top:"-300%"},800,"linear",function(){
            $("#container_3").animate({top:"0%"},0,"linear",function(){
                looped3 = looped3 + 1;
                if(mode == 0){
                    console.log("random3");
                    console.log(roll3roundnumber + "column3应该转的圈数");
                    console.log(looped3 + "column3已经转的圈数");
                    console.log(roll3resultnumber+"检查");
                    if(looped3 > roll3roundnumber || looped3 == roll3roundnumber){
                        console.log("random stop")
                        $("#container_3").stop();
                        looped = 0;
                        if(roll3resultnumber == 1) {
                            console.log("橘子");
                            console.log(roll3resultnumber+"检查");
                            $("#container_3").animate({top:"-300%"},2000);
                        }else if(roll3resultnumber == 2){
                            console.log("炸弹");
                            console.log(roll3resultnumber+"检查");
                            $("#container_3").animate({top:"-100%"},2000);
                        }else{
                            console.log("猕猴桃");
                            console.log(roll3resultnumber+"检查");
                            $("#container_3").animate({top:"-200%"},2000);
                        };
                    }else{loop3();}
                }else{loop3();};
        })})};
/*function loop2(){$("#container_2").animate({top:"-300%"},2000,"linear",function(){
        $("#container_2").animate({top:"0%"},0,"linear",function(){loop2();});
        })};*/
/*function loop3(){$("#container_3").animate({top:"-300%"},5000,"linear",function(){
        $("#container_3").animate({top:"0%"},0,"linear",function(){loop3();});
        })};*/
function randomize(){
    console.log("random")
    looped1 = 0;
    roll1roundnumber = Math.ceil(Math.random() * 3);
    console.log(roll1roundnumber);
    roll2roundnumber = Math.ceil(Math.random() * 3);
    roll3roundnumber = Math.ceil(Math.random() * 3);
    roll1resultnumber = Math.ceil(Math.random() * 3);
    roll2resultnumber = Math.ceil(Math.random() * 3);
    roll3resultnumber = Math.ceil(Math.random() * 3);
    console.log(roll1resultnumber + "," + roll2resultnumber + "," + roll3resultnumber + "三个数字");
    loop1();
    loop2();
    loop3();
    
};
///////////////////////////////////////
$(document).ready(function(){
    mode = 0,
    $("#click_detector").on("click",function(){
        if(mode == 0){
            mode = 1;
            $("#switch").addClass("controllable");
        }else{
            mode = 0;
            $("#switch").removeClass("controllable");
        }
    });

    
    rolling=0;
    resize();
    /*$(".loop_stopper").on("click",function(){
        $(".loop_anim").stop();
        $(".loop_anim").animate({left:"200px",top:"10px"},1500)});*/

    $( "#trigger" ).draggable({ 
        axis: "y", 
        containment: "parent",
        //revert: true,
        start: function(){
            $("#trigger").removeClass("transition");
        },
        stop: function(){
            $("#trigger").addClass("transition");
            $("#trigger").removeAttr("style");
            if(mode == 1){
                if(rolling == 0){
                    $("#container_1").stop();
                    $("#container_2").stop();
                    $("#container_3").stop();
                    loop1();
                    loop2();
                    loop3();
                    console.log(rolling);
                    rolling = 3;
                } else if(rolling == 3){
                    console.log(rolling);
                    console.log("to");
                    $("#container_1").stop();
                    rolling = 2;
                    console.log(rolling);
                    var moniterheight = $("#roll_1").height();
                    console.log(moniterheight);
                    var top1 = $("#container_1").position().top;
                    console.log(top1);
                    resultnumber1 = Math.ceil(Math.abs(top1 / moniterheight)) + 1;
                    console.log("这是" + resultnumber1);
                    if(resultnumber1 == 4){
                        resultnumber1 = 1
                    };
                    if(resultnumber1 == 1) {
                        console.log(1);
                        $("#container_1").animate({top:"-300%"},1000);
                    }else if(resultnumber1 == 2){
                        console.log(2);
                        $("#container_1").animate({top:"-100%"},1000);
                    }else{
                        console.log(3);
                        $("#container_1").animate({top:"-200%"},1000);
                    };
                }else if(rolling == 2){   
                    $("#trigger").addClass("transition");
                    $("#trigger").removeAttr("style");
                    console.log("transition");    
                    //$("#container_2").addClass("paused"); 
                    rolling = 1;
                    $("#container_2").stop();
                    console.log(rolling);
                    var moniterheight2 = $("#roll_2").height();
                    console.log(moniterheight);
                    var top2 = $("#container_2").position().top;
                    console.log(top1);
                    resultnumber2 = Math.ceil(Math.abs(top2 / moniterheight2)) + 1;
                    console.log("这是" + resultnumber2);
                    if(resultnumber2 == 4){
                        resultnumber2 = 1
                    };
                    if(resultnumber2 == 1) {
                        console.log(1);
                        $("#container_2").animate({top:"-300%"},1000);
                    }else if(resultnumber2 == 2){
                        console.log(2);
                        $("#container_2").animate({top:"-100%"},1000);
                    }else{
                        console.log(3);
                        $("#container_2").animate({top:"-200%"},1000);
                    };
                }else if(rolling == 1){   
                    $("#trigger").addClass("transition");
                    $("#trigger").removeAttr("style");
                    console.log("transition");    
                    //$("#container_3").addClass("paused"); 
                    rolling = 0;
                    $("#container_3").stop();
                    console.log(rolling);
                    var moniterheight3 = $("#roll_3").height();
                    console.log(moniterheight);
                    var top3 = $("#container_3").position().top;
                    console.log(top3);
                    resultnumber3 = Math.ceil(Math.abs(top3 / moniterheight3)) + 1;
                    console.log("这是" + resultnumber3);
                    if(resultnumber3 == 4){
                        resultnumber3 = 1
                    };
                    if(resultnumber3 == 1) {
                        console.log(1);
                        $("#container_3").animate({top:"-300%"},2000);
                    }else if(resultnumber3 == 2){
                        console.log(2);
                        $("#container_3").animate({top:"-100%"},2000);
                    }else{
                        console.log(3);
                        $("#container_3").animate({top:"-200%"},2000);
                    };
                    console.log("resultnumbers1: " + resultnumber1);
                    console.log("resultnumbers2: " + resultnumber2);
                    console.log("resultnumbers3: " + resultnumber3);
                    if(resultnumber1 == resultnumber2 && resultnumber2 == resultnumber3){console.log("bingo!")}
            };
        }else{
                randomize();
            }
            
        }
    });
    $("body").on("click",function(){
            $("#trigger").removeAttr("style");
        console.log("remove style");
    })
});
$(window).resize(function(){
    resize();  
});

