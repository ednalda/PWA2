// JavaScript Document

(function($){  //10. Explain why this is used instead of a document ready function. Comment your answer out on line 4.


//4. Add the jQuery function-select the h2 of this simple web page.

$(document).ready(function(){
$("h2").css("background-color","yellow");
});

//5. Selectors using IDS
	$(document).ready(function(){
	#hlisting{
    color: red;
});
 }
//6. Selectors using Classes

$(document).ready(function(){
.hlisting america{
background-color:yellow;
}

//7. Manipulator
$( "p" ).addClass( "myClass yourClass" );
//8. Manipulator-Before

$( ".buy" ).before( "<p>1-555-Tibbles</p>" );

//9. CSS Method - Complete this line
 $(".trip").on("mouseenter", function() {
    $(this).css("______", "_____");
  });
  
});

})(jQuery) //Closes main tag