<?php get_header(); ?>
<div class="main">
    <div class="inside">
        <?php easy_breadcrumbs(); ?>
                        <?php $queried_object = get_queried_object();
                $term_id = $queried_object->term_id;
                $term = get_term( $term_id); ?>
                <?php $args = array(
                        'post_type' => 'product',
                        'tax_query' => array(
                            array(
                            'taxonomy' => 'categories',
                            'field' => 'id',
                            'terms' => $term_id ) ) ); ?>
        <div class="products-catalog__title">
            <h2> <?php single_term_title(); ?>
            <span> <?php  echo $num = count( get_posts( $args ) ); ?></span></h2></div>
        <div class="middle middle-info clearfix">
            <div class="top_pager">
                <div class="modern-page-navigation">
                    <span class="modern-page-title">Страницы:</span>
                    <span class="modern-page-first modern-page-current">1</span>
                    <a href="/catalog/aksessuary/pagen2/" class="">2</a>
                    <a href="/catalog/aksessuary/pagen3/" class="">3</a>
                    <a class="modern-page-next" href="/catalog/aksessuary/pagen2/">След.</a>
                </div>
            </div>
            <div style="clear: both;"></div>
            <div class="middle__container">
                <div class="products-catalog">
                    <ul class="products-catalog__list horizontal">
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
                    </ul><!-- products-catalog__list horizontal -->
                </div><!-- products-catalog -->
                <div class="bottom_pager">
                    <div class="modern-page-navigation">
                        <span class="modern-page-title">Страницы:</span>
                        <span class="modern-page-first modern-page-current">1</span>
                        <a href="/catalog/aksessuary/pagen2/" class="">2</a>
                        <a href="/catalog/aksessuary/pagen3/" class="">3</a>
                        <a class="modern-page-next" href="/catalog/aksessuary/pagen2/">След.</a>
                    </div>
                </div>
            </div>
            <aside class="sidebar-right">
                <div class="sidebar__filter">
                    <form id="filter" method="post" action="/catalog/aksessuary/">
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
                                                </div> Все товары <span>(293)</span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox2">
                                                <div id="checkbox2-styler" class="jq-radio checked" unselectable="on" style="user-select: none; display: inline-block; position: relative;">
                                                    <input type="radio" name="available" value="yes" id="checkbox2" checked="checked" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-radio__div"></div>
                                                </div> Только в наличии <span>(37)</span></label>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="filter__item open">
                                <a href="#">Брэнды<span class="arrow"></span></a>
                                <div class="filter__sub" style="display: block;">
                                    <ul>
                                        <li>
                                            <label for="checkbox6">
                                                <div id="checkbox6-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="97596" id="checkbox6" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> 6 Pack Fitness <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox11">
                                                <div id="checkbox11-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91897" id="checkbox11" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> BioTech USA <span>(4) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox13">
                                                <div id="checkbox13-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91983" id="checkbox13" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> BlenderBottle <span>(8) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox15">
                                                <div id="checkbox15-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="92005" id="checkbox15" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Cyclone Cup <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox21">
                                                <div id="checkbox21-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91905" id="checkbox21" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> GAT <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox22">
                                                <div id="checkbox22-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="99394" id="checkbox22" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> GeneticLab Nutrition <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox26">
                                                <div id="checkbox26-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91948" id="checkbox26" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Isostar <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox32">
                                                <div id="checkbox32-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91971" id="checkbox32" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> MuscleMeds <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox36">
                                                <div id="checkbox36-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="92013" id="checkbox36" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Nutrabolics <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox41">
                                                <div id="checkbox41-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91979" id="checkbox41" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Pharma First <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox42">
                                                <div id="checkbox42-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="101172" id="checkbox42" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Power Balance <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox43">
                                                <div id="checkbox43-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="92014" id="checkbox43" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> PureProtein <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox44">
                                                <div id="checkbox44-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91919" id="checkbox44" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> QNT <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox47">
                                                <div id="checkbox47-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="98074" id="checkbox47" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Scelta <span>(2) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox48">
                                                <div id="checkbox48-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91922" id="checkbox48" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Scitec Nutrition <span>(7) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox49">
                                                <div id="checkbox49-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91962" id="checkbox49" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> SmartShake <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox53">
                                                <div id="checkbox53-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91926" id="checkbox53" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Twinlab <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox55">
                                                <div id="checkbox55-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91928" id="checkbox55" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> Universal Nutrition <span>(1) </span></label>
                                        </li>
                                        <li>
                                            <label for="checkbox60">
                                                <div id="checkbox60-styler" class="jq-checkbox" unselectable="on" style="user-select: none; display: inline-block; position: relative; overflow: hidden;">
                                                    <input type="checkbox" name="brand[]" value="91931" id="checkbox60" style="position: absolute; z-index: -1; opacity: 0; margin: 0px; padding: 0px;">
                                                    <div class="jq-checkbox__div"></div>
                                                </div> VP Laboratory <span>(2) </span></label>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div class="sidebar__filter__btn">
                            <input type="hidden" name="set_filter" value="Y">
                            <input type="submit" class="btn light-gray" value="Сбросить">
                        </div>
                    </form>
                </div>
            </aside>
        </div>
    </div>
</div>
<?php get_footer(); ?>
