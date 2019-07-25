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

  // end user input on screen | keyboard
    let newValue = '';
    let showData ='';

   $(".operations").click(function(){
      let data = $(this).data('operation');
      console.log("keyboard input data :" +data);
      $(this).addClass("active");
      setTimeout(function(){$('.operations').removeClass('active')},200);
      let oldValue = input.val();

      if(data=='='){
	      	result =eval(oldValue);
	      	 if(!Number.isInteger(result)){
	               var x = result.toFixed(3)
		   	       output.val(x);
		   		}else{
		   		   output.val(result);
		   		}
      }else{
        newValue = oldValue+data;
        input.val(newValue);
     }


      if(data=='/' || data=='+' || data=='-' || data=='*'){
      	// var str = input.val().replace(/[^-()\d/*+.]/g, '');
       // console.log(eval(str));
 	   	// 	result = eval(input.val());
	   		// input.val(result);
      }




   });
  
  // end user input on screen | keyboard





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

	  

	   	if(key.which==13){
	   		$('.equal').addClass('active');
		   		setTimeout(function(){
		   		$('.equal').removeClass('active');	
		   		},200);
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



	   		if(key.which==43){
		   		$('.plus').addClass('active');
		   		setTimeout(function(){
		   		$('.plus').removeClass('active');	
		   		},200);

		   	}

		   	if(key.which==48){
		   		$('.zero').addClass('active');
		   		setTimeout(function(){
		   		$('.zero').removeClass('active');	
		   		},200);
		   	}

		   	if(key.which==49){
		   		$('.one').addClass('active');
		   		setTimeout(function(){
		   		$('.one').removeClass('active');	
		   		},200);
		   	}

		   if(key.which==50){
		   		$('.two').addClass('active');
		   		setTimeout(function(){
		   		$('.two').removeClass('active');	
		   		},200);
		   	}

		   	if(key.which==51){
		   		$('.three').addClass('active');
		   		setTimeout(function(){
		   		$('.three').removeClass('active');	
		   		},200);
		   	}

		   	if(key.which==52){
		   		$('.four').addClass('active');
		   		setTimeout(function(){
		   		$('.four').removeClass('active');	
		   		},200);
		   	}

		   if(key.which==53){
		   		$('.five').addClass('active');
		   		setTimeout(function(){
		   		$('.five').removeClass('active');	
		   		},200);
		   	}

		   	if(key.which==54){
		   		$('.six').addClass('active');
		   		setTimeout(function(){
		   		$('.six').removeClass('active');	
		   		},200);
		   	}

		   	if(key.which==55){
		   		$('.seven').addClass('active');
		   		setTimeout(function(){
		   		$('.seven').removeClass('active');	
		   		},200);
		   		}

		   	if(key.which==56){
		   		$('.eight').addClass('active');
		   		setTimeout(function(){
		   		$('.eight').removeClass('active');	
		   		},200);
		   	}

		   	if(key.which==57){
		   		$('.nine').addClass('active');
		   		setTimeout(function(){
		   		$('.nine').removeClass('active');	
		   		},200);
		   	}

		   	if(key.which==58){
		   		$('.plus').addClass('active');
		   		setTimeout(function(){
		   		$('.plus').removeClass('active');	
		   		},200);
		   	}

		   	if(key.which==45){
		   		$('.minus').addClass('active');
		   		setTimeout(function(){
		   		$('.minus').removeClass('active');	
		   		},200);
		   	}

		    if(key.which==47){
		   		$('.divide').addClass('active');
		   		setTimeout(function(){
		   		$('.divide').removeClass('active');	
		   		},200);

		   	}

		   	if(key.which==42){
		   		$('.multiply').addClass('active');
		   		setTimeout(function(){
		   		$('.multiply').removeClass('active');	
		   		},200);
		   	}

		   	if(key.which==46){
		   		$('.dot').addClass('active');
		   		setTimeout(function(){
		   		$('.dot').removeClass('active');	
		   		},200);
		   	}

	   	

        // execute the operation when click on nay arithematic operation
	   	if(key.which==47 || key.which==43 || key.which==42 || key.which==45){
	   		console.log("you pressed math symbol...");
	   		result = eval(input.val());
	   		input.val(result);
	   	}


	});

});