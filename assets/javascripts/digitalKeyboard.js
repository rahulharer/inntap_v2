(function ($) {
	$.fn.numKey = function (options) {
		var defaults = {
			limit: 100,
			disorder: false
		}
		var options = $.extend({}, defaults, options);
		var input = $(this);
		var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		//		if(options.disorder) {
		//			nums.sort(function() {
		//				return 0.5 - Math.random();
		//			});
		//		}
		var html = '\
		<div class="fuzy-numKey">\
		<div class="fuzy-numKey-active">﹀</div>\
		<table>\
		<tr>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[1] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[2] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[3] + '</td>\
		</tr>\
		<tr>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[4] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[5] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[6] + '</td>\
		</tr>\
		<tr>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[7] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[8] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[9] + '</td>\
		</tr>\
		<tr>\
		<td class="fuzy-numKey-darkgray fuzy-numKey-active less_cls"></td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[0] + '</td>\
		<td class="fuzy-numKey-darkgray fuzy-numKey-active">&larr;</td>\
		</tr>\
		</table>\
		<style type="text/css">\
		* {\
			padding: 0 0;\
			margin: 0 0;\
		}\
		.fuzy-numKey {\
			width: 254px;\
			position: absolute;\
			bottom: 0;\
			display: block;\
			background-color: transparent;\
			text-align: center;\
			padding: 0;\
			height: 42%;\
			z-index: 999;\
            right: 0;\
            left: 0;\
            margin: auto;\
		}\
		.fuzy-numKey div {\
			height: 10%;\
			width: 100%;\
			font-weight: bold;\
			font-family: "Roboto";\
			background-color: #b1b1b1;\
			color: #fff;\
			margin-bottom: 2%;\
			border-radius: 12px;\
			line-height: 200%;\
		}\
		.fuzy-numKey table {\
			width: 100%;\
			height: 58%;\
		}\
		.fuzy-numKey td {\
			font-weight: bold;\
			font-family: "Roboto";\
			width: 33.3%;\
			max-height: 50px;\
			color: #fff;\
			border-radius: 0;\
		}\
		.fuzy-numKey-darkgray{\
			background: #666;\
		}\
		.fuzy-numKey-lightgray{\
			background: #b1b1b1;\
		}\
		.fuzy-numKey-active:active {\
			background: deepskyblue;\
		}\
		</style>\
		</div>';
		input.on("click", function () {
			//$(this).attr('readonly', 'readonly');
			$(".fuzy-numKey").remove();
			$('#digitalKeyboardContainer').append(html);
			$(".fuzy-numKey").show(100);
			$(".fuzy-numKey table tr td").on("click", function () {
				if (!focusedInputId) {
					return; // Prevent errors when no input is selected
				}

				let targetInput = $("#" + focusedInputId); // Get the actual focused input field
				// If focused input is shiftInput, always redirect input to openingBalanceInput
				if (focusedInputId === "shiftInput" || focusedInputId === "openingBalanceInput") {
					targetInput = $("#openingBalanceInput");
				}

				if (isNaN($(this).text())) {
					if ($(this).text() === 'Clear') {
						targetInput.val('').trigger("change");
					} else {
						targetInput.val(targetInput.val().substring(0, targetInput.val().length - 1)).trigger("change");
					}
				} else {
					targetInput.val((targetInput.val() || '') + $(this).text()).trigger("change");
				}
			});


			$(".fuzy-numKey div").on("click", function () {
				remove();
			});
		});

		function remove() {
			$(".fuzy-numKey").hide(100, function () {
				$(".fuzy-numKey").remove();
			});
			// input.removeAttr('readonly');
		}
	}
})(jQuery)

let focusedInputId = null; // Track the active input

// Track input focus
$(document).on("focus", "input.numericInput, #usercodeInput, #passwordInput, #shiftInput, #openingBalanceInput,#closingBalanceInput,#coversInput", function () {
	focusedInputId = $(this).attr("id");
});

// Ensure click inside an input field also sets focus
$(document).on("click", "input.numericInput, #usercodeInput, #passwordInput, #shiftInput, #openingBalanceInput,#closingBalanceInput,#coversInput", function () {
	focusedInputId = $(this).attr("id");
});

enableNumericKeyboard = function () {
	$("#numericInput").numKey({
		limit: 12,
		disorder: true
	});
	$("#usercodeInput, #passwordInput, #shiftInput, #openingBalanceInput, #closingBalanceInput,#coversInput").numKey({
		limit: 12,
		disorder: true
	});
}



