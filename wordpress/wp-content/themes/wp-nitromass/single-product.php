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
                                        <?php the_post_thumbnail('medium'); ?>
                                    </li>
                                </ul>
                                <ul class="block-product__slider__small">
                                    <li style="width: 90px;" class="active">
                                        <a href="#bp__slider__tab1">
                                          <?php the_post_thumbnail( 'tiny'); ?>
                                          <span class="border"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="photo_for_basket hidden">
                                <?php the_post_thumbnail( 'little'); ?>
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
                                        <?php $posts = get_field('another_pack'); if( $posts ): ?>
                                        <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>
                                            <?php setup_postdata($post); ?>
                                            <div class="fitem">
                                                <a href="<?php the_permalink(); ?>">
                                                    <div class="fimage">
                                                      <?php if ( has_post_thumbnail()) :?>
                                                        <?php the_post_thumbnail('little'); ?>
                                                      <?php endif; ?><!-- /post thumbnail -->
                                                    </div>
                                                    <div class="fname"><?php the_title(); ?></div>
                                                    <div class="fbox"><?php the_field('pack'); ?></div>
                                                    <div class="fprice"><?php the_field('price'); ?></div>
                                                </a>
                                            </div>
                                            <?php endforeach; ?>
                                            <?php wp_reset_postdata(); ?>
                                            <?php endif; ?>
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
                    <div class="product-articul">Артикул: <?php the_field('article'); ?></div>
                    <div class="product-bigcart ">
                        <div class="product-bigcart__logo">
                            <a href="#">
                              <?php $image = get_field('manufacture_img'); if( !empty($image) ): ?>
                              <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                              <?php endif; ?>
                            </a>
                        </div>
                        <div class="product-bigcart__weight">
                            <label>Упаковка</label>
                            <strong><?php the_field('pack'); ?></strong>
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
                            <div class="product-price__new"><strong><?php the_field('price'); ?></strong> руб.</div>
                            <a href="#" class="subscribe_link" onclick="subscribe();">Уведомить о снижении цены?</a>
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
                        <div class="flex-viewport">
                            <ul class="slides">

                            <!-- Post ID -->
                                <?php $terms = get_the_terms( $post->ID, 'categories');
                                foreach ( $terms as $term ) {
                                    $termID[] = $term->term_id;
                                }
                                $id = get_the_ID(); ?>
                                <!-- end POst ID -->
                                <?php query_posts(array(
                                  'post_type' => 'product',
                                  'showposts' => 12,
                                  'post__not_in' =>  array( $id ),
                                  'tax_query' => array(
                                      array(
                                      'taxonomy' => 'categories',
                                      'field' => 'id',
                                      'terms' => $termID[0] ))) ); ?>
                                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                                <li class="product-wrapp">
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <?php if ( has_post_thumbnail()) :?>
                                              <a class="single-thumb" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                                                <?php the_post_thumbnail('little'); ?>
                                              </a>
                                            <?php endif; ?><!-- /post thumbnail -->
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
                                                <a href="#"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="#"><?php the_title(); ?></a></h3>
                                            </div>
                                            <div class="box-product__info"><?php the_field('pricegrn'); ?> гр</div>
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
                                                    <strong><?php the_field('price'); ?></strong> руб.
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
                                </li><!-- product-wrapp -->
                                <?php endwhile; endif; ?>
                                <?php wp_reset_query(); ?>
                            </ul><!-- slides -->
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
