; /* Start:/js/placeholder.js*/
(function(e, t, n) {
    function c(e) {
        var t = {};
        var r = /^jQuery\d+$/;
        n.each(e.attributes, function(e, n) {
            if (n.specified && !r.test(n.name)) {
                t[n.name] = n.value
            }
        });
        return t
    }

    function h(e, t) {
        var r = this;
        var i = n(r);
        if (r.value == i.attr("placeholder") && i.hasClass("placeholder")) {
            if (i.data("placeholder-password")) {
                i = i.hide().next().show().attr("id", i.removeAttr("id").data("placeholder-id"));
                if (e === true) {
                    return i[0].value = t
                }
                i.focus()
            } else {
                r.value = "";
                i.removeClass("placeholder");
                r == d() && r.select()
            }
        }
    }

    function p() {
        var e;
        var t = this;
        var r = n(t);
        var i = this.id;
        if (t.value == "") {
            if (t.type == "password") {
                if (!r.data("placeholder-textinput")) {
                    try {
                        e = r.clone().attr({
                            type: "text"
                        })
                    } catch (s) {
                        e = n("<input>").attr(n.extend(c(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": r,
                        "placeholder-id": i
                    }).bind("focus.placeholder", h);
                    r.data({
                        "placeholder-textinput": e,
                        "placeholder-id": i
                    }).before(e)
                }
                r = r.removeAttr("id").hide().prev().attr("id", i).show()
            }
            r.addClass("placeholder");
            r[0].value = r.attr("placeholder")
        } else {
            r.removeClass("placeholder")
        }
    }

    function d() {
        try {
            return t.activeElement
        } catch (e) {}
    }
    var r = Object.prototype.toString.call(e.operamini) == "[object OperaMini]";
    var i = "placeholder" in t.createElement("input") && !r;
    var s = "placeholder" in t.createElement("textarea") && !r;
    var o = n.fn;
    var u = n.valHooks;
    var a = n.propHooks;
    var f;
    var l;
    if (i && s) {
        l = o.placeholder = function() {
            return this
        };
        l.input = l.textarea = true
    } else {
        l = o.placeholder = function() {
            var e = this;
            e.filter((i ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": h,
                "blur.placeholder": p
            }).data("placeholder-enabled", true).trigger("blur.placeholder");
            return e
        };
        l.input = i;
        l.textarea = s;
        f = {
            get: function(e) {
                var t = n(e);
                var r = t.data("placeholder-password");
                if (r) {
                    return r[0].value
                }
                return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            },
            set: function(e, t) {
                var r = n(e);
                var i = r.data("placeholder-password");
                if (i) {
                    return i[0].value = t
                }
                if (!r.data("placeholder-enabled")) {
                    return e.value = t
                }
                if (t == "") {
                    e.value = t;
                    if (e != d()) {
                        p.call(e)
                    }
                } else if (r.hasClass("placeholder")) {
                    h.call(e, true, t) || (e.value = t)
                } else {
                    e.value = t
                }
                return r
            }
        };
        if (!i) {
            u.input = f;
            a.value = f
        }
        if (!s) {
            u.textarea = f;
            a.value = f
        }
        n(function() {
            n(t).delegate("form", "submit.placeholder", function() {
                var e = n(".placeholder", this).each(h);
                setTimeout(function() {
                    e.each(p)
                }, 10)
            })
        });
        n(e).bind("beforeunload.placeholder", function() {
            n(".placeholder").each(function() {
                this.value = ""
            })
        })
    }
})(this, document, jQuery)
/* End */
;; /* Start:/js/main.js*/
// JavaScript Document

function submitForm() {
    var data = $("#ORDER_FORM_ID_NEW").serialize();
    data = data + "&BasketRefresh=Ïåðåñ÷èòàòü&ajax=Y";
    $.post("/personal/cart/", data, function(data) {
        var result = $(data).find('#form_new').html();
        $(document).find('#form_new').html(result);
        $(document).find('.filter__sub').show();
        var ddate_min = $(document).find("#dday_min").text();
        var ddate_max = $(document).find("#dday_max").text();
        $('li input:radio,input:checkbox, select').styler();
        $("#ORDER_PROP_33").datepicker({
                dateFormat: "DD - dd.mm.yy",
                minDate: new Date(ddate_min),
                maxDate: new Date(ddate_max),
            },
            $.datepicker.regional['ru']
        );
    });

    return false;
}

function sendForm() {
    if (!$(".current input:radio:checked").prop("checked")) {
        $(".alert").remove();
        $('#form_new').prepend('<div class="alert alert-error"><p><font class="notetext">Íå âûáðàí ñïîñîá äîñòàâêè.<br></font></p></div>');
    } else {
        var data = $("#ORDER_FORM_ID_NEW").serialize();
        data = data + "&BasketOrder=Îôîðìèòü çàêàç&ajax=Y";
        $.post("/personal/cart/", data, function(data) {
            var result = $(data).find('#form_new').html();
            $(document).find('#form_new').html(result);
            $(document).find('.filter__sub').show();
            $('li input:radio,input:checkbox, select').styler();
            var ddate_min = $(document).find("#dday_min").text();
            var ddate_max = $(document).find("#dday_max").text();
            $("#ORDER_PROP_33").datepicker({
                    dateFormat: "DD - dd.mm.yy",
                    minDate: new Date(ddate_min),
                    maxDate: new Date(ddate_max),
                },
                $.datepicker.regional['ru']
            );
        });
    }
    return false;
}

function refreshSmallBasket(url) {
    url = url || "/ajax/smallbasket.php";
    $.get(url, {}, function(data) {
        var result = $(data).find(".cart-sub").html();
        if (result === undefined)
            $(document).find(".cart-sub").remove();
        else {
            var container = $(document).find(".cart-sub").html();
            if (container === undefined) {
                $(document).find(".header-cart").append('<div class="cart-sub"></div>');
                $(document).find(".cart-sub").html(result);
            } else
                $(document).find(".cart-sub").html(result);
        }

        var result = $(data).find("span.count").html();
        $(document).find(".header-cart span.count").html(result);

        return false;
    });
}

$(function() {

    $("body").on("submit", "#popup-call form", function() {

        var data = $(this).serialize();

        $.post("/ajax/callback.php", data, function(result) {
            var rform = $(result).find(".popup__container").html();
            $(document).find("#popup-call").find(".popup__container").html(rform);
        });

        return false;
    });


    $("body").on("submit", "#popup-reminder form", function() {

        var data = $(this).serialize();

        $.post("/ajax/reminder.php", data, function(result) {
            var rform = $(result).find(".popup__container").html();
            $(document).find("#popup-reminder").find(".popup__container").html(rform);
        });

        return false;
    });

    $("body").on("submit", "#popup-reminder form", function() {

        var data = $(this).serialize();

        $.post("/ajax/reminder.php", data, function(result) {
            var rform = $(result).find(".popup__container").html();
            $(document).find("#popup-reminder").find(".popup__container").html(rform);
        });

        return false;
    });

    $("body").on("click", ".icon-cart-big", function() {
        var el_li = $(this).parents('tr');
        var image = $(el_li).find('.cart-sub__img a').html();
        var item_id = $(this).attr("alt");
        $.get(
            "/ajax/addtobasket.php", "id=" + item_id + "&quantity=1",
            function(data) {
                refreshSmallBasket();
                $("#popup-added").find(".popup-thanks__icon").html(image);
                $(".popup-open-added").click();
            }
        );

        return false;
    });

    $("body").on("click", "a.icon-email-big", function() {
        var item_id = $(this).attr("alt");
        $('#product_id_reminder').val(item_id);
        $("#popup-open-reminder").click();
        $(".title-search-result").css("display", "block !important");
        return false;
    });

    $("body").on("click", ".header-cart a.close", function() {
        var url = $(this).attr("href");
        refreshSmallBasket(url);
        return false;
    });

    $("body").on("click", ".user-cart__box__close a", function() {
        $("#shadow").show();
        var url = $(this).attr("href");
        var data = $("#ORDER_FORM_ID_NEW").serialize();
        $.post(url, data, function(data) {
            var result = $(data).find(".user-cart__box__table").html();
            $(document).find(".user-cart__box__table").html(result);
            //$(document).find(".filter__sub").show();
            //$('input:radio,input:checkbox, select').styler();
            $("#shadow").hide();
        });
        return false;
    });

    $("body").on("change", ".product-counter input", function() {
        $("#shadow").show();
        $('[name="BasketRefresh"]').click();
    });

    $("body").on("change", "#form_new li input[type='radio']", function() {
        $("#shadow").show();
        $('[name="BasketRefresh"]').click();
    });

    $("body").on("change", "#form_new select.stylized", function() {
        $("#shadow").show();
        $('[name="BasketRefresh"]').click();
    });

    $("body").on("submit", "#ORDER_FORM_ID_NEW", function() {
        return false;
    });

    $("body").on("change", "#filter input", function() {
        var data = $("form#filter").serialize();
        var url = $("form#filter").attr("action");
        $.post(url, data, function(data) {
            var result = $(data).find(".middle-info").html();
            $(document).find(".middle-info").html(result);
            $(document).find(".filter__sub").show();
            $('input:radio,input:checkbox, select').styler();
        });
    });

    //Äëÿ êðîññáðàóçåðíãî placeholder
    $(function() {
        $('input[placeholder], textarea[placeholder]').placeholder();
    });
    $(".sub div").mCustomScrollbar({
        axis: "y",
        theme: "light-3",
        scrollButtons: {
            enable: true
        }
    });

    //Ñòèäèçóåì ýåëåìåíòû
    $('input:radio,input:checkbox,.product-bigcart select, .box-product select').styler();

    //Ïîäêëþ÷àåì ðåéòèíã
    $('.rp-stars').barrating('show', {
        showValues: true,
        showSelectedRating: false
    });

    //Âûçûâàåì ïîïàïû
    $('.popup-open').fancybox({
        padding: 0,
        closeBtn: true,
        beforeShow: function() {
            $(".fancybox-wrap").addClass("fancybox-popup");
        }
    });

    $('.popup-open-thanks').fancybox({
        padding: 0,
        'href': '#popup-thanks',
        closeBtn: true,
        'scrolling': 'visible',
        beforeShow: function() {
            $(".fancybox-wrap").addClass("fancybox-popup");
        },
        afterShow: function() {
            setTimeout('parent.$.fancybox.close();', 10000);
        }
    });

    $('.popup-open-added').fancybox({
        padding: 0,
        'href': '#popup-added',
        closeBtn: true,
        'scrolling': 'visible',
        beforeShow: function() {
            $(".fancybox-wrap").addClass("fancybox-popup");
        },
        afterShow: function() {
            setTimeout('parent.$.fancybox.close();', 10000);
        }
    });

    //Âàëèäàöèÿ ôîðì
    var popupBlock = $('.popup')
    formBlock = popupBlock.find('.form'),
        formPopup = formBlock.find('form'),
        formInput = formPopup.find('input');



    formInput.on('keyup blur', function() {
        var $this = $(this),
            formBlock = $this.closest('form'),
            formId = formBlock.attr('id'),
            formBtn = formBlock.find('.btn');
        if ($('#' + formId).valid()) {
            formBtn.prop('disabled', false).removeClass('disabled');
        } else {
            formBtn.prop('disabled', 'disabled').addClass('disabled');
        }
    });


    if (formPopup.length) {
        for (i = formPopup.length; i--;) {
            formPopup.eq(i).attr('id', 'form' + i).validate({

                rules: {

                    name: {
                        required: true,
                        minlength: 2,
                        maxlength: 30,
                    },

                    surname: {
                        required: true,
                        minlength: 2,
                        maxlength: 30,
                    },

                    fullname: {
                        required: true,
                        minlength: 2,
                        maxlength: 50,
                    },

                    email: {
                        required: true,
                        email: true,
                        minlength: 6,
                        maxlength: 50,
                    },

                    phone: {
                        required: true,
                        number: true,
                        minlength: 6,
                        maxlength: 30,
                    },

                    password: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                    },

                    confirmpassword: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                    }


                },

                messages: {

                    name: {
                        required: "Ââåäèòå èìÿ",
                        minlength: "Èìÿ äîëæåíî áûòü ìèíèìóì 2 ñèìâîëà",
                        maxlength: "Ìàêñèìàëüíîå ÷èñëî ñèìâîëîâ - 30",
                    },

                    surname: {
                        required: "Ââåäèòå èìÿ",
                        minlength: "Èìÿ äîëæåíî áûòü ìèíèìóì 2 ñèìâîëà",
                        maxlength: "Ìàêñèìàëüíîå ÷èñëî ñèìâîëîâ - 30",
                    },

                    fullname: {
                        required: "Ââåäèòå ÔÈÎ",
                        minlength: "ÔÈÎ äîëæåíî áûòü ìèíèìóì 6 ñèìâîëîâ",
                        maxlength: "Ìàêñèìàëüíîå ÷èñëî ñèìâîëîâ - 50",
                    },

                    email: {
                        required: "Ââåäèòå email",
                        minlength: "Email äîëæåí áûòü ìèíèìóì 6 ñèìâîëîâ",
                        maxlength: "Ìàêñèìàëüíîå ÷èñëî ñèìâîëîâ - 50",
                    },

                    phone: {
                        required: "Ââåäèòå òåëåôîí",
                        minlength: "Òåëåôîí äîëæåí áûòü ìèíèìóì 6 ñèìâîëîâ",
                        maxlength: "Ìàêñèìàëüíîå ÷èñëî ñèìâîëîâ - 30",
                    },

                    password: {
                        required: "Ââåäèòå ïàðîëü",
                        minlength: "Ïàðîëü äîëæåí áûòü ìèíèìóì èç 6 ñèìâîëîâ",
                        maxlength: "Ìàêñèìàëüíîå ÷èñëî ñèìâîëîâ - 16",
                    },

                    confirmpassword: {
                        required: "Ïîäòâåðäèòå ïàðîëü",
                        minlength: "Ïàðîëü äîëæåí áûòü ìèíèìóì èç 6 ñèìâîëîâ",
                        maxlength: "Ìàêñèìàëüíîå ÷èñëî ñèìâîëîâ - 16",
                    }

                }

            });
        }
    }


    //Äîáàâëÿåì èêîíêè è äåêîð
    $('.add-icon').append('<span class="icon"></span>');

    $('.sidebar-left__nav__item').on("hover touchstart", function(e) {
        var $this = $(this),
            $thisArrow = $this.find('.arrow').stop(true, true),
            activeTab = $this.find('.sub').stop(true, true),
            sepia = $('.sepia').stop(true, true);

        if (e.type == "mouseenter") {
            $thisArrow.fadeIn(300);
            activeTab.fadeIn(300);
            sepia.fadeIn(300);
        } else { // mouseleave
            $thisArrow.fadeOut(300);
            activeTab.fadeOut(300);
            sepia.delay(300).fadeOut(300);
        }
    });


    $('.header-cart').on("hover touchstart", function(e) {
        var $this = $(this),
            $thisSub = $this.find('.cart-sub').stop(true, true);

        if (e.type == "mouseenter") {
            $thisSub.fadeIn(300);
        } else { // mouseleave
            $thisSub.fadeOut(300);
        }
    });

    $('.product-cart .icon-cart').on("hover touchstart", function(e) {
        var $this = $(this),
            $thisHover = $this.closest('.box-product__bottom'),
            priceNew = $thisHover.find('.product-price__new'),
            priceOld = $thisHover.find('.product-price__old');

        if (e.type == "mouseenter") {
            $thisHover.css('background', '#ff7800');
            priceNew.css('color', '#fff');
            priceOld.css('color', '#fff');
        } else { // mouseleave
            $thisHover.css('background', '#f7f7f7');
            priceNew.css('color', '#363636');
            priceOld.css('color', '#363636');
        }
    });

    $('.product-cart .icon-cart-empty').on("hover touchstart", function(e) {
        var $this = $(this),
            $thisHover = $this.closest('.box-product__bottom'),
            none = $thisHover.find('.product-price__none');

        if (e.type == "mouseenter") {
            $thisHover.css('background', '#ff7800');
            none.css('color', '#fff');
        } else { // mouseleave
            $thisHover.css('background', '#f7f7f7');
            none.css('color', '#363636');
        }
    });

    //íàâèãàöèÿ äëÿ ôèëüòðîâ
    $('.filter__item.open').find('.filter__sub').slideToggle(300);

    $('.filter__item > a').on("click touchstart", function() {
        $(this).next('.filter__sub').slideToggle(300);
        $(this).parent('.filter__item').toggleClass('open');
        return false
    });



    var searchBtn = $(".header-search__btn"),
        searchBtnCont = searchBtn.closest('.header-search__container'),
        searchCancel = searchBtnCont.find('.cancel');

    searchBtn.on("click touchstart", function() {
        var $this = $(this),
            searchContainer = $this.closest('.header-search__container'),
            searchHeader = searchContainer.closest('.header-search'),
            searchInput = searchContainer.find('.search-text'),
            searchCancel = searchContainer.find('.cancel');
        headerSub = searchHeader.find('.header-search__sub');

        searchHeader.addClass('active');
        searchInput.fadeIn(300);
        searchCancel.fadeIn(300);
        /*headerSub.delay(300).stop(true,true).fadeIn(300);*/

        return false
    });

    searchCancel.on("click touchstart", function() {
        var $this = $(this),
            headerSearch = $this.closest('.header-search'),
            searchInput = headerSearch.find('.search-text'),
            headerSub = headerSearch.find('.header-search__sub');

        headerSub.fadeOut(300);
        searchInput.css('display', 'none');
        headerSearch.removeClass('active');

        return false
    });

    //ïðîäóêò ñëàéäåð
    $('.block-product__slider__small li').on("click touchstart", function() {
        var $this = $(this);
        $this.siblings().removeClass("active");
        $this.addClass("active");
        $('.block-product__slider__big li').css('display', 'none');
        var activeTab = $this.find("a").attr("href");
        $(activeTab).css('display', 'block');
        return false;
    });

    //ïðîäóêò òàáåð
    $('.block-product__taber__head li').on("click touchstart", function() {
        var $this = $(this);
        $this.siblings().removeClass("active");
        $this.addClass("active");
        $('.bp__tab').css('display', 'none');
        var activeTab = $this.find("a").attr("href");
        $(activeTab).css('display', 'block');
        return false;
    });

    /*
    product-list
    product-form
    */
    $("#btn-comment").on("click touchstart", function() {
        var $this = $(this),
            productlist = $('.product-list').stop(true, true),
            productform = $('.product-form').stop(true, true);

        if (!$this.hasClass('active')) {
            $this.html('îòìåíèòü');
            $this.addClass('active');
            productlist.fadeOut(200);
            productform.fadeIn(200);
        } else {
            $this.html('îñòàâèòü îòçûâ');
            $this.removeClass('active');
            productlist.fadeIn(200);
            productform.fadeOut(200);
        }

        return false;
    });

    //content-taber
    $(".content-taber__head__item").on("click touchstart", function() {

        var $this = $(this);
        $this.siblings().removeClass("active");
        $this.addClass("active");
        $('.content-taber__tab').css('display', 'none');
        var activeTab = $this.find("a").attr("href");
        $(activeTab).css('display', 'block');
        return false;

    });


    //Ñêðîëë ââåðõ
    $('.btn-top a').on("click touchstart", function() {
        $('html, body').animate({
            scrollTop: $(".wrapper").offset().top
        }, 1000);
        return false
    });

    //Âûçûâàåì ñëàéäåðû
    var mainSlider = $('#main-slider');
    if (mainSlider.length) {
        mainSlider.flexslider({
            animation: "slide",
            directionNav: false
        });
    }

    var productSlider = $('.products-slider');
    if (productSlider.length) {
        for (i = productSlider.length; i--;) {
            productSlider.eq(i).find('.flexslider').attr('id', 'products-slider' + i);
            $('#products-slider' + i).flexslider({
                animation: "slide",
                animationLoop: true,
                directionNav: false,
                slideshow: false,
                itemWidth: 222,
                itemMargin: 10
            });
        }
    }

    var bodyWidth = $('body').width(),
        sidebarLeft = $('.sidebar-left'),
        sidebarLeftHide = sidebarLeft.find('.sidebar-left__hide'),
        sidebarLeftHideA = sidebarLeftHide.find('a'),
        sidebarLeftContainer = sidebarLeft.find('.sidebar-left__container'),
        wrapper = $('.wrapper'),
        header = $('.header'),
        btnTop = $('.btn-top');

    if (bodyWidth < 1295) {
        sidebarLeftHide.css('display', 'block');
        sidebarLeftContainer.css('display', 'none');
        sidebarLeft.css('width', '31' + 'px');

        wrapper.css('margin-left', '31' + 'px');
        header.css('left', '31' + 'px');
        btnTop.css('width', '1087' + 'px');


    }


    sidebarLeftHideA.on("click touchstart", function() {

        sidebarLeftHide.toggleClass('active');
        if (sidebarLeftHide.hasClass('active')) {
            sidebarLeftContainer.css('display', 'block');
            sidebarLeft.css('width', '260' + 'px');

            wrapper.css('margin-left', '260' + 'px');
            header.css('left', '260' + 'px');
            btnTop.css('width', '1336' + 'px');
        } else {
            sidebarLeftHide.css('display', 'block');
            sidebarLeftContainer.css('display', 'none');
            sidebarLeft.css('width', '31' + 'px');

            wrapper.css('margin-left', '31' + 'px');
            header.css('left', '31' + 'px');
            btnTop.css('width', '1087' + 'px');
        }

        return false
    });

    sidebarLeftHideA.click();

    //Çàïóñêàåì îáðàáîò÷èê
    $(window).on({
        resize: function() {
            var bodyWidth = $('body').width();

            if (bodyWidth < 1348) {
                sidebarLeftHide.css('display', 'block');
                sidebarLeftContainer.css('display', 'none');
                sidebarLeft.css('width', '31' + 'px');

                wrapper.css('margin-left', '31' + 'px');
                header.css('left', '31' + 'px');
                btnTop.css('width', '1087' + 'px');
            }

            if (bodyWidth > 1348) {
                sidebarLeftHide.css('display', 'none');
                sidebarLeftContainer.css('display', 'block');
                sidebarLeft.css('width', '260' + 'px');

                wrapper.css('margin-left', '260' + 'px');
                header.css('left', '260' + 'px');
                btnTop.css('width', '1336' + 'px');
            }
        }
    });

    /* PIE äëÿ IE7-8 */
    if (window.PIE) {
        $('nav').each(function() {
            PIE.attach(this);
        });
    }
}); //end ready
/* End */
;; /* Start:/js/jquery.flexslider-min.js*/
/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function(d) {
    d.flexslider = function(i, k) {
        var a = d(i),
            c = d.extend({}, d.flexslider.defaults, k),
            e = c.namespace,
            p = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            t = p ? "touchend" : "click",
            l = "vertical" === c.direction,
            m = c.reverse,
            h = 0 < c.itemWidth,
            r = "fade" === c.animation,
            s = "" !== c.asNavFor,
            f = {};
        d.data(i, "flexslider", a);
        f = {
            init: function() {
                a.animating = !1;
                a.currentSlide = c.startAt;
                a.animatingTo = a.currentSlide;
                a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last;
                a.containerSelector = c.selector.substr(0,
                    c.selector.search(" "));
                a.slides = d(c.selector, a);
                a.container = d(a.containerSelector, a);
                a.count = a.slides.length;
                a.syncExists = 0 < d(c.sync).length;
                "slide" === c.animation && (c.animation = "swing");
                a.prop = l ? "top" : "marginLeft";
                a.args = {};
                a.manualPause = !1;
                var b = a,
                    g;
                if (g = !c.video)
                    if (g = !r)
                        if (g = c.useCSS) a: {
                            g = document.createElement("div");
                            var n = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                                e;
                            for (e in n)
                                if (void 0 !== g.style[n[e]]) {
                                    a.pfx = n[e].replace("Perspective", "").toLowerCase();
                                    a.prop = "-" + a.pfx + "-transform";
                                    g = !0;
                                    break a
                                }
                            g = !1
                        }
                        b.transitions = g;
                "" !== c.controlsContainer && (a.controlsContainer = 0 < d(c.controlsContainer).length && d(c.controlsContainer));
                "" !== c.manualControls && (a.manualControls = 0 < d(c.manualControls).length && d(c.manualControls));
                c.randomize && (a.slides.sort(function() {
                    return Math.round(Math.random()) - 0.5
                }), a.container.empty().append(a.slides));
                a.doMath();
                s && f.asNav.setup();
                a.setup("init");
                c.controlNav && f.controlNav.setup();
                c.directionNav && f.directionNav.setup();
                c.keyboard &&
                    (1 === d(a.containerSelector).length || c.multipleKeyboard) && d(document).bind("keyup", function(b) {
                        b = b.keyCode;
                        if (!a.animating && (39 === b || 37 === b)) b = 39 === b ? a.getTarget("next") : 37 === b ? a.getTarget("prev") : !1, a.flexAnimate(b, c.pauseOnAction)
                    });
                c.mousewheel && a.bind("mousewheel", function(b, g) {
                    b.preventDefault();
                    var d = 0 > g ? a.getTarget("next") : a.getTarget("prev");
                    a.flexAnimate(d, c.pauseOnAction)
                });
                c.pausePlay && f.pausePlay.setup();
                c.slideshow && (c.pauseOnHover && a.hover(function() {
                        !a.manualPlay && !a.manualPause && a.pause()
                    },
                    function() {
                        !a.manualPause && !a.manualPlay && a.play()
                    }), 0 < c.initDelay ? setTimeout(a.play, c.initDelay) : a.play());
                p && c.touch && f.touch();
                (!r || r && c.smoothHeight) && d(window).bind("resize focus", f.resize);
                setTimeout(function() {
                    c.start(a)
                }, 200)
            },
            asNav: {
                setup: function() {
                    a.asNav = !0;
                    a.animatingTo = Math.floor(a.currentSlide / a.move);
                    a.currentItem = a.currentSlide;
                    a.slides.removeClass(e + "active-slide").eq(a.currentItem).addClass(e + "active-slide");
                    a.slides.click(function(b) {
                        b.preventDefault();
                        var b = d(this),
                            g = b.index();
                        !d(c.asNavFor).data("flexslider").animating && !b.hasClass("active") && (a.direction = a.currentItem < g ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    a.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var b = 1,
                        g;
                    a.controlNavScaffold = d('<ol class="' + e + "control-nav " + e + ("thumbnails" === c.controlNav ? "control-thumbs" : "control-paging") + '"></ol>');
                    if (1 < a.pagingCount)
                        for (var n = 0; n < a.pagingCount; n++) g = "thumbnails" === c.controlNav ?
                            '<img src="' + a.slides.eq(n).attr("data-thumb") + '"/>' : "<a>" + b + "</a>", a.controlNavScaffold.append("<li>" + g + "</li>"), b++;
                    a.controlsContainer ? d(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold);
                    f.controlNav.set();
                    f.controlNav.active();
                    a.controlNavScaffold.delegate("a, img", t, function(b) {
                        b.preventDefault();
                        var b = d(this),
                            g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (a.direction = g > a.currentSlide ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    p && a.controlNavScaffold.delegate("a",
                        "click touchstart",
                        function(a) {
                            a.preventDefault()
                        })
                },
                setupManual: function() {
                    a.controlNav = a.manualControls;
                    f.controlNav.active();
                    a.controlNav.live(t, function(b) {
                        b.preventDefault();
                        var b = d(this),
                            g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (g > a.currentSlide ? a.direction = "next" : a.direction = "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    p && a.controlNav.live("click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                set: function() {
                    a.controlNav = d("." + e + "control-nav li " + ("thumbnails" === c.controlNav ? "img" : "a"),
                        a.controlsContainer ? a.controlsContainer : a)
                },
                active: function() {
                    a.controlNav.removeClass(e + "active").eq(a.animatingTo).addClass(e + "active")
                },
                update: function(b, c) {
                    1 < a.pagingCount && "add" === b ? a.controlNavScaffold.append(d("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(c).closest("li").remove();
                    f.controlNav.set();
                    1 < a.pagingCount && a.pagingCount !== a.controlNav.length ? a.update(c, b) : f.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var b = d('<ul class="' +
                        e + 'direction-nav"><li><a class="' + e + 'prev" href="#">' + c.prevText + '</a></li><li><a class="' + e + 'next" href="#">' + c.nextText + "</a></li></ul>");
                    a.controlsContainer ? (d(a.controlsContainer).append(b), a.directionNav = d("." + e + "direction-nav li a", a.controlsContainer)) : (a.append(b), a.directionNav = d("." + e + "direction-nav li a", a));
                    f.directionNav.update();
                    a.directionNav.bind(t, function(b) {
                        b.preventDefault();
                        b = d(this).hasClass(e + "next") ? a.getTarget("next") : a.getTarget("prev");
                        a.flexAnimate(b, c.pauseOnAction)
                    });
                    p && a.directionNav.bind("click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                update: function() {
                    var b = e + "disabled";
                    1 === a.pagingCount ? a.directionNav.addClass(b) : c.animationLoop ? a.directionNav.removeClass(b) : 0 === a.animatingTo ? a.directionNav.removeClass(b).filter("." + e + "prev").addClass(b) : a.animatingTo === a.last ? a.directionNav.removeClass(b).filter("." + e + "next").addClass(b) : a.directionNav.removeClass(b)
                }
            },
            pausePlay: {
                setup: function() {
                    var b = d('<div class="' + e + 'pauseplay"><a></a></div>');
                    a.controlsContainer ?
                        (a.controlsContainer.append(b), a.pausePlay = d("." + e + "pauseplay a", a.controlsContainer)) : (a.append(b), a.pausePlay = d("." + e + "pauseplay a", a));
                    f.pausePlay.update(c.slideshow ? e + "pause" : e + "play");
                    a.pausePlay.bind(t, function(b) {
                        b.preventDefault();
                        d(this).hasClass(e + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())
                    });
                    p && a.pausePlay.bind("click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                update: function(b) {
                    "play" === b ? a.pausePlay.removeClass(e + "pause").addClass(e +
                        "play").text(c.playText) : a.pausePlay.removeClass(e + "play").addClass(e + "pause").text(c.pauseText)
                }
            },
            touch: function() {
                function b(b) {
                    j = l ? d - b.touches[0].pageY : d - b.touches[0].pageX;
                    p = l ? Math.abs(j) < Math.abs(b.touches[0].pageX - e) : Math.abs(j) < Math.abs(b.touches[0].pageY - e);
                    if (!p || 500 < Number(new Date) - k) b.preventDefault(), !r && a.transitions && (c.animationLoop || (j /= 0 === a.currentSlide && 0 > j || a.currentSlide === a.last && 0 < j ? Math.abs(j) / q + 2 : 1), a.setProps(f + j, "setTouch"))
                }

                function g() {
                    i.removeEventListener("touchmove",
                        b, !1);
                    if (a.animatingTo === a.currentSlide && !p && null !== j) {
                        var h = m ? -j : j,
                            l = 0 < h ? a.getTarget("next") : a.getTarget("prev");
                        a.canAdvance(l) && (550 > Number(new Date) - k && 50 < Math.abs(h) || Math.abs(h) > q / 2) ? a.flexAnimate(l, c.pauseOnAction) : r || a.flexAnimate(a.currentSlide, c.pauseOnAction, !0)
                    }
                    i.removeEventListener("touchend", g, !1);
                    f = j = e = d = null
                }
                var d, e, f, q, j, k, p = !1;
                i.addEventListener("touchstart", function(j) {
                    a.animating ? j.preventDefault() : 1 === j.touches.length && (a.pause(), q = l ? a.h : a.w, k = Number(new Date), f = h && m && a.animatingTo ===
                        a.last ? 0 : h && m ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + c.itemMargin) * a.move * a.currentSlide : m ? (a.last - a.currentSlide + a.cloneOffset) * q : (a.currentSlide + a.cloneOffset) * q, d = l ? j.touches[0].pageY : j.touches[0].pageX, e = l ? j.touches[0].pageX : j.touches[0].pageY, i.addEventListener("touchmove", b, !1), i.addEventListener("touchend", g, !1))
                }, !1)
            },
            resize: function() {
                !a.animating && a.is(":visible") && (h || a.doMath(), r ? f.smoothHeight() : h ? (a.slides.width(a.computedW),
                    a.update(a.pagingCount), a.setProps()) : l ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (c.smoothHeight && f.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
            },
            smoothHeight: function(b) {
                if (!l || r) {
                    var c = r ? a : a.viewport;
                    b ? c.animate({
                        height: a.slides.eq(a.animatingTo).height()
                    }, b) : c.height(a.slides.eq(a.animatingTo).height())
                }
            },
            sync: function(b) {
                var g = d(c.sync).data("flexslider"),
                    e = a.animatingTo;
                switch (b) {
                    case "animate":
                        g.flexAnimate(e, c.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        !g.playing &&
                            !g.asNav && g.play();
                        break;
                    case "pause":
                        g.pause()
                }
            }
        };
        a.flexAnimate = function(b, g, n, i, k) {
            s && 1 === a.pagingCount && (a.direction = a.currentItem < b ? "next" : "prev");
            if (!a.animating && (a.canAdvance(b, k) || n) && a.is(":visible")) {
                if (s && i)
                    if (n = d(c.asNavFor).data("flexslider"), a.atEnd = 0 === b || b === a.count - 1, n.flexAnimate(b, !0, !1, !0, k), a.direction = a.currentItem < b ? "next" : "prev", n.direction = a.direction, Math.ceil((b + 1) / a.visible) - 1 !== a.currentSlide && 0 !== b) a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e +
                        "active-slide"), b = Math.floor(b / a.visible);
                    else return a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), !1;
                a.animating = !0;
                a.animatingTo = b;
                c.before(a);
                g && a.pause();
                a.syncExists && !k && f.sync("animate");
                c.controlNav && f.controlNav.active();
                h || a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide");
                a.atEnd = 0 === b || b === a.last;
                c.directionNav && f.directionNav.update();
                b === a.last && (c.end(a), c.animationLoop || a.pause());
                if (r) p ? (a.slides.eq(a.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), a.slides.eq(b).css({
                    opacity: 1,
                    zIndex: 2
                }), a.slides.unbind("webkitTransitionEnd transitionend"), a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend", function() {
                    c.after(a)
                }), a.animating = !1, a.currentSlide = a.animatingTo) : (a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed, c.easing), a.slides.eq(b).fadeIn(c.animationSpeed, c.easing, a.wrapup));
                else {
                    var q = l ? a.slides.filter(":first").height() : a.computedW;
                    h ? (b = c.itemWidth > a.w ? 2 * c.itemMargin : c.itemMargin, b = (a.itemW + b) * a.move * a.animatingTo,
                        b = b > a.limit && 1 !== a.visible ? a.limit : b) : b = 0 === a.currentSlide && b === a.count - 1 && c.animationLoop && "next" !== a.direction ? m ? (a.count + a.cloneOffset) * q : 0 : a.currentSlide === a.last && 0 === b && c.animationLoop && "prev" !== a.direction ? m ? 0 : (a.count + 1) * q : m ? (a.count - 1 - b + a.cloneOffset) * q : (b + a.cloneOffset) * q;
                    a.setProps(b, "", c.animationSpeed);
                    if (a.transitions) {
                        if (!c.animationLoop || !a.atEnd) a.animating = !1, a.currentSlide = a.animatingTo;
                        a.container.unbind("webkitTransitionEnd transitionend");
                        a.container.bind("webkitTransitionEnd transitionend",
                            function() {
                                a.wrapup(q)
                            })
                    } else a.container.animate(a.args, c.animationSpeed, c.easing, function() {
                        a.wrapup(q)
                    })
                }
                c.smoothHeight && f.smoothHeight(c.animationSpeed)
            }
        };
        a.wrapup = function(b) {
            !r && !h && (0 === a.currentSlide && a.animatingTo === a.last && c.animationLoop ? a.setProps(b, "jumpEnd") : a.currentSlide === a.last && (0 === a.animatingTo && c.animationLoop) && a.setProps(b, "jumpStart"));
            a.animating = !1;
            a.currentSlide = a.animatingTo;
            c.after(a)
        };
        a.animateSlides = function() {
            a.animating || a.flexAnimate(a.getTarget("next"))
        };
        a.pause =
            function() {
                clearInterval(a.animatedSlides);
                a.playing = !1;
                c.pausePlay && f.pausePlay.update("play");
                a.syncExists && f.sync("pause")
            };
        a.play = function() {
            a.animatedSlides = setInterval(a.animateSlides, c.slideshowSpeed);
            a.playing = !0;
            c.pausePlay && f.pausePlay.update("pause");
            a.syncExists && f.sync("play")
        };
        a.canAdvance = function(b, g) {
            var d = s ? a.pagingCount - 1 : a.last;
            return g ? !0 : s && a.currentItem === a.count - 1 && 0 === b && "prev" === a.direction ? !0 : s && 0 === a.currentItem && b === a.pagingCount - 1 && "next" !== a.direction ? !1 : b === a.currentSlide &&
                !s ? !1 : c.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && b === d && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === d && 0 === b && "next" === a.direction ? !1 : !0
        };
        a.getTarget = function(b) {
            a.direction = b;
            return "next" === b ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1
        };
        a.setProps = function(b, g, d) {
            var e, f = b ? b : (a.itemW + c.itemMargin) * a.move * a.animatingTo;
            e = -1 * function() {
                if (h) return "setTouch" === g ? b : m && a.animatingTo === a.last ? 0 : m ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : a.animatingTo ===
                    a.last ? a.limit : f;
                switch (g) {
                    case "setTotal":
                        return m ? (a.count - 1 - a.currentSlide + a.cloneOffset) * b : (a.currentSlide + a.cloneOffset) * b;
                    case "setTouch":
                        return b;
                    case "jumpEnd":
                        return m ? b : a.count * b;
                    case "jumpStart":
                        return m ? a.count * b : b;
                    default:
                        return b
                }
            }() + "px";
            a.transitions && (e = l ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", d = void 0 !== d ? d / 1E3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", d));
            a.args[a.prop] = e;
            (a.transitions || void 0 === d) && a.container.css(a.args)
        };
        a.setup = function(b) {
            if (r) a.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === b && (p ? a.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + c.animationSpeed / 1E3 + "s ease",
                zIndex: 1
            }).eq(a.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed, c.easing)), c.smoothHeight && f.smoothHeight();
            else {
                var g, n;
                "init" === b && (a.viewport = d('<div class="' + e + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset =
                    0, m && (n = d.makeArray(a.slides).reverse(), a.slides = d(n), a.container.empty().append(a.slides)));
                c.animationLoop && !h && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== b && a.container.find(".clone").remove(), a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));
                a.newSlides = d(c.selector, a);
                g = m ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset;
                l && !h ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"),
                    setTimeout(function() {
                        a.newSlides.css({
                            display: "block"
                        });
                        a.doMath();
                        a.viewport.height(a.h);
                        a.setProps(g * a.h, "init")
                    }, "init" === b ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(g * a.computedW, "init"), setTimeout(function() {
                    a.doMath();
                    a.newSlides.css({
                        width: a.computedW,
                        "float": "left",
                        display: "block"
                    });
                    c.smoothHeight && f.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            h || a.slides.removeClass(e + "active-slide").eq(a.currentSlide).addClass(e + "active-slide")
        };
        a.doMath = function() {
            var b = a.slides.first(),
                d = c.itemMargin,
                e = c.minItems,
                f = c.maxItems;
            a.w = a.width();
            a.h = b.height();
            a.boxPadding = b.outerWidth() - b.width();
            h ? (a.itemT = c.itemWidth + d, a.minW = e ? e * a.itemT : a.w, a.maxW = f ? f * a.itemT : a.w, a.itemW = a.minW > a.w ? (a.w - d * e) / e : a.maxW < a.w ? (a.w - d * f) / f : c.itemWidth > a.w ? a.w : c.itemWidth, a.visible = Math.floor(a.w / (a.itemW + d)), a.move = 0 < c.move && c.move < a.visible ? c.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : c.itemWidth > a.w ? (a.itemW + 2 * d) * a.count - a.w -
                d : (a.itemW + d) * a.count - a.w - d) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1);
            a.computedW = a.itemW - a.boxPadding
        };
        a.update = function(b, d) {
            a.doMath();
            h || (b < a.currentSlide ? a.currentSlide += 1 : b <= a.currentSlide && 0 !== b && (a.currentSlide -= 1), a.animatingTo = a.currentSlide);
            if (c.controlNav && !a.manualControls)
                if ("add" === d && !h || a.pagingCount > a.controlNav.length) f.controlNav.update("add");
                else if ("remove" === d && !h || a.pagingCount < a.controlNav.length) h && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1),
                f.controlNav.update("remove", a.last);
            c.directionNav && f.directionNav.update()
        };
        a.addSlide = function(b, e) {
            var f = d(b);
            a.count += 1;
            a.last = a.count - 1;
            l && m ? void 0 !== e ? a.slides.eq(a.count - e).after(f) : a.container.prepend(f) : void 0 !== e ? a.slides.eq(e).before(f) : a.container.append(f);
            a.update(e, "add");
            a.slides = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.added(a)
        };
        a.removeSlide = function(b) {
            var e = isNaN(b) ? a.slides.index(d(b)) : b;
            a.count -= 1;
            a.last = a.count - 1;
            isNaN(b) ? d(b, a.slides).remove() : l && m ? a.slides.eq(a.last).remove() :
                a.slides.eq(b).remove();
            a.doMath();
            a.update(e, "remove");
            a.slides = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.removed(a)
        };
        f.init()
    };
    d.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7E3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {}
    };
    d.fn.flexslider = function(i) {
        void 0 === i && (i = {});
        if ("object" === typeof i) return this.each(function() {
            var a = d(this),
                c = a.find(i.selector ? i.selector : ".slides > li");
            1 === c.length ? (c.fadeIn(400),
                i.start && i.start(a)) : void 0 == a.data("flexslider") && new d.flexslider(this, i)
        });
        var k = d(this).data("flexslider");
        switch (i) {
            case "play":
                k.play();
                break;
            case "pause":
                k.pause();
                break;
            case "next":
                k.flexAnimate(k.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                k.flexAnimate(k.getTarget("prev"), !0);
                break;
            default:
                "number" === typeof i && k.flexAnimate(i, !0)
        }
    }
})(jQuery);
/* End */
;; /* Start:/js/jquery.formstyler.min.js*/
/* jQuery Form Styler v1.5.3.4 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
(function(c) {
    c.fn.styler = function(D) {
        var e = c.extend({
            wrapper: "form",
            idSuffix: "-styler",
            filePlaceholder: "\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",
            fileBrowse: "\u041e\u0431\u0437\u043e\u0440...",
            selectSearch: !0,
            selectSearchLimit: 10,
            selectSearchNotFound: "\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",
            selectSearchPlaceholder: "\u041f\u043e\u0438\u0441\u043a...",
            selectVisibleOptions: 0,
            singleSelectzIndex: "100",
            selectSmartPositioning: !0,
            onSelectOpened: function() {},
            onSelectClosed: function() {},
            onFormStyled: function() {}
        }, D);
        return this.each(function() {
            function w() {
                var c = "",
                    m = "",
                    b = "",
                    u = "";
                void 0 !== a.attr("id") && "" !== a.attr("id") && (c = ' id="' + a.attr("id") + e.idSuffix + '"');
                void 0 !== a.attr("title") && "" !== a.attr("title") && (m = ' title="' + a.attr("title") + '"');
                void 0 !== a.attr("class") && "" !== a.attr("class") && (b = " " + a.attr("class"));
                for (var t = a.data(), f = 0; f < t.length; f++) "" !== t[f] && (u += " data-" + f + '="' + t[f] + '"');
                this.id =
                    c + u;
                this.title = m;
                this.classes = b
            }
            var a = c(this);
            if (a.is(":checkbox")) a.each(function() {
                if (1 > a.parent("div.jq-checkbox").length) {
                    var e = function() {
                        var e = new w,
                            b = c("<div" + e.id + ' class="jq-checkbox' + e.classes + '"' + e.title + '><div class="jq-checkbox__div"></div></div>');
                        a.css({
                            position: "absolute",
                            zIndex: "-1",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        }).after(b).prependTo(b);
                        b.attr("unselectable", "on").css({
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "-o-user-select": "none",
                            "user-select": "none",
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden"
                        });
                        a.is(":checked") && b.addClass("checked");
                        a.is(":disabled") && b.addClass("disabled");
                        b.on("click.styler", function() {
                            b.is(".disabled") || (a.is(":checked") ? (a.prop("checked", !1), b.removeClass("checked")) : (a.prop("checked", !0), b.addClass("checked")), a.change());
                            return !1
                        });
                        a.closest("label").add('label[for="' + a.attr("id") + '"]').click(function(a) {
                            b.click();
                            a.preventDefault()
                        });
                        a.on("change.styler", function() {
                            a.is(":checked") ? b.addClass("checked") :
                                b.removeClass("checked")
                        }).on("keydown.styler", function(a) {
                            32 == a.which && b.click()
                        }).on("focus.styler", function() {
                            b.is(".disabled") || b.addClass("focused")
                        }).on("blur.styler", function() {
                            b.removeClass("focused")
                        })
                    };
                    e();
                    a.on("refresh", function() {
                        a.off(".styler").parent().before(a).remove();
                        e()
                    })
                }
            });
            else if (a.is(":radio")) a.each(function() {
                if (1 > a.parent("div.jq-radio").length) {
                    var g = function() {
                        var m = new w,
                            b = c("<div" + m.id + ' class="jq-radio' + m.classes + '"' + m.title + '><div class="jq-radio__div"></div></div>');
                        a.css({
                            position: "absolute",
                            zIndex: "-1",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        }).after(b).prependTo(b);
                        b.attr("unselectable", "on").css({
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "-o-user-select": "none",
                            "user-select": "none",
                            display: "inline-block",
                            position: "relative"
                        });
                        a.is(":checked") && b.addClass("checked");
                        a.is(":disabled") && b.addClass("disabled");
                        b.on("click.styler", function() {
                            b.is(".disabled") || (b.closest(e.wrapper).find('input[name="' + a.attr("name") + '"]').prop("checked", !1).parent().removeClass("checked"), a.prop("checked", !0).parent().addClass("checked"), a.change());
                            return !1
                        });
                        a.closest("label").add('label[for="' + a.attr("id") + '"]').click(function(a) {
                            b.click();
                            a.preventDefault()
                        });
                        a.on("change.styler", function() {
                            a.parent().addClass("checked")
                        }).on("focus.styler", function() {
                            b.is(".disabled") || b.addClass("focused")
                        }).on("blur.styler", function() {
                            b.removeClass("focused")
                        })
                    };
                    g();
                    a.on("refresh", function() {
                        a.off(".styler").parent().before(a).remove();
                        g()
                    })
                }
            });
            else if (a.is(":file")) a.css({
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                margin: 0,
                padding: 0
            }).each(function() {
                if (1 > a.parent("div.jq-file").length) {
                    var g = function() {
                        var m = new w,
                            b = c("<div" + m.id + ' class="jq-file' + m.classes + '"' + m.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
                            g = c('<div class="jq-file__name">' + e.filePlaceholder + "</div>").appendTo(b);
                        c('<div class="jq-file__browse">' + e.fileBrowse + "</div>").appendTo(b);
                        a.after(b);
                        b.append(a);
                        a.is(":disabled") && b.addClass("disabled");
                        a.on("change.styler",
                            function() {
                                var c = a.val();
                                if (a.is("[multiple]"))
                                    for (var c = "", f = a[0].files, m = 0; m < f.length; m++) c += (0 < m ? ", " : "") + f[m].name;
                                g.text(c.replace(/.+[\\\/]/, ""));
                                "" === c ? (g.text(e.filePlaceholder), b.removeClass("changed")) : b.addClass("changed")
                            }).on("focus.styler", function() {
                            b.addClass("focused")
                        }).on("blur.styler", function() {
                            b.removeClass("focused")
                        }).on("click.styler", function() {
                            b.removeClass("focused")
                        })
                    };
                    g();
                    a.on("refresh", function() {
                        a.off(".styler").parent().before(a).remove();
                        g()
                    })
                }
            });
            else if (a.is("select")) a.each(function() {
                if (1 >
                    a.parent("div.jqselect").length) {
                    var g = function() {
                        function m(a) {
                            a.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function(a) {
                                var b = null;
                                "mousewheel" == a.type ? b = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" == a.type && (b = 40 * a.originalEvent.detail);
                                b && (a.stopPropagation(), a.preventDefault(), c(this).scrollTop(b + c(this).scrollTop()))
                            })
                        }

                        function b() {
                            i = 0;
                            for (len = f.length; i < len; i++) {
                                var a = "",
                                    c = "",
                                    b = a = "",
                                    e = "",
                                    m = "";
                                f.eq(i).prop("selected") && (c = "selected sel");
                                f.eq(i).is(":disabled") && (c = "disabled");
                                f.eq(i).is(":selected:disabled") && (c = "selected sel disabled");
                                void 0 !== f.eq(i).attr("class") && (b = " " + f.eq(i).attr("class"), m = ' data-jqfs-class="' + f.eq(i).attr("class") + '"');
                                var h = f.eq(i).data(),
                                    l;
                                for (l in h) "" !== h[l] && (a += " data-" + l + '="' + h[l] + '"');
                                a = "<li" + m + a + ' class="' + c + b + '">' + f.eq(i).text() + "</li>";
                                f.eq(i).parent().is("optgroup") && (void 0 !== f.eq(i).parent().attr("class") && (e = " " + f.eq(i).parent().attr("class")), a = "<li" + m + ' class="' + c + b + " option" + e + '">' + f.eq(i).text() + "</li>", f.eq(i).is(":first-child") &&
                                    (a = '<li class="optgroup' + e + '">' + f.eq(i).parent().attr("label") + "</li>" + a));
                                x += a
                            }
                        }

                        function g() {
                            var s = new w,
                                d = c("<div" + s.id + ' class="jq-selectbox jqselect' + s.classes + '" style="display: inline-block; position: relative; z-index:' + e.singleSelectzIndex + '"><div class="jq-selectbox__select"' + s.title + ' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
                            a.css({
                                margin: 0,
                                padding: 0
                            }).after(d).prependTo(d);
                            var s = c("div.jq-selectbox__select", d),
                                q = c("div.jq-selectbox__select-text", d),
                                n = f.filter(":selected");
                            n.length ? q.html(n.text()) : q.html(f.first().text());
                            b();
                            var p = "";
                            e.selectSearch && (p = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + e.selectSearchPlaceholder + '"></div><div class="jq-selectbox__not-found">' + e.selectSearchNotFound + "</div>");
                            var h = c('<div class="jq-selectbox__dropdown" style="position: absolute">' + p + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' +
                                x + "</ul></div>");
                            d.append(h);
                            var l = c("ul", h),
                                k = c("li", h),
                                r = c("input", h),
                                y = c("div.jq-selectbox__not-found", h).hide();
                            k.length < e.selectSearchLimit && r.parent().hide();
                            var v = 0,
                                B = 0;
                            k.each(function() {
                                var a = c(this);
                                a.css({
                                    display: "inline-block"
                                });
                                a.innerWidth() > v && (v = a.innerWidth(), B = a.width());
                                a.css({
                                    display: "block"
                                })
                            });
                            var p = d.clone().appendTo("body").width("auto"),
                                t = p.width();
                            p.remove();
                            t == d.width() && (q.width(B), v += d.find("div.jq-selectbox__trigger").width());
                            v > d.width() && h.width(v);
                            a.css({
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0
                            });
                            var u = d.outerHeight(),
                                A = r.outerHeight(),
                                z = l.css("max-height"),
                                p = k.filter(".selected");
                            1 > p.length && k.first().addClass("selected sel");
                            void 0 === k.data("li-height") && k.data("li-height", k.outerHeight());
                            var C = h.css("top");
                            "auto" == h.css("left") && h.css({
                                left: 0
                            });
                            "auto" == h.css("top") && h.css({
                                top: u
                            });
                            h.hide();
                            p.length && (f.first().text() != n.text() && d.addClass("changed"), d.data("jqfs-class", p.data("jqfs-class")), d.addClass(p.data("jqfs-class")));
                            if (a.is(":disabled")) return d.addClass("disabled"), !1;
                            s.click(function() {
                                c("div.jq-selectbox").filter(".opened").length && e.onSelectClosed.call(c("div.jq-selectbox").filter(".opened"));
                                a.focus();
                                if (!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
                                    var b = k.data("li-height");
                                    if (e.selectSmartPositioning) {
                                        var f = c(window),
                                            q = d.offset().top,
                                            n = f.height() - u - (q - f.scrollTop()),
                                            g = e.selectVisibleOptions,
                                            s = 5 * b,
                                            p = b * g;
                                        0 < g && 6 > g && (s = p);
                                        0 === g && (p = "auto");
                                        n > s + A + 20 ? (h.height("auto").css({
                                            bottom: "auto",
                                            top: C
                                        }), g = function() {
                                            l.css("max-height",
                                                Math.floor((n - 20 - A) / b) * b)
                                        }, g(), l.css("max-height", p), "none" != z && l.css("max-height", z), n < h.outerHeight() + 20 && g()) : (h.height("auto").css({
                                            top: "auto",
                                            bottom: C
                                        }), g = function() {
                                            l.css("max-height", Math.floor((q - f.scrollTop() - 20 - A) / b) * b)
                                        }, g(), l.css("max-height", p), "none" != z && l.css("max-height", z), q - f.scrollTop() - 20 < h.outerHeight() + 20 && g())
                                    }
                                    c("div.jqselect").css({
                                        zIndex: e.singleSelectzIndex - 1
                                    }).removeClass("opened");
                                    d.css({
                                        zIndex: e.singleSelectzIndex
                                    });
                                    h.is(":hidden") ? (c("div.jq-selectbox__dropdown:visible").hide(),
                                        h.show(), d.addClass("opened focused"), e.onSelectOpened.call(d)) : (h.hide(), d.removeClass("opened"), c("div.jq-selectbox").filter(".opened").length && e.onSelectClosed.call(d));
                                    k.filter(".selected").length && (0 !== l.innerHeight() / b % 2 && (b /= 2), l.scrollTop(l.scrollTop() + k.filter(".selected").position().top - l.innerHeight() / 2 + b));
                                    r.length && (r.val("").keyup(), y.hide(), r.keyup(function() {
                                        var a = c(this).val();
                                        k.each(function() {
                                            c(this).html().match(RegExp(".*?" + a + ".*?", "i")) ? c(this).show() : c(this).hide()
                                        });
                                        1 > k.filter(":visible").length ?
                                            y.show() : y.hide()
                                    }));
                                    m(l);
                                    return !1
                                }
                            });
                            k.hover(function() {
                                c(this).siblings().removeClass("selected")
                            });
                            k.filter(".selected").text();
                            k.filter(".selected").text();
                            k.filter(":not(.disabled):not(.optgroup)").click(function() {
                                a.focus();
                                var b = c(this),
                                    l = b.text();
                                if (!b.is(".selected")) {
                                    var k = b.index(),
                                        k = k - b.prevAll(".optgroup").length;
                                    b.addClass("selected sel").siblings().removeClass("selected sel");
                                    f.prop("selected", !1).eq(k).prop("selected", !0);
                                    q.html(l);
                                    d.data("jqfs-class") && d.removeClass(d.data("jqfs-class"));
                                    d.data("jqfs-class", b.data("jqfs-class"));
                                    d.addClass(b.data("jqfs-class"));
                                    a.change()
                                }
                                r.length && (r.val("").keyup(), y.hide());
                                h.hide();
                                d.removeClass("opened");
                                e.onSelectClosed.call(d)
                            });
                            h.mouseout(function() {
                                c("li.sel", h).addClass("selected")
                            });
                            a.on("change.styler", function() {
                                q.html(f.filter(":selected").text());
                                k.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
                                f.first().text() != k.filter(".selected").text() ? d.addClass("changed") : d.removeClass("changed")
                            }).on("focus.styler",
                                function() {
                                    d.addClass("focused");
                                    c("div.jqselect").removeClass("opened")
                                }).on("blur.styler", function() {
                                d.removeClass("focused")
                            }).on("keydown.styler keyup.styler", function(b) {
                                var c = k.data("li-height");
                                q.html(f.filter(":selected").text());
                                k.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
                                38 != b.which && 37 != b.which && 33 != b.which && 36 != b.which || l.scrollTop(l.scrollTop() + k.filter(".selected").position().top);
                                40 != b.which && 39 != b.which && 34 != b.which && 35 != b.which ||
                                    l.scrollTop(l.scrollTop() + k.filter(".selected").position().top - l.innerHeight() + c);
                                32 == b.which && b.preventDefault();
                                13 == b.which && (b.preventDefault(), h.hide(), e.onSelectClosed.call(d))
                            });
                            c(document).on("click", function(a) {
                                c(a.target).parents().hasClass("jq-selectbox") || "OPTION" == a.target.nodeName || (c("div.jq-selectbox").filter(".opened").length && e.onSelectClosed.call(c("div.jq-selectbox").filter(".opened")), r.length && r.val("").keyup(), h.hide().find("li.sel").addClass("selected"), d.removeClass("focused opened"))
                            })
                        }

                        function t() {
                            var e = new w,
                                d = c("<div" + e.id + ' class="jq-select-multiple jqselect' + e.classes + '"' + e.title + ' style="display: inline-block; position: relative"></div>');
                            a.css({
                                margin: 0,
                                padding: 0
                            }).after(d);
                            b();
                            d.append("<ul>" + x + "</ul>");
                            var g = c("ul", d).css({
                                    position: "relative",
                                    "overflow-x": "hidden",
                                    "-webkit-overflow-scrolling": "touch"
                                }),
                                n = c("li", d).attr("unselectable", "on").css({
                                    "-webkit-user-select": "none",
                                    "-moz-user-select": "none",
                                    "-ms-user-select": "none",
                                    "-o-user-select": "none",
                                    "user-select": "none",
                                    "white-space": "nowrap"
                                }),
                                e = a.attr("size"),
                                p = g.outerHeight(),
                                h = n.outerHeight();
                            void 0 !== e && 0 < e ? g.css({
                                height: h * e
                            }) : g.css({
                                height: 4 * h
                            });
                            p > d.height() && (g.css("overflowY", "scroll"), m(g), n.filter(".selected").length && g.scrollTop(g.scrollTop() + n.filter(".selected").position().top));
                            a.prependTo(d).css({
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0
                            });
                            if (a.is(":disabled")) d.addClass("disabled"), f.each(function() {
                                c(this).is(":selected") && n.eq(c(this).index()).addClass("selected")
                            });
                            else if (n.filter(":not(.disabled):not(.optgroup)").click(function(b) {
                                    a.focus();
                                    var d = c(this);
                                    b.ctrlKey || b.metaKey || d.addClass("selected");
                                    b.shiftKey || d.addClass("first");
                                    b.ctrlKey || (b.metaKey || b.shiftKey) || d.siblings().removeClass("selected first");
                                    if (b.ctrlKey || b.metaKey) d.is(".selected") ? d.removeClass("selected first") : d.addClass("selected first"), d.siblings().removeClass("first");
                                    if (b.shiftKey) {
                                        var e = !1,
                                            g = !1;
                                        d.siblings().removeClass("selected").siblings(".first").addClass("selected");
                                        d.prevAll().each(function() {
                                            c(this).is(".first") && (e = !0)
                                        });
                                        d.nextAll().each(function() {
                                            c(this).is(".first") &&
                                                (g = !0)
                                        });
                                        e && d.prevAll().each(function() {
                                            if (c(this).is(".selected")) return !1;
                                            c(this).not(".disabled, .optgroup").addClass("selected")
                                        });
                                        g && d.nextAll().each(function() {
                                            if (c(this).is(".selected")) return !1;
                                            c(this).not(".disabled, .optgroup").addClass("selected")
                                        });
                                        1 == n.filter(".selected").length && d.addClass("first")
                                    }
                                    f.prop("selected", !1);
                                    n.filter(".selected").each(function() {
                                        var a = c(this),
                                            b = a.index();
                                        a.is(".option") && (b -= a.prevAll(".optgroup").length);
                                        f.eq(b).prop("selected", !0)
                                    });
                                    a.change()
                                }), f.each(function(a) {
                                    c(this).data("optionIndex",
                                        a)
                                }), a.on("change.styler", function() {
                                    n.removeClass("selected");
                                    var a = [];
                                    f.filter(":selected").each(function() {
                                        a.push(c(this).data("optionIndex"))
                                    });
                                    n.not(".optgroup").filter(function(b) {
                                        return -1 < c.inArray(b, a)
                                    }).addClass("selected")
                                }).on("focus.styler", function() {
                                    d.addClass("focused")
                                }).on("blur.styler", function() {
                                    d.removeClass("focused")
                                }), p > d.height()) a.on("keydown.styler", function(a) {
                                38 != a.which && 37 != a.which && 33 != a.which || g.scrollTop(g.scrollTop() + n.filter(".selected").position().top - h);
                                40 != a.which &&
                                    39 != a.which && 34 != a.which || g.scrollTop(g.scrollTop() + n.filter(".selected:last").position().top - g.innerHeight() + 2 * h)
                            })
                        }
                        var f = c("option", a),
                            x = "";
                        a.is("[multiple]") ? t() : g()
                    };
                    g();
                    a.on("refresh", function() {
                        a.off(".styler").parent().before(a).remove();
                        g()
                    })
                }
            });
            else if (a.is(":reset")) a.on("click", function() {
                setTimeout(function() {
                    a.closest(e.wrapper).find("input, select").trigger("refresh")
                }, 1)
            })
        }).promise().done(function() {
            e.onFormStyled.call()
        })
    }
})(jQuery);
/* End */
;; /* Start:/js/countPlugin.js*/
// JavaScript Document



$(function() {

    //Êîëè÷åñòâî òîâàðîâ

    var countPlugin = $('.product-counter');

    if (countPlugin.length) {

        for (i = countPlugin.length; i--;) {

            var countPluginVal = $('.product-counter').eq(i).find('input').val();

            if (countPluginVal <= 1) {

                $('.product-counter').eq(i).find('.minus').addClass('disable');

            }

        }

    }



    //Ââîä òîëüêî ÷èñåë

    jQuery.fn.ForceNumericOnly =

        function()

    {

            
        return this.each(function()

                 {

                        
                $(this).keydown(function(e)

                             {

                                    
                        var key = e.charCode || e.keyCode || 0;

                                     // Ðàçðåøàåì backspace, tab, delete, ñòðåëêè, îáû÷íûå öèôðû è öèôðû íà äîïîëíèòåëüíîé êëàâèàòóðå

                                    
                        return (

                                            key == 8 ||

                                            key == 9 ||

                                            key == 46 ||

                                            (key >= 37 && key <= 40) ||

                                            (key >= 48 && key <= 57) ||

                                            (key >= 96 && key <= 105));

                                
                    });

                    
            });

    };



    //Îãðàíè÷èâàåì ìàêñèìàëüíîûå ÷èñëî ñèìâîëîâ

    $('.product-counter input').keyup(function() {

        var $this = $(this),

            counter = $this.closest('.product-counter'),

            counterMinus = counter.find('.minus'),

            counterPlus = counter.find('.plus');



        if ($this.val().length > 3)

            $this.val($this.val().substr(0, 3));

        if ($this >= 999) {

            counterMinus.addClass('disable');

            counterMinus.removeClass('disable');

        }

    });



    //Âûçîâ ââîäà òîëüêî ÷èñåë

    $(".product-counter input").ForceNumericOnly();





    $(".product-counter input").on("blur", function() {

        var $this = $(this),

            data = $this.val(),

            counter = $this.closest('.product-counter'),

            counterMinus = counter.find('.minus'),

            counterPlus = counter.find('.plus');



        if (data == 1) {

            counterMinus.addClass('disable');

            counterPlus.removeClass('disable');

        }

        if (data == 999) {

            counterPlus.addClass('disable');

            counterMinus.removeClass('disable');

        }

        if (data == 0) {

            $this.val(1);

        }

    });



    $('body').on("click touchstart", ".product-counter a", function() {

        var $this = $(this),

            counter = $this.closest('.product-counter'),

            counterPlus = counter.find('.plus'),

            counterMinus = counter.find('.minus'),

            counterInput = counter.find('input'),

            data = counter.find('input').val();

        if (!counter.hasClass('disabled')) {

            if ($this.hasClass('minus')) {

                if (data > 1) {

                    counterPlus.removeClass('disable');

                    counterInput.val(parseInt(data) - 1);

                }

                if (data == 2) {

                    $this.addClass('disable');

                }

            }

            if ($this.hasClass('plus')) {

                if (data < 999) {

                    counterInput.val(parseInt(data) + 1);

                    counterMinus.removeClass('disable');

                }

                if (data == 999) {

                    $this.addClass('disable');

                }

            }

        }

        counterInput.change();

        return false

    });

});
/* End */
;; /* Start:/js/jquery.fancybox.pack.js*/
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function(window, document, $, undefined) {
    "use strict";

    var H = $("html"),
        W = $(window),
        D = $(document),
        F = $.fancybox = function() {
            F.open.apply(this, arguments);
        },
        IE = navigator.userAgent.match(/msie/i),
        didUpdate = null,
        isTouch = document.createTouch !== undefined,

        isQuery = function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof $;
        },
        isString = function(str) {
            return str && $.type(str) === "string";
        },
        isPercentage = function(str) {
            return isString(str) && str.indexOf('%') > 0;
        },
        isScrollable = function(el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
        },
        getScalar = function(orig, dim) {
            var value = parseInt(orig, 10) || 0;

            if (dim && isPercentage(orig)) {
                value = F.getViewport()[dim] / 100 * value;
            }

            return Math.ceil(value);
        },
        getValue = function(value, dim) {
            return getScalar(value, dim) + 'px';
        };

    $.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',

        defaults: {
            padding: 15,
            margin: 20,

            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1, // Set to 2 for retina display support

            autoSize: true,
            autoHeight: false,
            autoWidth: false,

            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,

            scrolling: 'auto', // 'auto', 'yes' or 'no'
            wrapCSS: '',

            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,

            ajax: {
                dataType: 'html',
                headers: {
                    'X-fancyBox': true
                }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },

            keys: {
                next: {
                    13: 'left', // enter
                    34: 'up', // page down
                    39: 'left', // right arrow
                    40: 'up' // down arrow
                },
                prev: {
                    8: 'right', // backspace
                    33: 'down', // page up
                    37: 'right', // left arrow
                    38: 'down' // up arrow
                },
                close: [27], // escape key
                play: [32], // space - start/stop slideshow
                toggle: [70] // letter "f" - toggle fullscreen
            },

            direction: {
                next: 'left',
                prev: 'right'
            },

            scrollOutside: true,

            // Override some properties
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,

            // HTML templates
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },

            // Properties for each animation type
            // Opening fancyBox
            openEffect: 'fade', // 'elastic', 'fade' or 'none'
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',

            // Closing fancyBox
            closeEffect: 'fade', // 'elastic', 'fade' or 'none'
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',

            // Changing next gallery item
            nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',

            // Changing previous gallery item
            prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',

            // Enable default helpers
            helpers: {
                overlay: true,
                title: true
            },

            // Callbacks
            onCancel: $.noop, // If canceling
            beforeLoad: $.noop, // Before loading
            afterLoad: $.noop, // After loading
            beforeShow: $.noop, // Before changing in current item
            afterShow: $.noop, // After opening
            beforeChange: $.noop, // Before changing gallery item
            beforeClose: $.noop, // Before closing
            afterClose: $.noop // After closing
        },

        //Current state
        group: {}, // Selected group
        opts: {}, // Group options
        previous: null, // Previous element
        coming: null, // Element being loaded
        current: null, // Currently loaded element
        isActive: false, // Is activated
        isOpen: false, // Is currently open
        isOpened: false, // Have been fully opened at least once

        wrap: null,
        skin: null,
        outer: null,
        inner: null,

        player: {
            timer: null,
            isActive: false
        },

        // Loaders
        ajaxLoad: null,
        imgPreload: null,

        // Some collections
        transitions: {},
        helpers: {},

        /*
         *  Static methods
         */

        open: function(group, opts) {
            if (!group) {
                return;
            }

            if (!$.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            $.each(group, function(i, element) {
                var obj = {},
                    href,
                    title,
                    content,
                    type,
                    rez,
                    hrefParts,
                    selector;

                if ($.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = $(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: element.data('fancybox-title') || element.attr('title'),
                            isDom: true,
                            element: element
                        };

                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';

                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }

                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });

                group[i] = obj;
            });

            // Extend the defaults
            F.opts = $.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },

        // Cancel image loading or abort ajax request
        cancel: function() {
            var coming = F.coming;

            if (!coming || false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },

        // Start closing animation if is open; remove immediately if opening/closing
        close: function(event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                $('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[F.current.closeMethod]();
            }
        },

        // Manage slideshow:
        //   $.fancybox.play(); - toggle slideshow
        //   $.fancybox.play( true ); - start
        //   $.fancybox.play( false ); - stop
        play: function(action) {
            var clear = function() {
                    clearTimeout(F.player.timer);
                },
                set = function() {
                    clear();

                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed);
                    }
                },
                stop = function() {
                    clear();

                    D.unbind('.player');

                    F.player.isActive = false;

                    F.trigger('onPlayEnd');
                },
                start = function() {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = true;

                        D.bind({
                            'onCancel.player beforeClose.player': stop,
                            'onUpdate.player': set,
                            'beforeLoad.player': clear
                        });

                        set();

                        F.trigger('onPlayStart');
                    }
                };

            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },

        // Navigate to next gallery item
        next: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },

        // Navigate to previous gallery item
        prev: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },

        // Navigate to gallery item by index
        jumpto: function(index, direction, router) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
            F.router = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }

                index = index % current.group.length;
            }

            if (current.group[index] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },

        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function(e, onlyAbsolute) {
            var current = F.current,
                wrap = current ? current.wrap : null,
                pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);

                if (e && e.type === 'scroll') {
                    delete pos.position;

                    wrap.stop(true, true).animate(pos, 200);

                } else {
                    wrap.css(pos);

                    current.pos = $.extend({}, current.dim, pos);
                }
            }
        },

        update: function(e) {
            var type = (e && e.type),
                anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function() {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, (anyway && !isTouch ? 0 : 300));
        },

        // Shrink content to fit inside viewport or restore if resized
        toggle: function(action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },

        hideLoading: function() {
            D.unbind('.loading');

            $('#fancybox-loading').remove();
        },

        showLoading: function() {
            var el, viewport;

            F.hideLoading();

            el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                });
            }
        },

        getViewport: function() {
            var locked = (F.current && F.current.locked) || false,
                rez = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };

            if (locked) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },

        // Unbind the keyboard / clicking actions
        unbindEvents: function() {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },

        bindEvents: function() {
            var current = F.current,
                keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function(e) {
                    var code = e.which || e.keyCode,
                        target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);

                                e.preventDefault();
                                return false;
                            }

                            if ($.inArray(code, val) > -1) {
                                F[i]();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function(e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = $(target),
                        canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },

        trigger: function(event, o) {
            var ret, obj = o || F.coming || F.current;

            if (!obj) {
                return;
            }

            if ($.isFunction(obj[event])) {
                ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
            }

            if (ret === false) {
                return false;
            }

            if (obj.helpers) {
                $.each(obj.helpers, function(helper, opts) {
                    if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                        F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                    }
                });
            }

            D.trigger(event);
        },

        isImage: function(str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },

        isSWF: function(str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },

        _start: function(index) {
            var coming = {},
                obj,
                href,
                type,
                margin,
                padding;

            index = getScalar(index);
            obj = F.group[index] || null;

            if (!obj) {
                return false;
            }

            coming = $.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin = coming.margin;
            padding = coming.padding;

            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
             * Add reference to the group, so it`s possible to access from callbacks, example:
             * afterLoad : function() {
             *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
             * }
             */

            coming.group = F.group;
            coming.index = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[F.router](F.direction);
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

            $.extend(coming, {
                skin: $('.fancybox-skin', coming.wrap),
                outer: $('.fancybox-outer', coming.wrap),
                inner: $('.fancybox-inner', coming.wrap)
            });

            $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[i]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }

            } else if (!href) {
                return F._error('href');
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },

        _error: function(type) {
            $.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });

            F._afterLoad();
        },

        _loadImage: function() {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function() {
                this.onload = this.onerror = null;

                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            };

            img.onerror = function() {
                this.onload = this.onerror = null;

                F._error('image');
            };

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },

        _loadAjax: function() {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function(jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);

                    } else {
                        F.hideLoading();
                    }
                },
                success: function(data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },

        _loadIframe: function() {
            var coming = F.coming,
                iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
                .attr('src', coming.href);

            // This helps IE
            $(coming.wrap).bind('onReset', function() {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {}
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function() {
                    $(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo(coming.inner);

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },

        _preloadImages: function() {
            var group = F.group,
                current = F.current,
                len = group.length,
                cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                item,
                i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },

        _afterLoad: function() {
            var coming = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current,
                content,
                type,
                scrolling,
                href,
                embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened')
                    .find('.fancybox-item, .fancybox-nav')
                    .remove();
            }

            F.unbindEvents();

            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;

            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });

            href = current.href;

            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = $('<div>').html(content).find(current.selector);

                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                        }

                        content = content.show().detach();

                        current.wrap.bind('onReset', function() {
                            if ($(this).find(content).length) {
                                content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                            }
                        });
                    }
                    break;

                case 'image':
                    content = current.tpl.image.replace('{href}', href);
                    break;

                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed = '';

                    $.each(current.swf, function(name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed += ' ' + name + '="' + val + '"';
                    });

                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }

            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content);
            }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]();
            }

            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

            F._preloadImages();
        },

        _setDimension: function() {
            var viewport = F.getViewport(),
                steps = 0,
                canShrink = false,
                canExpand = false,
                wrap = F.wrap,
                skin = F.skin,
                inner = F.inner,
                current = F.current,
                width = current.width,
                height = current.height,
                minWidth = current.minWidth,
                minHeight = current.minHeight,
                maxWidth = current.maxWidth,
                maxHeight = current.maxHeight,
                scrolling = current.scrolling,
                scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                margin = current.margin,
                wMargin = getScalar(margin[1] + margin[3]),
                hMargin = getScalar(margin[0] + margin[2]),
                wPadding,
                hPadding,
                wSpace,
                hSpace,
                origWidth,
                origHeight,
                origMaxWidth,
                origMaxHeight,
                ratio,
                width_,
                height_,
                maxWidth_,
                maxHeight_,
                iframe,
                body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

            if (current.type === 'iframe') {
                iframe = current.content;

                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) {}
                }

            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }

                if (!current.autoHeight) {
                    inner.height(origHeight);
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass('fancybox-tmp');
            }

            width = getScalar(origWidth);
            height = getScalar(origHeight);

            ratio = origWidth / origHeight;

            // Calculations for the content
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width(width).height(height);

                wrap.width(width + wPadding);

                // Real wrap dimensions
                width_ = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        width_ = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }

            inner.width(width).height(height);

            wrap.width(width + wPadding);

            width_ = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },

        _getPosition: function(onlyAbsolute) {
            var current = F.current,
                viewport = F.getViewport(),
                margin = current.margin,
                width = F.wrap.width() + margin[1] + margin[3],
                height = F.wrap.height() + margin[0] + margin[2],
                rez = {
                    position: 'absolute',
                    top: margin[0],
                    left: margin[3]
                };

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }

            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

            return rez;
        },

        _afterZoomIn: function() {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

            F.update();

            // Assign a click event
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[current.closeClick ? 'close' : 'next']();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {
                F.play(false);

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play();
            }
        },

        _afterZoomOut: function(obj) {
            obj = obj || F.current;

            $('.fancybox-wrap').trigger('onReset').remove();

            $.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
     *  Default transitions
     */

    F.transitions = {
        getOrigPosition: function() {
            var current = F.current,
                element = current.element,
                orig = current.orig,
                pos = {},
                width = 50,
                height = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };

            return pos;
        },

        step: function(now, fx) {
            var ratio,
                padding,
                value,
                prop = fx.prop,
                current = F.current,
                wrapSpace = current.wrapSpace,
                skinSpace = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;

                F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
            }
        },

        zoomIn: function() {
            var current = F.current,
                startPos = current.pos,
                effect = current.openEffect,
                elastic = effect === 'elastic',
                endPos = $.extend({
                    opacity: 1
                }, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },

        zoomOut: function() {
            var current = F.current,
                effect = current.closeEffect,
                elastic = effect === 'elastic',
                endPos = {
                    opacity: 0.1
                };

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },

        changeIn: function() {
            var current = F.current,
                effect = current.nextEffect,
                startPos = current.pos,
                endPos = {
                    opacity: 1
                },
                direction = F.direction,
                distance = 200,
                field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = '+=' + distance + 'px';

                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },

        changeOut: function() {
            var previous = F.previous,
                effect = previous.prevEffect,
                endPos = {
                    opacity: 0.1
                },
                direction = F.direction,
                distance = 200;

            if (effect === 'elastic') {
                endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function() {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
     *  Overlay helper
     */

    F.helpers.overlay = {
        defaults: {
            closeClick: true, // if true, fancyBox will be closed when user clicks on the overlay
            speedOut: 200, // duration of fadeOut animation
            showEarly: true, // indicates if should be opened immediately or wait until the content is ready
            css: {}, // custom CSS properties
            locked: !isTouch, // if true, the content will be locked into overlay
            fixed: false // if false, the overlay CSS position property will not be set to "fixed"
        },

        overlay: null, // current handle
        fixed: false, // indicates if the overlay has position "fixed"
        el: $('html'), // element that contains "the lock"

        // Public methods
        create: function(opts) {
            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
            this.fixed = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },

        open: function(opts) {
            var that = this;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy(this.update, this));

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function(e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css(opts.css).show();
        },

        close: function() {
            var scrollV, scrollH;

            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.removeClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            $('.fancybox-overlay').remove().hide();

            $.extend(this, {
                overlay: null,
                fixed: false
            });
        },

        // Private, callbacks

        update: function() {
            var width = '100%',
                offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },

        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady: function(opts, obj) {
            var overlay = this.overlay;

            $('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                if (!overlay) {
                    this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
                }

                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },

        beforeShow: function(opts, obj) {
            var scrollV, scrollH;

            if (obj.locked) {
                if (this.margin !== false) {
                    $('*').filter(function() {
                        return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap"));
                    }).addClass('fancybox-margin');

                    this.el.addClass('fancybox-margin');
                }

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            this.open(opts);
        },

        onUpdate: function() {
            if (!this.fixed) {
                this.update();
            }
        },

        afterClose: function(opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            //if (this.overlay && !F.isActive) {
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
            }
        }
    };

    /*
     *  Title helper
     */

    F.helpers.title = {
        defaults: {
            type: 'float', // 'float', 'inside', 'outside' or 'over',
            position: 'bottom' // 'top' or 'bottom'
        },

        beforeShow: function(opts) {
            var current = F.current,
                text = current.title,
                type = opts.type,
                title,
                target;

            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || $.trim(text) === '') {
                return;
            }

            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;

                case 'outside':
                    target = F.wrap;
                    break;

                case 'over':
                    target = F.inner;
                    break;

                default: // 'float'
                    target = F.skin;

                    title.appendTo('body');

                    if (IE) {
                        title.width(title.width());
                    }

                    title.wrapInner('<span class="child"></span>');

                    //Increase bottom margin so this title will also fit into viewport
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break;
            }

            title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
        }
    };

    // jQuery plugin initialization
    $.fn.fancybox = function(options) {
        var index,
            that = $(this),
            selector = this.selector || '',
            run = function(e) {
                var what = $(this).blur(),
                    idx = index,
                    relType, relVal;

                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal = what.attr(relType);

                    if (!relVal) {
                        relType = 'rel';
                        relVal = what.get(0)[relType];
                    }

                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? $(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx = what.index(this);
                    }

                    options.index = idx;

                    // Stop an event from bubbling if everything is fine
                    if (F.open(what, options) !== false) {
                        e.preventDefault();
                    }
                }
            };

        options = options || {};
        index = options.index || 0;

        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);

        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }

        this.filter('[data-fancybox-start=1]').trigger('click');

        return this;
    };

    // Tests that need a body at doc ready
    D.ready(function() {
        var w1, w2;

        if ($.scrollbarWidth === undefined) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            $.scrollbarWidth = function() {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child = parent.children(),
                    width = child.innerWidth() - child.height(99).innerWidth();

                parent.remove();

                return width;
            };
        }

        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = (function() {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);

                elem.remove();

                return fixed;
            }());
        }

        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $('body')
        });

        //Get real width of page scroll-bar
        w1 = $(window).width();

        H.addClass('fancybox-lock-test');

        w2 = $(window).width();

        H.removeClass('fancybox-lock-test');

        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });

}(window, document, jQuery));
/* End */
;; /* Start:/js/jquery.validate.min.js*/
/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jorn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c) {
    c.extend(c.fn, {
        validate: function(a) {
            if (this.length) {
                var b = c.data(this[0], "validator");
                if (b) return b;
                this.attr("novalidate", "novalidate");
                b = new c.validator(a, this[0]);
                c.data(this[0], "validator", b);
                if (b.settings.onsubmit) {
                    a = this.find("input, button");
                    a.filter(".cancel").click(function() {
                        b.cancelSubmit = true
                    });
                    b.settings.submitHandler && a.filter(":submit").click(function() {
                        b.submitButton = this
                    });
                    this.submit(function(d) {
                        function e() {
                            if (b.settings.submitHandler) {
                                if (b.submitButton) var f = c("<input type='hidden'/>").attr("name",
                                    b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);
                                b.settings.submitHandler.call(b, b.currentForm);
                                b.submitButton && f.remove();
                                return false
                            }
                            return true
                        }
                        b.settings.debug && d.preventDefault();
                        if (b.cancelSubmit) {
                            b.cancelSubmit = false;
                            return e()
                        }
                        if (b.form()) {
                            if (b.pendingRequest) {
                                b.formSubmitted = true;
                                return false
                            }
                            return e()
                        } else {
                            b.focusInvalid();
                            return false
                        }
                    })
                }
                return b
            } else a && a.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (c(this[0]).is("form")) return this.validate().form();
            else {
                var a = true,
                    b = c(this[0].form).validate();
                this.each(function() {
                    a &= b.element(this)
                });
                return a
            }
        },
        removeAttrs: function(a) {
            var b = {},
                d = this;
            c.each(a.split(/\s/), function(e, f) {
                b[f] = d.attr(f);
                d.removeAttr(f)
            });
            return b
        },
        rules: function(a, b) {
            var d = this[0];
            if (a) {
                var e = c.data(d.form, "validator").settings,
                    f = e.rules,
                    g = c.validator.staticRules(d);
                switch (a) {
                    case "add":
                        c.extend(g, c.validator.normalizeRule(b));
                        f[d.name] = g;
                        if (b.messages) e.messages[d.name] = c.extend(e.messages[d.name], b.messages);
                        break;
                    case "remove":
                        if (!b) {
                            delete f[d.name];
                            return g
                        }
                        var h = {};
                        c.each(b.split(/\s/), function(j, i) {
                            h[i] = g[i];
                            delete g[i]
                        });
                        return h
                }
            }
            d = c.validator.normalizeRules(c.extend({}, c.validator.metadataRules(d), c.validator.classRules(d), c.validator.attributeRules(d), c.validator.staticRules(d)), d);
            if (d.required) {
                e = d.required;
                delete d.required;
                d = c.extend({
                    required: e
                }, d)
            }
            return d
        }
    });
    c.extend(c.expr[":"], {
        blank: function(a) {
            return !c.trim("" + a.value)
        },
        filled: function(a) {
            return !!c.trim("" + a.value)
        },
        unchecked: function(a) {
            return !a.checked
        }
    });
    c.validator = function(a,
        b) {
        this.settings = c.extend(true, {}, c.validator.defaults, a);
        this.currentForm = b;
        this.init()
    };
    c.validator.format = function(a, b) {
        if (arguments.length == 1) return function() {
            var d = c.makeArray(arguments);
            d.unshift(a);
            return c.validator.format.apply(this, d)
        };
        if (arguments.length > 2 && b.constructor != Array) b = c.makeArray(arguments).slice(1);
        if (b.constructor != Array) b = [b];
        c.each(b, function(d, e) {
            a = a.replace(RegExp("\\{" + d + "\\}", "g"), e)
        });
        return a
    };
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(a) {
                this.lastActive = a;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass);
                    this.addWrapper(this.errorsFor(a)).hide()
                }
            },
            onfocusout: function(a) {
                if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a))) this.element(a)
            },
            onkeyup: function(a) {
                if (a.name in this.submitted || a == this.lastElement) this.element(a)
            },
            onclick: function(a) {
                if (a.name in this.submitted) this.element(a);
                else a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(a, b, d) {
                a.type === "radio" ? this.findByName(a.name).addClass(b).removeClass(d) : c(a).addClass(b).removeClass(d)
            },
            unhighlight: function(a, b, d) {
                a.type === "radio" ? this.findByName(a.name).removeClass(b).addClass(d) : c(a).removeClass(b).addClass(d)
            }
        },
        setDefaults: function(a) {
            c.extend(c.validator.defaults,
                a)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Ââåäèòå ðàáî÷èé email",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Ââåäèòå òîëüêî öèôðû",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                function a(e) {
                    var f = c.data(this[0].form, "validator"),
                        g = "on" + e.type.replace(/^validate/,
                            "");
                    f.settings[g] && f.settings[g].call(f, this[0], e)
                }
                this.labelContainer = c(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm);
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = this.groups = {};
                c.each(this.settings.groups, function(e, f) {
                    c.each(f.split(/\s/), function(g, h) {
                        b[h] = e
                    })
                });
                var d =
                    this.settings.rules;
                c.each(d, function(e, f) {
                    d[e] = c.validator.normalizeRule(f)
                });
                c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", a).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click",
                    a);
                this.settings.invalidHandler && c(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                c.extend(this.submitted, this.errorMap);
                this.invalid = c.extend({}, this.errorMap);
                this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(a) {
                this.lastElement =
                    a = this.validationTargetFor(this.clean(a));
                this.prepareElement(a);
                this.currentElements = c(a);
                var b = this.check(a);
                if (b) delete this.invalid[a.name];
                else this.invalid[a.name] = true;
                if (!this.numberOfInvalids()) this.toHide = this.toHide.add(this.containers);
                this.showErrors();
                return b
            },
            showErrors: function(a) {
                if (a) {
                    c.extend(this.errorMap, a);
                    this.errorList = [];
                    for (var b in a) this.errorList.push({
                        message: a[b],
                        element: this.findByName(b)[0]
                    });
                    this.successList = c.grep(this.successList, function(d) {
                        return !(d.name in a)
                    })
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                c.fn.resetForm && c(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b = 0,
                    d;
                for (d in a) b++;
                return b
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() ==
                    0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (a) {}
            },
            findLastActive: function() {
                var a = this.lastActive;
                return a && c.grep(this.errorList, function(b) {
                    return b.element.name == a.name
                }).length == 1 && a
            },
            elements: function() {
                var a = this,
                    b = {};
                return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name &&
                        a.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in b || !a.objectLength(c(this).rules())) return false;
                    return b[this.name] = true
                })
            },
            clean: function(a) {
                return c(a)[0]
            },
            errors: function() {
                return c(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = c([]);
                this.toHide = c([]);
                this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            check: function(a) {
                a = this.validationTargetFor(this.clean(a));
                var b = c(a).rules(),
                    d = false,
                    e;
                for (e in b) {
                    var f = {
                        method: e,
                        parameters: b[e]
                    };
                    try {
                        var g = c.validator.methods[e].call(this, a.value.replace(/\r/g, ""), a, f.parameters);
                        if (g == "dependency-mismatch") d = true;
                        else {
                            d = false;
                            if (g == "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(a));
                                return
                            }
                            if (!g) {
                                this.formatAndAdd(a, f);
                                return false
                            }
                        }
                    } catch (h) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " +
                            a.id + ", check the '" + f.method + "' method", h);
                        throw h;
                    }
                }
                if (!d) {
                    this.objectLength(b) && this.successList.push(a);
                    return true
                }
            },
            customMetaMessage: function(a, b) {
                if (c.metadata) {
                    var d = this.settings.meta ? c(a).metadata()[this.settings.meta] : c(a).metadata();
                    return d && d.messages && d.messages[b]
                }
            },
            customMessage: function(a, b) {
                var d = this.settings.messages[a];
                return d && (d.constructor == String ? d : d[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (arguments[a] !== undefined) return arguments[a]
            },
            defaultMessage: function(a,
                b) {
                return this.findDefined(this.customMessage(a.name, b), this.customMetaMessage(a, b), !this.settings.ignoreTitle && a.title || undefined, c.validator.messages[b], "<strong>Warning: No message defined for " + a.name + "</strong>")
            },
            formatAndAdd: function(a, b) {
                var d = this.defaultMessage(a, b.method),
                    e = /\$?\{(\d+)\}/g;
                if (typeof d == "function") d = d.call(this, b.parameters, a);
                else if (e.test(d)) d = jQuery.format(d.replace(e, "{$1}"), b.parameters);
                this.errorList.push({
                    message: d,
                    element: a
                });
                this.errorMap[a.name] = d;
                this.submitted[a.name] =
                    d
            },
            addWrapper: function(a) {
                if (this.settings.wrapper) a = a.add(a.parent(this.settings.wrapper));
                return a
            },
            defaultShowErrors: function() {
                for (var a = 0; this.errorList[a]; a++) {
                    var b = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(b.element, b.message)
                }
                if (this.errorList.length) this.toShow = this.toShow.add(this.containers);
                if (this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) {
                    a = 0;
                    for (b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass)
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(a, b) {
                var d = this.errorsFor(a);
                if (d.length) {
                    d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    d.attr("generated") && d.html(b)
                } else {
                    d = c("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(a),
                        generated: true
                    }).addClass(this.settings.errorClass).html(b || "");
                    if (this.settings.wrapper) d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, c(a)) : d.insertAfter(a))
                }
                if (!b && this.settings.success) {
                    d.text("");
                    typeof this.settings.success == "string" ? d.addClass(this.settings.success) : this.settings.success(d)
                }
                this.toShow =
                    this.toShow.add(d)
            },
            errorsFor: function(a) {
                var b = this.idOrName(a);
                return this.errors().filter(function() {
                    return c(this).attr("for") == b
                })
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(a) {
                if (this.checkable(a)) a = this.findByName(a.name).not(this.settings.ignore)[0];
                return a
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(a) {
                var b = this.currentForm;
                return c(document.getElementsByName(a)).map(function(d,
                    e) {
                    return e.form == b && e.name == a && e || null
                })
            },
            getLength: function(a, b) {
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return c("option:selected", b).length;
                    case "input":
                        if (this.checkable(b)) return this.findByName(b.name).filter(":checked").length
                }
                return a.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : true
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(a, b) {
                    return !!c(a, b.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(a) {
                return !c.validator.methods.required.call(this,
                    c.trim(a.value), a) && "dependency-mismatch"
            },
            startRequest: function(a) {
                if (!this.pending[a.name]) {
                    this.pendingRequest++;
                    this.pending[a.name] = true
                }
            },
            stopRequest: function(a, b) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) this.pendingRequest = 0;
                delete this.pending[a.name];
                if (b && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
                    c(this.currentForm).submit();
                    this.formSubmitted = false
                } else if (!b && this.pendingRequest == 0 && this.formSubmitted) {
                    c(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted =
                        false
                }
            },
            previousValue: function(a) {
                return c.data(a, "previousValue") || c.data(a, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(a, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            dateDE: {
                dateDE: true
            },
            number: {
                number: true
            },
            numberDE: {
                numberDE: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(a, b) {
            a.constructor == String ? this.classRuleSettings[a] = b : c.extend(this.classRuleSettings,
                a)
        },
        classRules: function(a) {
            var b = {};
            (a = c(a).attr("class")) && c.each(a.split(" "), function() {
                this in c.validator.classRuleSettings && c.extend(b, c.validator.classRuleSettings[this])
            });
            return b
        },
        attributeRules: function(a) {
            var b = {};
            a = c(a);
            for (var d in c.validator.methods) {
                var e;
                if (e = d === "required" && typeof c.fn.prop === "function" ? a.prop(d) : a.attr(d)) b[d] = e;
                else if (a[0].getAttribute("type") === d) b[d] = true
            }
            b.maxlength && /-1|2147483647|524288/.test(b.maxlength) && delete b.maxlength;
            return b
        },
        metadataRules: function(a) {
            if (!c.metadata) return {};
            var b = c.data(a.form, "validator").settings.meta;
            return b ? c(a).metadata()[b] : c(a).metadata()
        },
        staticRules: function(a) {
            var b = {},
                d = c.data(a.form, "validator");
            if (d.settings.rules) b = c.validator.normalizeRule(d.settings.rules[a.name]) || {};
            return b
        },
        normalizeRules: function(a, b) {
            c.each(a, function(d, e) {
                if (e === false) delete a[d];
                else if (e.param || e.depends) {
                    var f = true;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!c(e.depends, b.form).length;
                            break;
                        case "function":
                            f = e.depends.call(b, b)
                    }
                    if (f) a[d] = e.param !== undefined ?
                        e.param : true;
                    else delete a[d]
                }
            });
            c.each(a, function(d, e) {
                a[d] = c.isFunction(e) ? e(b) : e
            });
            c.each(["minlength", "maxlength", "min", "max"], function() {
                if (a[this]) a[this] = Number(a[this])
            });
            c.each(["rangelength", "range"], function() {
                if (a[this]) a[this] = [Number(a[this][0]), Number(a[this][1])]
            });
            if (c.validator.autoCreateRanges) {
                if (a.min && a.max) {
                    a.range = [a.min, a.max];
                    delete a.min;
                    delete a.max
                }
                if (a.minlength && a.maxlength) {
                    a.rangelength = [a.minlength, a.maxlength];
                    delete a.minlength;
                    delete a.maxlength
                }
            }
            a.messages && delete a.messages;
            return a
        },
        normalizeRule: function(a) {
            if (typeof a == "string") {
                var b = {};
                c.each(a.split(/\s/), function() {
                    b[this] = true
                });
                a = b
            }
            return a
        },
        addMethod: function(a, b, d) {
            c.validator.methods[a] = b;
            c.validator.messages[a] = d != undefined ? d : c.validator.messages[a];
            b.length < 3 && c.validator.addClassRules(a, c.validator.normalizeRule(a))
        },
        methods: {
            required: function(a, b, d) {
                if (!this.depend(d, b)) return "dependency-mismatch";
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return (a = c(b).val()) && a.length > 0;
                    case "input":
                        if (this.checkable(b)) return this.getLength(a,
                            b) > 0;
                    default:
                        return c.trim(a).length > 0
                }
            },
            remote: function(a, b, d) {
                if (this.optional(b)) return "dependency-mismatch";
                var e = this.previousValue(b);
                this.settings.messages[b.name] || (this.settings.messages[b.name] = {});
                e.originalMessage = this.settings.messages[b.name].remote;
                this.settings.messages[b.name].remote = e.message;
                d = typeof d == "string" && {
                    url: d
                } || d;
                if (this.pending[b.name]) return "pending";
                if (e.old === a) return e.valid;
                e.old = a;
                var f = this;
                this.startRequest(b);
                var g = {};
                g[b.name] = a;
                c.ajax(c.extend(true, {
                    url: d,
                    mode: "abort",
                    port: "validate" + b.name,
                    dataType: "json",
                    data: g,
                    success: function(h) {
                        f.settings.messages[b.name].remote = e.originalMessage;
                        var j = h === true;
                        if (j) {
                            var i = f.formSubmitted;
                            f.prepareElement(b);
                            f.formSubmitted = i;
                            f.successList.push(b);
                            f.showErrors()
                        } else {
                            i = {};
                            h = h || f.defaultMessage(b, "remote");
                            i[b.name] = e.message = c.isFunction(h) ? h(a) : h;
                            f.showErrors(i)
                        }
                        e.valid = j;
                        f.stopRequest(b, j)
                    }
                }, d));
                return "pending"
            },
            minlength: function(a, b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) >= d
            },
            maxlength: function(a,
                b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) <= d
            },
            rangelength: function(a, b, d) {
                a = this.getLength(c.trim(a), b);
                return this.optional(b) || a >= d[0] && a <= d[1]
            },
            min: function(a, b, d) {
                return this.optional(b) || a >= d
            },
            max: function(a, b, d) {
                return this.optional(b) || a <= d
            },
            range: function(a, b, d) {
                return this.optional(b) || a >= d[0] && a <= d[1]
            },
            email: function(a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 -]+/.test(a)) return false;
                var d = 0,
                    e = 0,
                    f = false;
                a = a.replace(/\D/g, "");
                for (var g = a.length - 1; g >=
                    0; g--) {
                    e = a.charAt(g);
                    e = parseInt(e, 10);
                    if (f)
                        if ((e *= 2) > 9) e -= 9;
                    d += e;
                    f = !f
                }
                return d % 10 == 0
            },
            accept: function(a, b, d) {
                d = typeof d == "string" ? d.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(b) || a.match(RegExp(".(" + d + ")$", "i"))
            },
            equalTo: function(a, b, d) {
                d = c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    c(b).valid()
                });
                return a == d.val()
            }
        }
    });
    c.format = c.validator.format
})(jQuery);
(function(c) {
    var a = {};
    if (c.ajaxPrefilter) c.ajaxPrefilter(function(d, e, f) {
        e = d.port;
        if (d.mode == "abort") {
            a[e] && a[e].abort();
            a[e] = f
        }
    });
    else {
        var b = c.ajax;
        c.ajax = function(d) {
            var e = ("port" in d ? d : c.ajaxSettings).port;
            if (("mode" in d ? d : c.ajaxSettings).mode == "abort") {
                a[e] && a[e].abort();
                return a[e] = b.apply(this, arguments)
            }
            return b.apply(this, arguments)
        }
    }
})(jQuery);
(function(c) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        function d(e) {
            e = c.event.fix(e);
            e.type = b;
            return c.event.handle.call(this, e)
        }
        c.event.special[b] = {
            setup: function() {
                this.addEventListener(a, d, true)
            },
            teardown: function() {
                this.removeEventListener(a, d, true)
            },
            handler: function(e) {
                arguments[0] = c.event.fix(e);
                arguments[0].type = b;
                return c.event.handle.apply(this, arguments)
            }
        }
    });
    c.extend(c.fn, {
        validateDelegate: function(a,
            b, d) {
            return this.bind(b, function(e) {
                var f = c(e.target);
                if (f.is(a)) return d.apply(f, arguments)
            })
        }
    })
})(jQuery);

/* End */
;; /* Start:/js/jquery.barrating.min.js*/
(function(c) {
    var b, a;
    a = typeof window !== "undefined" && window !== null ? window : global;
    a.BarRating = b = (function() {
        function d() {
            this.show = function() {
                var g = c(this.elem),
                    j, f, h = this.options,
                    e, i;
                if (!g.data("barrating")) {
                    if (h.initialRating) {
                        i = c('option[value="' + h.initialRating + '"]', g)
                    } else {
                        i = c("option:selected", g)
                    }
                    g.data("barrating", {
                        currentRatingValue: i.val(),
                        currentRatingText: i.text(),
                        originalRatingValue: i.val(),
                        originalRatingText: i.text()
                    });
                    j = c("<div />", {
                        "class": "br-widget"
                    }).insertAfter(g);
                    g.find("option").each(function() {
                        var n, m, l, k;
                        n = c(this).val();
                        if (n) {
                            m = c(this).text();
                            l = c("<a />", {
                                href: "#",
                                "data-rating-value": n,
                                "data-rating-text": m
                            });
                            k = c("<span />", {
                                text: (h.showValues) ? m : ""
                            });
                            j.append(l.append(k))
                        }
                    });
                    if (h.showSelectedRating) {
                        j.append(c("<div />", {
                            text: "",
                            "class": "br-current-rating"
                        }))
                    }
                    g.data("barrating").deselectable = (!g.find("option:first").val()) ? true : false;
                    if (h.reverse) {
                        e = "nextAll"
                    } else {
                        e = "prevAll"
                    }
                    if (h.reverse) {
                        j.addClass("br-reverse")
                    }
                    if (h.readonly) {
                        j.addClass("br-readonly")
                    }
                    j.on("ratingchange", function(k, l, m) {
                        l = l ? l : g.data("barrating").currentRatingValue;
                        m = m ? m : g.data("barrating").currentRatingText;
                        g.find('option[value="' + l + '"]').prop("selected", true);
                        if (h.showSelectedRating) {
                            c(this).find(".br-current-rating").text(m)
                        }
                    }).trigger("ratingchange");
                    j.on("updaterating", function(k) {
                        c(this).find('a[data-rating-value="' + g.data("barrating").currentRatingValue + '"]').addClass("br-selected br-current")[e]().addClass("br-selected")
                    }).trigger("updaterating");
                    f = j.find("a");
                    f.on("touchstart", function(k) {
                        k.preventDefault();
                        k.stopPropagation();
                        c(this).click()
                    });
                    if (h.readonly) {
                        f.on("click", function(k) {
                            k.preventDefault()
                        })
                    }
                    if (!h.readonly) {
                        f.on("click", function(k) {
                            var m = c(this),
                                l, n;
                            k.preventDefault();
                            f.removeClass("br-active br-selected");
                            m.addClass("br-selected")[e]().addClass("br-selected");
                            l = m.attr("data-rating-value");
                            n = m.attr("data-rating-text");
                            if (m.hasClass("br-current") && g.data("barrating").deselectable) {
                                m.removeClass("br-selected br-current")[e]().removeClass("br-selected br-current");
                                l = "", n = ""
                            } else {
                                f.removeClass("br-current");
                                m.addClass("br-current")
                            }
                            g.data("barrating").currentRatingValue = l;
                            g.data("barrating").currentRatingText = n;
                            j.trigger("ratingchange");
                            h.onSelect.call(this, g.data("barrating").currentRatingValue, g.data("barrating").currentRatingText);
                            return false
                        });
                        f.on({
                            mouseenter: function() {
                                var k = c(this);
                                f.removeClass("br-active").removeClass("br-selected");
                                k.addClass("br-active")[e]().addClass("br-active");
                                j.trigger("ratingchange", [k.attr("data-rating-value"), k.attr("data-rating-text")])
                            }
                        });
                        j.on({
                            mouseleave: function() {
                                f.removeClass("br-active");
                                j.trigger("ratingchange").trigger("updaterating")
                            }
                        })
                    }
                    g.hide()
                }
            };
            this.clear = function() {
                var e = c(this.elem);
                var f = e.next(".br-widget");
                if (f && e.data("barrating")) {
                    f.find("a").removeClass("br-selected br-current");
                    e.data("barrating").currentRatingValue = e.data("barrating").originalRatingValue;
                    e.data("barrating").currentRatingText = e.data("barrating").originalRatingText;
                    f.trigger("ratingchange").trigger("updaterating");
                    this.options.onClear.call(this, e.data("barrating").currentRatingValue, e.data("barrating").currentRatingText)
                }
            };
            this.destroy = function() {
                var f = c(this.elem);
                var h = f.next(".br-widget");
                if (h && f.data("barrating")) {
                    var e = f.data("barrating").currentRatingValue;
                    var g = f.data("barrating").currentRatingText;
                    f.removeData("barrating");
                    h.off().remove();
                    f.show();
                    this.options.onDestroy.call(this, e, g)
                }
            }
        }
        d.prototype.init = function(f, g) {
            var e;
            e = this;
            e.elem = g;
            return e.options = c.extend({}, c.fn.barrating.defaults, f)
        };
        return d
    })();
    c.fn.barrating = function(e, d) {
        return this.each(function() {
            var f = new b();
            if (!c(this).is("select")) {
                c.error("Sorry, this plugin only works with select fields.")
            }
            if (f.hasOwnProperty(e)) {
                f.init(d, this);
                return f[e]()
            } else {
                if (typeof e === "object" || !e) {
                    d = e;
                    f.init(d, this);
                    return f.show()
                } else {
                    c.error("Method " + e + " does not exist on jQuery.barrating")
                }
            }
        })
    };
    return c.fn.barrating.defaults = {
        initialRating: null,
        showValues: false,
        showSelectedRating: true,
        reverse: false,
        readonly: false,
        onSelect: function(d, e) {},
        onClear: function(d, e) {},
        onDestroy: function(d, e) {}
    }
})(jQuery);
/* End */
;; /* Start:/js/jquery.mCustomScrollbar.concat.min.js*/
/* == jquery mousewheel plugin == Version: 3.1.11, License: MIT License (MIT) */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return c.length || (c = a("body")), parseInt(c.css("fontSize"), 10)
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
/* == malihu jquery custom scrollbar plugin == Version: 3.0.4, License: MIT License (MIT) */
(function(b, a, c) {
    (function(d) {
        d(jQuery)
    }(function(j) {
        var g = "mCustomScrollbar",
            d = "mCS",
            m = ".mCustomScrollbar",
            h = {
                setWidth: false,
                setHeight: false,
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: true,
                autoHideScrollbar: false,
                autoExpandScrollbar: false,
                alwaysShowScrollbar: 0,
                snapAmount: null,
                snapOffset: 0,
                mouseWheel: {
                    enable: true,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: false,
                    deltaFactor: "auto",
                    normalizeDelta: false,
                    invert: false,
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    enable: false,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: true,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                advanced: {
                    autoExpandHorizontalScroll: false,
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: true,
                    updateOnImageLoad: true,
                    updateOnSelectorChange: false
                },
                theme: "light",
                callbacks: {
                    onScrollStart: false,
                    onScroll: false,
                    onTotalScroll: false,
                    onTotalScrollBack: false,
                    whileScrolling: false,
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: true,
                    onOverflowY: false,
                    onOverflowX: false,
                    onOverflowYNone: false,
                    onOverflowXNone: false
                },
                live: false,
                liveSelector: null
            },
            l = 0,
            o = {},
            f = function(p) {
                if (o[p]) {
                    clearTimeout(o[p]);
                    i._delete.call(null, o[p])
                }
            },
            k = (b.attachEvent && !b.addEventListener) ? 1 : 0,
            n = false,
            e = {
                init: function(q) {
                    var q = j.extend(true, {}, h, q),
                        p = i._selector.call(this);
                    if (q.live) {
                        var s = q.liveSelector || this.selector || m,
                            r = j(s);
                        if (q.live === "off") {
                            f(s);
                            return
                        }
                        o[s] = setTimeout(function() {
                            r.mCustomScrollbar(q);
                            if (q.live === "once" && r.length) {
                                f(s)
                            }
                        }, 500)
                    } else {
                        f(s)
                    }
                    q.setWidth = (q.set_width) ? q.set_width : q.setWidth;
                    q.setHeight = (q.set_height) ? q.set_height : q.setHeight;
                    q.axis = (q.horizontalScroll) ? "x" : i._findAxis.call(null, q.axis);
                    q.scrollInertia = q.scrollInertia > 0 && q.scrollInertia < 17 ? 17 : q.scrollInertia;
                    if (typeof q.mouseWheel !== "object" && q.mouseWheel == true) {
                        q.mouseWheel = {
                            enable: true,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: false,
                            deltaFactor: "auto",
                            normalizeDelta: false,
                            invert: false
                        }
                    }
                    q.mouseWheel.scrollAmount = !q.mouseWheelPixels ? q.mouseWheel.scrollAmount : q.mouseWheelPixels;
                    q.mouseWheel.normalizeDelta = !q.advanced.normalizeMouseWheelDelta ? q.mouseWheel.normalizeDelta : q.advanced.normalizeMouseWheelDelta;
                    q.scrollButtons.scrollType = i._findScrollButtonsType.call(null, q.scrollButtons.scrollType);
                    i._theme.call(null, q);
                    return j(p).each(function() {
                        var u = j(this);
                        if (!u.data(d)) {
                            u.data(d, {
                                idx: ++l,
                                opt: q,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: false,
                                tweenRunning: false,
                                sequential: {},
                                langDir: u.css("direction"),
                                cbOffsets: null,
                                trigger: null
                            });
                            var w = u.data(d).opt,
                                v = u.data("mcs-axis"),
                                t = u.data("mcs-scrollbar-position"),
                                x = u.data("mcs-theme");
                            if (v) {
                                w.axis = v
                            }
                            if (t) {
                                w.scrollbarPosition = t
                            }
                            if (x) {
                                w.theme = x;
                                i._theme.call(null, w)
                            }
                            i._pluginMarkup.call(this);
                            e.update.call(null, u)
                        }
                    })
                },
                update: function(q) {
                    var p = q || i._selector.call(this);
                    return j(p).each(function() {
                        var t = j(this);
                        if (t.data(d)) {
                            var v = t.data(d),
                                u = v.opt,
                                r = j("#mCSB_" + v.idx + "_container"),
                                s = [j("#mCSB_" + v.idx + "_dragger_vertical"), j("#mCSB_" + v.idx + "_dragger_horizontal")];
                            if (!r.length) {
                                return
                            }
                            if (v.tweenRunning) {
                                i._stop.call(null, t)
                            }
                            if (t.hasClass("mCS_disabled")) {
                                t.removeClass("mCS_disabled")
                            }
                            if (t.hasClass("mCS_destroyed")) {
                                t.removeClass("mCS_destroyed")
                            }
                            i._maxHeight.call(this);
                            i._expandContentHorizontally.call(this);
                            if (u.axis !== "y" && !u.advanced.autoExpandHorizontalScroll) {
                                r.css("width", i._contentWidth(r.children()))
                            }
                            v.overflowed = i._overflowed.call(this);
                            i._scrollbarVisibility.call(this);
                            if (u.autoDraggerLength) {
                                i._setDraggerLength.call(this)
                            }
                            i._scrollRatio.call(this);
                            i._bindEvents.call(this);
                            var w = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                            if (u.axis !== "x") {
                                if (!v.overflowed[0]) {
                                    i._resetContentPosition.call(this);
                                    if (u.axis === "y") {
                                        i._unbindEvents.call(this)
                                    } else {
                                        if (u.axis === "yx" && v.overflowed[1]) {
                                            i._scrollTo.call(this, t, w[1].toString(), {
                                                dir: "x",
                                                dur: 0,
                                                overwrite: "none"
                                            })
                                        }
                                    }
                                } else {
                                    if (s[0].height() > s[0].parent().height()) {
                                        i._resetContentPosition.call(this)
                                    } else {
                                        i._scrollTo.call(this, t, w[0].toString(), {
                                            dir: "y",
                                            dur: 0,
                                            overwrite: "none"
                                        });
                                        v.contentReset.y = null
                                    }
                                }
                            }
                            if (u.axis !== "y") {
                                if (!v.overflowed[1]) {
                                    i._resetContentPosition.call(this);
                                    if (u.axis === "x") {
                                        i._unbindEvents.call(this)
                                    } else {
                                        if (u.axis === "yx" && v.overflowed[0]) {
                                            i._scrollTo.call(this, t, w[0].toString(), {
                                                dir: "y",
                                                dur: 0,
                                                overwrite: "none"
                                            })
                                        }
                                    }
                                } else {
                                    if (s[1].width() > s[1].parent().width()) {
                                        i._resetContentPosition.call(this)
                                    } else {
                                        i._scrollTo.call(this, t, w[1].toString(), {
                                            dir: "x",
                                            dur: 0,
                                            overwrite: "none"
                                        });
                                        v.contentReset.x = null
                                    }
                                }
                            }
                            i._autoUpdate.call(this)
                        }
                    })
                },
                scrollTo: function(r, q) {
                    if (typeof r == "undefined" || r == null) {
                        return
                    }
                    var p = i._selector.call(this);
                    return j(p).each(function() {
                        var u = j(this);
                        if (u.data(d)) {
                            var x = u.data(d),
                                w = x.opt,
                                v = {
                                    trigger: "external",
                                    scrollInertia: w.scrollInertia,
                                    scrollEasing: "mcsEaseInOut",
                                    moveDragger: false,
                                    timeout: 60,
                                    callbacks: true,
                                    onStart: true,
                                    onUpdate: true,
                                    onComplete: true
                                },
                                s = j.extend(true, {}, v, q),
                                y = i._arr.call(this, r),
                                t = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                            y[0] = i._to.call(this, y[0], "y");
                            y[1] = i._to.call(this, y[1], "x");
                            if (s.moveDragger) {
                                y[0] *= x.scrollRatio.y;
                                y[1] *= x.scrollRatio.x
                            }
                            s.dur = t;
                            setTimeout(function() {
                                if (y[0] !== null && typeof y[0] !== "undefined" && w.axis !== "x" && x.overflowed[0]) {
                                    s.dir = "y";
                                    s.overwrite = "all";
                                    i._scrollTo.call(this, u, y[0].toString(), s)
                                }
                                if (y[1] !== null && typeof y[1] !== "undefined" && w.axis !== "y" && x.overflowed[1]) {
                                    s.dir = "x";
                                    s.overwrite = "none";
                                    i._scrollTo.call(this, u, y[1].toString(), s)
                                }
                            }, s.timeout)
                        }
                    })
                },
                stop: function() {
                    var p = i._selector.call(this);
                    return j(p).each(function() {
                        var q = j(this);
                        if (q.data(d)) {
                            i._stop.call(null, q)
                        }
                    })
                },
                disable: function(q) {
                    var p = i._selector.call(this);
                    return j(p).each(function() {
                        var r = j(this);
                        if (r.data(d)) {
                            var t = r.data(d),
                                s = t.opt;
                            i._autoUpdate.call(this, "remove");
                            i._unbindEvents.call(this);
                            if (q) {
                                i._resetContentPosition.call(this)
                            }
                            i._scrollbarVisibility.call(this, true);
                            r.addClass("mCS_disabled")
                        }
                    })
                },
                destroy: function() {
                    var p = i._selector.call(this);
                    return j(p).each(function() {
                        var s = j(this);
                        if (s.data(d)) {
                            var u = s.data(d),
                                t = u.opt,
                                q = j("#mCSB_" + u.idx),
                                r = j("#mCSB_" + u.idx + "_container"),
                                v = j(".mCSB_" + u.idx + "_scrollbar");
                            if (t.live) {
                                f(p)
                            }
                            i._autoUpdate.call(this, "remove");
                            i._unbindEvents.call(this);
                            i._resetContentPosition.call(this);
                            s.removeData(d);
                            i._delete.call(null, this.mcs);
                            v.remove();
                            q.replaceWith(r.contents());
                            s.removeClass(g + " _" + d + "_" + u.idx + " mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")
                        }
                    })
                }
            },
            i = {
                _selector: function() {
                    return (typeof j(this) !== "object" || j(this).length < 1) ? m : this
                },
                _theme: function(s) {
                    var r = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                        q = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                        p = ["minimal", "minimal-dark"],
                        u = ["minimal", "minimal-dark"],
                        t = ["minimal", "minimal-dark"];
                    s.autoDraggerLength = j.inArray(s.theme, r) > -1 ? false : s.autoDraggerLength;
                    s.autoExpandScrollbar = j.inArray(s.theme, q) > -1 ? false : s.autoExpandScrollbar;
                    s.scrollButtons.enable = j.inArray(s.theme, p) > -1 ? false : s.scrollButtons.enable;
                    s.autoHideScrollbar = j.inArray(s.theme, u) > -1 ? true : s.autoHideScrollbar;
                    s.scrollbarPosition = j.inArray(s.theme, t) > -1 ? "outside" : s.scrollbarPosition
                },
                _findAxis: function(p) {
                    return (p === "yx" || p === "xy" || p === "auto") ? "yx" : (p === "x" || p === "horizontal") ? "x" : "y"
                },
                _findScrollButtonsType: function(p) {
                    return (p === "stepped" || p === "pixels" || p === "step" || p === "click") ? "stepped" : "stepless"
                },
                _pluginMarkup: function() {
                    var y = j(this),
                        x = y.data(d),
                        r = x.opt,
                        t = r.autoExpandScrollbar ? " mCSB_scrollTools_onDrag_expand" : "",
                        B = ["<div id='mCSB_" + x.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + x.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + t + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + x.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + x.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + x.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + t + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + x.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                        u = r.axis === "yx" ? "mCSB_vertical_horizontal" : r.axis === "x" ? "mCSB_horizontal" : "mCSB_vertical",
                        w = r.axis === "yx" ? B[0] + B[1] : r.axis === "x" ? B[1] : B[0],
                        v = r.axis === "yx" ? "<div id='mCSB_" + x.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                        s = r.autoHideScrollbar ? " mCS-autoHide" : "",
                        p = (r.axis !== "x" && x.langDir === "rtl") ? " mCS-dir-rtl" : "";
                    if (r.setWidth) {
                        y.css("width", r.setWidth)
                    }
                    if (r.setHeight) {
                        y.css("height", r.setHeight)
                    }
                    r.setLeft = (r.axis !== "y" && x.langDir === "rtl") ? "989999px" : r.setLeft;
                    y.addClass(g + " _" + d + "_" + x.idx + s + p).wrapInner("<div id='mCSB_" + x.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + u + "'><div id='mCSB_" + x.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir=" + x.langDir + " /></div>");
                    var q = j("#mCSB_" + x.idx),
                        z = j("#mCSB_" + x.idx + "_container");
                    if (r.axis !== "y" && !r.advanced.autoExpandHorizontalScroll) {
                        z.css("width", i._contentWidth(z.children()))
                    }
                    if (r.scrollbarPosition === "outside") {
                        if (y.css("position") === "static") {
                            y.css("position", "relative")
                        }
                        y.css("overflow", "visible");
                        q.addClass("mCSB_outside").after(w)
                    } else {
                        q.addClass("mCSB_inside").append(w);
                        z.wrap(v)
                    }
                    i._scrollButtons.call(this);
                    var A = [j("#mCSB_" + x.idx + "_dragger_vertical"), j("#mCSB_" + x.idx + "_dragger_horizontal")];
                    A[0].css("min-height", A[0].height());
                    A[1].css("min-width", A[1].width())
                },
                _contentWidth: function(p) {
                    return Math.max.apply(Math, p.map(function() {
                        return j(this).outerWidth(true)
                    }).get())
                },
                _expandContentHorizontally: function() {
                    var q = j(this),
                        s = q.data(d),
                        r = s.opt,
                        p = j("#mCSB_" + s.idx + "_container");
                    if (r.advanced.autoExpandHorizontalScroll && r.axis !== "y") {
                        p.css({
                            position: "absolute",
                            width: "auto"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            width: (Math.ceil(p[0].getBoundingClientRect().right + 0.4) - Math.floor(p[0].getBoundingClientRect().left)),
                            position: "relative"
                        }).unwrap()
                    }
                },
                _scrollButtons: function() {
                    var s = j(this),
                        u = s.data(d),
                        t = u.opt,
                        q = j(".mCSB_" + u.idx + "_scrollbar:first"),
                        r = ["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"],
                        p = [(t.axis === "x" ? r[2] : r[0]), (t.axis === "x" ? r[3] : r[1]), r[2], r[3]];
                    if (t.scrollButtons.enable) {
                        q.prepend(p[0]).append(p[1]).next(".mCSB_scrollTools").prepend(p[2]).append(p[3])
                    }
                },
                _maxHeight: function() {
                    var t = j(this),
                        w = t.data(d),
                        v = w.opt,
                        r = j("#mCSB_" + w.idx),
                        q = t.css("max-height"),
                        s = q.indexOf("%") !== -1,
                        p = t.css("box-sizing");
                    if (q !== "none") {
                        var u = s ? t.parent().height() * parseInt(q) / 100 : parseInt(q);
                        if (p === "border-box") {
                            u -= ((t.innerHeight() - t.height()) + (t.outerHeight() - t.innerHeight()))
                        }
                        r.css("max-height", Math.round(u))
                    }
                },
                _setDraggerLength: function() {
                    var u = j(this),
                        s = u.data(d),
                        p = j("#mCSB_" + s.idx),
                        v = j("#mCSB_" + s.idx + "_container"),
                        y = [j("#mCSB_" + s.idx + "_dragger_vertical"), j("#mCSB_" + s.idx + "_dragger_horizontal")],
                        t = [p.height() / v.outerHeight(false), p.width() / v.outerWidth(false)],
                        q = [parseInt(y[0].css("min-height")), Math.round(t[0] * y[0].parent().height()), parseInt(y[1].css("min-width")), Math.round(t[1] * y[1].parent().width())],
                        r = k && (q[1] < q[0]) ? q[0] : q[1],
                        x = k && (q[3] < q[2]) ? q[2] : q[3];
                    y[0].css({
                        height: r,
                        "max-height": (y[0].parent().height() - 10)
                    }).find(".mCSB_dragger_bar").css({
                        "line-height": q[0] + "px"
                    });
                    y[1].css({
                        width: x,
                        "max-width": (y[1].parent().width() - 10)
                    })
                },
                _scrollRatio: function() {
                    var t = j(this),
                        v = t.data(d),
                        q = j("#mCSB_" + v.idx),
                        r = j("#mCSB_" + v.idx + "_container"),
                        s = [j("#mCSB_" + v.idx + "_dragger_vertical"), j("#mCSB_" + v.idx + "_dragger_horizontal")],
                        u = [r.outerHeight(false) - q.height(), r.outerWidth(false) - q.width()],
                        p = [u[0] / (s[0].parent().height() - s[0].height()), u[1] / (s[1].parent().width() - s[1].width())];
                    v.scrollRatio = {
                        y: p[0],
                        x: p[1]
                    }
                },
                _onDragClasses: function(r, t, q) {
                    var s = q ? "mCSB_dragger_onDrag_expanded" : "",
                        p = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag"],
                        u = r.closest(".mCSB_scrollTools");
                    if (t === "active") {
                        r.toggleClass(p[0] + " " + s);
                        u.toggleClass(p[1]);
                        r[0]._draggable = r[0]._draggable ? 0 : 1
                    } else {
                        if (!r[0]._draggable) {
                            if (t === "hide") {
                                r.removeClass(p[0]);
                                u.removeClass(p[1])
                            } else {
                                r.addClass(p[0]);
                                u.addClass(p[1])
                            }
                        }
                    }
                },
                _overflowed: function() {
                    var t = j(this),
                        u = t.data(d),
                        q = j("#mCSB_" + u.idx),
                        s = j("#mCSB_" + u.idx + "_container"),
                        r = u.overflowed == null ? s.height() : s.outerHeight(false),
                        p = u.overflowed == null ? s.width() : s.outerWidth(false);
                    return [r > q.height(), p > q.width()]
                },
                _resetContentPosition: function() {
                    var t = j(this),
                        v = t.data(d),
                        u = v.opt,
                        q = j("#mCSB_" + v.idx),
                        r = j("#mCSB_" + v.idx + "_container"),
                        s = [j("#mCSB_" + v.idx + "_dragger_vertical"), j("#mCSB_" + v.idx + "_dragger_horizontal")];
                    i._stop(t);
                    if ((u.axis !== "x" && !v.overflowed[0]) || (u.axis === "y" && v.overflowed[0])) {
                        s[0].add(r).css("top", 0);
                        i._scrollTo(t, "_resetY")
                    }
                    if ((u.axis !== "y" && !v.overflowed[1]) || (u.axis === "x" && v.overflowed[1])) {
                        var p = dx = 0;
                        if (v.langDir === "rtl") {
                            p = q.width() - r.outerWidth(false);
                            dx = Math.abs(p / v.scrollRatio.x)
                        }
                        r.css("left", p);
                        s[1].css("left", dx);
                        i._scrollTo(t, "_resetX")
                    }
                },
                _bindEvents: function() {
                    var r = j(this),
                        t = r.data(d),
                        s = t.opt;
                    if (!t.bindEvents) {
                        i._draggable.call(this);
                        if (s.contentTouchScroll) {
                            i._contentDraggable.call(this)
                        }
                        if (s.mouseWheel.enable) {
                            function q() {
                                p = setTimeout(function() {
                                    if (!j.event.special.mousewheel) {
                                        q()
                                    } else {
                                        clearTimeout(p);
                                        i._mousewheel.call(r[0])
                                    }
                                }, 1000)
                            }
                            var p;
                            q()
                        }
                        i._draggerRail.call(this);
                        i._wrapperScroll.call(this);
                        if (s.advanced.autoScrollOnFocus) {
                            i._focus.call(this)
                        }
                        if (s.scrollButtons.enable) {
                            i._buttons.call(this)
                        }
                        if (s.keyboard.enable) {
                            i._keyboard.call(this)
                        }
                        t.bindEvents = true
                    }
                },
                _unbindEvents: function() {
                    var s = j(this),
                        t = s.data(d),
                        p = d + "_" + t.idx,
                        u = ".mCSB_" + t.idx + "_scrollbar",
                        r = j("#mCSB_" + t.idx + ",#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper," + u + " .mCSB_draggerContainer,#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal," + u + ">a"),
                        q = j("#mCSB_" + t.idx + "_container");
                    if (t.bindEvents) {
                        j(a).unbind("." + p);
                        r.each(function() {
                            j(this).unbind("." + p)
                        });
                        clearTimeout(s[0]._focusTimeout);
                        i._delete.call(null, s[0]._focusTimeout);
                        clearTimeout(t.sequential.step);
                        i._delete.call(null, t.sequential.step);
                        clearTimeout(q[0].onCompleteTimeout);
                        i._delete.call(null, q[0].onCompleteTimeout);
                        t.bindEvents = false
                    }
                },
                _scrollbarVisibility: function(q) {
                    var t = j(this),
                        v = t.data(d),
                        u = v.opt,
                        p = j("#mCSB_" + v.idx + "_container_wrapper"),
                        r = p.length ? p : j("#mCSB_" + v.idx + "_container"),
                        w = [j("#mCSB_" + v.idx + "_scrollbar_vertical"), j("#mCSB_" + v.idx + "_scrollbar_horizontal")],
                        s = [w[0].find(".mCSB_dragger"), w[1].find(".mCSB_dragger")];
                    if (u.axis !== "x") {
                        if (v.overflowed[0] && !q) {
                            w[0].add(s[0]).add(w[0].children("a")).css("display", "block");
                            r.removeClass("mCS_no_scrollbar_y mCS_y_hidden")
                        } else {
                            if (u.alwaysShowScrollbar) {
                                if (u.alwaysShowScrollbar !== 2) {
                                    s[0].add(w[0].children("a")).css("display", "none")
                                }
                                r.removeClass("mCS_y_hidden")
                            } else {
                                w[0].css("display", "none");
                                r.addClass("mCS_y_hidden")
                            }
                            r.addClass("mCS_no_scrollbar_y")
                        }
                    }
                    if (u.axis !== "y") {
                        if (v.overflowed[1] && !q) {
                            w[1].add(s[1]).add(w[1].children("a")).css("display", "block");
                            r.removeClass("mCS_no_scrollbar_x mCS_x_hidden")
                        } else {
                            if (u.alwaysShowScrollbar) {
                                if (u.alwaysShowScrollbar !== 2) {
                                    s[1].add(w[1].children("a")).css("display", "none")
                                }
                                r.removeClass("mCS_x_hidden")
                            } else {
                                w[1].css("display", "none");
                                r.addClass("mCS_x_hidden")
                            }
                            r.addClass("mCS_no_scrollbar_x")
                        }
                    }
                    if (!v.overflowed[0] && !v.overflowed[1]) {
                        t.addClass("mCS_no_scrollbar")
                    } else {
                        t.removeClass("mCS_no_scrollbar")
                    }
                },
                _coordinates: function(q) {
                    var p = q.type;
                    switch (p) {
                        case "pointerdown":
                        case "MSPointerDown":
                        case "pointermove":
                        case "MSPointerMove":
                        case "pointerup":
                        case "MSPointerUp":
                            return [q.originalEvent.pageY, q.originalEvent.pageX];
                            break;
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                            var r = q.originalEvent.touches[0] || q.originalEvent.changedTouches[0];
                            return [r.pageY, r.pageX];
                            break;
                        default:
                            return [q.pageY, q.pageX]
                    }
                },
                _draggable: function() {
                    var u = j(this),
                        s = u.data(d),
                        p = s.opt,
                        r = d + "_" + s.idx,
                        t = ["mCSB_" + s.idx + "_dragger_vertical", "mCSB_" + s.idx + "_dragger_horizontal"],
                        v = j("#mCSB_" + s.idx + "_container"),
                        w = j("#" + t[0] + ",#" + t[1]),
                        A, y, z;
                    w.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function(E) {
                        E.stopImmediatePropagation();
                        E.preventDefault();
                        if (!i._mouseBtnLeft(E)) {
                            return
                        }
                        n = true;
                        if (k) {
                            a.onselectstart = function() {
                                return false
                            }
                        }
                        x(false);
                        i._stop(u);
                        A = j(this);
                        var F = A.offset(),
                            G = i._coordinates(E)[0] - F.top,
                            B = i._coordinates(E)[1] - F.left,
                            D = A.height() + F.top,
                            C = A.width() + F.left;
                        if (G < D && G > 0 && B < C && B > 0) {
                            y = G;
                            z = B
                        }
                        i._onDragClasses(A, "active", p.autoExpandScrollbar)
                    }).bind("touchmove." + r, function(C) {
                        C.stopImmediatePropagation();
                        C.preventDefault();
                        var D = A.offset(),
                            E = i._coordinates(C)[0] - D.top,
                            B = i._coordinates(C)[1] - D.left;
                        q(y, z, E, B)
                    });
                    j(a).bind("mousemove." + r + " pointermove." + r + " MSPointerMove." + r, function(C) {
                        if (A) {
                            var D = A.offset(),
                                E = i._coordinates(C)[0] - D.top,
                                B = i._coordinates(C)[1] - D.left;
                            if (y === E) {
                                return
                            }
                            q(y, z, E, B)
                        }
                    }).add(w).bind("mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r, function(B) {
                        if (A) {
                            i._onDragClasses(A, "active", p.autoExpandScrollbar);
                            A = null
                        }
                        n = false;
                        if (k) {
                            a.onselectstart = null
                        }
                        x(true)
                    });

                    function x(B) {
                        var C = v.find("iframe");
                        if (!C.length) {
                            return
                        }
                        var D = !B ? "none" : "auto";
                        C.css("pointer-events", D)
                    }

                    function q(D, E, G, B) {
                        v[0].idleTimer = p.scrollInertia < 233 ? 250 : 0;
                        if (A.attr("id") === t[1]) {
                            var C = "x",
                                F = ((A[0].offsetLeft - E) + B) * s.scrollRatio.x
                        } else {
                            var C = "y",
                                F = ((A[0].offsetTop - D) + G) * s.scrollRatio.y
                        }
                        i._scrollTo(u, F.toString(), {
                            dir: C,
                            drag: true
                        })
                    }
                },
                _contentDraggable: function() {
                    var y = j(this),
                        K = y.data(d),
                        I = K.opt,
                        F = d + "_" + K.idx,
                        v = j("#mCSB_" + K.idx),
                        z = j("#mCSB_" + K.idx + "_container"),
                        w = [j("#mCSB_" + K.idx + "_dragger_vertical"), j("#mCSB_" + K.idx + "_dragger_horizontal")],
                        E, G, L, M, C = [],
                        D = [],
                        H, A, u, t, J, x, r = 0,
                        q, s = I.axis === "yx" ? "none" : "all";
                    z.bind("touchstart." + F + " pointerdown." + F + " MSPointerDown." + F, function(N) {
                        if (!i._pointerTouch(N) || n) {
                            return
                        }
                        var O = z.offset();
                        E = i._coordinates(N)[0] - O.top;
                        G = i._coordinates(N)[1] - O.left
                    }).bind("touchmove." + F + " pointermove." + F + " MSPointerMove." + F, function(Q) {
                        if (!i._pointerTouch(Q) || n) {
                            return
                        }
                        Q.stopImmediatePropagation();
                        A = i._getTime();
                        var P = v.offset(),
                            S = i._coordinates(Q)[0] - P.top,
                            U = i._coordinates(Q)[1] - P.left,
                            R = "mcsLinearOut";
                        C.push(S);
                        D.push(U);
                        if (K.overflowed[0]) {
                            var O = w[0].parent().height() - w[0].height(),
                                T = ((E - S) > 0 && (S - E) > -(O * K.scrollRatio.y))
                        }
                        if (K.overflowed[1]) {
                            var N = w[1].parent().width() - w[1].width(),
                                V = ((G - U) > 0 && (U - G) > -(N * K.scrollRatio.x))
                        }
                        if (T || V) {
                            Q.preventDefault()
                        }
                        x = I.axis === "yx" ? [(E - S), (G - U)] : I.axis === "x" ? [null, (G - U)] : [(E - S), null];
                        z[0].idleTimer = 250;
                        if (K.overflowed[0]) {
                            B(x[0], r, R, "y", "all", true)
                        }
                        if (K.overflowed[1]) {
                            B(x[1], r, R, "x", s, true)
                        }
                    });
                    v.bind("touchstart." + F + " pointerdown." + F + " MSPointerDown." + F, function(N) {
                        if (!i._pointerTouch(N) || n) {
                            return
                        }
                        N.stopImmediatePropagation();
                        i._stop(y);
                        H = i._getTime();
                        var O = v.offset();
                        L = i._coordinates(N)[0] - O.top;
                        M = i._coordinates(N)[1] - O.left;
                        C = [];
                        D = []
                    }).bind("touchend." + F + " pointerup." + F + " MSPointerUp." + F, function(P) {
                        if (!i._pointerTouch(P) || n) {
                            return
                        }
                        P.stopImmediatePropagation();
                        u = i._getTime();
                        var N = v.offset(),
                            T = i._coordinates(P)[0] - N.top,
                            V = i._coordinates(P)[1] - N.left;
                        if ((u - A) > 30) {
                            return
                        }
                        J = 1000 / (u - H);
                        var Q = "mcsEaseOut",
                            R = J < 2.5,
                            W = R ? [C[C.length - 2], D[D.length - 2]] : [0, 0];
                        t = R ? [(T - W[0]), (V - W[1])] : [T - L, V - M];
                        var O = [Math.abs(t[0]), Math.abs(t[1])];
                        J = R ? [Math.abs(t[0] / 4), Math.abs(t[1] / 4)] : [J, J];
                        var U = [Math.abs(z[0].offsetTop) - (t[0] * p((O[0] / J[0]), J[0])), Math.abs(z[0].offsetLeft) - (t[1] * p((O[1] / J[1]), J[1]))];
                        x = I.axis === "yx" ? [U[0], U[1]] : I.axis === "x" ? [null, U[1]] : [U[0], null];
                        q = [(O[0] * 4) + I.scrollInertia, (O[1] * 4) + I.scrollInertia];
                        var S = parseInt(I.contentTouchScroll) || 0;
                        x[0] = O[0] > S ? x[0] : 0;
                        x[1] = O[1] > S ? x[1] : 0;
                        if (K.overflowed[0]) {
                            B(x[0], q[0], Q, "y", s, false)
                        }
                        if (K.overflowed[1]) {
                            B(x[1], q[1], Q, "x", s, false)
                        }
                    });

                    function p(P, N) {
                        var O = [N * 1.5, N * 2, N / 1.5, N / 2];
                        if (P > 90) {
                            return N > 4 ? O[0] : O[3]
                        } else {
                            if (P > 60) {
                                return N > 3 ? O[3] : O[2]
                            } else {
                                if (P > 30) {
                                    return N > 8 ? O[1] : N > 6 ? O[0] : N > 4 ? N : O[2]
                                } else {
                                    return N > 8 ? N : O[3]
                                }
                            }
                        }
                    }

                    function B(P, R, S, O, N, Q) {
                        if (!P) {
                            return
                        }
                        i._scrollTo(y, P.toString(), {
                            dur: R,
                            scrollEasing: S,
                            dir: O,
                            overwrite: N,
                            drag: Q
                        })
                    }
                },
                _mousewheel: function() {
                    var w = j(this),
                        v = w.data(d);
                    if (v) {
                        var p = v.opt,
                            s = d + "_" + v.idx,
                            q = j("#mCSB_" + v.idx),
                            x = [j("#mCSB_" + v.idx + "_dragger_vertical"), j("#mCSB_" + v.idx + "_dragger_horizontal")],
                            t = j("#mCSB_" + v.idx + "_container").find("iframe"),
                            r = q;
                        if (t.length) {
                            t.each(function() {
                                var y = this;
                                if (u(y)) {
                                    r = r.add(j(y).contents().find("body"))
                                }
                            })
                        }
                        r.bind("mousewheel." + s, function(C, G) {
                            i._stop(w);
                            if (i._disableMousewheel(w, C.target)) {
                                return
                            }
                            var E = p.mouseWheel.deltaFactor !== "auto" ? parseInt(p.mouseWheel.deltaFactor) : (k && C.deltaFactor < 100) ? 100 : C.deltaFactor || 100;
                            if (p.axis === "x" || p.mouseWheel.axis === "x") {
                                var z = "x",
                                    F = [Math.round(E * v.scrollRatio.x), parseInt(p.mouseWheel.scrollAmount)],
                                    B = p.mouseWheel.scrollAmount !== "auto" ? F[1] : F[0] >= q.width() ? q.width() * 0.9 : F[0],
                                    H = Math.abs(j("#mCSB_" + v.idx + "_container")[0].offsetLeft),
                                    D = x[1][0].offsetLeft,
                                    A = x[1].parent().width() - x[1].width(),
                                    y = C.deltaX || C.deltaY || G
                            } else {
                                var z = "y",
                                    F = [Math.round(E * v.scrollRatio.y), parseInt(p.mouseWheel.scrollAmount)],
                                    B = p.mouseWheel.scrollAmount !== "auto" ? F[1] : F[0] >= q.height() ? q.height() * 0.9 : F[0],
                                    H = Math.abs(j("#mCSB_" + v.idx + "_container")[0].offsetTop),
                                    D = x[0][0].offsetTop,
                                    A = x[0].parent().height() - x[0].height(),
                                    y = C.deltaY || G
                            }
                            if ((z === "y" && !v.overflowed[0]) || (z === "x" && !v.overflowed[1])) {
                                return
                            }
                            if (p.mouseWheel.invert) {
                                y = -y
                            }
                            if (p.mouseWheel.normalizeDelta) {
                                y = y < 0 ? -1 : 1
                            }
                            if ((y > 0 && D !== 0) || (y < 0 && D !== A) || p.mouseWheel.preventDefault) {
                                C.stopImmediatePropagation();
                                C.preventDefault()
                            }
                            i._scrollTo(w, (H - (y * B)).toString(), {
                                dir: z
                            })
                        })
                    }

                    function u(z) {
                        var y = null;
                        try {
                            var B = z.contentDocument || z.contentWindow.document;
                            y = B.body.innerHTML
                        } catch (A) {}
                        return (y !== null)
                    }
                },
                _disableMousewheel: function(r, t) {
                    var p = t.nodeName.toLowerCase(),
                        q = r.data(d).opt.mouseWheel.disableOver,
                        s = ["select", "textarea"];
                    return j.inArray(p, q) > -1 && !(j.inArray(p, s) > -1 && !j(t).is(":focus"))
                },
                _draggerRail: function() {
                    var s = j(this),
                        t = s.data(d),
                        q = d + "_" + t.idx,
                        r = j("#mCSB_" + t.idx + "_container"),
                        u = r.parent(),
                        p = j(".mCSB_" + t.idx + "_scrollbar .mCSB_draggerContainer");
                    p.bind("touchstart." + q + " pointerdown." + q + " MSPointerDown." + q, function(v) {
                        n = true
                    }).bind("touchend." + q + " pointerup." + q + " MSPointerUp." + q, function(v) {
                        n = false
                    }).bind("click." + q, function(z) {
                        if (j(z.target).hasClass("mCSB_draggerContainer") || j(z.target).hasClass("mCSB_draggerRail")) {
                            i._stop(s);
                            var w = j(this),
                                y = w.find(".mCSB_dragger");
                            if (w.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                if (!t.overflowed[1]) {
                                    return
                                }
                                var v = "x",
                                    x = z.pageX > y.offset().left ? -1 : 1,
                                    A = Math.abs(r[0].offsetLeft) - (x * (u.width() * 0.9))
                            } else {
                                if (!t.overflowed[0]) {
                                    return
                                }
                                var v = "y",
                                    x = z.pageY > y.offset().top ? -1 : 1,
                                    A = Math.abs(r[0].offsetTop) - (x * (u.height() * 0.9))
                            }
                            i._scrollTo(s, A.toString(), {
                                dir: v,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    })
                },
                _focus: function() {
                    var r = j(this),
                        t = r.data(d),
                        s = t.opt,
                        p = d + "_" + t.idx,
                        q = j("#mCSB_" + t.idx + "_container"),
                        u = q.parent();
                    q.bind("focusin." + p, function(x) {
                        var w = j(a.activeElement),
                            y = q.find(".mCustomScrollBox").length,
                            v = 0;
                        if (!w.is(s.advanced.autoScrollOnFocus)) {
                            return
                        }
                        i._stop(r);
                        clearTimeout(r[0]._focusTimeout);
                        r[0]._focusTimer = y ? (v + 17) * y : 0;
                        r[0]._focusTimeout = setTimeout(function() {
                            var C = [w.offset().top - q.offset().top, w.offset().left - q.offset().left],
                                B = [q[0].offsetTop, q[0].offsetLeft],
                                z = [(B[0] + C[0] >= 0 && B[0] + C[0] < u.height() - w.outerHeight(false)), (B[1] + C[1] >= 0 && B[0] + C[1] < u.width() - w.outerWidth(false))],
                                A = (s.axis === "yx" && !z[0] && !z[1]) ? "none" : "all";
                            if (s.axis !== "x" && !z[0]) {
                                i._scrollTo(r, C[0].toString(), {
                                    dir: "y",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: A,
                                    dur: v
                                })
                            }
                            if (s.axis !== "y" && !z[1]) {
                                i._scrollTo(r, C[1].toString(), {
                                    dir: "x",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: A,
                                    dur: v
                                })
                            }
                        }, r[0]._focusTimer)
                    })
                },
                _wrapperScroll: function() {
                    var q = j(this),
                        r = q.data(d),
                        p = d + "_" + r.idx,
                        s = j("#mCSB_" + r.idx + "_container").parent();
                    s.bind("scroll." + p, function(t) {
                        s.scrollTop(0).scrollLeft(0)
                    })
                },
                _buttons: function() {
                    var u = j(this),
                        w = u.data(d),
                        v = w.opt,
                        p = w.sequential,
                        r = d + "_" + w.idx,
                        t = j("#mCSB_" + w.idx + "_container"),
                        s = ".mCSB_" + w.idx + "_scrollbar",
                        q = j(s + ">a");
                    q.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(z) {
                        z.preventDefault();
                        if (!i._mouseBtnLeft(z)) {
                            return
                        }
                        var y = j(this).attr("class");
                        p.type = v.scrollButtons.scrollType;
                        switch (z.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if (p.type === "stepped") {
                                    return
                                }
                                n = true;
                                w.tweenRunning = false;
                                x("on", y);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if (p.type === "stepped") {
                                    return
                                }
                                n = false;
                                if (p.dir) {
                                    x("off", y)
                                }
                                break;
                            case "click":
                                if (p.type !== "stepped" || w.tweenRunning) {
                                    return
                                }
                                x("on", y);
                                break
                        }

                        function x(A, B) {
                            p.scrollAmount = v.snapAmount || v.scrollButtons.scrollAmount;
                            i._sequentialScroll.call(this, u, A, B)
                        }
                    })
                },
                _keyboard: function() {
                    var u = j(this),
                        t = u.data(d),
                        q = t.opt,
                        x = t.sequential,
                        s = d + "_" + t.idx,
                        r = j("#mCSB_" + t.idx),
                        w = j("#mCSB_" + t.idx + "_container"),
                        p = w.parent(),
                        v = "input,textarea,select,datalist,keygen,[contenteditable='true']";
                    r.attr("tabindex", "0").bind("blur." + s + " keydown." + s + " keyup." + s, function(D) {
                        switch (D.type) {
                            case "blur":
                                if (t.tweenRunning && x.dir) {
                                    y("off", null)
                                }
                                break;
                            case "keydown":
                            case "keyup":
                                var A = D.keyCode ? D.keyCode : D.which,
                                    B = "on";
                                if ((q.axis !== "x" && (A === 38 || A === 40)) || (q.axis !== "y" && (A === 37 || A === 39))) {
                                    if (((A === 38 || A === 40) && !t.overflowed[0]) || ((A === 37 || A === 39) && !t.overflowed[1])) {
                                        return
                                    }
                                    if (D.type === "keyup") {
                                        B = "off"
                                    }
                                    if (!j(a.activeElement).is(v)) {
                                        D.preventDefault();
                                        D.stopImmediatePropagation();
                                        y(B, A)
                                    }
                                } else {
                                    if (A === 33 || A === 34) {
                                        if (t.overflowed[0] || t.overflowed[1]) {
                                            D.preventDefault();
                                            D.stopImmediatePropagation()
                                        }
                                        if (D.type === "keyup") {
                                            i._stop(u);
                                            var C = A === 34 ? -1 : 1;
                                            if (q.axis === "x" || (q.axis === "yx" && t.overflowed[1] && !t.overflowed[0])) {
                                                var z = "x",
                                                    E = Math.abs(w[0].offsetLeft) - (C * (p.width() * 0.9))
                                            } else {
                                                var z = "y",
                                                    E = Math.abs(w[0].offsetTop) - (C * (p.height() * 0.9))
                                            }
                                            i._scrollTo(u, E.toString(), {
                                                dir: z,
                                                scrollEasing: "mcsEaseInOut"
                                            })
                                        }
                                    } else {
                                        if (A === 35 || A === 36) {
                                            if (!j(a.activeElement).is(v)) {
                                                if (t.overflowed[0] || t.overflowed[1]) {
                                                    D.preventDefault();
                                                    D.stopImmediatePropagation()
                                                }
                                                if (D.type === "keyup") {
                                                    if (q.axis === "x" || (q.axis === "yx" && t.overflowed[1] && !t.overflowed[0])) {
                                                        var z = "x",
                                                            E = A === 35 ? Math.abs(p.width() - w.outerWidth(false)) : 0
                                                    } else {
                                                        var z = "y",
                                                            E = A === 35 ? Math.abs(p.height() - w.outerHeight(false)) : 0
                                                    }
                                                    i._scrollTo(u, E.toString(), {
                                                        dir: z,
                                                        scrollEasing: "mcsEaseInOut"
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                                break
                        }

                        function y(F, G) {
                            x.type = q.keyboard.scrollType;
                            x.scrollAmount = q.snapAmount || q.keyboard.scrollAmount;
                            if (x.type === "stepped" && t.tweenRunning) {
                                return
                            }
                            i._sequentialScroll.call(this, u, F, G)
                        }
                    })
                },
                _sequentialScroll: function(r, u, s) {
                    var w = r.data(d),
                        q = w.opt,
                        y = w.sequential,
                        x = j("#mCSB_" + w.idx + "_container"),
                        p = y.type === "stepped" ? true : false;
                    switch (u) {
                        case "on":
                            y.dir = [(s === "mCSB_buttonRight" || s === "mCSB_buttonLeft" || s === 39 || s === 37 ? "x" : "y"), (s === "mCSB_buttonUp" || s === "mCSB_buttonLeft" || s === 38 || s === 37 ? -1 : 1)];
                            i._stop(r);
                            if (i._isNumeric(s) && y.type === "stepped") {
                                return
                            }
                            t(p);
                            break;
                        case "off":
                            v();
                            if (p || (w.tweenRunning && y.dir)) {
                                t(true)
                            }
                            break
                    }

                    function t(z) {
                        var F = y.type !== "stepped",
                            J = !z ? 1000 / 60 : F ? q.scrollInertia / 1.5 : q.scrollInertia,
                            B = !z ? 2.5 : F ? 7.5 : 40,
                            I = [Math.abs(x[0].offsetTop), Math.abs(x[0].offsetLeft)],
                            E = [w.scrollRatio.y > 10 ? 10 : w.scrollRatio.y, w.scrollRatio.x > 10 ? 10 : w.scrollRatio.x],
                            C = y.dir[0] === "x" ? I[1] + (y.dir[1] * (E[1] * B)) : I[0] + (y.dir[1] * (E[0] * B)),
                            H = y.dir[0] === "x" ? I[1] + (y.dir[1] * parseInt(y.scrollAmount)) : I[0] + (y.dir[1] * parseInt(y.scrollAmount)),
                            G = y.scrollAmount !== "auto" ? H : C,
                            D = !z ? "mcsLinear" : F ? "mcsLinearOut" : "mcsEaseInOut",
                            A = !z ? false : true;
                        if (z && J < 17) {
                            G = y.dir[0] === "x" ? I[1] : I[0]
                        }
                        i._scrollTo(r, G.toString(), {
                            dir: y.dir[0],
                            scrollEasing: D,
                            dur: J,
                            onComplete: A
                        });
                        if (z) {
                            y.dir = false;
                            return
                        }
                        clearTimeout(y.step);
                        y.step = setTimeout(function() {
                            t()
                        }, J)
                    }

                    function v() {
                        clearTimeout(y.step);
                        i._stop(r)
                    }
                },
                _arr: function(r) {
                    var q = j(this).data(d).opt,
                        p = [];
                    if (typeof r === "function") {
                        r = r()
                    }
                    if (!(r instanceof Array)) {
                        p[0] = r.y ? r.y : r.x || q.axis === "x" ? null : r;
                        p[1] = r.x ? r.x : r.y || q.axis === "y" ? null : r
                    } else {
                        p = r.length > 1 ? [r[0], r[1]] : q.axis === "x" ? [null, r[0]] : [r[0], null]
                    }
                    if (typeof p[0] === "function") {
                        p[0] = p[0]()
                    }
                    if (typeof p[1] === "function") {
                        p[1] = p[1]()
                    }
                    return p
                },
                _to: function(v, w) {
                    if (v == null || typeof v == "undefined") {
                        return
                    }
                    var C = j(this),
                        B = C.data(d),
                        u = B.opt,
                        D = j("#mCSB_" + B.idx + "_container"),
                        r = D.parent(),
                        F = typeof v;
                    if (!w) {
                        w = u.axis === "x" ? "x" : "y"
                    }
                    var q = w === "x" ? D.outerWidth(false) : D.outerHeight(false),
                        x = w === "x" ? D.offset().left : D.offset().top,
                        E = w === "x" ? D[0].offsetLeft : D[0].offsetTop,
                        z = w === "x" ? "left" : "top";
                    switch (F) {
                        case "function":
                            return v();
                            break;
                        case "object":
                            if (v.nodeType) {
                                var A = w === "x" ? j(v).offset().left : j(v).offset().top
                            } else {
                                if (v.jquery) {
                                    if (!v.length) {
                                        return
                                    }
                                    var A = w === "x" ? v.offset().left : v.offset().top
                                }
                            }
                            return A - x;
                            break;
                        case "string":
                        case "number":
                            if (i._isNumeric.call(null, v)) {
                                return Math.abs(v)
                            } else {
                                if (v.indexOf("%") !== -1) {
                                    return Math.abs(q * parseInt(v) / 100)
                                } else {
                                    if (v.indexOf("-=") !== -1) {
                                        return Math.abs(E - parseInt(v.split("-=")[1]))
                                    } else {
                                        if (v.indexOf("+=") !== -1) {
                                            var s = (E + parseInt(v.split("+=")[1]));
                                            return s >= 0 ? 0 : Math.abs(s)
                                        } else {
                                            if (v.indexOf("px") !== -1 && i._isNumeric.call(null, v.split("px")[0])) {
                                                return Math.abs(v.split("px")[0])
                                            } else {
                                                if (v === "top" || v === "left") {
                                                    return 0
                                                } else {
                                                    if (v === "bottom") {
                                                        return Math.abs(r.height() - D.outerHeight(false))
                                                    } else {
                                                        if (v === "right") {
                                                            return Math.abs(r.width() - D.outerWidth(false))
                                                        } else {
                                                            if (v === "first" || v === "last") {
                                                                var y = D.find(":" + v),
                                                                    A = w === "x" ? j(y).offset().left : j(y).offset().top;
                                                                return A - x
                                                            } else {
                                                                if (j(v).length) {
                                                                    var A = w === "x" ? j(v).offset().left : j(v).offset().top;
                                                                    return A - x
                                                                } else {
                                                                    D.css(z, v);
                                                                    e.update.call(null, C[0]);
                                                                    return
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            break
                    }
                },
                _autoUpdate: function(q) {
                    var t = j(this),
                        F = t.data(d),
                        z = F.opt,
                        v = j("#mCSB_" + F.idx + "_container");
                    if (q) {
                        clearTimeout(v[0].autoUpdate);
                        i._delete.call(null, v[0].autoUpdate);
                        return
                    }
                    var s = v.parent(),
                        p = [j("#mCSB_" + F.idx + "_scrollbar_vertical"), j("#mCSB_" + F.idx + "_scrollbar_horizontal")],
                        D = function() {
                            return [p[0].is(":visible") ? p[0].outerHeight(true) : 0, p[1].is(":visible") ? p[1].outerWidth(true) : 0]
                        },
                        E = y(),
                        x, u = [v.outerHeight(false), v.outerWidth(false), s.height(), s.width(), D()[0], D()[1]],
                        H, B = G(),
                        w;
                    C();

                    function C() {
                        clearTimeout(v[0].autoUpdate);
                        v[0].autoUpdate = setTimeout(function() {
                            if (z.advanced.updateOnSelectorChange) {
                                x = y();
                                if (x !== E) {
                                    r();
                                    E = x;
                                    return
                                }
                            }
                            if (z.advanced.updateOnContentResize) {
                                H = [v.outerHeight(false), v.outerWidth(false), s.height(), s.width(), D()[0], D()[1]];
                                if (H[0] !== u[0] || H[1] !== u[1] || H[2] !== u[2] || H[3] !== u[3] || H[4] !== u[4] || H[5] !== u[5]) {
                                    r();
                                    u = H
                                }
                            }
                            if (z.advanced.updateOnImageLoad) {
                                w = G();
                                if (w !== B) {
                                    v.find("img").each(function() {
                                        A(this.src)
                                    });
                                    B = w
                                }
                            }
                            if (z.advanced.updateOnSelectorChange || z.advanced.updateOnContentResize || z.advanced.updateOnImageLoad) {
                                C()
                            }
                        }, 60)
                    }

                    function G() {
                        var I = 0;
                        if (z.advanced.updateOnImageLoad) {
                            I = v.find("img").length
                        }
                        return I
                    }

                    function A(L) {
                        var I = new Image();

                        function K(M, N) {
                            return function() {
                                return N.apply(M, arguments)
                            }
                        }

                        function J() {
                            this.onload = null;
                            r()
                        }
                        I.onload = K(I, J);
                        I.src = L
                    }

                    function y() {
                        if (z.advanced.updateOnSelectorChange === true) {
                            z.advanced.updateOnSelectorChange = "*"
                        }
                        var I = 0,
                            J = v.find(z.advanced.updateOnSelectorChange);
                        if (z.advanced.updateOnSelectorChange && J.length > 0) {
                            J.each(function() {
                                I += j(this).height() + j(this).width()
                            })
                        }
                        return I
                    }

                    function r() {
                        clearTimeout(v[0].autoUpdate);
                        e.update.call(null, t[0])
                    }
                },
                _snapAmount: function(r, p, q) {
                    return (Math.round(r / p) * p - q)
                },
                _stop: function(p) {
                    var r = p.data(d),
                        q = j("#mCSB_" + r.idx + "_container,#mCSB_" + r.idx + "_container_wrapper,#mCSB_" + r.idx + "_dragger_vertical,#mCSB_" + r.idx + "_dragger_horizontal");
                    q.each(function() {
                        i._stopTween.call(this)
                    })
                },
                _scrollTo: function(q, s, u) {
                    var I = q.data(d),
                        E = I.opt,
                        D = {
                            trigger: "internal",
                            dir: "y",
                            scrollEasing: "mcsEaseOut",
                            drag: false,
                            dur: E.scrollInertia,
                            overwrite: "all",
                            callbacks: true,
                            onStart: true,
                            onUpdate: true,
                            onComplete: true
                        },
                        u = j.extend(D, u),
                        G = [u.dur, (u.drag ? 0 : u.dur)],
                        v = j("#mCSB_" + I.idx),
                        B = j("#mCSB_" + I.idx + "_container"),
                        K = E.callbacks.onTotalScrollOffset ? i._arr.call(q, E.callbacks.onTotalScrollOffset) : [0, 0],
                        p = E.callbacks.onTotalScrollBackOffset ? i._arr.call(q, E.callbacks.onTotalScrollBackOffset) : [0, 0];
                    I.trigger = u.trigger;
                    if (s === "_resetY" && !I.contentReset.y) {
                        if (t("onOverflowYNone")) {
                            E.callbacks.onOverflowYNone.call(q[0])
                        }
                        I.contentReset.y = 1
                    }
                    if (s === "_resetX" && !I.contentReset.x) {
                        if (t("onOverflowXNone")) {
                            E.callbacks.onOverflowXNone.call(q[0])
                        }
                        I.contentReset.x = 1
                    }
                    if (s === "_resetY" || s === "_resetX") {
                        return
                    }
                    if ((I.contentReset.y || !q[0].mcs) && I.overflowed[0]) {
                        if (t("onOverflowY")) {
                            E.callbacks.onOverflowY.call(q[0])
                        }
                        I.contentReset.x = null
                    }
                    if ((I.contentReset.x || !q[0].mcs) && I.overflowed[1]) {
                        if (t("onOverflowX")) {
                            E.callbacks.onOverflowX.call(q[0])
                        }
                        I.contentReset.x = null
                    }
                    if (E.snapAmount) {
                        s = i._snapAmount(s, E.snapAmount, E.snapOffset)
                    }
                    switch (u.dir) {
                        case "x":
                            var x = j("#mCSB_" + I.idx + "_dragger_horizontal"),
                                z = "left",
                                C = B[0].offsetLeft,
                                H = [v.width() - B.outerWidth(false), x.parent().width() - x.width()],
                                r = [s, s === 0 ? 0 : (s / I.scrollRatio.x)],
                                L = K[1],
                                J = p[1],
                                A = L > 0 ? L / I.scrollRatio.x : 0,
                                w = J > 0 ? J / I.scrollRatio.x : 0;
                            break;
                        case "y":
                            var x = j("#mCSB_" + I.idx + "_dragger_vertical"),
                                z = "top",
                                C = B[0].offsetTop,
                                H = [v.height() - B.outerHeight(false), x.parent().height() - x.height()],
                                r = [s, s === 0 ? 0 : (s / I.scrollRatio.y)],
                                L = K[0],
                                J = p[0],
                                A = L > 0 ? L / I.scrollRatio.y : 0,
                                w = J > 0 ? J / I.scrollRatio.y : 0;
                            break
                    }
                    if (r[1] < 0 || (r[0] === 0 && r[1] === 0)) {
                        r = [0, 0]
                    } else {
                        if (r[1] >= H[1]) {
                            r = [H[0], H[1]]
                        } else {
                            r[0] = -r[0]
                        }
                    }
                    if (!q[0].mcs) {
                        F()
                    }
                    clearTimeout(B[0].onCompleteTimeout);
                    if (!I.tweenRunning && ((C === 0 && r[0] >= 0) || (C === H[0] && r[0] <= H[0]))) {
                        return
                    }
                    i._tweenTo.call(null, x[0], z, Math.round(r[1]), G[1], u.scrollEasing);
                    i._tweenTo.call(null, B[0], z, Math.round(r[0]), G[0], u.scrollEasing, u.overwrite, {
                        onStart: function() {
                            if (u.callbacks && u.onStart && !I.tweenRunning) {
                                if (t("onScrollStart")) {
                                    F();
                                    E.callbacks.onScrollStart.call(q[0])
                                }
                                I.tweenRunning = true;
                                i._onDragClasses(x);
                                I.cbOffsets = y()
                            }
                        },
                        onUpdate: function() {
                            if (u.callbacks && u.onUpdate) {
                                if (t("whileScrolling")) {
                                    F();
                                    E.callbacks.whileScrolling.call(q[0])
                                }
                            }
                        },
                        onComplete: function() {
                            if (u.callbacks && u.onComplete) {
                                if (E.axis === "yx") {
                                    clearTimeout(B[0].onCompleteTimeout)
                                }
                                var M = B[0].idleTimer || 0;
                                B[0].onCompleteTimeout = setTimeout(function() {
                                    if (t("onScroll")) {
                                        F();
                                        E.callbacks.onScroll.call(q[0])
                                    }
                                    if (t("onTotalScroll") && r[1] >= H[1] - A && I.cbOffsets[0]) {
                                        F();
                                        E.callbacks.onTotalScroll.call(q[0])
                                    }
                                    if (t("onTotalScrollBack") && r[1] <= w && I.cbOffsets[1]) {
                                        F();
                                        E.callbacks.onTotalScrollBack.call(q[0])
                                    }
                                    I.tweenRunning = false;
                                    B[0].idleTimer = 0;
                                    i._onDragClasses(x, "hide")
                                }, M)
                            }
                        }
                    });

                    function t(M) {
                        return I && E.callbacks[M] && typeof E.callbacks[M] === "function"
                    }

                    function y() {
                        return [E.callbacks.alwaysTriggerOffsets || C >= H[0] + L, E.callbacks.alwaysTriggerOffsets || C <= -J]
                    }

                    function F() {
                        var O = [B[0].offsetTop, B[0].offsetLeft],
                            P = [x[0].offsetTop, x[0].offsetLeft],
                            M = [B.outerHeight(false), B.outerWidth(false)],
                            N = [v.height(), v.width()];
                        q[0].mcs = {
                            content: B,
                            top: O[0],
                            left: O[1],
                            draggerTop: P[0],
                            draggerLeft: P[1],
                            topPct: Math.round((100 * Math.abs(O[0])) / (Math.abs(M[0]) - N[0])),
                            leftPct: Math.round((100 * Math.abs(O[1])) / (Math.abs(M[1]) - N[1])),
                            direction: u.dir
                        }
                    }
                },
                _tweenTo: function(r, u, s, q, B, t, K) {
                    var K = K || {},
                        H = K.onStart || function() {},
                        C = K.onUpdate || function() {},
                        I = K.onComplete || function() {},
                        z = i._getTime(),
                        x, v = 0,
                        E = r.offsetTop,
                        F = r.style,
                        A;
                    if (u === "left") {
                        E = r.offsetLeft
                    }
                    var y = s - E;
                    r._mcsstop = 0;
                    if (t !== "none") {
                        D()
                    }
                    p();

                    function J() {
                        if (r._mcsstop) {
                            return
                        }
                        if (!v) {
                            H.call()
                        }
                        v = i._getTime() - z;
                        G();
                        if (v >= r._mcstime) {
                            r._mcstime = (v > r._mcstime) ? v + x - (v - r._mcstime) : v + x - 1;
                            if (r._mcstime < v + 1) {
                                r._mcstime = v + 1
                            }
                        }
                        if (r._mcstime < q) {
                            r._mcsid = A(J)
                        } else {
                            I.call()
                        }
                    }

                    function G() {
                        if (q > 0) {
                            r._mcscurrVal = w(r._mcstime, E, y, q, B);
                            F[u] = Math.round(r._mcscurrVal) + "px"
                        } else {
                            F[u] = s + "px"
                        }
                        C.call()
                    }

                    function p() {
                        x = 1000 / 60;
                        r._mcstime = v + x;
                        A = (!b.requestAnimationFrame) ? function(L) {
                            G();
                            return setTimeout(L, 0.01)
                        } : b.requestAnimationFrame;
                        r._mcsid = A(J)
                    }

                    function D() {
                        if (r._mcsid == null) {
                            return
                        }
                        if (!b.requestAnimationFrame) {
                            clearTimeout(r._mcsid)
                        } else {
                            b.cancelAnimationFrame(r._mcsid)
                        }
                        r._mcsid = null
                    }

                    function w(N, M, R, Q, O) {
                        switch (O) {
                            case "linear":
                            case "mcsLinear":
                                return R * N / Q + M;
                                break;
                            case "mcsLinearOut":
                                N /= Q;
                                N--;
                                return R * Math.sqrt(1 - N * N) + M;
                                break;
                            case "easeInOutSmooth":
                                N /= Q / 2;
                                if (N < 1) {
                                    return R / 2 * N * N + M
                                }
                                N--;
                                return -R / 2 * (N * (N - 2) - 1) + M;
                                break;
                            case "easeInOutStrong":
                                N /= Q / 2;
                                if (N < 1) {
                                    return R / 2 * Math.pow(2, 10 * (N - 1)) + M
                                }
                                N--;
                                return R / 2 * (-Math.pow(2, -10 * N) + 2) + M;
                                break;
                            case "easeInOut":
                            case "mcsEaseInOut":
                                N /= Q / 2;
                                if (N < 1) {
                                    return R / 2 * N * N * N + M
                                }
                                N -= 2;
                                return R / 2 * (N * N * N + 2) + M;
                                break;
                            case "easeOutSmooth":
                                N /= Q;
                                N--;
                                return -R * (N * N * N * N - 1) + M;
                                break;
                            case "easeOutStrong":
                                return R * (-Math.pow(2, -10 * N / Q) + 1) + M;
                                break;
                            case "easeOut":
                            case "mcsEaseOut":
                            default:
                                var P = (N /= Q) * N,
                                    L = P * N;
                                return M + R * (0.499999999999997 * L * P + -2.5 * P * P + 5.5 * L + -6.5 * P + 4 * N)
                        }
                    }
                },
                _getTime: function() {
                    if (b.performance && b.performance.now) {
                        return b.performance.now()
                    } else {
                        if (b.performance && b.performance.webkitNow) {
                            return b.performance.webkitNow()
                        } else {
                            if (Date.now) {
                                return Date.now()
                            } else {
                                return new Date().getTime()
                            }
                        }
                    }
                },
                _stopTween: function() {
                    var p = this;
                    if (p._mcsid == null) {
                        return
                    }
                    if (!b.requestAnimationFrame) {
                        clearTimeout(p._mcsid)
                    } else {
                        b.cancelAnimationFrame(p._mcsid)
                    }
                    p._mcsid = null;
                    p._mcsstop = 1
                },
                _delete: function(r) {
                    try {
                        delete r
                    } catch (q) {
                        r = null
                    }
                },
                _mouseBtnLeft: function(p) {
                    return !(p.which && p.which !== 1)
                },
                _pointerTouch: function(q) {
                    var p = q.originalEvent.pointerType;
                    return !(p && p !== "touch" && p !== 2)
                },
                _isNumeric: function(p) {
                    return !isNaN(parseFloat(p)) && isFinite(p)
                }
            };
        j.fn[g] = function(p) {
            if (e[p]) {
                return e[p].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                if (typeof p === "object" || !p) {
                    return e.init.apply(this, arguments)
                } else {
                    j.error("Method " + p + " does not exist")
                }
            }
        };
        j[g] = function(p) {
            if (e[p]) {
                return e[p].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                if (typeof p === "object" || !p) {
                    return e.init.apply(this, arguments)
                } else {
                    j.error("Method " + p + " does not exist")
                }
            }
        };
        j[g].defaults = h;
        b[g] = true;
        j(b).load(function() {
            j(m)[g]()
        })
    }))
}(window, document));
/* End */
;; /* Start:/bitrix/components/1cstore/search.title/script.js*/
var timeout = 0;

$(".title-search-result").live("focusin", function() {
    clearTimeout(timeout);
});

$(".title-search-result").live("focusout", function() {
    $(this).hide();
});

$("#title-search-input").live("focusin", function() {
    $(".title-search-result").show();
});

$(".title-search-result select").live("change", function() {
    var item_id = $(this).find("option:selected").val();
    var cl = $(this).find("option:selected").attr("class");
    var el_li = $(this).parents('tr');

    if (cl == "red") {
        $(el_li).find(".icon-cart-big").remove();
        $(el_li).find(".icon-email-big").remove();
        $(el_li).find(".cart-sub__options").append('<a class="icon-email-big" alt="' + item_id + '" href="#"></a>');
    } else {
        $(el_li).find(".icon-cart-big").remove();
        $(el_li).find(".icon-email-big").remove();
        $(el_li).find(".cart-sub__options").append('<a class="icon-cart-big" alt="' + item_id + '" href="#"></a>');
    }
});



function JCTitleSearch(arParams) {
    var _this = this;

    this.arParams = {
        'AJAX_PAGE': arParams.AJAX_PAGE,
        'CONTAINER_ID': arParams.CONTAINER_ID,
        'INPUT_ID': arParams.INPUT_ID,
        'MIN_QUERY_LEN': parseInt(arParams.MIN_QUERY_LEN)
    };
    if (arParams.WAIT_IMAGE)
        this.arParams.WAIT_IMAGE = arParams.WAIT_IMAGE;
    if (arParams.MIN_QUERY_LEN <= 0)
        arParams.MIN_QUERY_LEN = 1;

    this.cache = [];
    this.cache_key = null;

    this.startText = '';
    this.currentRow = -1;
    this.RESULT = null;
    this.CONTAINER = null;
    this.INPUT = null;
    this.WAIT = null;

    this.ShowResult = function(result) {
        var pos = BX.pos(_this.CONTAINER);
        pos.width = pos.right - pos.left;
        _this.RESULT.style.position = 'absolute';
        _this.RESULT.style.top = (pos.bottom + 2) + 'px';
        _this.RESULT.style.left = pos.left + 'px';
        _this.RESULT.style.width = pos.width + 'px';
        if (result != null)
            _this.RESULT.innerHTML = result;

        if (_this.RESULT.innerHTML.length > 0)
            _this.RESULT.style.display = 'block';
        else
            _this.RESULT.style.display = 'none';

        //ajust left column to be an outline
        var th;
        var tbl = BX.findChild(_this.RESULT, {
            'tag': 'table',
            'class': 'title-search-result'
        }, true);
        if (tbl) th = BX.findChild(tbl, {
            'tag': 'th'
        }, true);
        if (th) {
            var tbl_pos = BX.pos(tbl);
            tbl_pos.width = tbl_pos.right - tbl_pos.left;

            var th_pos = BX.pos(th);
            th_pos.width = th_pos.right - th_pos.left;
            th.style.width = th_pos.width + 'px';

            _this.RESULT.style.width = (pos.width + th_pos.width) + 'px';

            //Move table to left by width of the first column
            _this.RESULT.style.left = (pos.left - th_pos.width - 1) + 'px';

            //Shrink table when it's too wide
            if ((tbl_pos.width - th_pos.width) > pos.width)
                _this.RESULT.style.width = (pos.width + th_pos.width - 1) + 'px';

            //Check if table is too wide and shrink result div to it's width
            tbl_pos = BX.pos(tbl);
            var res_pos = BX.pos(_this.RESULT);
            if (res_pos.right > tbl_pos.right) {
                _this.RESULT.style.width = (tbl_pos.right - tbl_pos.left) + 'px';
            }
        }

        var fade;
        if (tbl) fade = BX.findChild(_this.RESULT, {
            'class': 'title-search-fader'
        }, true);
        if (fade && th) {
            res_pos = BX.pos(_this.RESULT);
            fade.style.left = (res_pos.right - res_pos.left - 18) + 'px';
            fade.style.width = 18 + 'px';
            fade.style.top = 0 + 'px';
            fade.style.height = (res_pos.bottom - res_pos.top) + 'px';
            fade.style.display = 'block';
        }
    }

    this.onKeyPress = function(keyCode) {
        var tbl = BX.findChild(_this.RESULT, {
            'tag': 'table',
            'class': 'title-search-result'
        }, true);
        if (!tbl)
            return false;

        var cnt = tbl.rows.length;

        switch (keyCode) {
            case 27: // escape key - close search div
                _this.RESULT.style.display = 'none';
                _this.currentRow = -1;
                _this.UnSelectAll();
                return true;

            case 40: // down key - navigate down on search results
                if (_this.RESULT.style.display == 'none')
                    _this.RESULT.style.display = 'block';

                var first = -1;
                for (var i = 0; i < cnt; i++) {
                    if (!BX.findChild(tbl.rows[i], {
                            'class': 'title-search-separator'
                        }, true)) {
                        if (first == -1)
                            first = i;

                        if (_this.currentRow < i) {
                            _this.currentRow = i;
                            break;
                        } else if (tbl.rows[i].className == 'title-search-selected') {
                            tbl.rows[i].className = '';
                        }
                    }
                }

                if (i == cnt && _this.currentRow != i)
                    _this.currentRow = first;

                tbl.rows[_this.currentRow].className = 'title-search-selected';
                return true;

            case 38: // up key - navigate up on search results
                if (_this.RESULT.style.display == 'none')
                    _this.RESULT.style.display = 'block';

                var last = -1;
                for (var i = cnt - 1; i >= 0; i--) {
                    if (!BX.findChild(tbl.rows[i], {
                            'class': 'title-search-separator'
                        }, true)) {
                        if (last == -1)
                            last = i;

                        if (_this.currentRow > i) {
                            _this.currentRow = i;
                            break;
                        } else if (tbl.rows[i].className == 'title-search-selected') {
                            tbl.rows[i].className = '';
                        }
                    }
                }

                if (i < 0 && _this.currentRow != i)
                    _this.currentRow = last;

                tbl.rows[_this.currentRow].className = 'title-search-selected';
                return true;

            case 13: // enter key - choose current search result
                if (_this.RESULT.style.display == 'block') {
                    for (var i = 0; i < cnt; i++) {
                        if (_this.currentRow == i) {
                            if (!BX.findChild(tbl.rows[i], {
                                    'class': 'title-search-separator'
                                }, true)) {
                                var a = BX.findChild(tbl.rows[i], {
                                    'tag': 'a'
                                }, true);
                                if (a) {
                                    window.location = a.href;
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
        }

        return false;
    }

    this.onTimeout = function() {
        if (_this.INPUT.value != _this.oldValue && _this.INPUT.value != _this.startText) {
            if (_this.INPUT.value.length >= _this.arParams.MIN_QUERY_LEN) {
                _this.oldValue = _this.INPUT.value;
                _this.cache_key = _this.arParams.INPUT_ID + '|' + _this.INPUT.value;
                if (_this.cache[_this.cache_key] == null) {
                    if (_this.WAIT) {
                        var pos = BX.pos(_this.INPUT);
                        var height = (pos.bottom - pos.top) - 2;
                        _this.WAIT.style.top = (pos.top + 1) + 'px';
                        _this.WAIT.style.height = height + 'px';
                        _this.WAIT.style.width = height + 'px';
                        _this.WAIT.style.left = (pos.right - height + 2) + 'px';
                        _this.WAIT.style.display = 'block';
                    }

                    BX.ajax.post(
                        _this.arParams.AJAX_PAGE, {
                            'ajax_call': 'y',
                            'INPUT_ID': _this.arParams.INPUT_ID,
                            'q': _this.INPUT.value
                        },
                        function(result) {
                            _this.cache[_this.cache_key] = result;
                            _this.ShowResult(result);
                            _this.currentRow = -1;
                            _this.EnableMouseEvents();
                            if (_this.WAIT)
                                _this.WAIT.style.display = 'none';
                            setTimeout(_this.onTimeout, 500);
                        }
                    );
                } else {
                    _this.ShowResult(_this.cache[_this.cache_key]);
                    _this.currentRow = -1;
                    _this.EnableMouseEvents();
                    setTimeout(_this.onTimeout, 500);
                }
            } else {
                _this.RESULT.style.display = 'none';
                _this.currentRow = -1;
                _this.UnSelectAll();
                setTimeout(_this.onTimeout, 500);
            }
        } else {
            setTimeout(_this.onTimeout, 500);
        }
    }

    this.UnSelectAll = function() {
        var tbl = BX.findChild(_this.RESULT, {
            'tag': 'table',
            'class': 'title-search-result'
        }, true);
        if (tbl) {
            var cnt = tbl.rows.length;
            for (var i = 0; i < cnt; i++)
                tbl.rows[i].className = '';
        }
    }

    this.EnableMouseEvents = function() {
        var tbl = BX.findChild(_this.RESULT, {
            'tag': 'table',
            'class': 'title-search-result'
        }, true);
        if (tbl) {
            var cnt = tbl.rows.length;
            for (var i = 0; i < cnt; i++)
                if (!BX.findChild(tbl.rows[i], {
                        'class': 'title-search-separator'
                    }, true)) {
                    tbl.rows[i].id = 'row_' + i;
                    tbl.rows[i].onmouseover = function(e) {
                        if (_this.currentRow != this.id.substr(4)) {
                            _this.UnSelectAll();
                            this.className = 'title-search-selected';
                            _this.currentRow = this.id.substr(4);
                        }
                    };
                    tbl.rows[i].onmouseout = function(e) {
                        this.className = '';
                        _this.currentRow = -1;
                    };
                }
        }
    }

    this.onFocusLost = function(hide) {
        timeout = setTimeout(function() {
            _this.RESULT.style.display = 'none';
        }, 250);
    }

    this.onFocusGain = function() {
        if (_this.RESULT.innerHTML.length)
            _this.ShowResult();
    }

    this.onKeyDown = function(e) {
        if (!e)
            e = window.event;

        if (_this.RESULT.style.display == 'block') {
            if (_this.onKeyPress(e.keyCode))
                return BX.PreventDefault(e);
        }
    }

    this.Init = function() {
        this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID);
        this.RESULT = document.body.appendChild(document.createElement("DIV"));
        this.RESULT.className = 'title-search-result';
        this.INPUT = document.getElementById(this.arParams.INPUT_ID);
        this.startText = this.oldValue = this.INPUT.value;
        BX.bind(this.INPUT, 'focus', function() {
            _this.onFocusGain()
        });
        BX.bind(this.INPUT, 'blur', function() {
            _this.onFocusLost()
        });

        if (BX.browser.IsSafari() || BX.browser.IsIE())
            this.INPUT.onkeydown = this.onKeyDown;
        else
            this.INPUT.onkeypress = this.onKeyDown;

        if (this.arParams.WAIT_IMAGE) {
            this.WAIT = document.body.appendChild(document.createElement("DIV"));
            this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')";
            if (!BX.browser.IsIE())
                this.WAIT.style.backgroundRepeat = 'none';
            this.WAIT.style.display = 'none';
            this.WAIT.style.position = 'absolute';
            this.WAIT.style.zIndex = '1100';
        }

        setTimeout(this.onTimeout, 500);
    }

    BX.ready(function() {
        _this.Init(arParams)
    });
}
/* End */
;
