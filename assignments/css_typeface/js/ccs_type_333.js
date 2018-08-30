var status = 0;
var documentheight;
///////////
function adjustbg(){
        documentheight = $(document).height();
        console.log(documentheight);
        $(".background").height(documentheight);
    setTimeout(function(){
        documentheight = $(document).height();
        console.log(documentheight);
        $(".background").height(documentheight);}, 500);}
//////////




//////////
$(document).ready(function(){
    
alert("aaa");
    
var scrollFunc = function (e) {  
        e = e || window.event;  
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
                alert("滑轮向上滚动");  
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                alert("滑轮向下滚动");  
            }  
        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail> 0) { //当滑轮向上滚动时  
                alert("滑轮向上滚动");  
            }  
            if (e.detail< 0) { //当滑轮向下滚动时  
                alert("滑轮向下滚动");  
            }  
        }  
    }  
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {//firefox  
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollFunc;  

    /////////////////////////
    
    
    adjustbg();

    //////
    $(function() {
  var $input = $('#text-input');
  var $destination = $('#text-destination');
  var space = getHTMLForCharacter(' ');
  
  function getHTMLForCharacter(character) {
    var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
    var characterHTML = '<div class="letter" data-character="' + character + '">' + characterDefinition + '</div>';
    
    if ( characterDefinition != undefined ) {
      return characterHTML;
    }
  }
  
  function writeText() {
    var wordArray = [];
    var words = $input.val().split(' ');

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split('');
      var letterElements = letters.map(getHTMLForCharacter);
      wordArray.push(
        '<div class="word">' +
        letterElements.join('') +
        '</div>'
      );
    }

    $destination.html( wordArray.join(space) );
  }
  
  $input.on('keyup', function() {
    writeText();
      if(status == 1){
        $("#text-destination>.word>.letter").addClass("lettertall");}
  });
});
    //////
    
    $('.letters').each(function() {

  var $letterWrapper = $(this);
  var words = $letterWrapper.html().split(' ');
  var wordArray = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var letters = word.split('');
    var letterElements = letters.map(getHTMLForCharacter);
    wordArray.push(
    	'<div class="word">' +
    	letterElements.join('') +
      '</div>'
    );
  }
  
  console.log(wordArray.join(getHTMLForCharacter(' ')));

  $letterWrapper.html(wordArray.join(getHTMLForCharacter(' ')));
});

function getHTMLForCharacter(character) {
    	var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
    	var characterHTML = '<div class="letter" data-character="' + character + '">' + characterDefinition + '</div>';
      return characterHTML;
}

    ///////////////////////////////

    $(".engraveit").on("click",function(){
        if(status == 0){  
        adjustbg();
        $(".background").addClass("stone");
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
        ////////
        $(".a1").addClass("tall");
        $(".b2").addClass("tall");
        $(".c3").addClass("tall");
        $(".d4").addClass("tall");
        $(".e5").addClass("tall");
        $(".f6").addClass("tall");
        $(".g7").addClass("tall");
        $(".h8").addClass("tall");
        $(".i9").addClass("tall");
        /////////
        $(".a1").addClass("engrave");
        $(".b2").addClass("engrave");
        $(".c3").addClass("engrave");
        $(".d4").addClass("engrave");
        $(".e5").addClass("engrave");
        $(".f6").addClass("engrave");
        $(".g7").addClass("engrave");
        $(".h8").addClass("engrave");
        $(".i9").addClass("engrave");
        /////////
        $(".upper_case").addClass("tall2");
        $(".lower_case").addClass("tall2");
        $(".numeral").addClass("tall2");
        $(".punctuation").addClass("tall2");
        $(".letter").addClass("lettertall");
        ////////
        //$(".letters").html("HELLO, THIS IS CYBORDER-ROMAN!");
        
    
   
        status = 1;
    }else{
        $("body").removeClass("stone");
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
        $(".a1").removeClass("engrave");
        $(".b2").removeClass("engrave");
        $(".c3").removeClass("engrave");
        $(".d4").removeClass("engrave");
        $(".e5").removeClass("engrave");
        $(".f6").removeClass("engrave");
        $(".g7").removeClass("engrave");
        $(".h8").removeClass("engrave");
        $(".i9").removeClass("engrave");
        ///
        
        $(".upper_case").removeClass("tall2");
        $(".lower_case").removeClass("tall2");
        $(".numeral").removeClass("tall2");
        $(".punctuation").removeClass("tall2");
        $(".letter").removeClass("lettertall");
        ///
        //$(".letters").html("HELLO, THIS IS CYBORDER-GOTHIC!");
        
        
    

        
        status = 0;};
    });
});
$(window).resize(function(){
    adjustbg();
});