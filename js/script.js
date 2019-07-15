$(document).ready(function(){
    let input = $("#input");
    input.val("");
    let output = $("#output");
    output.val("");
	let operationScreen = $(".operationScreen");
	let numberSection = $(".numberSection");
	let mathSymbol = $(".mathSymbol div");
	let numberBox = $(".inputButtonsContainer .row div");

	// manage height of all element according to screen
	function manageHeight(){
		let windowHeight = $(window).height();
		let numberSectionHeight = windowHeight-operationScreen.height();
		// set dynamic height to number section
		numberSection.css({'height':numberSectionHeight});
		numberBox.css({'height':numberSectionHeight/4});
		mathSymbol.css({'height':numberSectionHeight/5});
		console.log("hello world");
	}
	manageHeight();

	$( window ).resize(function() {
		manageHeight();
		console.log("working");
	});

   $(".operations").click(function(){
      let data = $(this).data('operation');
      console.log(data);
   });

   $(document).keypress(function(key) {
	   	let enterKey = String.fromCharCode(key.which);
	   	console.log("keycode in string :"+enterKey);
	   	console.log(key.which);
	   	let oldValue = input.val();

	   	if(key.which == 8){
	   		console.log("i am back which space");
	   	}


	   	if(input.is(":focus")){
	   		console.log("active");
	   	}else{
	   		 input.val(oldValue+enterKey);
	   	     console.log(oldValue);
	   	}
	   	if(key.which==13){
	   		// console.log(input.val())
	   		var result = eval(input.val());
	   		output.val(result);
	   	}


	});

});