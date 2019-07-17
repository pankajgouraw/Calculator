$(document).ready(function(){
    let input = $("#input");
    input.val("");
    let output = $("#output");
    output.val("");
	let operationScreen = $(".operationScreen");
	let numberSection = $(".numberSection");
	let mathSymbol = $(".mathSymbol div");
	let numberBox = $(".inputButtonsContainer .row div");
	let result='';

	// make outputfield blank
	input.keydown(function(){
		if($(this).val()==''){
			output.val('');
     	}
	})

	// manage height of all element according to screen
	function manageHeight(){
		let windowHeight = $(window).height();
		let numberSectionHeight = windowHeight-operationScreen.height();
		// set dynamic height to number section
		numberSection.css({'height':numberSectionHeight});
		numberBox.css({'height':numberSectionHeight/4});
		mathSymbol.css({'height':numberSectionHeight/4});
	}
	manageHeight();

	$( window ).resize(function() {
		manageHeight();
	});

   $(".operations").click(function(){
      let data = $(this).data('operation');
   });

   $(document).keypress(function(key) {
	   	let enterKey = String.fromCharCode(key.which);
	   	console.log("keycode in string :"+enterKey);
	   	console.log("code of key" + key.which);
	   	let oldValue = input.val();

	   	if(input.is(":focus")){
	   		// console.log("active");
	   	}else{
	   		 input.val(oldValue+enterKey);
	   	     console.log(oldValue);
	   	     setTimeout(function(){
	   	     	input.focus();
	   	     	if(input.val()==''){
	   	     		output.val('');
	   	     	}
	   	     },3000)
	   	     
	   	}

	   	if(key.which==47 || key.which==43 || key.which==42 || key.which==45){
	   		console.log("you pressed math symbol...");
	   		result = eval(input.val());
	   		input.val(result);
	   	}

	   	if(key.which==13){
	   		// console.log(input.val())
	   		result = eval(input.val());
	   		// console.log(typeof result);
	   		if(!Number.isInteger(result)){
               var x = result.toFixed(3)
	   	       output.val(x);
	   		}else{
	   		   output.val(result);
	   		}
	   		// input.val(result);
	   	}


	});

});