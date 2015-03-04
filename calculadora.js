jQuery(document).ready(function() {

	display = $("#result");
	memory = 0;

	$(".num , .operation").click(function() {
		display.val(display.val().concat($(this).html()));
	});

	$("#equal").click(function(){
		display.val(eval(display.val()));
	});


	$("#del").click(function(){
		d = display.val();
		display.val(d.slice(0,d.length-1));
	});

	$("#C").click(function(){
		display.val("");
	});

	$("#mem").click(function(){
		memory = display.val();
	});

	$("#MR").click(function(){
		if (display.val() != ""){
			display.val(display.val().concat(memory));
		}else{
			display.val(memory);
		}
		
	});
});