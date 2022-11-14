
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
const tourAmenitiesInfo = [];

const hotelInfo = {};
const hotelAmenitiesInfo = [];

const restaurantInfo = {};
const restaurantAmenitiesInfo = [];

const destinationInfo = {};
const destinationAmenitiesInfo = [];

const tourLocationInfo = []
const destLocationInfo = []

const source = ["dest", "hotel", "tour"]


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



(function ($) {
	"use strict";
	const modal = document.querySelector(".location-modal");
	const overlay = document.querySelector(".location-overlay");
	const closeModalBtn = document.querySelector(".close-location-modal")
	const submitInfoBtn = document.getElementById("infosubmit")

	const tl0 = document.getElementById("tourLocation0")
	const tl1 = document.getElementById("tourLocation1")
	const tl2 = document.getElementById("tourLocation2")
	const tl3 = document.getElementById("tourLocation3")
	const tl4 = document.getElementById("tourLocation4")

	const dl0 = document.getElementById("destination_location0")

	const nameEl = document.getElementById("name")
	const emailEl = document.getElementById("email")
	const phoneEl = document.getElementById("phone")
	const subjectEl = document.getElementById("subject")
	const messageEl = document.getElementById("message")
	const submitMsgEl = document.getElementById("submit_msg")
	const errorEl = document.getElementById("error")

	let bookbtn = document.getElementById("bookbtn")

	if (bookbtn) {
		bookbtn.addEventListener("click", async function (e) {
			e.preventDefault();
			try {
				console.log("get order page");
				window.open("http://127.0.0.1:3000/get-orderpage")



			} catch (error) {
				console.log(error);

			}
		})
	}

	if (submitMsgEl) submitMsgEl.addEventListener("click", async function (e) {

		const nameVal = nameEl.value.trim();
		const emailVal = emailEl.value.trim();
		const phoneVal = phoneEl.value.trim();
		const subjectVal = subjectEl.value.trim();
		const messageVal = messageEl.value.trim();

		if (!nameVal || !emailVal || !phoneVal || !subjectVal || !messageVal) {
			errorEl.style.opacity = 1
			setTimeout(() => {
				errorEl.style.opacity = 0

			}, 5000)
			return
		}

		const contactData = {
			name: nameVal,
			email: emailVal,
			phone: phoneVal,
			subject: subjectVal,
			message: messageVal

		}

		const res = await axios({
			url: "/api/v1/messages",
			method: "POST",
			data: contactData
		})

		console.log("message sent!", res.data.status.includes("success"));

		if (res.data.status.includes("success")) {
			nameEl.value = ""
			emailEl.value = ""
			phoneEl.value = ""
			subjectEl.value = ""
			messageEl.value = ""
		}




	})



	function modalIncluder(elementId) {
		document.getElementById("currentElVal").textContent = elementId

		modal.classList.remove("hidden");
		overlay.classList.remove("hidden");

	}

	function modalRemover() {
		modal.classList.add("hidden");
		overlay.classList.add("hidden");
	}


	if (closeModalBtn) closeModalBtn.addEventListener("click", modalRemover);
	if (overlay) overlay.addEventListener("click", modalRemover);


	if (tl0) tl0.addEventListener("click", function (e) {
		modalIncluder(e.target.id)
	})

	if (tl1) tl1.addEventListener("click", function (e) {
		modalIncluder(e.target.id)
	})

	if (tl2) tl2.addEventListener("click", function (e) {
		modalIncluder(e.target.id)
	})

	if (tl3) tl3.addEventListener("click", function (e) {
		modalIncluder(e.target.id)
	})

	if (tl4) tl4.addEventListener("click", function (e) {
		modalIncluder(e.target.id)
	})

	if (dl0) dl0.addEventListener("click", function (e) {

		modalIncluder(e.target.id)
	})
	if (submitInfoBtn) submitInfoBtn.addEventListener("click", function (e) {
		const locdesc = document.getElementById("locdesc").value.trim()
		const latval = document.getElementById("latval").value.trim()
		const longval = document.getElementById("longval").value.trim()
		const dayval = document.getElementById("dayval").value.trim()
		const addrval = document.getElementById("addressval").value.trim()
		const errorEl = document.getElementById("errormodal")

		if (!locdesc || !latval || !longval || !dayval) {
			errorEl.style.opacity = 1
			setTimeout(() => {
				errorEl.style.opacity = 0

			}, 5000)
			return
		}

		const currentKey = document.getElementById("currentElVal").value.trim();

		if (window.location.href.includes("add-tour")) {

			tourLocationInfo.push({
				"description": locdesc,
				"coordinates": [latval, longval],
				"day": dayval,
				"address": addrval
			})
		}

		if (window.location.href.includes("add-destination")) {

			destLocationInfo.push({
				"description": locdesc,
				"coordinates": [latval, longval],
				"day": dayval,
				"address": addrval
			})
		}

		modalRemover()

		document.getElementById("" + currentKey).value = "added!"

	})




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
			console.log("price range:", low, high);
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
			const nameValue = document.getElementById("tourname").value.trim()
			const tourDatepicker1Value = document.getElementById("tourDatepicker1").value.trim()
			const tourDatepicker2Value = document.getElementById("tourDatepicker2").value.trim()
			const tourDatepicker3Value = document.getElementById("tourDatepicker3").value.trim()
			const tourDatepicker4Value = document.getElementById("tourDatepicker4").value.trim()
			const guideValue = document.getElementById("guide").value.trim()
			const difficultyValue = document.getElementById("difficulty").value.trim()
			const priceValue = document.getElementById("price").value.trim()
			const durationValue = document.getElementById("duration").value.trim()
			const groupsizeValue = document.getElementById("groupsize").value.trim()
			const summaryValue = document.getElementById("tr_summary").value.trim()
			const descriptionValue = document.getElementById("tr_description").value.trim()



			if (
				!nameValue.length ||
				!tourDatepicker1Value.length ||
				!tourDatepicker2Value.length ||
				!tourDatepicker3Value.length ||
				!tourDatepicker4Value.length ||
				!guideValue.length ||
				!difficultyValue.length ||
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

			tourInfo['name'] = nameValue
			tourInfo['duration'] = durationValue
			tourInfo['maxGroupSize'] = groupsizeValue
			tourInfo['difficulty'] = difficultyValue
			tourInfo['price'] = priceValue
			tourInfo['summary'] = summaryValue
			tourInfo['description'] = descriptionValue
			tourInfo['startDates'] = [tourDatepicker1Value, tourDatepicker2Value, tourDatepicker3Value, tourDatepicker4Value]
			tourInfo['startLocation'] = tourLocationInfo[0]
			tourInfo['locations'] = tourLocationInfo
			tourInfo['guides'] = guideValue
			tourInfo['imageCover'] = `tour-${getRandomInt(1, 9)}.jpg`
			tourInfo['images'] = [`tour-${getRandomInt(1, 9)}.jpg`, `tour-${getRandomInt(1, 9)}.jpg`, `tour-${getRandomInt(1, 9)}.jpg`, `tour-${getRandomInt(1, 9)}.jpg`]
			tourInfo['amenities'] = tourAmenitiesInfo

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

			if (input1El.checked) tourAmenitiesInfo.push("satellite tv")
			if (input2El.checked) tourAmenitiesInfo.push("coffee maker")
			if (input3El.checked) tourAmenitiesInfo.push("hair dryer")
			if (input4El.checked) tourAmenitiesInfo.push("swimming pool")
			if (input5El.checked) tourAmenitiesInfo.push("room service")
			if (input6El.checked) tourAmenitiesInfo.push("luxury bedding")
			if (input7El.checked) tourAmenitiesInfo.push("good showers")
			if (input8El.checked) tourAmenitiesInfo.push("free parking")
			if (input9El.checked) tourAmenitiesInfo.push("free wifi")
			if (input10El.checked) tourAmenitiesInfo.push("bath towels")
			if (input11El.checked) tourAmenitiesInfo.push("free coffee")
			if (input12El.checked) tourAmenitiesInfo.push("pets friendly")
			if (input13El.checked) tourAmenitiesInfo.push("running hot water")
			if (input14El.checked) tourAmenitiesInfo.push("attached garage")
			if (input15El.checked) tourAmenitiesInfo.push("elevator")
			if (input16El.checked) tourAmenitiesInfo.push("spa/sauna")
			if (input17El.checked) tourAmenitiesInfo.push("indoor pool")
			if (input18El.checked) tourAmenitiesInfo.push("security cameras")

			let summaryText = ""
			const tour_headingEl = document.getElementById("tour_heading")
			const tourSummaryEl = document.getElementById("tour_summary")
			tour_headingEl.textContent = "Hi man, this is your tour summary: "

			summaryText = `<b>tour details:<b><br> <table id="resources">`
			for (const key in tourInfo) {
				summaryText +=
					`
				<tr>
				<th>${key}</th>
				<td>${tourInfo["" + key]}</td>
				</tr>

			`
			}

			summaryText += `</table><b><br><br>included amenities:<b><br> <table id="resources">`

			for (const key in tourAmenitiesInfo) {
				summaryText += `<tr>
			<td>${tourAmenitiesInfo["" + key]}</td>
			</tr>`
			}

			summaryText += "</table>"


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
		$("#tour_submit").click(async function () {
			//hit the add tours endpoint here 
			tourInfo["amenities"] = tourAmenitiesInfo
			tourInfo["itenerary"] = "itenerary.pdf"
			console.log(tourInfo);
			// console.log(tourAmenitiesInfo);
			let res = await axios({
				method: "POST",
				url: "/api/v1/tours/",
				data: tourInfo
			})
			console.log("register tour!", res.data);

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

		$("#hotel_next1").click(function () {
			const errorEl = document.getElementById("error")
			const hotelNameValue = document.getElementById("hotel_name").value.trim()
			const hotelPriceValue = document.getElementById("hotel_price").value.trim()
			const hotelPhoneValue = document.getElementById("hotel_phone").value.trim()
			const hotelLlValue = document.getElementById("hotel_ll").value.trim()
			const hotelEmailValue = document.getElementById("hotel_email").value.trim()
			const hotelFaxValue = document.getElementById("hotel_fax").value.trim()
			const hotelAddressValue = document.getElementById("hotel_address").value.trim()
			const hotelCityValue = document.getElementById("hotel_city").value.trim()
			const hotelStateValue = document.getElementById("hotel_state").value.trim()
			const hotelCountryValue = document.getElementById("hotel_country").value.trim()
			const hotelOwnerValue = document.getElementById("hotel_owner").value.trim()
			const hotelContactValue = document.getElementById("hotel_contact").value.trim()
			const hotelSummaryValue = document.getElementById("hl_summary").value.trim()
			const hotelDescriptionValue = document.getElementById("hl_description").value.trim()


			if (

				!hotelNameValue ||
				!hotelPriceValue ||
				!hotelPhoneValue ||
				!hotelLlValue ||
				!hotelEmailValue ||
				!hotelFaxValue ||
				!hotelAddressValue ||
				!hotelCityValue ||
				!hotelStateValue ||
				!hotelCountryValue ||
				!hotelOwnerValue ||
				!hotelContactValue ||
				!hotelSummaryValue ||
				!hotelDescriptionValue
			) {

				errorEl.style.opacity = 1
				setTimeout(() => {
					errorEl.style.opacity = 0

				}, 5000)
				return
			}

			hotelInfo["name"] = hotelNameValue
			hotelInfo["price"] = hotelPriceValue
			hotelInfo["phone"] = hotelPhoneValue
			hotelInfo["landline"] = hotelLlValue
			hotelInfo["email"] = hotelEmailValue
			hotelInfo["fax"] = hotelFaxValue
			hotelInfo["address"] = hotelAddressValue
			hotelInfo["city"] = hotelCityValue
			hotelInfo["state"] = hotelStateValue
			hotelInfo["country"] = hotelCountryValue
			hotelInfo["owner"] = hotelOwnerValue
			hotelInfo["contact"] = hotelContactValue
			hotelInfo["summary"] = hotelSummaryValue
			hotelInfo["description"] = hotelDescriptionValue
			hotelInfo['imageCover'] = `hotel-${getRandomInt(1, 9)}.jpg`
			hotelInfo['images'] = [`hotel-${getRandomInt(1, 9)}.jpg`, `hotel-${getRandomInt(1, 9)}.jpg`, `hotel-${getRandomInt(1, 9)}.jpg`, `hotel-${getRandomInt(1, 9)}.jpg`]


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

		})
		$("#hotel_next2").click(function () {
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

			if (input1El.checked) hotelAmenitiesInfo.push("satellite tv")
			if (input2El.checked) hotelAmenitiesInfo.push("coffee maker")
			if (input3El.checked) hotelAmenitiesInfo.push("hair dryer")
			if (input4El.checked) hotelAmenitiesInfo.push("swimming pool")
			if (input5El.checked) hotelAmenitiesInfo.push("room service")
			if (input6El.checked) hotelAmenitiesInfo.push("luxury bedding")
			if (input7El.checked) hotelAmenitiesInfo.push("good showers")
			if (input8El.checked) hotelAmenitiesInfo.push("free parking")
			if (input9El.checked) hotelAmenitiesInfo.push("free wifi")
			if (input10El.checked) hotelAmenitiesInfo.push("bath towels")
			if (input11El.checked) hotelAmenitiesInfo.push("free coffee")
			if (input12El.checked) hotelAmenitiesInfo.push("pets friendly")
			if (input13El.checked) hotelAmenitiesInfo.push("running hot water")
			if (input14El.checked) hotelAmenitiesInfo.push("attached garage")
			if (input15El.checked) hotelAmenitiesInfo.push("elevator")
			if (input16El.checked) hotelAmenitiesInfo.push("spa/sauna")
			if (input17El.checked) hotelAmenitiesInfo.push("indoor pool")
			if (input18El.checked) hotelAmenitiesInfo.push("secuirty cameras")

			let summaryText = ""
			const hotel_headingEl = document.getElementById("hotel_heading")
			const hotelSummaryEl = document.getElementById("hotel_summary")
			hotel_headingEl.textContent = "Hi man, this is your hotel listing summary: "

			summaryText = `<b>hotel listing details:<b><br> <table id="resources">`
			for (const key in hotelInfo) {
				summaryText +=
					`
				<tr>
				<th>${key}</th>
				<td>${hotelInfo["" + key]}</td>
				</tr>

			`
			}

			summaryText += `</table><b><br><br>included amenities:<b><br> <table id="resources">`


			for (const key in hotelAmenitiesInfo) {
				summaryText += `<tr>
			<td>${hotelAmenitiesInfo["" + key]}</td>
			</tr>`
			}

			summaryText += "</table>"


			hotelSummaryEl.innerHTML = summaryText


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
		})
		$("#hotel_previous1").click(function () {

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
		})
		$("#hotel_previous2").click(function () {

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
		})
		$("#hotel_submit").click(async function () {

			//hit the add hotel endpoint here 
			hotelInfo["amenities"] = hotelAmenitiesInfo
			console.log(hotelInfo);

			const res = await axios({
				method: "POST",
				url: "/api/v1/hotels/",
				data: hotelInfo

			})
			console.log("hotel registered !", res.data);

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
		})

		$("#restaurant_next1").click(function () {
			const errorEl = document.getElementById("error")
			const restaurantNameValue = document.getElementById("restaurant_name").value.trim()
			const restaurantPriceValue = document.getElementById("restaurant_price").value.trim()
			const restaurantPhoneValue = document.getElementById("restaurant_phone").value.trim()
			const restaurantLlValue = document.getElementById("restaurant_ll").value.trim()
			const restaurantEmailValue = document.getElementById("restaurant_email").value.trim()
			const restaurantFaxValue = document.getElementById("restaurant_fax").value.trim()
			const restaurantAddressValue = document.getElementById("restaurant_address").value.trim()
			const restaurantCityValue = document.getElementById("restaurant_city").value.trim()
			const restaurantStateValue = document.getElementById("restaurant_state").value.trim()
			const restaurantCountryValue = document.getElementById("restaurant_country").value.trim()
			const restaurantOwnerValue = document.getElementById("restaurant_owner").value.trim()
			const restaurantContactValue = document.getElementById("restaurant_contact").value.trim()
			const restaurantSummaryValue = document.getElementById("rt_summary").value.trim()
			const restaurantDescriptionValue = document.getElementById("rt_description").value.trim()

			if (
				!restaurantNameValue ||
				!restaurantPriceValue ||
				!restaurantPhoneValue ||
				!restaurantLlValue ||
				!restaurantEmailValue ||
				!restaurantFaxValue ||
				!restaurantAddressValue ||
				!restaurantCityValue ||
				!restaurantStateValue ||
				!restaurantCountryValue ||
				!restaurantOwnerValue ||
				!restaurantContactValue ||
				!restaurantSummaryValue ||
				!restaurantDescriptionValue
			) {

				errorEl.style.opacity = 1
				setTimeout(() => {
					errorEl.style.opacity = 0

				}, 5000)
				return
			}

			restaurantInfo["name"] = restaurantNameValue
			restaurantInfo["price"] = restaurantPriceValue
			restaurantInfo["phone"] = restaurantPhoneValue
			restaurantInfo["landline"] = restaurantLlValue
			restaurantInfo["email"] = restaurantEmailValue
			restaurantInfo["fax"] = restaurantFaxValue
			restaurantInfo["address"] = restaurantAddressValue
			restaurantInfo["city"] = restaurantCityValue
			restaurantInfo["state"] = restaurantStateValue
			restaurantInfo["country"] = restaurantCountryValue
			restaurantInfo["owner"] = restaurantOwnerValue
			restaurantInfo["contact"] = restaurantContactValue
			restaurantInfo["summary"] = restaurantSummaryValue
			restaurantInfo["description"] = restaurantDescriptionValue
			restaurantInfo['imageCover'] = `rest-${getRandomInt(1, 9)}.jpg`
			restaurantInfo['logo'] = `rest-logo-${getRandomInt(1, 9)}.jpg`
			restaurantInfo['images'] = [`rest-${getRandomInt(1, 9)}.jpg`, `rest-${getRandomInt(1, 9)}.jpg`, `rest-${getRandomInt(1, 9)}.jpg`, `rest-${getRandomInt(1, 9)}.jpg`]

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
		})
		$("#restaurant_next2").click(function () {
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

			if (input1El.checked) restaurantAmenitiesInfo.push("satellite tv")
			if (input2El.checked) restaurantAmenitiesInfo.push("coffee maker")
			if (input3El.checked) restaurantAmenitiesInfo.push("hair dryer")
			if (input4El.checked) restaurantAmenitiesInfo.push("swimming pool")
			if (input5El.checked) restaurantAmenitiesInfo.push("room service")
			if (input6El.checked) restaurantAmenitiesInfo.push("luxury bedding")
			if (input7El.checked) restaurantAmenitiesInfo.push("good showers")
			if (input8El.checked) restaurantAmenitiesInfo.push("free parking")
			if (input9El.checked) restaurantAmenitiesInfo.push("free wifi")
			if (input10El.checked) restaurantAmenitiesInfo.push("bath towels")
			if (input11El.checked) restaurantAmenitiesInfo.push("free coffee")
			if (input12El.checked) restaurantAmenitiesInfo.push("pets friendly")
			if (input13El.checked) restaurantAmenitiesInfo.push("running hot water")
			if (input14El.checked) restaurantAmenitiesInfo.push("attached garage")
			if (input15El.checked) restaurantAmenitiesInfo.push("elevator")
			if (input16El.checked) restaurantAmenitiesInfo.push("spa/sauna")
			if (input17El.checked) restaurantAmenitiesInfo.push("indoor pool")
			if (input18El.checked) restaurantAmenitiesInfo.push("secuirty cameras")

			let summaryText = ""
			const restaurantheadingEl = document.getElementById("restaurant_heading")
			const restaurantSummaryEl = document.getElementById("restaurant_summary")
			restaurantheadingEl.textContent = "Hi man, this is your restaurant listing summary: "

			summaryText = `<b>restaurant listing details:<b><br> <table id="resources">`
			for (const key in restaurantInfo) {
				summaryText +=
					`
				<tr>
				<th>${key}</th>
				<td>${restaurantInfo["" + key]}</td>
				</tr>

			`
			}

			summaryText += `</table><b><br><br>included amenities:<b><br> <table id="resources">`


			for (const key in restaurantAmenitiesInfo) {
				summaryText += `<tr>
			<td>${restaurantAmenitiesInfo["" + key]}</td>
			</tr>`
			}

			summaryText += "</table>"


			restaurantSummaryEl.innerHTML = summaryText


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

		})
		$("#restaurant_previous1").click(function () {
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
		})
		$("#restaurant_previous2").click(function () {
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
		})
		$("#restaurant_submit").click(async function () {
			//hit the add restaurant endpoint here 
			restaurantInfo["amenities"] = restaurantAmenitiesInfo
			restaurantInfo["menu"] = "menu.pdf"
			console.log(restaurantInfo);

			const res = await axios({
				method: "POST",
				url: "/api/v1/restaurants/",
				data: restaurantInfo
			})
			console.log("restaurant registered!", res.data);

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
		})

		$("#destination_next1").click(function () {
			const errorEl = document.getElementById("error")
			const dstStartDateValue = document.getElementById("destination_startdate").value.trim()
			const dstEndDateValue = document.getElementById("destination_enddate").value.trim()
			const location1Value = document.getElementById("destination_location0").value.trim()
			const nameValue = document.getElementById("dest_name").value.trim()
			const guideValue = document.getElementById("destination_guide").value.trim()
			const difficultyValue = document.getElementById("destination_difficulty").value.trim()
			const priceValue = document.getElementById("destination_price").value.trim()
			const durationValue = document.getElementById("destination_duration").value.trim()
			const groupsizeValue = document.getElementById("destination_groupsize").value.trim()
			const summaryValue = document.getElementById("dn_summary").value.trim()
			const descriptionValue = document.getElementById("dn_description").value.trim()

			if (
				!dstStartDateValue.length ||
				!dstEndDateValue.length ||
				!location1Value.length ||
				!guideValue.length ||
				!nameValue.length ||
				!difficultyValue.length ||
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

			destinationInfo['startDate'] = dstStartDateValue
			destinationInfo['endDate'] = dstEndDateValue
			destinationInfo['name'] = nameValue
			destinationInfo['location'] = destLocationInfo[0]
			destinationInfo['guide'] = guideValue
			destinationInfo['difficulty'] = difficultyValue
			destinationInfo['price'] = priceValue
			destinationInfo['duration'] = durationValue
			destinationInfo['maxGroupSize'] = groupsizeValue
			destinationInfo['summary'] = summaryValue
			destinationInfo['description'] = descriptionValue
			destinationInfo['imageCover'] = `dest-${getRandomInt(1, 9)}.jpg`
			destinationInfo['images'] = [`dest-${getRandomInt(1, 9)}.jpg`, `dest-${getRandomInt(1, 9)}.jpg`, `dest-${getRandomInt(1, 9)}.jpg`, `dest-${getRandomInt(1, 9)}.jpg`]

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

		})
		$("#destination_next2").click(function () {

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

			if (input1El.checked) destinationAmenitiesInfo.push("satellite tv")
			if (input2El.checked) destinationAmenitiesInfo.push("coffee maker")
			if (input3El.checked) destinationAmenitiesInfo.push("hair dryer")
			if (input4El.checked) destinationAmenitiesInfo.push("swimming pool")
			if (input5El.checked) destinationAmenitiesInfo.push("room service")
			if (input6El.checked) destinationAmenitiesInfo.push("luxury bedding")
			if (input7El.checked) destinationAmenitiesInfo.push("good showers")
			if (input8El.checked) destinationAmenitiesInfo.push("free parking")
			if (input9El.checked) destinationAmenitiesInfo.push("free wifi")
			if (input10El.checked) destinationAmenitiesInfo.push("bath towels")
			if (input11El.checked) destinationAmenitiesInfo.push("free coffee")
			if (input12El.checked) destinationAmenitiesInfo.push("pets friendly")
			if (input13El.checked) destinationAmenitiesInfo.push("running hot water")
			if (input14El.checked) destinationAmenitiesInfo.push("attached garage")
			if (input15El.checked) destinationAmenitiesInfo.push("elevator")
			if (input16El.checked) destinationAmenitiesInfo.push("spa/sauna")
			if (input17El.checked) destinationAmenitiesInfo.push("indoor pool")
			if (input18El.checked) destinationAmenitiesInfo.push("secuirty cameras")

			let summaryText = ""
			const destinationheadingEl = document.getElementById("destination_heading")
			const destinationSummaryEl = document.getElementById("destination_summary")
			destinationheadingEl.textContent = "Hi man, this is your destination listing summary: "

			summaryText = `<b>destination listing details:<b><br> <table id="resources">`
			for (const key in destinationInfo) {
				summaryText +=
					`
				<tr>
				<th>${key}</th>
				<td>${destinationInfo["" + key]}</td>
				</tr>

			`
			}

			summaryText += `</table><b><br><br>included amenities:<b><br> <table id="resources">`


			for (const key in destinationAmenitiesInfo) {
				summaryText += `<tr>
			<td>${destinationAmenitiesInfo["" + key]}</td>
			</tr>`
			}

			summaryText += "</table>"


			destinationSummaryEl.innerHTML = summaryText
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
		})
		$("#destination_previous1").click(function () {


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

		})
		$("#destination_previous2").click(function () {

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

		})
		$("#destination_submit").click(async function () {
			//hit the add restaurant endpoint here 
			destinationInfo["amenities"] = destinationAmenitiesInfo
			destinationInfo["itenerary"] = "dest_itenerary.pdf"
			console.log(destinationInfo);

			let res = await axios({
				method: "POST",
				url: "/api/v1/destination/",
				data: destinationInfo

			})

			console.log("register destination!", res.data);

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

		})
	});


})(jQuery);

