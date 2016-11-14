<?php get_header(); ?>
<div class="main">
    <div class="inside">
        <?php easy_breadcrumbs(); ?>
        <div class="products-catalog__title">
            <h2> <?php single_term_title(); ?> <span>(242)</span></h2></div>
        <div class="middle middle-info clearfix">
            <div class="top_pager">
                <div class="modern-page-navigation">
                    <span class="modern-page-title">Страницы:</span>
                    <span class="modern-page-first modern-page-current">1</span>
                    <a href="/brands/biotech-usa/pagen2/" class="">2</a>
                    <a href="/brands/biotech-usa/pagen3/" class="">3</a>
                    <a href="/brands/biotech-usa/pagen4/" class="">4</a>
                    <a class="modern-page-next" href="/brands/biotech-usa/pagen2/">След.</a>
                </div>
            </div>
            <div style="clear: both;"></div>
            <div class="middle__container">
                <div class="products-catalog">
                <?php $queried_object = get_queried_object();
                $term_id = $queried_object->term_id;
                $term = get_term( $term_id); ?>
                    <ul class="products-catalog__list horizontal">
                <?php $args = array(
                        'post_type' => 'product',
                        'tax_query' => array(
                            array(
                            'taxonomy' => 'manufacturer',
                            'field' => 'id',
                            'terms' => $term_id ) ) ); ?>
                          <?php query_posts(  $args  ); ?>
                          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <li class="products-catalog__item">
                            <div class="box-product">
                                <div class="box-product__img">
                                    <a href="<?php the_permalink(); ?>">
                                      <?php the_post_thumbnail( 'little'); ?>
                                    </a>
                                    <!--<span class="icon icon-new"></span>-->
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
                                        <a href="/catalog/aksessuary/6_pack_fitness_sumka_innovator_300.html#bp__tab5"><span class="icon-comment"></span>0</a>
                                    </div>
                                </div>
                                <div class="box-product__text">
                                    <div class="box-product__title">
                                        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                                    </div>
                                    <div class="box-product__info"><?php the_field('pack'); ?></div>
                                  <?php $term_list = wp_get_post_terms($post->ID, 'manufacturer', array("fields" => "ids"));
                                    $currentId = $term_list[0];
                                    $currentTerm = get_term_by('id', $currentId, 'manufacturer');
                                    $currentName = $currentTerm->name;
                                    $currentLink = $currentTerm->slug; ?>
                                <div class="box-product__info">
                                  <a href="<?php echo home_url(); ?>/manufacturer/<?php echo $currentLink; ?>"><?php echo $currentName; ?></a>
                                </div>
                                </div>
                                <div class="box-product__types clearfix">
                                    <div class="pull-left">
                                        <div class="jq-selectbox jqselect item_id green" style="display: inline-block; position: relative; z-index:100">
                                            <select class="item_id" style="margin: 0px; padding: 0px; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;">
                                                <option class="green" value="101393">Розовый/фиолетовый</option>
                                                <option class="green" value="101392">Красный/серый</option>
                                                <option class="red" value="101398">Черный/красный</option>
                                                <option class="red" value="101397">Черный</option>
                                                <option class="red" value="101396">Синий/желтый</option>
                                                <option class="red" value="101395">Серый/оранжевый</option>
                                                <option class="red" value="101394">Серый/зеленый</option>
                                            </select>
                                            <div class="jq-selectbox__select" style="position: relative">
                                                <div class="jq-selectbox__select-text" style="width: 123px;">Розовый/фиолетовый</div>
                                                <div class="jq-selectbox__trigger">
                                                    <div class="jq-selectbox__trigger-arrow"></div>
                                                </div>
                                            </div>
                                            <div class="jq-selectbox__dropdown" style="position: absolute; width: 163px; display: none;">
                                                <div class="jq-selectbox__search" style="display: none;">
                                                    <input type="search" autocomplete="off" placeholder="Поиск...">
                                                </div>
                                                <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                                                <ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">
                                                    <li data-jqfs-class="green" class="selected sel green" style="display: block;">Розовый/фиолетовый</li>
                                                    <li data-jqfs-class="green" class=" green" style="display: block;">Красный/серый</li>
                                                    <li data-jqfs-class="red" class=" red" style="display: block;">Черный/красный</li>
                                                    <li data-jqfs-class="red" class=" red" style="display: block;">Черный</li>
                                                    <li data-jqfs-class="red" class=" red" style="display: block;">Синий/желтый</li>
                                                    <li data-jqfs-class="red" class=" red" style="display: block;">Серый/оранжевый</li>
                                                    <li data-jqfs-class="red" class=" red" style="display: block;">Серый/зеленый</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <input class="item_id" type="hidden" value="101393">
                                    </div>
                                    <div class="product-counter  pull-left">
                                        <div class="product-counter__container">
                                            <a class="minus disable" href="#">minus</a>
                                            <input class="kol" type="text" value="1">
                                            <a class="plus" href="#">plus</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-product__bottom clearfix" style="background: rgb(247, 247, 247);">
                                    <div class="product-price pull-left">
                                        <div class="product-price__new" style="color: rgb(54, 54, 54);"><strong><?php the_field('price'); ?></strong> руб.</div>
                                        <div style="display: none;" class="product-price__none">Нет в наличии</div>
                                    </div>
                                    <div class="product-cart pull-right">
                                        <a class="icon-cart" href="javascript:void(0);"></a>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" value="available" name="101393">
                            <input type="hidden" value="available" name="101392">
                            <input type="hidden" value="notavailable" name="101398">
                            <input type="hidden" value="notavailable" name="101397">
                            <input type="hidden" value="notavailable" name="101396">
                            <input type="hidden" value="notavailable" name="101395">
                            <input type="hidden" value="notavailable" name="101394">
                        </li>
                        <?php endwhile; endif; ?>
                        <?php wp_reset_query(); ?>
                    </ul>
                </div>
                <div class="bottom_pager">
                    <div class="modern-page-navigation">
                        <span class="modern-page-title">Страницы:</span>
                        <span class="modern-page-first modern-page-current">1</span>
                        <a href="/brands/biotech-usa/pagen2/" class="">2</a>
                        <a href="/brands/biotech-usa/pagen3/" class="">3</a>
                        <a href="/brands/biotech-usa/pagen4/" class="">4</a>
                        <a class="modern-page-next" href="/brands/biotech-usa/pagen2/">След.</a>
                    </div>
                </div>
            </div>
            <aside class="sidebar-right">
                <div class="sidebar__filter">
                    <div class="sidebar__filter__logo">
                        <a href="/brands/biotech-usa/index.php">
                            <img src="/upload/resize_cache/iblock/8e5/218_136_1/8e573e4ddb90d54ff8abf99141ce7ba3.png" alt="">
                        </a>
                    </div>
                    <form id="filter" method="post" action="/brands/biotech-usa/index.php">
                        <ul class="filter__list">
                            <li class="filter__item open">
                                <a href="#">Наличие<span class="arrow"></span></a>
                                <div class="filter__sub" style="display: block;">
                                    <ul>
                                        <li>
                                            <label for="checkbox1">
                                                <div id="checkbox1-styler" class="jq-radio" unselectable="on" style="user-select: none; display: inline-block; position: relative;">
                                                    <input type="radio" name="available" value="no" id="checkbox1" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-radio__div"></div>
                                                </div> Все товары <span>(242)</span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox2">
                                                <div id="checkbox2-styler" class="jq-radio checked" unselectable="on" style="user-select: none; display: inline-block; position: relative;">
                                                    <input type="radio" name="available" value="yes" id="checkbox2" checked="checked" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-radio__div"></div>
                                                </div> Только в наличии <span>(118)</span></label>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="filter__item open">
                                <a href="#">Брэнды<span class="arrow"></span></a>
                                <div class="filter__sub" style="display: block;">
                                    <ul>
                                        <li>
                                            <label for="checkbox3">
                                                <div id="checkbox3-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="138" id="checkbox3" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Оксид азота (NO2) <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox5">
                                                <div id="checkbox5-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="165" id="checkbox5" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> ВСАА <span>(9) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox7">
                                                <div id="checkbox7-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="149" id="checkbox7" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Шейкеры и фляжки <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox9">
                                                <div id="checkbox9-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="142" id="checkbox9" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Энергетические добавки <span>(2) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox10">
                                                <div id="checkbox10-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="156" id="checkbox10" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Жиросжигатели <span>(10) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox11">
                                                <div id="checkbox11-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="158" id="checkbox11" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Глютамин <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox12">
                                                <div id="checkbox12-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="157" id="checkbox12" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Гейнеры <span>(4) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox13">
                                                <div id="checkbox13-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="172" id="checkbox13" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Заменители питания <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox14">
                                                <div id="checkbox14-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="160" id="checkbox14" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Батончики <span>(6) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox15">
                                                <div id="checkbox15-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="186" id="checkbox15" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Готовые наборы <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox16">
                                                <div id="checkbox16-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="136" id="checkbox16" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Комплексные аминокислоты <span>(6) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox17">
                                                <div id="checkbox17-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="177" id="checkbox17" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Другие протеины <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox18">
                                                <div id="checkbox18-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="164" id="checkbox18" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Для сна <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox19">
                                                <div id="checkbox19-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="161" id="checkbox19" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Витамины и минералы <span>(9) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox20">
                                                <div id="checkbox20-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="150" id="checkbox20" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Перчатки <span>(2) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox22">
                                                <div id="checkbox22-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="140" id="checkbox22" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Креатин моногидрат <span>(3) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox23">
                                                <div id="checkbox23-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="137" id="checkbox23" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Отдельные аминокислоты <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox24">
                                                <div id="checkbox24-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="155" id="checkbox24" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Добавки для суставов и связок <span>(6) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox25">
                                                <div id="checkbox25-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="196" id="checkbox25" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Пробники протеинов <span>(5) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox26">
                                                <div id="checkbox26-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="179" id="checkbox26" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Говяжий протеин <span>(2) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox27">
                                                <div id="checkbox27-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="135" id="checkbox27" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Бета-аланин <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox28">
                                                <div id="checkbox28-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="170" id="checkbox28" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Предтренировочные комплексы <span>(5) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox29">
                                                <div id="checkbox29-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="168" id="checkbox29" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Повышение уровня тестостерона <span>(4) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox30">
                                                <div id="checkbox30-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="141" id="checkbox30" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Креатин с транспортной системой <span>(3) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox31">
                                                <div id="checkbox31-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="163" id="checkbox31" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Минералы <span>(5) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox32">
                                                <div id="checkbox32-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="143" id="checkbox32" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> L-карнитин <span>(6) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox33">
                                                <div id="checkbox33-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="175" id="checkbox33" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Казеиновый протеин <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox34">
                                                <div id="checkbox34-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="180" id="checkbox34" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Специальные добавки <span>(2) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox35">
                                                <div id="checkbox35-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="133" id="checkbox35" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Омега 3 <span>(2) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox36">
                                                <div id="checkbox36-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="132" id="checkbox36" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Мужское здоровье <span>(3) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox37">
                                                <div id="checkbox37-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="154" id="checkbox37" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Добавки для снижения веса <span>(2) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox38">
                                                <div id="checkbox38-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="162" id="checkbox38" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Антиоксиданты <span>(3) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox39">
                                                <div id="checkbox39-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="174" id="checkbox39" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Сывороточный протеин <span>(5) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox40">
                                                <div id="checkbox40-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="173" id="checkbox40" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Комплексный протеин <span>(2) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox41">
                                                <div id="checkbox41-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="194" id="checkbox41" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Пробники предтренировочных комплексов <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox42">
                                                <div id="checkbox42-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="151" id="checkbox42" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Кейсы для капсул <span>(1) </span></label>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div class="sidebar__filter__btn">
                            <input type="hidden" name="set_filter" value="Y">
                            <input type="submit" class="btn light-gray" value="Применить">
                        </div>
                    </form>
                </div>
            </aside>
        </div>
    </div>
</div>

<?php get_footer(); ?>
