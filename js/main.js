$(document).ready(function() {
	//nav-scrollbar
	var swiper1 = new Swiper('#nav-vertical', {
		direction: 'vertical',
		allowTouchMove: false,
		mousewheel: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	
	//ios vertical
	$(".verticalSwiper span").eq(0).hover(function() {
		$(".guide-text1").css("display", "block");
	});
	$(".verticalSwiper span").eq(0).mouseleave(function() {
		$(".guide-text1").css("display", "none");
	});
	$(".verticalSwiper span").eq(1).hover(function() {
		$(".guide-text2").css("display", "block");
	});
	$(".verticalSwiper span").eq(1).mouseleave(function() {
		$(".guide-text2").css("display", "none");
	});
	$(".verticalSwiper span").eq(2).hover(function() {
		$(".guide-text3").css("display", "block");
	});
	$(".verticalSwiper span").eq(2).mouseleave(function() {
		$(".guide-text3").css("display", "none");
	});
    
    //category button
    $('.dropdown').mouseleave(function() {
		$(".dropdown-content").slideUp(500);

	});

	$(".dropbtn").hover(function() {
		$(".dropdown-content").slideDown(1000);
	});
	
	//all category
	$(".option1").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("All Category")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		$(".dropdown-content").slideUp(1000);

	});
	//screen
	$(".option2").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Screen")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		
//		$(".div10 .maskless").addClass("highlight-mask");
//		$(".div1-1 .maskless").addClass("highlight-mask");
//		$(".div1-2 .maskless").addClass("highlight-mask");
//		$(".div1-3 .maskless").addClass("highlight-mask");
//		$(".div1-4 .maskless").addClass("highlight-mask");
//		$(".div1-7 .maskless").addClass("highlight-mask");
//		$(".div1-8 .maskless").addClass("highlight-mask");
//		$(".div1-9 .maskless").addClass("highlight-mask");
//		$(".div1-10 .maskless").addClass("highlight-mask");
//		$(".div1-11 .maskless").addClass("highlight-mask");
//		$(".div1-5 .maskless").addClass("highlight-mask");
//		$(".div1-12 .maskless").addClass("highlight-mask");
//		$(".div1-13 .maskless").addClass("highlight-mask");
//		$(".div1-14 .maskless").addClass("highlight-mask");
//		$(".div1-15 .maskless").addClass("highlight-mask");
		$(".img-20").addClass("highlight");
//		$(".div1-11").addClass("highlight-chip");
		$(".dropdown-content").slideUp(1000);

	});
    
    //shell
	$(".option3").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Shell")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		$(".img-1").addClass("highlight");
		$(".img-3").addClass("highlight");
		$(".img-14").addClass("highlight");
		$(".dropdown-content").slideUp(1000);

	});
	
	 //camera
	$(".option4").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Camera")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		$(".img-2").addClass("highlight");
		$(".img-15").addClass("highlight");
		$(".img-16").addClass("highlight");
		$(".img-17").addClass("highlight");
		$(".dropdown-content").slideUp(1000);
	});
	
	//Vibrator
	$(".option5").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Vibrator")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		$(".img-8").addClass("highlight");
		$(".dropdown-content").slideUp(1000);
	});
	
	//network spped
	$(".option7").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Network Speed")
		$(".highlight").removeClass("highlight");
		$(".highlight-mask").removeClass("highlight-mask");
		$(".highlight-chip").removeClass("highlight-chip");
		
		$(".div10 .maskless").addClass("highlight-mask");
		$(".div1-1 .maskless").addClass("highlight-mask");
		$(".div1-2 .maskless").addClass("highlight-mask");
		$(".div1-3 .maskless").addClass("highlight-mask");
		$(".div1-4 .maskless").addClass("highlight-mask");
		$(".div1-7 .maskless").addClass("highlight-mask");
		$(".div1-8 .maskless").addClass("highlight-mask");
		$(".div1-11 .maskless").addClass("highlight-mask");
		$(".div1-12 .maskless").addClass("highlight-mask");
		$(".div1-13 .maskless").addClass("highlight-mask");
		$(".div1-14 .maskless").addClass("highlight-mask");
		$(".div1-15 .maskless").addClass("highlight-mask");
		$(".img-9").addClass("highlight");
		$(".img-5").addClass("highlight");
		$(".div1-5").addClass("highlight-chip");
		$(".div1-9").addClass("highlight-chip");
		$(".div1-10").addClass("highlight-chip");
		$(".dropdown-content").slideUp(1000);
	});
	
	//Hard Disk (RAM)
	$(".option8").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Hard Disk(RAM)")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		$(".img-8").addClass("highlight");
		$(".dropdown-content").slideUp(1000);
	});
	
	//Flash Memory (ROM)
	$(".option9").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Flash Memory(ROM)")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		
		$(".div11 .maskless").addClass("highlight-mask");
		$(".div2-2 .maskless").addClass("highlight-mask");
	    $(".div2-1").addClass("highlight-chip");
		$(".dropdown-content").slideUp(1000);
	});
	
	//Mobile Payment (NFC)
	$(".option10").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Mobile Payment (NFC)")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		
		$(".div10 .maskless").addClass("highlight-mask");
		$(".div1-1 .maskless").addClass("highlight-mask");
		$(".div1-2 .maskless").addClass("highlight-mask");
		$(".div1-3 .maskless").addClass("highlight-mask");
		$(".div1-4 .maskless").addClass("highlight-mask");
		$(".div1-5 .maskless").addClass("highlight-mask");
		$(".div1-7 .maskless").addClass("highlight-mask");
		$(".div1-8 .maskless").addClass("highlight-mask");
		$(".div1-9 .maskless").addClass("highlight-mask");
		$(".div1-10 .maskless").addClass("highlight-mask");
		$(".div1-11 .maskless").addClass("highlight-mask");
		$(".div1-12 .maskless").addClass("highlight-mask");
		$(".div1-13 .maskless").addClass("highlight-mask");
		$(".div1-14 .maskless").addClass("highlight-mask");
	    $(".div1-15").addClass("highlight-chip");
		$(".dropdown-content").slideUp(1000);
	});
	
		//Heat Dissipation 
	$(".option11").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Heat Dissipation")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		$(".img-19").addClass("highlight");
		$(".img-13").addClass("highlight");
		$(".dropdown-content").slideUp(1000);
	});
	
		//Battery / Power
	$(".option12").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Battery / Power")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		
		$(".div10 .maskless").addClass("highlight-mask");
		$(".div1-1 .maskless").addClass("highlight-mask");
		$(".div1-2 .maskless").addClass("highlight-mask");
		$(".div1-3 .maskless").addClass("highlight-mask");
		$(".div1-4 .maskless").addClass("highlight-mask");
		$(".div1-5 .maskless").addClass("highlight-mask");
		$(".div1-7 .maskless").addClass("highlight-mask");
		$(".div1-8 .maskless").addClass("highlight-mask");
		$(".div1-9 .maskless").addClass("highlight-mask");
		$(".div1-10 .maskless").addClass("highlight-mask");
		$(".div1-11 .maskless").addClass("highlight-mask");
		$(".div1-12 .maskless").addClass("highlight-mask");
		$(".div1-13 .maskless").addClass("highlight-mask");
		$(".div1-14 .maskless").addClass("highlight-mask");
		$(".div1-15 .maskless").addClass("highlight-mask");
		 $(".div1-9").addClass("highlight-chip");
		 $(".div1-10").addClass("highlight-chip");
		$(".img-8").addClass("highlight");
		$(".img-4").addClass("highlight");
		$(".dropdown-content").slideUp(1000);
	});
	
			//Wifi / Bluetooth
	$(".option13").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Wifi / Bluetooth")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		
		$(".div10 .maskless").addClass("highlight-mask");
		$(".div1-1 .maskless").addClass("highlight-mask");
		$(".div1-2 .maskless").addClass("highlight-mask");
		$(".div1-3 .maskless").addClass("highlight-mask");
		$(".div1-4 .maskless").addClass("highlight-mask");
		$(".div1-5 .maskless").addClass("highlight-mask");
		$(".div1-8 .maskless").addClass("highlight-mask");
		$(".div1-9 .maskless").addClass("highlight-mask");
		$(".div1-10 .maskless").addClass("highlight-mask");
		$(".div1-11 .maskless").addClass("highlight-mask");
		$(".div1-12 .maskless").addClass("highlight-mask");
		$(".div1-13 .maskless").addClass("highlight-mask");
		$(".div1-14 .maskless").addClass("highlight-mask");
		$(".div1-15 .maskless").addClass("highlight-mask");
		
		$(".div1-7").addClass("highlight-chip");
	
		$(".dropdown-content").slideUp(1000);
	});
	
				//Headphone/Microphone
	$(".option14").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Headphone/Microphone")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		
		$(".div11 .maskless").addClass("highlight-mask");
		$(".div2-1 .maskless").addClass("highlight-mask");
		 $(".div2-2").addClass("highlight-chip");
		$(".img-18").addClass("highlight");
		$(".img-7").addClass("highlight");
		$(".dropdown-content").slideUp(1000);
	});
	
					//Other
	$(".option15").click(function() {
		//$(".dropbtn").text($(this).text())
		$(".dropbtn span").text("Other")
		$(".highlight").removeClass("highlight");
		$(".highlight-chip").removeClass("highlight-chip");
		$(".highlight-mask").removeClass("highlight-mask");
		$(".img-10").addClass("highlight");
		$(".img11").addClass("highlight");
		$(".dropdown-content").slideUp(1000);
	});
	//end

	

	//slide2 front-back
	$('#btn-back').click(function() {
		$("#btn-back").css("color", "darkgrey");
		$("#btn-back").css("cursor", "initial");
		$("#btn-front").css("color", "white");
		$("#btn-front").css("cursor", "pointer");

	});

	$('#btn-front').click(function() {
		$("#btn-back").css("color", "white");
		$("#btn-back").css("cursor", "pointer");
		$("#btn-front").css("color", "darkgrey");
		$("#btn-front").css("cursor", "initial");

	});

	//slide-2 button switch
	var swiper2 = new Swiper('#button-switch', {
		allowTouchMove: false,
		mousewheel: false,
	});

	$("#btn1").click(function() {
		swiper2.slideTo(0, 1000, false);
	});
	$("#btn2").click(function() {
		swiper2.slideTo(1, 1000, false);
	});

	var swiper6 = new Swiper('#swiper6', {
		direction: 'vertical',
		allowTouchMove: false,
		mousewheel: false,

	});

	$("#btn-front").click(function() {
		swiper6.slideTo(0, 1000, false);
	});
	$("#btn-back").click(function() {
		swiper6.slideTo(1, 1000, false);
	});
	// button-system

	var Slideicon = function(element, options) {
		this.element = element;
		this.options = {
			cover: options.cover,
			index: options.index,
			callback: options.callback
		};
		this.init();
	};

	Slideicon.prototype.init = function() {
		var _this = this;
		this.element.on('click', 'li', function() {
			$(this).nextAll().removeClass('active');
			$(this).prevAll().removeClass('active');
			var width = $(this).width();
			var left = ($(this).index()) * width;
			_this.options.cover.attr("style", "left:" + left + "px");
			$(this).addClass("active");
			params = $(this).attr('type');
			_this.options.callback(params)
		});
	};

	new Slideicon($("list"), {
		index: 0,
		cover: $("#bg"),
		callback: function(data) {
			console.log(data)
		}
	});
	new Slideicon($("#hourlist"), {
		index: 0,
		cover: $("#thirdbg"),
		callback: function(data) {
			console.log(data)
		}
	});

});
// end

//ios-hover box
$(document).ready(function() {
	$(".hoverFunction").mouseenter(function() {
		$(this).addClass("hovered");
		$(".mask").css("background-color", "rgba(2, 8, 14, 0.6");
		$(".hovered .mask").css("background-color", "rgba(2, 8, 14, 0");
	});

	$(".hoverFunction").mouseleave(function() {
		//   遮罩层变为无色
		$(".mask").css("background-color", "rgba(2, 8, 14, 0)");
		//           鼠标离开移除悬浮标记
		$(".hovered").removeClass("hovered");
	});

	$('.div1').mouseenter(function() {
		$(".box1").fadeIn(800);

	});

	$('.box1').mouseenter(function() {
		$(".box1").fadeIn(0);
	});

	$('.div1').mouseleave(function() {
		$(".box1").fadeOut(0);

	});

	$('.box1').mouseleave(function() {
		$(".box1").fadeOut(500);

	});
	//front2
	$('.div2').mouseenter(function() {
		$(".box2").fadeIn(800);

	});

	$('.box2').mouseenter(function() {
		$(".box2").fadeIn(0);
	});

	$('.div2').mouseleave(function() {
		$(".box2").fadeOut(0);

	});

	$('.box2').mouseleave(function() {
		$(".box2").fadeOut(500);

	});

	// front3
	$('.div3').mouseenter(function() {
		$(".box3").fadeIn(800);

	});

	$('.box3').mouseenter(function() {
		$(".box3").fadeIn(0);
	});

	$('.div3').mouseleave(function() {
		$(".box3").fadeOut(0);

	});

	$('.box3').mouseleave(function() {
		$(".box3").fadeOut(500);

	});

	//front 4
	$('.div4').mouseenter(function() {
		$(".box4").fadeIn(800);

	});

	$('.box4').mouseenter(function() {
		$(".box4").fadeIn(0);
	});

	$('.div4').mouseleave(function() {
		$(".box4").fadeOut(0);

	});

	$('.box4').mouseleave(function() {
		$(".box4").fadeOut(500);

	});

	// front 5
	$('.div5').mouseenter(function() {
		$(".box5").fadeIn(800);

	});

	$('.box5').mouseenter(function() {
		$(".box5").fadeIn(0);
	});

	$('.div5').mouseleave(function() {
		$(".box5").fadeOut(0);

	});

	$('.box5').mouseleave(function() {
		$(".box5").fadeOut(500);

	});

	// front6
	$('.div6').mouseenter(function() {
		$(".box6").fadeIn(800);

	});

	$('.box6').mouseenter(function() {
		$(".box6").fadeIn(0);
	});

	$('.div6').mouseleave(function() {
		$(".box6").fadeOut(0);

	});

	$('.box6').mouseleave(function() {
		$(".box6").fadeOut(500);

	});

});