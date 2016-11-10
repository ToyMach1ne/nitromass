
; /* Start:/bitrix/templates/main/components/bitrix/catalog/new/bitrix/catalog.section/.default/script.js*/
$(document).ready(function () {
	$("body").on("change", ".pull-left select", function () {
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


	$("body").on("click", ".icon-cart", function () {
		var el_li=$(this).parents('li');


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

	$("body").on("click", ".icon-cart-empty", function () {

		var el_li=$(this).parents('li');
		var item_id=$(el_li).find('input.item_id').val();
		$('#product_id_reminder').val(item_id);
		$("#popup-open-reminder").click();			
		return false;
	});
});
/* End */
;