<?php /* Template Name: Акции*/ get_header(); ?>
    <div class="main">
        <div class="inside">
                <?php easy_breadcrumbs(); ?>
            <div class="middle middle-info clearfix">
                <div class="middle__container">
                    <div class="middle__content">
                        <div class="block-product">
                            <div class="block-product__title clearfix">
                                <div class="pull-left">
                                    <h2><?php the_title(); ?></h2>
                                </div>
                                <div class="rating pull-left">
                                    <ul class="rating__list horizontal">
                                        <li class="rating__item active"></li>
                                        <li class="rating__item "></li>
                                        <li class="rating__item "></li>
                                        <li class="rating__item "></li>
                                        <li class="rating__item "></li>
                                    </ul>
                                </div>
                                <div class="comments-link pull-left">
                                    <a href="#"><span class="icon-comment"></span>0</a>
                                </div>
                            </div>
                            <div class="block-product__slider">
                                <ul class="block-product__slider__big">
                                    <li id="bp__slider__tab1">
                                        <a href="#">
                                        <img src="<?php echo get_template_directory_uri(); ?>/img/pot.jpg" alt="BioTech USA Beef Protein (1816гр)"></a>
                                    </li>
                                </ul>
                                <ul class="block-product__slider__small">
                                    <li style="width: 90px;" class="active">
                                        <a href="#bp__slider__tab1">
                                        <img style="max-height: 90px; max-width: 90px; margin:0 auto;" src="<?php echo get_template_directory_uri(); ?>/img/small-prot.jpg" alt=""><span class="border"></span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="photo_for_basket hidden">
                                <img src="/upload/resize_cache/iblock/0b2/190_190_1/0b208348e8ed3e5c332e95314b1edeb3.jpg" alt="">
                            </div>
                            <div class="block-product__like">

                            </div>
                            <div class="block-product__taber">
                                <div class="block-product__taber__head">
                                    <ul class="horizontal">
                                        <li class="active"><a href="#bp__tab1">Описание</a></li>
                                        <li><span class="bull">•</span><a href="#bp__tab2">Другая фасовка</a></li>
                                        <li><span class="bull">•</span><a href="#bp__tab3">Оплата</a></li>
                                        <li><span class="bull">•</span><a href="#bp__tab4">Доставка</a></li>
                                        <li><span class="bull">•</span><a href="#bp__tab5">Отзывы<span class="count">(0)</span></a></li>
                                    </ul>
                                </div>
                                <div class="block-product__taber__body">
                                    <div class="bp__tab" id="bp__tab1">
                                        <div class="block-product__description"><?php the_post(); the_content(); ?></div>
                                    </div>
                                    <div class="bp__tab" id="bp__tab2">
                                        <div class="block-product__description">
                                            <div class="fitem">
                                                <a href="/catalog/govyazhiy_protein/biotech_usa_beef_protein_500gr.html">
                                                    <div class="fimage"><img src="/upload/resize_cache/iblock/a01/100_100_1/a01d6fe8fc4d65f905b169bcfe057349.jpg"></div>
                                                    <div class="fname">Beef Protein</div>
                                                    <div class="fbox">500 гр</div>
                                                    <div class="fprice">1 150 руб</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bp__tab" id="bp__tab3">
                                        <div class="block-product__description">
                                            <noindex>
                                                <p>Извините, у этого товара отсутствует описание применения. Вы можете уточнить как лучше использовать этот товар у менеджера магазина.</p>
                                            </noindex>
                                        </div>
                                    </div>
                                    <div class="bp__tab" id="bp__tab4">
                                        <div class="block-product__description">
                                            <noindex>
                                                <p>Извините, у этого товара отсутствует описание доставки. Условия доставки уточните у менеджера магазина.</p>
                                            </noindex>
                                        </div>
                                    </div>
                                    <div class="bp__tab" id="bp__tab5">
                                        <div class="products-comments">
                                            <div class="products-comments__view first">
                                                <ul class="products-comments__view__list">
                                                    <li class="products-comments__view__item">
                                                        <div class="products-comments__view__user">
                                                            <div class="rating">
                                                                <ul class="rating__list horizontal">
                                                                    <li class="rating__item active"></li>
                                                                    <li class="rating__item "></li>
                                                                    <li class="rating__item "></li>
                                                                    <li class="rating__item "></li>
                                                                    <li class="rating__item "></li>
                                                                </ul>
                                                            </div>
                                                            <div class="user-info">
                                                                <div class="user-info__name">Средняя оценка пользователей</div>
                                                            </div>
                                                        </div>
                                                        <div class="products-comments__view__text">
                                                            <p>Оставьте свой отзыв о товаре:</p>
                                                            <h4></h4>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div class="products-comments__view__btn"><a class="btn-border" id="btn-comment" href="#">оставить отзыв</a></div>
                                            </div>
                                            <div class="alert success" style="display: none;">
                                                Ваш отзыв будет добавлен после проверки администрацией.
                                            </div>
                                            <div class="products-comments__view product-list">
                                            </div>
                                            <div class="product-form">
                                                <div class="products-comments__add">
                                                    <div class="alert alert-error error1" style="display: none;">
                                                        Ошибка! Поставте оценку.
                                                    </div>
                                                    <div class="alert alert-error error2" style="display: none;">
                                                        Ошибка! Требуется тема отзыва.
                                                    </div>
                                                    <div class="alert alert-error error3" style="display: none;">
                                                        Ошибка! Не заполнено поле "Отзыв".
                                                    </div>
                                                    <div class="products-comments__warning">
                                                        Внимание!
                                                        <br> Публикация производится только после предварительной модерации
                                                    </div>
                                                    <div class="products-comments__form">
                                                        <form action="/catalog/proteiny/biotech_usa_beef_protein_1816gr.html" method="post">
                                                            <ul class="products-comments__form__list">
                                                                <li class="products-comments__form__item first">
                                                                    <label class="pull-left">Рейтинг</label>
                                                                    <div class="rating-plugin pull-right">
                                                                        <div class="rp-container">
                                                                            <div class="input select rating-c">
                                                                                <select class="rp-stars" name="rating" style="display: none;">
                                                                                    <option value=""></option>
                                                                                    <option value="1">1</option>
                                                                                    <option value="2">2</option>
                                                                                    <option value="3">3</option>
                                                                                    <option value="4">4</option>
                                                                                    <option value="5">5</option>
                                                                                </select>
                                                                                <div class="br-widget"><a href="#" data-rating-value="1" data-rating-text="1"><span>1</span></a><a href="#" data-rating-value="2" data-rating-text="2"><span>2</span></a><a href="#" data-rating-value="3" data-rating-text="3"><span>3</span></a><a href="#" data-rating-value="4" data-rating-text="4"><span>4</span></a><a href="#" data-rating-value="5" data-rating-text="5"><span>5</span></a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="products-comments__form__item">
                                                                    <input tabindex="1" type="text" name="title" class="input-text" placeholder="Тема">
                                                                </li>
                                                                <li class="products-comments__form__item">
                                                                    <textarea tabindex="2" cols="2" name="review" rows="2" placeholder="Ваш отзыв"></textarea>
                                                                </li>
                                                                <li class="products-comments__form__item btn-item">
                                                                    <input type="hidden" name="element_id" value="98609">
                                                                    <input type="hidden" name="submit_comment" value="Y">
                                                                    <input tabindex="3" type="submit" class="btn" value="разместить отзыв">
                                                                    <input type="reset" id="reset" style="display: none;" value="сброс">
                                                                </li>
                                                            </ul>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside class="sidebar-right">
                    <div class="product-articul">Артикул: NM98609</div>
                    <div class="product-bigcart ">
                        <div class="product-bigcart__logo">
                            <a href="/brands/biotech-usa/"><img src="/upload/resize_cache/iblock/8e5/218_136_1/8e573e4ddb90d54ff8abf99141ce7ba3.png" alt=""></a>
                        </div>
                        <div class="product-bigcart__weight">
                            <label>Упаковка</label>
                            <strong>1816 гр</strong>
                        </div>
                        <div class="product-bigcart__types clearfix">
                            <div class="pull-left">
                                <div class="jq-selectbox jqselect item_id green" style="display: inline-block; position: relative; z-index:100">
                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                        <option class="green" value="98619">Клубника-банан</option>
                                        <option class="green" value="98618">Ваниль-корица</option>
                                        <option class="green" value="98620">Шоколад-кокос</option>
                                    </select>
                                    <div class="jq-selectbox__select" style="position: relative">
                                        <div class="jq-selectbox__select-text" style="width: 90px;">Клубника-банан</div>
                                        <div class="jq-selectbox__trigger">
                                            <div class="jq-selectbox__trigger-arrow"></div>
                                        </div>
                                    </div>
                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 130px; display: none;">
                                        <div class="jq-selectbox__search" style="display: none;">
                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                        </div>
                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                            <li data-jqfs-class="green" class="selected sel green" style="display: block;">Клубника-банан</li>
                                            <li data-jqfs-class="green" class=" green" style="display: block;">Ваниль-корица</li>
                                            <li data-jqfs-class="green" class=" green" style="display: block;">Шоколад-кокос</li>
                                        </ul>
                                    </div>
                                </div>
                                <input class="item_id" type="hidden" value="98619">
                            </div>
                            <div class="product-counter  pull-left">
                                <div class="product-counter__container">
                                    <a class="minus disable" href="#">minus</a>
                                    <input class="kol" type="text" value="1">
                                    <a class="plus" href="#">plus</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-bigcart__price available">
                            <label>цена за шт.</label>
                            <div class="product-price__new"><strong>3 190</strong> руб.</div><a href="#" class="subscribe_link" onclick="subscribe();">Уведомить о снижении цены?</a>
                        </div>
                        <div class="product-bigcart__none noavailable" style="display: none;">
                            <h4>К сожалению данного<br>товара нет в наличии</h4></div>
                        <div class="product-bigcart__buy available">
                            <a id="show-ocb-form" href="javascript:void(0);">Купить сразу</a>
                        </div>
                        <div class="product-bigcart__cart">
                            <a href="#" class="available">
                                <label>положить в корзину</label>
                                <span class="icon-cart"></span>
                                <span class="arrow"></span>
                            </a>
                            <a href="#" class="noavailable" style="display: none;">
                                <label>Уведоммить о наличии</label>
                                <span class="icon-cart-empty"></span>
                                <span class="arrow"></span>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
            <input type="hidden" value="available" name="98619">
            <input type="hidden" value="available" name="98618">
            <input type="hidden" value="available" name="98620">
            <script type="text/javascript">
            $(document).ready(function() {
                if ($('.__buy').length > 0) {
                    $('.__buy').append('<button id="show-ocb-form" class="intaro-modules-button basket"><i>Купить в 1 клик</i></button>');
                }
            });
            </script>
            <div class="ocb-form" id="ocb-form-wrap">
                <div class="ocb-form-header">
                    <div class="ocb-form-header-caption">Купить в 1 клик</div>
                    <div class="ocb-form-header-close"></div>
                </div>
                <form method="post" id="ocb-form" action="/bitrix/components/intaro/one.click.buy/script.php">
                    <div>
                        <input type="hidden" name="buyMode" value="ONE">
                        <input type="hidden" name="dubLetter" value="s">
                        <input type="hidden" name="paysystemId" value="0">
                        <input type="hidden" name="deliveryId" value="0">
                        <input type="hidden" name="personTypeId" value="">
                        <input type="hidden" name="priceId" value="2">
                        <input type="hidden" name="currencyCode" value="RUB">
                        <div class="ocb-form-field">
                            <label>Ваше имя
                                <ins>*</ins>
                            </label>
                            <input type="text" class="input-text" name="new_order[FIO]" value="" id="ocb-id-FIO">
                            <div id="ocb-id-FIO-error" class="ocb-error-msg">Обязательно укажите ваше имя</div>
                        </div>
                        <div class="ocb-form-field">
                            <label>Контактный телефон
                                <ins>*</ins>
                            </label>
                            <input type="text" class="input-text" name="new_order[PHONE]" value="" id="ocb-id-PHONE">
                            <div id="ocb-id-PHONE-error" class="ocb-error-msg">Обязательно укажите контактный телефон</div>
                            <div id="ocb-id-PHONE-format-error" class="ocb-error-msg">В номере телефона допускаются только цифры, скобки, пробелы, знак плюса и тире</div>
                        </div>
                        <div class="ocb-form-field">
                            <label>E-mail
                                <ins>*</ins>
                            </label>
                            <input type="text" class="input-text" name="new_order[EMAIL]" value="" id="ocb-id-EMAIL">
                            <div id="ocb-id-EMAIL-error" class="ocb-error-msg">Укажите правильный e-mail или оставьте поле пустым</div>
                            <div id="ocb-id-EMAIL-format-error" class="ocb-error-msg">Укажите правильный e-mail или оставьте поле пустым</div>
                        </div>
                        <div class="ocb-form-field">
                            <input type="hidden" name="useSku" value="Y">
                            <input type="hidden" name="skuCodes" value="CML2_ATTRIBUTES">
                            <input type="hidden" name="iblockId" value="26">
                            <label>Свойства товара</label>
                            <select name="itemId" class="input-text">
                                <option value="98620">Шоколад-кокос</option>
                                <option value="98619">Клубника-банан</option>
                                <option value="98618">Ваниль-корица</option>
                            </select>
                        </div>
                        <div class="intaro-modules-button ptichka">
                            <input type="submit" value="Отправить заказ" id="ocb-form-button" name="ocb_form_button">
                        </div>
                        <div class="ocb-form-loader"></div>
                    </div>
                </form>
                <div class="ocb-form-result" id="ocb-form-result">
                    <div class="ocb-result-icon-success">Спасибо за заказ!</div>
                    <div class="ocb-result-icon-fail">Ошибка!</div>
                    <div class="ocb-result-text">В ближайшее время наш менеджер свяжется с вами.</div>
                </div>
            </div>
        </div>
        <div class="row-shadow">
            <div class="inside">
                <div class="main-title">
                    <h2>Похожие товары</h2>
                </div>
                <div class="products-slider">
                    <div class="flexslider carousel" id="products-slider0">
                        <div class="flex-viewport" style="overflow: hidden; position: relative;">
                            <ul class="slides" style="width: 2400%; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/kompleksnyy_protein/weider_protein_80_plus_750gr.html"><img src="/upload/resize_cache/iblock/dd5/190_190_1/dd5c781a8365eb40e5c672981db96653.png" alt="Weider Protein 80 Plus (750гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/kompleksnyy_protein/weider_protein_80_plus_750gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/kompleksnyy_protein/weider_protein_80_plus_750gr.html">Protein 80 Plus</a></h3>
                                            </div>
                                            <div class="box-product__info">750 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <div class="jq-selectbox jqselect item_id red" style="display: inline-block; position: relative; z-index:100">
                                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                        <option class="red" value="100656">Шоколад</option>
                                                        <option class="red" value="100655">Ирис-карамель</option>
                                                        <option class="red" value="93488">Фисташки</option>
                                                        <option class="red" value="93487">Печенье-крем</option>
                                                    </select>
                                                    <div class="jq-selectbox__select" style="position: relative">
                                                        <div class="jq-selectbox__select-text">Шоколад</div>
                                                        <div class="jq-selectbox__trigger">
                                                            <div class="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 20px; left: 0px; display: none;">
                                                        <div class="jq-selectbox__search" style="display: none;">
                                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                                        </div>
                                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                            <li data-jqfs-class="red" class="selected sel red" style="display: block;">Шоколад</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Ирис-карамель</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Фисташки</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Печенье-крем</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input class="item_id" type="hidden" value="100656">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>1 260</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="100656">
                                        <input type="hidden" value="notavailable" name="100655">
                                        <input type="hidden" value="notavailable" name="93488">
                                        <input type="hidden" value="notavailable" name="93487">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/syvorotochnyy_protein/usn_whey_oats_800gr.html"><img src="/upload/resize_cache/iblock/bd7/190_190_1/bd771db00aeb2a15ce6af1d94425b349.png" alt="USN - Whey &amp; Oats (800гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/syvorotochnyy_protein/usn_whey_oats_800gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/syvorotochnyy_protein/usn_whey_oats_800gr.html">Whey &amp; Oats</a></h3>
                                            </div>
                                            <div class="box-product__info">800 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <div class="jq-selectbox jqselect item_id red" style="display: inline-block; position: relative; z-index:100">
                                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                        <option class="red" value="114977">Печенье</option>
                                                        <option class="red" value="114976">Булочка с корицей</option>
                                                    </select>
                                                    <div class="jq-selectbox__select" style="position: relative">
                                                        <div class="jq-selectbox__select-text">Печенье</div>
                                                        <div class="jq-selectbox__trigger">
                                                            <div class="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 20px; left: 0px; display: none;">
                                                        <div class="jq-selectbox__search" style="display: none;">
                                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                                        </div>
                                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                            <li data-jqfs-class="red" class="selected sel red" style="display: block;">Печенье</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Булочка с корицей</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input class="item_id" type="hidden" value="114977">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>0</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="114977">
                                        <input type="hidden" value="notavailable" name="114976">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/drugie_proteiny/pureprotein_vegetarian_formula_multicomponent_protein_1000gr.html"><img src="/upload/resize_cache/iblock/053/190_190_1/0533e76f8c80cf6a7592a6cb6f16f8d4.jpg" alt="PureProtein - Vegetarian Formula Multicomponent Protein (1000гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/drugie_proteiny/pureprotein_vegetarian_formula_multicomponent_protein_1000gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/drugie_proteiny/pureprotein_vegetarian_formula_multicomponent_protein_1000gr.html">Vegetarian Formula Multicomponent Protein</a></h3>
                                            </div>
                                            <div class="box-product__info">1000 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <div class="jq-selectbox jqselect item_id red" style="display: inline-block; position: relative; z-index:100">
                                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                        <option class="red" value="95130">Двойной шоколад</option>
                                                        <option class="red" value="95129">Шоколадное печенье</option>
                                                        <option class="red" value="94900">Вишневое наслаждение</option>
                                                    </select>
                                                    <div class="jq-selectbox__select" style="position: relative">
                                                        <div class="jq-selectbox__select-text">Двойной шоколад</div>
                                                        <div class="jq-selectbox__trigger">
                                                            <div class="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 20px; left: 0px; display: none;">
                                                        <div class="jq-selectbox__search" style="display: none;">
                                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                                        </div>
                                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                            <li data-jqfs-class="red" class="selected sel red" style="display: block;">Двойной шоколад</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Шоколадное печенье</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Вишневое наслаждение</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input class="item_id" type="hidden" value="95130">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>650</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="95130">
                                        <input type="hidden" value="notavailable" name="95129">
                                        <input type="hidden" value="notavailable" name="94900">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/syvorotochnyy_protein/scitec_nutrition_muscle_army_whey_blast_2100gr.html"><img src="/upload/resize_cache/iblock/b02/190_190_1/b02ee7d39ba4f3e0759ac1e4967109ad.jpg" alt="Scitec Nutrition - Muscle Army Whey Blast (2100гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/syvorotochnyy_protein/scitec_nutrition_muscle_army_whey_blast_2100gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/syvorotochnyy_protein/scitec_nutrition_muscle_army_whey_blast_2100gr.html">Muscle Army Whey Blast</a></h3>
                                            </div>
                                            <div class="box-product__info">2100 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <div class="jq-selectbox jqselect item_id red" style="display: inline-block; position: relative; z-index:100">
                                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                        <option class="red" value="111657">Ваниль</option>
                                                        <option class="red" value="111645">Клубника</option>
                                                    </select>
                                                    <div class="jq-selectbox__select" style="position: relative">
                                                        <div class="jq-selectbox__select-text">Ваниль</div>
                                                        <div class="jq-selectbox__trigger">
                                                            <div class="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 20px; left: 0px; display: none;">
                                                        <div class="jq-selectbox__search" style="display: none;">
                                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                                        </div>
                                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                            <li data-jqfs-class="red" class="selected sel red" style="display: block;">Ваниль</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Клубника</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input class="item_id" type="hidden" value="111657">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>0</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="111657">
                                        <input type="hidden" value="notavailable" name="111645">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/syvorotochnyy_protein/actiformula_whey_collagen_600gr.html"><img src="/upload/resize_cache/iblock/f68/190_190_1/f68a8e0d016dce66ae8e2090859d2e06.jpg" alt="ActiFormula - Whey&amp;Collagen (600гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/syvorotochnyy_protein/actiformula_whey_collagen_600gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/syvorotochnyy_protein/actiformula_whey_collagen_600gr.html">Whey&amp;Collagen</a></h3>
                                            </div>
                                            <div class="box-product__info">600 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>680</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="100751">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/syvorotochnyy_protein/scitec_nutrition_superb_2160gr.html"><img src="/upload/resize_cache/iblock/804/190_190_1/804acfdef7d89c5151efc3e283b9d8d9.png" alt="Scitec Nutrition - Superb (2160гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/syvorotochnyy_protein/scitec_nutrition_superb_2160gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/syvorotochnyy_protein/scitec_nutrition_superb_2160gr.html">Superb</a></h3>
                                            </div>
                                            <div class="box-product__info">2160 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <div class="jq-selectbox jqselect item_id red" style="display: inline-block; position: relative; z-index:100">
                                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                        <option class="red" value="111867">Шоколад</option>
                                                        <option class="red" value="111860">Ваниль</option>
                                                        <option class="red" value="111848">Клубника</option>
                                                    </select>
                                                    <div class="jq-selectbox__select" style="position: relative">
                                                        <div class="jq-selectbox__select-text">Шоколад</div>
                                                        <div class="jq-selectbox__trigger">
                                                            <div class="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 20px; left: 0px; display: none;">
                                                        <div class="jq-selectbox__search" style="display: none;">
                                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                                        </div>
                                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                            <li data-jqfs-class="red" class="selected sel red" style="display: block;">Шоколад</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Ваниль</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Клубника</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input class="item_id" type="hidden" value="111867">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>0</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="111867">
                                        <input type="hidden" value="notavailable" name="111860">
                                        <input type="hidden" value="notavailable" name="111848">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/kompleksnyy_protein/dymatize_elite_fusion_7_1320gr.html"><img src="/upload/resize_cache/iblock/ce4/190_190_1/ce441bc546de465030fb3f7a5853dd1e.jpg" alt="Dymatize Elite Fusion 7 (1320гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/kompleksnyy_protein/dymatize_elite_fusion_7_1320gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/kompleksnyy_protein/dymatize_elite_fusion_7_1320gr.html">Elite Fusion 7</a></h3>
                                            </div>
                                            <div class="box-product__info">1320 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <div class="jq-selectbox jqselect item_id red" style="display: inline-block; position: relative; z-index:100">
                                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                        <option class="red" value="94583">Шоколад</option>
                                                        <option class="red" value="94582">Печенье-крем</option>
                                                        <option class="red" value="94581">Моккачино</option>
                                                        <option class="red" value="94580">Клубника</option>
                                                        <option class="red" value="94579">Ваниль</option>
                                                    </select>
                                                    <div class="jq-selectbox__select" style="position: relative">
                                                        <div class="jq-selectbox__select-text">Шоколад</div>
                                                        <div class="jq-selectbox__trigger">
                                                            <div class="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 20px; left: 0px; display: none;">
                                                        <div class="jq-selectbox__search" style="display: none;">
                                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                                        </div>
                                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                            <li data-jqfs-class="red" class="selected sel red" style="display: block;">Шоколад</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Печенье-крем</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Моккачино</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Клубника</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Ваниль</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input class="item_id" type="hidden" value="94583">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>1 290</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="94583">
                                        <input type="hidden" value="notavailable" name="94582">
                                        <input type="hidden" value="notavailable" name="94581">
                                        <input type="hidden" value="notavailable" name="94580">
                                        <input type="hidden" value="notavailable" name="94579">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/syvorotochnyy_protein/soul_project_wps_100_whey_protein_908gr.html"><img src="/upload/resize_cache/iblock/b16/190_190_1/b1665d98337ff82ef512625a0dbb9c3e.jpg" alt="Soul Project - WPS 100% Whey Protein (908гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/syvorotochnyy_protein/soul_project_wps_100_whey_protein_908gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/syvorotochnyy_protein/soul_project_wps_100_whey_protein_908gr.html">WPS 100% Whey Protein</a></h3>
                                            </div>
                                            <div class="box-product__info">908 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <div class="jq-selectbox jqselect item_id green" style="display: inline-block; position: relative; z-index:100">
                                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                        <option class="green" value="103709">Лимон-йогурт</option>
                                                        <option class="red" value="103708">Клубника</option>
                                                        <option class="red" value="103707">Ваниль-корица</option>
                                                        <option class="red" value="103680">Черника</option>
                                                        <option class="red" value="94928">Шоколад</option>
                                                        <option class="red" value="94927">Печенье-крем</option>
                                                    </select>
                                                    <div class="jq-selectbox__select" style="position: relative">
                                                        <div class="jq-selectbox__select-text">Лимон-йогурт</div>
                                                        <div class="jq-selectbox__trigger">
                                                            <div class="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 20px; left: 0px; display: none;">
                                                        <div class="jq-selectbox__search" style="display: none;">
                                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                                        </div>
                                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                            <li data-jqfs-class="green" class="selected sel green" style="display: block;">Лимон-йогурт</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Клубника</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Ваниль-корица</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Черника</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Шоколад</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Печенье-крем</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input class="item_id" type="hidden" value="103709">
                                            </div>
                                            <div class="product-counter  pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div class="product-price__new">
                                                    <strong>1 790</strong> руб.
                                                </div>
                                                <div style="display: none;" class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="available" name="103709">
                                        <input type="hidden" value="notavailable" name="103708">
                                        <input type="hidden" value="notavailable" name="103707">
                                        <input type="hidden" value="notavailable" name="103680">
                                        <input type="hidden" value="notavailable" name="94928">
                                        <input type="hidden" value="notavailable" name="94927">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/zameniteli_pitaniya/pureprotein_bliny_protein_pancakes_200gr.html"><img src="/upload/resize_cache/iblock/3a4/190_190_1/3a403ebf7d3f9d5c03fc2aa1c85928d7.jpg" alt="PureProtein - Блины Protein Pancakes (200гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/zameniteli_pitaniya/pureprotein_bliny_protein_pancakes_200gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/zameniteli_pitaniya/pureprotein_bliny_protein_pancakes_200gr.html">Блины Protein Pancakes</a></h3>
                                            </div>
                                            <div class="box-product__info">200 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>190</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="97860">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/drugie_proteiny/san_raw_fusion_450gr.html"><img src="/upload/resize_cache/iblock/867/190_190_1/867dc56240d382d2fa25688b45337c15.png" alt="SAN Raw Fusion (450гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/drugie_proteiny/san_raw_fusion_450gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/drugie_proteiny/san_raw_fusion_450gr.html">Raw Fusion</a></h3>
                                            </div>
                                            <div class="box-product__info">450 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <div class="jq-selectbox jqselect item_id red" style="display: inline-block; position: relative; z-index:100">
                                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                        <option class="red" value="100770">Шоколад</option>
                                                        <option class="red" value="100769">Ваниль</option>
                                                    </select>
                                                    <div class="jq-selectbox__select" style="position: relative">
                                                        <div class="jq-selectbox__select-text">Шоколад</div>
                                                        <div class="jq-selectbox__trigger">
                                                            <div class="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 20px; left: 0px; display: none;">
                                                        <div class="jq-selectbox__search" style="display: none;">
                                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                                        </div>
                                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                            <li data-jqfs-class="red" class="selected sel red" style="display: block;">Шоколад</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Ваниль</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input class="item_id" type="hidden" value="100770">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>720</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="100770">
                                        <input type="hidden" value="notavailable" name="100769">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/kompleksnyy_protein/san_meta_force_5_0_2297gr.html"><img src="/upload/resize_cache/iblock/cce/190_190_1/cce25ac1ea51f11a5ab7dc3fa62909c2.png" alt="SAN Meta Force 5.0 (2297гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/kompleksnyy_protein/san_meta_force_5_0_2297gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/kompleksnyy_protein/san_meta_force_5_0_2297gr.html">Meta Force 5.0</a></h3>
                                            </div>
                                            <div class="box-product__info">2297 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <div class="jq-selectbox jqselect item_id red" style="display: inline-block; position: relative; z-index:100">
                                                    <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                        <option class="red" value="93883">Шоколадный роки роуд</option>
                                                        <option class="red" value="93882">Ваниль с миндалём</option>
                                                    </select>
                                                    <div class="jq-selectbox__select" style="position: relative">
                                                        <div class="jq-selectbox__select-text">Шоколадный роки роуд</div>
                                                        <div class="jq-selectbox__trigger">
                                                            <div class="jq-selectbox__trigger-arrow"></div>
                                                        </div>
                                                    </div>
                                                    <div class="jq-selectbox__dropdown" style="position: absolute; width: 20px; left: 0px; display: none;">
                                                        <div class="jq-selectbox__search" style="display: none;">
                                                            <input type="search" autocomplete="off" placeholder="Поиск...">
                                                        </div>
                                                        <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                        <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                            <li data-jqfs-class="red" class="selected sel red" style="display: block;">Шоколадный роки роуд</li>
                                                            <li data-jqfs-class="red" class=" red" style="display: block;">Ваниль с миндалём</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <input class="item_id" type="hidden" value="93883">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>1 790</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="93883">
                                        <input type="hidden" value="notavailable" name="93882">
                                    </div>
                                </li>
                                <li style="width: 222px; float: left; display: block;">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/kompleksnyy_protein/qnt_protein_80_5000gr.html"><img src="/upload/resize_cache/iblock/508/190_190_1/50869c46dc553077ed2b6421c3cce70e.jpg" alt="QNT Protein 80 (5000гр)"></a>
                                        </div>
                                        <div class="box-product__comments clearfix">
                                            <div class="rating pull-left">
                                                <ul class="rating__list horizontal">
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item active"></li>
                                                    <li class="rating__item "></li>
                                                    <li class="rating__item "></li>
                                                </ul>
                                            </div>
                                            <div class="comments-link pull-left">
                                                <a href="/catalog/kompleksnyy_protein/qnt_protein_80_5000gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/kompleksnyy_protein/qnt_protein_80_5000gr.html">Protein 80</a></h3>
                                            </div>
                                            <div class="box-product__info">5000 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <input class="item_id" type="hidden" value="94620">
                                                <div style="width: 62px; height: 20px;"></div>
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus disable" href="#">minus</a>
                                                    <input class="kol" disabled="" type="text" value="1">
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>6 660</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="94620">
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ol class="flex-control-nav flex-control-paging">
                            <li><a class="flex-active">1</a></li>
                            <li><a>2</a></li>
                            <li><a>3</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php get_footer(); ?>
