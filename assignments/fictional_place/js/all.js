var windowwidth;
///////
/*function nav(){
    windowwidth=$(window).width();
    if(windowwidth < 480 || windowwidth == 480){
        $("menu_button").
    }
}*/
function showmenu(){$("nav").addClass("show");
                    $(".invisible").addClass("show2");
                   };
function hidemenu(){$("nav").removeClass("show");
                    $(".invisible").removeClass("show2");
};
$(document).ready(function(){
    $(".menu_button").on("click",function(){
        showmenu();
    });
    $(".invisible").on("click",function(){
        hidemenu();
    });
});

