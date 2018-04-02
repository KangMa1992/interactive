var status = 0
$(document).ready(function(){
    $("body").on("click",function(){
        if(status == 0){
       console.log("dimensional");  
        $(".a1").addClass("dimensional3");
        $(".b2").addClass("dimensional3");
        $(".c3").addClass("dimensional3");
        $(".d4").addClass("dimensional3");
        $(".e5").addClass("dimensional3");
        $(".f6").addClass("dimensional3");
        $(".g7").addClass("dimensional3");
        $(".h8").addClass("dimensional3");
        $(".i9").addClass("dimensional3");
        ////
        $(".a1").addClass("tall");
        $(".b2").addClass("tall");
        $(".c3").addClass("tall");
        $(".d4").addClass("tall");
        $(".e5").addClass("tall");
        $(".f6").addClass("tall");
        $(".g7").addClass("tall");
        $(".h8").addClass("tall");
        $(".i9").addClass("tall");
        ///
        
        $(".upper_case").addClass("tall2");
        $(".lower_case").addClass("tall2");
        $(".numeral").addClass("tall2");
        $(".punctuation").addClass("tall2");
        
        status = 1;
    }else{
       console.log("dimensional");  
        $(".a1").removeClass("dimensional3");
        $(".b2").removeClass("dimensional3");
        $(".c3").removeClass("dimensional3");
        $(".d4").removeClass("dimensional3");
        $(".e5").removeClass("dimensional3");
        $(".f6").removeClass("dimensional3");
        $(".g7").removeClass("dimensional3");
        $(".h8").removeClass("dimensional3");
        $(".i9").removeClass("dimensional3");
        ////
        $(".a1").removeClass("tall");
        $(".b2").removeClass("tall");
        $(".c3").removeClass("tall");
        $(".d4").removeClass("tall");
        $(".e5").removeClass("tall");
        $(".f6").removeClass("tall");
        $(".g7").removeClass("tall");
        $(".h8").removeClass("tall");
        $(".i9").removeClass("tall");
        ///
        
        $(".upper_case").addClass("tall2");
        $(".lower_case").addClass("tall2");
        $(".numeral").addClass("tall2");
        $(".punctuation").addClass("tall2");
        status = 0;};
    });
    
})