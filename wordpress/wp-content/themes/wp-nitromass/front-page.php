<?php /* Template Name: Home Page */ get_header(); ?>
        <div class="main">
            <div class="main-slider">
                <div class="inside">
                    <div class="flexslider" id="main-slider">
                        <ul class="slides">
                            <li>
                                <div class="main-slider__text">
                                    <p class="main-slider__category"><?php the_field('fp_image_title'); ?></p>
                                </div>
                                <?php  $image = get_field('fp_image');
                                  if( !empty($image) ): ?>
                                  <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                                <?php endif; ?>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row-shadow">
                <div class="inside">
                    <div class="main-title">
                        <h2></h2>
                    </div>
                    <div class="products-slider">
                        <div class="flexslider carousel">
                            <ul class="slides">
                                <li>
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/predtrenirovochnye_kompleksy/prime_nutrition_pwo_stim_96gr.html"><img src="<?php echo get_template_directory_uri(); ?>/img/a0b833c8d50ef1c392477727820039ea.png" alt="Prime Nutrition - PWO/STIM (96гр)" /></a>
                                            <span class="icon icon-new"></span>
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
                                                <a href="/catalog/predtrenirovochnye_kompleksy/prime_nutrition_pwo_stim_96gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/predtrenirovochnye_kompleksy/prime_nutrition_pwo_stim_96gr.html">PWO/STIM</a></h3>
                                            </div>
                                            <div class="box-product__info">96 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <select class="item_id">
                                                    <option class='green' value="103392">Лимон-лайм</option>
                                                    <option class='green' value="103391">Виноград</option>
                                                </select>
                                                <input class="item_id" type="hidden" value="103392" />
                                            </div>
                                            <div class="product-counter  pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus" href="#">minus</a>
                                                    <input class="kol" type="text" value="1" />
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div class="product-price__new">
                                                    <strong>2 490</strong> руб.
                                                </div>
                                                <div style="display: none;" class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="available" name="103392" />
                                        <input type="hidden" value="available" name="103391" />
                                    </div>
                                </li>
                                <li>
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/predtrenirovochnye_kompleksy/logan_carter_amp_stim_309gr.html">
                                            <img src="<?php echo get_template_directory_uri(); ?>/img/6fe87a74f7eb71437d23b60932f709de.jpg" alt="Logan Carter - Amp-Stim (309гр)" /></a>
                                            <span class="icon icon-new"></span>
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
                                                <a href="/catalog/predtrenirovochnye_kompleksy/logan_carter_amp_stim_309gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/predtrenirovochnye_kompleksy/logan_carter_amp_stim_309gr.html">Amp-Stim</a></h3>
                                            </div>
                                            <div class="box-product__info">309 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <select class="item_id">
                                                    <option class='green' value="103401">Виноград</option>
                                                    <option class='green' value="103402">Клубника-банан</option>
                                                    <option class='red' value="103403">Сахарная вата</option>
                                                </select>
                                                <input class="item_id" type="hidden" value="103401" />
                                            </div>
                                            <div class="product-counter  pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus" href="#">minus</a>
                                                    <input class="kol" type="text" value="1" />
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div class="product-price__new">
                                                    <strong>2 990</strong> руб.
                                                </div>
                                                <div style="display: none;" class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="available" name="103401" />
                                        <input type="hidden" value="available" name="103402" />
                                        <input type="hidden" value="notavailable" name="103403" />
                                    </div>
                                </li>
                                <li>
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/predtrenirovochnye_kompleksy/genomyx_stimaholic_117gr.html">
                                            <img src="<?php echo get_template_directory_uri(); ?>/img/0fd11eac6157b1f8d56b734c76755e6d.jpg" alt="GenoMyx - STIMaholic (117гр)" /></a>
                                            <span class="icon icon-new"></span>
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
                                                <a href="/catalog/predtrenirovochnye_kompleksy/genomyx_stimaholic_117gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/predtrenirovochnye_kompleksy/genomyx_stimaholic_117gr.html">STIMaholic </a></h3>
                                            </div>
                                            <div class="box-product__info">117 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                                <select class="item_id">
                                                    <option class='green' value="103395">Ежевика</option>
                                                    <option class='green' value="103397">Яблочный пирог</option>
                                                    <option class='red' value="115441">Красное яблоко</option>
                                                    <option class='red' value="103396">Красное вино</option>
                                                </select>
                                                <input class="item_id" type="hidden" value="103395" />
                                            </div>
                                            <div class="product-counter  pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus" href="#">minus</a>
                                                    <input class="kol" type="text" value="1" />
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div class="product-price__new">
                                                    <strong>2 550</strong> руб.
                                                </div>
                                                <div style="display: none;" class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="available" name="103395" />
                                        <input type="hidden" value="available" name="103397" />
                                        <input type="hidden" value="notavailable" name="115441" />
                                        <input type="hidden" value="notavailable" name="103396" />
                                    </div>
                                </li>
                                <li>
                                    <div class="box-product">
                                        <div class="box-product__img">
                                            <a href="/catalog/predtrenirovochnye_kompleksy/instinct_labs_overdose_184gr.html">
                                            <img src="<?php echo get_template_directory_uri(); ?>/img/a5bf34623a8993fb5e3d9c5ef963ede4.png" alt="Instinct Labs - Overdose (184гр)" /></a>
                                            <span class="icon icon-new"></span>
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
                                                <a href="/catalog/predtrenirovochnye_kompleksy/instinct_labs_overdose_184gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                            </div>
                                        </div>
                                        <div class="box-product__text">
                                            <div class="box-product__title">
                                                <h3><a href="/catalog/predtrenirovochnye_kompleksy/instinct_labs_overdose_184gr.html">Overdose</a></h3>
                                            </div>
                                            <div class="box-product__info">184 гр</div>
                                        </div>
                                        <div class="box-product__types clearfix">
                                            <div class="pull-left">
                                            </div>
                                            <div class="product-counter disabled pull-left">
                                                <div class="product-counter__container">
                                                    <a class="minus" href="#">minus</a>
                                                    <input class="kol" disabled type="text" value="1" />
                                                    <a class="plus" href="#">plus</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box-product__bottom clearfix">
                                            <div class="product-price pull-left">
                                                <div style="display: none;" class="product-price__new">
                                                    <strong>2 990</strong> руб.
                                                </div>
                                                <div class="product-price__none">Нет в наличии</div>
                                            </div>
                                            <div class="product-cart pull-right">
                                                <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                            </div>
                                        </div>
                                        <input type="hidden" value="notavailable" name="103404" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row-shadow">
                    <div class="inside">
                        <div class="products-promo clearfix">
                            <div class="products-promo__item">
                                <div class="main-title">
                                    <h2>Товар дня</h2>
                                </div>
                                <div class="box-product big">
                                    <div class="box-product__img">
                                        <a href="/catalog/syvorotochnyy_protein/qnt_delicious_whey_protein_1000gr.html">
                                        <img src="<?php echo get_template_directory_uri(); ?>/img/f4c4d77efff857c7354d9ef3022e7f09.jpg" alt="QNT Delicious Whey Protein (1000гр)" /></a>
                                        <span class="icon icon-product"></span>
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
                                            <a href="/catalog/syvorotochnyy_protein/qnt_delicious_whey_protein_1000gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                        </div>
                                    </div>
                                    <div class="box-product__text">
                                        <div class="box-product__title">
                                            <h3><a href="/catalog/syvorotochnyy_protein/qnt_delicious_whey_protein_1000gr.html">Delicious Whey Protein</a></h3>
                                        </div>
                                        <div class="box-product__info">1000 гр</div>
                                    </div>
                                    <div class="box-product__types clearfix">
                                        <div class="pull-left">
                                            <select class="item_id">
                                                <option class='red' value="100542">Ваниль</option>
                                                <option class='red' value="100195">Печенье-крем</option>
                                                <option class='red' value="100193">Банан</option>
                                                <option class='red' value="94867">Клубника</option>
                                                <option class='red' value="94866">Карамель</option>
                                                <option class='red' value="94865">Шоколад</option>
                                                <option class='red' value="94864">Шоколад-кокос</option>
                                            </select>
                                            <input class="item_id" type="hidden" value="100542" />
                                        </div>
                                        <div class="product-counter disabled pull-left">
                                            <div class="product-counter__container">
                                                <a class="minus" href="#">minus</a>
                                                <input class="kol" disabled type="text" value="1" />
                                                <a class="plus" href="#">plus</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-product__bottom clearfix">
                                        <div class="product-price pull-left">
                                            <div style="display: none;" class="product-price__new">
                                                <strong>1 950</strong> руб.
                                            </div>
                                            <div class="product-price__none">Нет в наличии</div>
                                        </div>
                                        <div class="product-cart pull-right">
                                            <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                        </div>
                                    </div>
                                    <input type="hidden" value="notavailable" name="100542" />
                                    <input type="hidden" value="notavailable" name="100195" />
                                    <input type="hidden" value="notavailable" name="100193" />
                                    <input type="hidden" value="notavailable" name="94867" />
                                    <input type="hidden" value="notavailable" name="94866" />
                                    <input type="hidden" value="notavailable" name="94865" />
                                    <input type="hidden" value="notavailable" name="94864" />
                                </div>
                            </div>
                            <div class="products-promo__item">
                                <div class="main-title">
                                    <h2>Успей купить</h2>
                                </div>
                                <div class="box-product big">
                                    <div class="box-product__img">
                                        <a href="/catalog/vsaa/usplabs_modern_bcaa_535gr_vinograd.html">
                                        <img src="<?php echo get_template_directory_uri(); ?>/img/dcb1fbe897c105d1fb040b8b9179bbbc.jpg" alt="Usplabs Modern BCAA+ (535гр)" /></a>
                                        <span class="icon icon-day"></span>
                                        <div class="countdown">
                                            <div class="countdown__container">
                                                <div id="defaultCountdown"></div>
                                                <div class="quantity"><span class="icon-jar"></span>648</div>
                                                <span class="icon-timer"></span>
                                            </div>
                                        </div>
                                        <input type="hidden" id="countdown" value="31 Dec 2016 09:12">
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
                                            <a href="/catalog/vsaa/usplabs_modern_bcaa_535gr_vinograd.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                        </div>
                                    </div>
                                    <div class="box-product__text">
                                        <div class="box-product__title">
                                            <h3><a href="/catalog/vsaa/usplabs_modern_bcaa_535gr_vinograd.html">Modern BCAA</a></h3>
                                        </div>
                                        <div class="box-product__info">535 гр</div>
                                    </div>
                                    <div class="box-product__types clearfix">
                                        <div class="pull-left">
                                            <select class="item_id">
                                                <option class='green' value="94220">Лимонад</option>
                                                <option class='green' value="100566">Ежевика</option>
                                                <option class='green' value="116901">Вишневый лимонад</option>
                                                <option class='green' value="95658">Виноград</option>
                                                <option class='green' value="110382">Апельсин-манго</option>
                                                <option class='green' value="100568">Фруктовый пунш</option>
                                                <option class='green' value="100565">Арбуз</option>
                                                <option class='green' value="102742">Малиновый лимонад</option>
                                                <option class='red' value="102741">Зеленое яблоко</option>
                                                <option class='red' value="101603">Ананас-клубника</option>
                                                <option class='red' value="100567">Нейтральный</option>
                                            </select>
                                            <input class="item_id" type="hidden" value="94220" />
                                        </div>
                                        <div class="product-counter  pull-left">
                                            <div class="product-counter__container">
                                                <a class="minus" href="#">minus</a>
                                                <input class="kol" type="text" value="1" />
                                                <a class="plus" href="#">plus</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-product__bottom clearfix">
                                        <div class="product-price pull-left">
                                            <div class="product-price__new">
                                                <strong>1 590</strong> руб.
                                            </div>
                                            <div style="display: none;" class="product-price__none">Нет в наличии</div>
                                        </div>
                                        <div class="product-cart pull-right">
                                            <a class="icon-cart" href="javascript:void(0);"></a>
                                        </div>
                                    </div>
                                    <input type="hidden" value="available" name="94220" />
                                    <input type="hidden" value="available" name="100566" />
                                    <input type="hidden" value="available" name="116901" />
                                    <input type="hidden" value="available" name="95658" />
                                    <input type="hidden" value="available" name="110382" />
                                    <input type="hidden" value="available" name="100568" />
                                    <input type="hidden" value="available" name="100565" />
                                    <input type="hidden" value="available" name="102742" />
                                    <input type="hidden" value="notavailable" name="102741" />
                                    <input type="hidden" value="notavailable" name="101603" />
                                    <input type="hidden" value="notavailable" name="100567" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row-shadow">
                    <div class="inside">
                        <div class="main-title">
                            <h2></h2>
                        </div>
                        <div class="products-slider">
                            <div class="flexslider carousel">
                                <ul class="slides">
                                    <li>
                                        <div class="box-product">
                                            <div class="box-product__img">
                                                <a href="/catalog/zhiroszhigateli/usplabs_oxyelite_pro_90kaps.html">
                                                <img src="<?php echo get_template_directory_uri(); ?>/img/1e614bb6086947fc60b88f27f693b898.jpg" alt="Usplabs OxyElite Pro (90капс)" /></a>
                                                <span class="icon icon-sales"></span>
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
                                                    <a href="/catalog/zhiroszhigateli/usplabs_oxyelite_pro_90kaps.html#bp__tab5"><span class="icon-comment"></span>1</a>
                                                </div>
                                            </div>
                                            <div class="box-product__text">
                                                <div class="box-product__title">
                                                    <h3><a href="/catalog/zhiroszhigateli/usplabs_oxyelite_pro_90kaps.html">OxyElite Pro</a></h3>
                                                </div>
                                                <div class="box-product__info">90 капс</div>
                                            </div>
                                            <div class="box-product__types clearfix">
                                                <div class="pull-left">
                                                    <input class="item_id" type="hidden" value="93578" />
                                                    <div style="width: 62px; height: 20px;"></div>
                                                </div>
                                                <div class="product-counter  pull-left">
                                                    <div class="product-counter__container">
                                                        <a class="minus" href="#">minus</a>
                                                        <input class="kol" type="text" value="1" />
                                                        <a class="plus" href="#">plus</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box-product__bottom clearfix">
                                                <div class="product-price pull-left">
                                                    <div class="product-price__new">
                                                        <strong>1 550</strong> руб.
                                                        <div class="product-price__old">3 300 руб.</div>
                                                    </div>
                                                    <div style="display: none;" class="product-price__none">Нет в наличии</div>
                                                </div>
                                                <div class="product-cart pull-right">
                                                    <a class="icon-cart" href="javascript:void(0);"></a>
                                                </div>
                                            </div>
                                            <input type="hidden" value="available" name="93578" />
                                        </div>
                                    </li>
                                    <li>
                                        <div class="box-product">
                                            <div class="box-product__img">
                                                <a href="/catalog/syvorotochnyy_protein/on_100_whey_gold_standard_2270gr.html">
                                                <img src="<?php echo get_template_directory_uri(); ?>/img/0c5456720493c415bf03595a81aee259.png" alt="ON 100 % Whey Gold Standard (2270гр)" /></a>
                                                <span class="icon icon-sales"></span>
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
                                                    <a href="/catalog/syvorotochnyy_protein/on_100_whey_gold_standard_2270gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                                </div>
                                            </div>
                                            <div class="box-product__text">
                                                <div class="box-product__title">
                                                    <h3><a href="/catalog/syvorotochnyy_protein/on_100_whey_gold_standard_2270gr.html">100 % Whey Gold Standard</a></h3>
                                                </div>
                                                <div class="box-product__info">2270 гр</div>
                                            </div>
                                            <div class="box-product__types clearfix">
                                                <div class="pull-left">
                                                    <select class="item_id">
                                                        <option class='green' value="94684">Молочный шоколад</option>
                                                        <option class='green' value="94674">Мокко капучино</option>
                                                        <option class='green' value="94673">Роки-роуд</option>
                                                        <option class='green' value="94683">Двойной Шоколад</option>
                                                        <option class='green' value="94675">Кофе</option>
                                                        <option class='red' value="97419">Шоколадный солод</option>
                                                        <option class='red' value="95136">Шоколад-ментол</option>
                                                        <option class='red' value="94686">Французский ванильный крем</option>
                                                        <option class='red' value="94685">Печенье-крем</option>
                                                        <option class='red' value="94682">Ванильное мороженое</option>
                                                        <option class='red' value="94681">Клубника-банан</option>
                                                        <option class='red' value="94680">Клубника</option>
                                                        <option class='red' value="94679">Карамельная ириска</option>
                                                        <option class='red' value="94678">Банановый крем</option>
                                                        <option class='red' value="94677">Белый шоколад</option>
                                                        <option class='red' value="94676">Кекс</option>
                                                        <option class='red' value="94672">Тропический пунш</option>
                                                    </select>
                                                    <input class="item_id" type="hidden" value="94684" />
                                                </div>
                                                <div class="product-counter  pull-left">
                                                    <div class="product-counter__container">
                                                        <a class="minus" href="#">minus</a>
                                                        <input class="kol" type="text" value="1" />
                                                        <a class="plus" href="#">plus</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box-product__bottom clearfix">
                                                <div class="product-price pull-left">
                                                    <div class="product-price__new">
                                                        <strong>3 340</strong> руб.
                                                        <div class="product-price__old">5 550 руб.</div>
                                                    </div>
                                                    <div style="display: none;" class="product-price__none">Нет в наличии</div>
                                                </div>
                                                <div class="product-cart pull-right">
                                                    <a class="icon-cart" href="javascript:void(0);"></a>
                                                </div>
                                            </div>
                                            <input type="hidden" value="available" name="94684" />
                                            <input type="hidden" value="available" name="94674" />
                                            <input type="hidden" value="available" name="94673" />
                                            <input type="hidden" value="available" name="94683" />
                                            <input type="hidden" value="available" name="94675" />
                                            <input type="hidden" value="notavailable" name="97419" />
                                            <input type="hidden" value="notavailable" name="95136" />
                                            <input type="hidden" value="notavailable" name="94686" />
                                            <input type="hidden" value="notavailable" name="94685" />
                                            <input type="hidden" value="notavailable" name="94682" />
                                            <input type="hidden" value="notavailable" name="94681" />
                                            <input type="hidden" value="notavailable" name="94680" />
                                            <input type="hidden" value="notavailable" name="94679" />
                                            <input type="hidden" value="notavailable" name="94678" />
                                            <input type="hidden" value="notavailable" name="94677" />
                                            <input type="hidden" value="notavailable" name="94676" />
                                            <input type="hidden" value="notavailable" name="94672" />
                                        </div>
                                    </li>
                                    <li>
                                        <div class="box-product">
                                            <div class="box-product__img">
                                                <a href="/catalog/syvorotochnyy_protein/universal_nutrition_ultra_whey_pro_909gr.html">
                                                <img src="<?php echo get_template_directory_uri(); ?>/img/a70d07fce9703467da9c9fb6cc8d447a.jpg" alt="Universal Nutrition Ultra Whey Pro (909гр)" /></a>
                                                <span class="icon icon-sales"></span>
                                            </div>
                                            <div class="box-product__comments clearfix">
                                                <div class="rating pull-left">
                                                    <ul class="rating__list horizontal">
                                                        <li class="rating__item active"></li>
                                                        <li class="rating__item active"></li>
                                                        <li class="rating__item "></li>
                                                        <li class="rating__item "></li>
                                                        <li class="rating__item "></li>
                                                    </ul>
                                                </div>
                                                <div class="comments-link pull-left">
                                                    <a href="/catalog/syvorotochnyy_protein/universal_nutrition_ultra_whey_pro_909gr.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                                </div>
                                            </div>
                                            <div class="box-product__text">
                                                <div class="box-product__title">
                                                    <h3><a href="/catalog/syvorotochnyy_protein/universal_nutrition_ultra_whey_pro_909gr.html">Ultra Whey Pro</a></h3>
                                                </div>
                                                <div class="box-product__info">909 гр</div>
                                            </div>
                                            <div class="box-product__types clearfix">
                                                <div class="pull-left">
                                                    <select class="item_id">
                                                        <option class='red' value="100715">Шоколадное мороженое</option>
                                                        <option class='red' value="100714">Печенье-крем</option>
                                                        <option class='red' value="100713">Моккачино</option>
                                                        <option class='red' value="100712">Клубника-банан</option>
                                                        <option class='red' value="100711">Клубника</option>
                                                        <option class='red' value="100710">Двойной Шоколад</option>
                                                        <option class='red' value="100709">Ванильное мороженое</option>
                                                    </select>
                                                    <input class="item_id" type="hidden" value="100715" />
                                                </div>
                                                <div class="product-counter disabled pull-left">
                                                    <div class="product-counter__container">
                                                        <a class="minus" href="#">minus</a>
                                                        <input class="kol" disabled type="text" value="1" />
                                                        <a class="plus" href="#">plus</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box-product__bottom clearfix">
                                                <div class="product-price pull-left">
                                                    <div style="display: none;" class="product-price__new">
                                                        <strong>1 850</strong> руб.
                                                        <div class="product-price__old">2 850 руб.</div>
                                                    </div>
                                                    <div class="product-price__none">Нет в наличии</div>
                                                </div>
                                                <div class="product-cart pull-right">
                                                    <a class="icon-cart-empty" href="javascript:void(0);"></a>
                                                </div>
                                            </div>
                                            <input type="hidden" value="notavailable" name="100715" />
                                            <input type="hidden" value="notavailable" name="100714" />
                                            <input type="hidden" value="notavailable" name="100713" />
                                            <input type="hidden" value="notavailable" name="100712" />
                                            <input type="hidden" value="notavailable" name="100711" />
                                            <input type="hidden" value="notavailable" name="100710" />
                                            <input type="hidden" value="notavailable" name="100709" />
                                        </div>
                                    </li>
                                    <li>
                                        <div class="box-product">
                                            <div class="box-product__img">
                                                <a href="/catalog/kompleksnyy_protein/bsn_syntha_6_2290gr_vanilnoe_morozhenoe.html">
                                                <img src="<?php echo get_template_directory_uri(); ?>/img/c5e30ddf24c64fdbd49502bfc011a6e1.jpg" alt="BSN Syntha-6 (2290гр)" /></a>
                                                <span class="icon icon-sales"></span>
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
                                                    <a href="/catalog/kompleksnyy_protein/bsn_syntha_6_2290gr_vanilnoe_morozhenoe.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                                </div>
                                            </div>
                                            <div class="box-product__text">
                                                <div class="box-product__title">
                                                    <h3><a href="/catalog/kompleksnyy_protein/bsn_syntha_6_2290gr_vanilnoe_morozhenoe.html">Syntha-6</a></h3>
                                                </div>
                                                <div class="box-product__info">2290 гр</div>
                                            </div>
                                            <div class="box-product__types clearfix">
                                                <div class="pull-left">
                                                    <select class="item_id">
                                                        <option class='green' value="94411">Шоколадный молочный коктейль</option>
                                                        <option class='green' value="94407">Ванильное мороженое</option>
                                                        <option class='green' value="94408">Клубничный молочный коктейль</option>
                                                        <option class='green' value="94412">Шоколадный торт</option>
                                                        <option class='green' value="94406">Банановый крем</option>
                                                        <option class='green' value="94409">Печенье-крем</option>
                                                        <option class='red' value="94410">Шоколадно-ореховое масло</option>
                                                    </select>
                                                    <input class="item_id" type="hidden" value="94411" />
                                                </div>
                                                <div class="product-counter  pull-left">
                                                    <div class="product-counter__container">
                                                        <a class="minus" href="#">minus</a>
                                                        <input class="kol" type="text" value="1" />
                                                        <a class="plus" href="#">plus</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box-product__bottom clearfix">
                                                <div class="product-price pull-left">
                                                    <div class="product-price__new">
                                                        <strong>2 490</strong> руб.
                                                        <div class="product-price__old">3 990 руб.</div>
                                                    </div>
                                                    <div style="display: none;" class="product-price__none">Нет в наличии</div>
                                                </div>
                                                <div class="product-cart pull-right">
                                                    <a class="icon-cart" href="javascript:void(0);"></a>
                                                </div>
                                            </div>
                                            <input type="hidden" value="available" name="94411" />
                                            <input type="hidden" value="available" name="94407" />
                                            <input type="hidden" value="available" name="94408" />
                                            <input type="hidden" value="available" name="94412" />
                                            <input type="hidden" value="available" name="94406" />
                                            <input type="hidden" value="available" name="94409" />
                                            <input type="hidden" value="notavailable" name="94410" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="our-advantages">
                        <div class="inside">
                            <div class="our-advantages__title">
                                <h2>Почему интернет-магазин Nitromass.ru лучше?</h2>
                            </div>
                            <ul class="our-advantages__list horizontal">
                                <li class="our-advantages__item">
                                    <h3>Курьерская доставка</h3>
                                    <p> На следующий день
                                        <br /> после заказа.
                                        <br />
                                    </p>
                                    <span class="icon-delivery-white"></span> </li>
                                <li class="our-advantages__item">
                                    <h3>Лучшие цены</h3>
                                    <p> Мы не накручивая
                                        <br /> проценты на цены
                                        <br /> производителей. </p>
                                    <span class="icon-price-white"></span> </li>
                                <li class="our-advantages__item">
                                    <h3>Лучшие бренды</h3>
                                    <p> Широчайший
                                        <br /> ассортимент продукции
                                        <br /> от самых известных в
                                        <br /> мире марок. </p>
                                    <span class="icon-brands-white"></span> </li>
                                <li class="our-advantages__item">
                                    <h3>Магазины в Москве</h3>
                                    <p> С асортиментом
                                        <br /> интернет-магазина и
                                        <br /> возможностью
                                        <br /> самовывоза. </p>
                                    <span class="icon-shop-white"></span> </li>
                            </ul>
                        </div>
                    </div>
                    <div class="inside">
                        <div class="row">
                            <div class="col2">
                                <div class="main-news">
                                    <div class="main-news__title clearfix">
                                        <div class="pull-left"> <span class="icon-news"></span>
                                            <h2>Новости</h2>
                                        </div>
                                        <div class="pull-right"> <a class="all" href="/news/">перейти в раздел</a> </div>
                                    </div>
                                    <div id="comp_bab6ee64e2792d46f9c9219f87753532">
                                        <ul class="main-news__list">
                                            <li class="main-news__item" id="bx_1914200112_105064">
                                                <h4>
                                                <a href="/news/postuplenie-questbar-isostar-cybermass-bcaa.html">Поступление QuestBar, IsoStar, CyberMass BCAA</a>
                                    </h4>
                                                <p>
                                                    Поступление лучших протеиновых батончиков QuestBar, а так же продукция IsoStar, аминокислоты CyberMass BCAA </p>
                                                <div class="date">07.06.2016</div>
                                            </li>
                                            <li class="main-news__item" id="bx_1914200112_104859">
                                                <h4>
                                                Новое поступление и много новинок                                   </h4>
                                                <p>
                                                    Поступление продукции CyberMass, BiotechUSA и Scitec Nutrition </p>
                                                <div class="date">27.05.2016</div>
                                            </li>
                                            <li class="main-news__item" id="bx_1914200112_103649">
                                                <h4>
                                                <a href="/news/bolshoe-postuplenie-biotech-usa-scitec-nutrition-nutricore-ostrovit.html">Большое поступление Biotech USA, Scitec Nutrition, Nutricore, Ostrovit</a>
                                    </h4>
                                                <p>
                                                    Большое поступление Biotech USA, Scitec Nutrition, Nutricore, Ostrovit. Самые низкие цены в Москве! </p>
                                                <div class="date">15.03.2016</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col2">
                                <div class="main-news articles">
                                    <div class="main-news__title clearfix">
                                        <div class="pull-left"> <span class="icon-articles"></span>
                                            <h2>Полезные статьи</h2>
                                        </div>
                                        <div class="pull-right"> <a class="all" href="/articles/">перейти в раздел</a> </div>
                                    </div>
                                    <div id="comp_0e056dee39d3ae492acf272f6b1dd2ad">
                                        <ul class="main-news__list">
                                            <li class="main-news__item" id="bx_1914200112_103470">
                                                <h4>
                                                <a href="/articles/nemnogo-yumora-pro-kachkov-i-zhenshchin.html">Немного юмора про качков</a>
                                    </h4>
                                                <p>
                                                    Шикарный номер от Уральские пельмени с участием бодибилдира! </p>
                                            </li>
                                            <li class="main-news__item" id="bx_1914200112_95728">
                                                <h4>
                                                <a href="/articles/kreatin-plyusy-i-minusy.html">Креатин – плюсы и минусы</a>
                                    </h4>
                                                <p>
                                                </p>
                                            </li>
                                            <li class="main-news__item" id="bx_1914200112_95727">
                                                <h4>
                                                <a href="/articles/mezhsezone-vyderzhat-tolko-nastoyashchie-atlety.html">Межсезонье – выдержат только настоящие атлеты</a>
                                    </h4>
                                                <p>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php get_footer(); ?>
