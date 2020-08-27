
//==================side-bar==================

(function () {
	
	$(".button").on('click', function(){
		$(".button").toggleClass("active");
		$(".sidebar").toggleClass("sidebar-active");
		$(".sidebar-item").toggleClass("active")
	})
	
	
	$("#burger").on('click',function(){
		$("#burger").toggleClass("cross")
	});


}).call(this);
