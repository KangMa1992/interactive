var rabbitposition;
var turtleposition;
//var int = setInterval(function(){getpositions();},100);
var turtlemove = 1
var rabbitmove = 1
var time = 1
function getpositions(){
    //rabbitposition = $("#rabbit").position().left;
    //turtleposition = $("#turtle").position().left;
    //console.log(rabbitposition);
    //console.log(turtleposition);
    //getpositions();
    //当龟和兔相遇的时候执行：
    //console.log(turtlemove + "循环开始");
    //console.log($(window).width() - $("#rabbit").position().left + "兔子的位置");
    //console.log($("#turtle").position().left);
    if( $("#rabbit").position().left - $("#turtle").position().left < 200 && turtlemove == 1 && $("#turtle").position().left > 10){//当龟和兔相遇的时候执行：
        //console.log("turtleture");
        //console.log( $("#rabbit").position().left - $("#turtle").position().left)
        //console.log("this shouldn't appear if false");
        $("#turtle").stop();/*让龟停下*/
        $("#turtle").addClass("runback");
        console.log("turtlestop");    
        turtlemove = 0;
        $("#turtle").animate({left:0 + "%"},3000,"linear",function(){
             turtlemove = 1;
             $("#turtle").removeClass("runback");
             $("#turtle").animate({left:100 + "%"},6000,"linear",function(){
             })
        });
        
        }else if($("#turtle").position().left < 10){
            console.log("干扰")
            console.log($("#turtle").position().left < 10)
            console.log("turtlefalse");
            //$("#turtle").animate({left:90 + "%"},6000);
        };
    if( $("#rabbit").position().left - $("#turtle").position().left < 200 && rabbitmove == 1){//当龟和兔相遇的时候执行：
        //console.log("turtleture");
        //console.log( $("#rabbit").position().left - $("#turtle").position().left)
        //console.log("this shouldn't appear if false");
        $("#rabbit").stop();/*让龟停下*/
        console.log("rabbitstop");    
        rabbitmove = 0;
        $("#rabbit").addClass("runback");
        $("#rabbit").animate({right:0 + "%"},1000,"linear",function(){
             rabbitmove = 1;    
        $("#rabbit").removeClass("runback");
             $("#rabbit").animate({right:90 + "%"},2000,"linear",function(){
             })
        });
        
        }else if($("#rabbit").position().left > 900){
            console.log("干扰")
            console.log($("#rabbit").position().left < 10)
            console.log("rabbitfalse");
            //$("#turtle").animate({left:90 + "%"},6000);
        };

    /*if( $("#rabbit").position().left - $("#turtle").position().left < 100 && rabbitmove == 1){
        console.log("rabbitture");
        console.log( $("#rabbit").position().left - $("#turtle").position().left)
        $("#rabbit").stop();//让兔停下
        console.log("rabbitstop")
        rabbitmove = 0;
        $("#rabbit").animate({left:80 + "%"},2000);
        console.log($(window).width - $("#rabbit").position().left < 90000000);  
        console.log($(window).width - $("#rabbit").position().left + "大于9000000");
        }else if($(window).width - $("#rabbit").position().left < 90000000){
            console.log("rabbitfalse");          
            $("#rabbit").animate({left:0 + "%"},2000);
        };*/
    };

/////////

$(document).ready(function(){
    setInterval(function(){getpositions();},100);
    $("#turtle").animate({left:90 + "%"},6000,"linear"); 
    $("#rabbit").animate({right:90 + "%"},2000,"linear");
    $("#switch").on("click",function(){
       if(time == 1){
           $(".background").addClass("abcd");
           $("#turtle").pause();
           $("#rabbit").pause();
            setTimeout(function(){
            $("#turtle").pause();
           $("#rabbit").pause();
              // Do something after 2 seconds have passed
            }, 200);
            setTimeout(function(){
            $("#turtle").pause();
           $("#rabbit").pause();
              // Do something after 2 seconds have passed
            }, 400);
           setTimeout(function(){
            $("#turtle").pause();
           $("#rabbit").pause();
              // Do something after 2 seconds have passed
            }, 600);
           $(".mooncircle").addClass("turnintomoon")
           time = 0;
       }else{
           $(".background").removeClass("abcd");
           $("#turtle").resume();
           $("#rabbit").resume();
           $(".mooncircle").removeClass("turnintomoon")
           time = 1;
       }
    });
                  
                  })