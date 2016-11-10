
; /* Start:/bitrix/components/1cstore/element.reviews/templates/.default/script.js*/
$(document).ready(function () {

	$("body").on("submit", ".products-comments form", function () {

		$(".alert").hide();
	
		var data=$(this).serialize();
		var url=$(this).attr("action");

		var rating=$(this).find(".rp-stars").val();
		var title=$(this).find("input[name=title]").val();
		var review=$(this).find("textarea[name=review]").val();

		if(rating=="") {
			$(".product-form .error1").show();
			return false;
		}; 

		if(title=="") {
			$(".product-form .error2").show();
			return false;
		}; 

		if(review=="") {
			$(".product-form .error3").show();
			return false;
		}; 

		$.post(url, data, function (data) {
			console.log(data);
			$(".success").show();
			$("#reset").click();
			$("#btn-comment").click();
		});

		return false;
	});
});
/* End */
;
; /* Start:/bitrix/templates/main/components/bitrix/catalog/new/bitrix/catalog.element/.default/script.js*/
$(document).ready(function () {

	$("body").on("change", ".sidebar-right .pull-left select", function () {
		var item_id=$(this).val();
		var can_buy=$('input[name='+item_id+']').val();
		
		$(".middle-info").find("input.item_id").val(item_id);
		

		if(can_buy=='notavailable') 
		{
			$(this).parents("aside").find("div.product-counter").addClass("disabled");
			$(this).parents("aside").find("div.product-counter").find('input').attr("disabled", "disabled");

			$(this).parents("aside").find(".product-bigcart").addClass("gray");

			$(this).parents("aside").find(".available").hide();
			$(this).parents("aside").find(".noavailable").show();
		}
		else
		{
			$(this).parents("aside").find("div.product-counter").removeClass("disabled");	
			$(this).parents("aside").find("div.product-counter").find('input').removeAttr("disabled");

			$(this).parents("aside").find(".product-bigcart").removeClass('gray');

			$(this).parents("aside").find(".noavailable").hide();
			$(this).parents("aside").find(".available").show();
		}
	});


	$("body").on("click", ".product-bigcart__cart .available", function () {

		var image=$(".middle-info").find('.photo_for_basket').html();

		var item_id=$(".middle-info").find('input.item_id').val();

		var quantity=$(".middle-info").find('input.kol').val();

		$.get(
		  "/ajax/addtobasket.php",
		  {
		    id: item_id,
		    quantity: quantity
		  },
		  function (data) {
			refreshSmallBasket();
			$("#popup-added").find(".popup-thanks__icon").html(image);
			$(".popup-open-added").click();			
		  }
		);
		
	
		return false;
	});

	$("body").on("click", ".product-bigcart__cart .noavailable", function () {
		var item_id=$(".middle-info").find('input.item_id').val();
		$('#product_id_reminder').val(item_id);
		$("#popup-open-reminder").click();			
		return false;
	});
});
/* End */
;
; /* Start:/bitrix/templates/main/components/intaro/one.click.buy/new/script.js*/
$(document).ready(function() {
	$('#show-ocb-form').live('click', function() {
		$('#ocb-form-wrap').show();
		$('#ocb-form').show();
		$('#ocb-form-result').hide();
		return !1;
	});
	
	$('.ocb-form-header-close').live('click', function() {
		$('.ocb-error-msg').each(function(index) { $(this).hide(); });
		$('.ocb-result-icon-success').hide();
		$('.ocb-result-icon-fail').hide();
		$('#ocb-form-wrap').fadeOut();
		return !1;
	});
	
	$('button.intaro-modules-button.disabled, .intaro-modules-button.disabled input').live('click', function() {
	  return false;
	});
	
	$('#ocb-form').live('submit', function() {
		$('.ocb-error-msg').each(function(index) { $(this).hide(); });
		var fieldId, fieldVal, checked = !0, self = $(this);
		var emailReg = RegExp("^[0-9a-zA-Z\-_\.]+@[0-9a-zA-Z\-]+[\.]{1}[0-9a-zA-Z\-]+[\.]?[0-9a-zA-Z\-]+$");
		var phoneReg = RegExp("^[+0-9\-\(\) ]+$");
		$('input[name^="new_order"]').each(function() {
			fieldId = $(this).attr('id');
			fieldVal = $(this).val();
			if ($(this).prev().children('ins').length > 0) {
				if (fieldVal=='') {
					$('#' + fieldId + '-error').show();
					checked = !1;
				}
			}	
			if (fieldId.indexOf('PHONE')!=-1 && fieldVal!='' && !phoneReg.test(fieldVal)) {
				$('#' + fieldId + '-format-error').show();
				checked = !1;
			}
			if (fieldId.indexOf('EMAIL')!=-1 && fieldVal!='' && !emailReg.test(fieldVal)) {
				$('#' + fieldId + '-error').show();
				checked = !1;
			}
		});
		if (!checked) return !1;
		$('.intaro-modules-button', $(this)).addClass('disabled');
		$('.ocb-form-loader').show();
		$.ajax({
			url: $(this).attr('action'),
			data: $(this).serialize(),
			type: 'POST',
			dataType: 'json',
			error: function(obj, text, err) {
				//
			},
			success: function(data) {
				if(data.ok!='Y') {
					$('.ocb-result-icon-fail').show();
					$('.ocb-result-text').text(data.msg);
				} else {
					$('.ocb-result-icon-success').show();
					if ($('#cart_line').length > 0)
						$('#cart_line').html(data.msg);
				}		
				$('.ocb-form-loader').hide();
				$('.intaro-modules-button', self).removeClass('disabled');
				$('#ocb-form').hide();
				$('#ocb-form-result').show();
				window.setTimeout(function() { $('.ocb-form-header-close').click(); }, 3000);
			}
		});
		return !1;
	});
});

/* End */
;
; /* Start:/bitrix/templates/main/components/bitrix/catalog.section/likethis/script.js*/
$(document).ready(function () {
	$("body").on("change", ".row-shadow .pull-left select", function () {
		var item_id=$(this).val();
		var can_buy=$('input[name='+item_id+']').val();
		
		$(this).parents("li").find("input.item_id").val(item_id);
		

		if(can_buy=='notavailable') 
		{
			$(this).parents("li").find("div.product-counter").addClass("disabled");
			$(this).parents("li").find("div.product-counter").find('input').attr("disabled", "disabled");
			$(this).parents("li").find(".icon-cart").removeClass('icon-cart').addClass("icon-cart-empty");
			$(this).parents("li").find(".product-price__new").hide();
			$(this).parents("li").find(".product-price__none").show();
		}
		else
		{
			$(this).parents("li").find("div.product-counter").removeClass("disabled");	
			$(this).parents("li").find("div.product-counter").find('input').removeAttr("disabled");
			$(this).parents("li").find(".icon-cart-empty").removeClass('icon-cart-empty').addClass("icon-cart");
			$(this).parents("li").find(".product-price__none").hide();
			$(this).parents("li").find(".product-price__new").show();
		}
	});


	$("body").on("click", ".row-shadow .icon-cart", function () {
		var el_li=$(this).parents('.box-product');


		var image=$(el_li).find('.box-product__img a').html();

		var item_id=$(el_li).find('input.item_id').val();

		var quantity=$(el_li).find('input.kol').val();

		$.get(
		  "/ajax/addtobasket.php",
		  {
		    id: item_id,
		    quantity: quantity
		  },
		  function (data) {
			refreshSmallBasket();
			$("#popup-added").find(".popup-thanks__icon").html(image);
			$(".popup-open-added").click();			
		  }
		);
		
	
		return false;
	});

	$("body").on("click", ".row-shadow .icon-cart-empty", function () {

		var el_li=$(this).parents('li');
		var item_id=$(el_li).find('input.item_id').val();
		$('#product_id_reminder').val(item_id);
		$("#popup-open-reminder").click();			
		return false;
	});
});
/* End */
;