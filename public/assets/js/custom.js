/*************************************
* Theme Name: Travel Stock
* Author: Themez Hub
* Version: 1.0
* Last Change: Dec 27 2017
  Author URI    : http://www.themezhub.com/
**************************************
* 01. Bootstrap wysihtml5 editor
* 02. Background image
* 03. SlideShow Styles
* 04. Testimonial 1 Script
* 05. Single Side Slide
* 06. List Slide
* 08. Fast Click Select
* 09. Price Range Slider
* 10. Slim Scroll message & notification
* 11. METIS MENU
* 12. Add Listing Process
**************************************/
const tourInfo = {};
const amenitiesInfo = {};

(function ($) {
	"use strict";

	/*---Bootstrap wysihtml5 editor --*/
	$('.textarea').wysihtml5();

	//Background image ------------------
	var a = $(".bg");
	a.each(function (a) {
		if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
	});

	$('.slideshow-container').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		fade: true,
		cssEase: 'ease-in',
		infinite: true,
		speed: 2000
	});

	// SlideShow Styles ------------------
	function csselem() {
		$(".slideshow-container .slideshow-item").css({
			height: $(".slideshow-container").outerHeight(true)
		});
		$(".slider-container .slider-item").css({
			height: $(".slider-container").outerHeight(true)
		});
	}
	csselem();

	/*------ Testimonial 1 Script ----*/
	$('.testimonial-carousel').slick({
		slidesToShow: 2,
		arrows: false,
		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerPadding: '0px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerPadding: '0px',
					slidesToShow: 1
				}
			}
		]
	});

	/*--- Single Side Slide ---*/
	$('.single-side-slide').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			}
		]
	});

	/*---- List Slide ---*/
	$('.list-slider').slick({
		centerMode: true,
		autoplay: true,
		arrows: false,
		centerPadding: '0px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			}
		]
	});

	/*----- Fast Click Select ------*/
	$('select').niceSelect();

	/*-------- Price Range Slider ------*/
	var s3 = $("#price-range").freshslider({
		range: true,
		step: 1,
		value: [10, 500],
		onchange: function (low, high) {
			console.log(low, high);
		}
	});

	/*----Slim Scroll message & notification----*/
	$('#main-menu').slimScroll({
		color: '#f4f5f7',
		size: '5px',
		height: '650px',
		alwaysVisible: true
	});


	/*--------- METIS MENU ----------*/
	$('#main-menu').metisMenu();

	/*---------- Add Listing Process ------*/
	$(function () {
		//jQuery time
		var current_fs, next_fs, previous_fs; //fieldsets
		var left, opacity, scale; //fieldset properties which we will animate
		var animating; //flag to prevent quick multi-click glitches

		$("#tour_next1").click(function () {


			const errorEl = document.getElementById("error")
			const datepicker1Value = document.getElementById("datepicker1").value.trim()
			const datepicker2Value = document.getElementById("datepicker2").value.trim()
			const datepicker3Value = document.getElementById("datepicker3").value.trim()
			const datepicker4Value = document.getElementById("datepicker4").value.trim()
			const location1Value = document.getElementById("location1").value.trim()
			const location2Value = document.getElementById("location2").value.trim()
			const location3Value = document.getElementById("location3").value.trim()
			const location4Value = document.getElementById("location4").value.trim()
			const guideValue = document.getElementById("guide").value.trim()
			const ratingValue = document.getElementById("rating").value.trim()
			const priceValue = document.getElementById("price").value.trim()
			const durationValue = document.getElementById("duration").value.trim()
			const groupsizeValue = document.getElementById("groupsize").value.trim()
			const summaryValue = document.getElementById("summary").value.trim()
			const descriptionValue = document.getElementById("description").value.trim()
			// const featured_imageValue = document.getElementById("featured-image").value.trim()
			// const galleryValue = document.getElementById("gallery").value.trim()


			if (
				!datepicker1Value.length ||
				!datepicker2Value.length ||
				!datepicker3Value.length ||
				!datepicker4Value.length ||
				!location1Value.length ||
				!location2Value.length ||
				!location3Value.length ||
				!location4Value.length ||
				!guideValue.length ||
				!ratingValue.length ||
				!priceValue.length ||
				!durationValue.length ||
				!groupsizeValue.length ||
				!summaryValue.length ||
				!descriptionValue.length
			) {

				errorEl.style.opacity = 1
				setTimeout(() => {
					errorEl.style.opacity = 0

				}, 5000)
				return
			}



			tourInfo['dp1'] = datepicker1Value
			tourInfo['dp2'] = datepicker2Value
			tourInfo['dp3'] = datepicker3Value
			tourInfo['dp4'] = datepicker4Value
			tourInfo['loc1'] = location1Value
			tourInfo['loc2'] = location2Value
			tourInfo['loc3'] = location3Value
			tourInfo['loc4'] = location4Value
			tourInfo['guide'] = guideValue
			tourInfo['rating'] = ratingValue
			tourInfo['price'] = priceValue
			tourInfo['duration'] = durationValue
			tourInfo['groupsize'] = groupsizeValue
			tourInfo['summary'] = summaryValue
			tourInfo['description'] = descriptionValue

			if (animating) return false;
			animating = true;

			current_fs = $(this).parent();
			next_fs = $(this).parent().next();

			//activate next step on progressbar using the index of next_fs
			$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

			//show the next fieldset
			next_fs.show();
			//hide the current fieldset with style
			current_fs.animate({ opacity: 0 }, {
				step: function (now, mx) {
					//as the opacity of current_fs reduces to 0 - stored in "now"
					//1. scale current_fs down to 80%
					scale = 1 - (1 - now) * 0.2;
					//2. bring next_fs from the right(50%)
					left = (now * 50) + "%";
					//3. increase opacity of next_fs to 1 as it moves in
					opacity = 1 - now;
					current_fs.css({ 'transform': 'scale(' + scale + ')' });
					next_fs.css({ 'left': left, 'opacity': opacity });
				},
				duration: 800,
				complete: function () {
					current_fs.hide();
					animating = false;
				},
				//this comes from the custom easing plugin
				easing: 'easeInOutBack'
			});
		});

		$("#tour_next2").click(function () {
			const input1El = document.getElementById("1")
			const input2El = document.getElementById("2")
			const input3El = document.getElementById("3")
			const input4El = document.getElementById("4")
			const input5El = document.getElementById("5")
			const input6El = document.getElementById("6")
			const input7El = document.getElementById("7")
			const input8El = document.getElementById("8")
			const input9El = document.getElementById("9")
			const input10El = document.getElementById("10")
			const input11El = document.getElementById("11")
			const input12El = document.getElementById("12")
			const input13El = document.getElementById("13")
			const input14El = document.getElementById("14")
			const input15El = document.getElementById("15")
			const input16El = document.getElementById("16")
			const input17El = document.getElementById("17")
			const input18El = document.getElementById("18")

			if (input1El.checked) amenitiesInfo["1"] = "satellite tv"
			if (input2El.checked) amenitiesInfo["2"] = "coffee maker"
			if (input3El.checked) amenitiesInfo["3"] = "hair dryer"
			if (input4El.checked) amenitiesInfo["4"] = "swimming pool"
			if (input5El.checked) amenitiesInfo["5"] = "room service"
			if (input6El.checked) amenitiesInfo["6"] = "luxury bedding"
			if (input7El.checked) amenitiesInfo["7"] = "good showers"
			if (input8El.checked) amenitiesInfo["8"] = "free parking"
			if (input9El.checked) amenitiesInfo["9"] = "free wifi"
			if (input10El.checked) amenitiesInfo["10"] = "bath towels"
			if (input11El.checked) amenitiesInfo["11"] = "free coffee"
			if (input12El.checked) amenitiesInfo["12"] = "pets friendly"
			if (input13El.checked) amenitiesInfo["13"] = "running hot water"
			if (input14El.checked) amenitiesInfo["14"] = "attached garage"
			if (input15El.checked) amenitiesInfo["15"] = "elevator"
			if (input16El.checked) amenitiesInfo["16"] = "spa/sauna"
			if (input17El.checked) amenitiesInfo["17"] = "indoor pool"
			if (input18El.checked) amenitiesInfo["18"] = "secuirty cameras"

			let summaryText = ""
			const headingEl = document.getElementById("heading")
			const tourSummaryEl = document.getElementById("tourSummary")
			headingEl.textContent = "Hi man, this is your tour summary: "

			summaryText = "<b>tour details:<b><br>"
			for (const key in tourInfo) {
				summaryText += `<br><b>${key}<b> : ${tourInfo["" + key]}<br>`
			}

			summaryText += "<b><br><br>included amenities:<b><br>"

			for (const key in amenitiesInfo) {
				summaryText += `<br><b>*<b> ${amenitiesInfo["" + key]}<br>`
			}


			tourSummaryEl.innerHTML = summaryText

			if (animating) return false;
			animating = true;

			current_fs = $(this).parent();
			next_fs = $(this).parent().next();

			//activate next step on progressbar using the index of next_fs
			$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

			//show the next fieldset
			next_fs.show();
			//hide the current fieldset with style
			current_fs.animate({ opacity: 0 }, {
				step: function (now, mx) {
					//as the opacity of current_fs reduces to 0 - stored in "now"
					//1. scale current_fs down to 80%
					scale = 1 - (1 - now) * 0.2;
					//2. bring next_fs from the right(50%)
					left = (now * 50) + "%";
					//3. increase opacity of next_fs to 1 as it moves in
					opacity = 1 - now;
					current_fs.css({ 'transform': 'scale(' + scale + ')' });
					next_fs.css({ 'left': left, 'opacity': opacity });
				},
				duration: 800,
				complete: function () {
					current_fs.hide();
					animating = false;
				},
				//this comes from the custom easing plugin
				easing: 'easeInOutBack'
			});
		});

		$("#tour_previous1").click(function () {
			if (animating) return false;
			animating = true;

			current_fs = $(this).parent();
			previous_fs = $(this).parent().prev();

			//de-activate current step on progressbar
			$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

			//show the previous fieldset
			previous_fs.show();
			//hide the current fieldset with style
			current_fs.animate({ opacity: 0 }, {
				step: function (now, mx) {
					//as the opacity of current_fs reduces to 0 - stored in "now"
					//1. scale previous_fs from 80% to 100%
					scale = 0.8 + (1 - now) * 0.2;
					//2. take current_fs to the right(50%) - from 0%
					left = ((1 - now) * 50) + "%";
					//3. increase opacity of previous_fs to 1 as it moves in
					opacity = 1 - now;
					current_fs.css({ 'left': left });
					previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
				},
				duration: 800,
				complete: function () {
					current_fs.hide();
					animating = false;
				},
				//this comes from the custom easing plugin
				easing: 'easeInOutBack'
			});
		});

		$("#tour_previous2").click(function () {
			if (animating) return false;
			animating = true;

			current_fs = $(this).parent();
			previous_fs = $(this).parent().prev();

			//de-activate current step on progressbar
			$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

			//show the previous fieldset
			previous_fs.show();
			//hide the current fieldset with style
			current_fs.animate({ opacity: 0 }, {
				step: function (now, mx) {
					//as the opacity of current_fs reduces to 0 - stored in "now"
					//1. scale previous_fs from 80% to 100%
					scale = 0.8 + (1 - now) * 0.2;
					//2. take current_fs to the right(50%) - from 0%
					left = ((1 - now) * 50) + "%";
					//3. increase opacity of previous_fs to 1 as it moves in
					opacity = 1 - now;
					current_fs.css({ 'left': left });
					previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
				},
				duration: 800,
				complete: function () {
					current_fs.hide();
					animating = false;
				},
				//this comes from the custom easing plugin
				easing: 'easeInOutBack'
			});
		});

		$("#tour_submit").click(function () {
			//hit the add tours endpoint here 
			console.log(tourInfo);
			console.log(amenitiesInfo);
			console.log("register tour!");

			if (animating) return false;
			animating = true;

			current_fs = $(this).parent();
			next_fs = $(this).parent().next();

			//activate next step on progressbar using the index of next_fs
			$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

			//show the next fieldset
			next_fs.show();
			//hide the current fieldset with style
			current_fs.animate({ opacity: 0 }, {
				step: function (now, mx) {
					//as the opacity of current_fs reduces to 0 - stored in "now"
					//1. scale current_fs down to 80%
					scale = 1 - (1 - now) * 0.2;
					//2. bring next_fs from the right(50%)
					left = (now * 50) + "%";
					//3. increase opacity of next_fs to 1 as it moves in
					opacity = 1 - now;
					current_fs.css({ 'transform': 'scale(' + scale + ')' });
					next_fs.css({ 'left': left, 'opacity': opacity });
				},
				duration: 800,
				complete: function () {
					current_fs.hide();
					animating = false;
				},
				//this comes from the custom easing plugin
				easing: 'easeInOutBack'
			});

			// return false;
		})

	});


})(jQuery);

