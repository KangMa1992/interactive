function randomcolor(){
    var red = Math.floor(Math.random()* 255) ;
    var green = Math.floor(Math.random()* 255) ;
    var blue = Math.floor(Math.random() * 255);
    var color="rgb("+ red +", " + green + ", " +blue+ ") ";
    console.log(color);
    $("body").css("background-color", color)
    
}
$(document).ready(function(){
    randomcolor();
    $("#button").on("click",function(){randomcolor()});
})