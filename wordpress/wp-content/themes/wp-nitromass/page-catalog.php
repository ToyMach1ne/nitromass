<?php /* Template Name: Каталог */ get_header(); ?>
<div class="main">
    <div class="inside">
        <?php easy_breadcrumbs(); ?>
        <div class="products-catalog__title">
            <h2>Категории <span>(7374)</span></h2></div>
        <div class="content-taber">
            <div class="content-taber__head">
                <ul class="content-taber__head__list horizontal">
                    <li class="content-taber__head__item active rows"><a href="#tab1">rows</a></li>
                    <li class="content-taber__head__item tiles"><a href="#tab2">tiles</a></li>
                </ul>
            </div>
            <div class="content-taber__body">
                <div class="content-taber__tab" id="tab1">
<?php ?>
<ul>
    <?php $hiterms = get_terms("categories", array("orderby" => "slug", "parent" => 0)); ?>
    <?php foreach($hiterms as $key => $hiterm) : ?>
        <li>
            <?php echo $hiterm->name; ?>
            <?php $loterms = get_terms("categories", array("orderby" => "slug", "parent" => $hiterm->term_id)); ?>
            <?php if($loterms) : ?>
                <ul>
                    <?php foreach($loterms as $key => $loterm) : ?>
                        <li><?php echo $loterm->name; ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </li>
    <?php endforeach; ?>
</ul>




<?php /* ?>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <table class="categories-rows__table">
                                        <tbody>
                                        <?php $terms = get_field('taxonomy_list', 76); if( $terms ): ?>
                                        <?php foreach( $terms as $term_id ): ?>
                                          <?php $term = get_term( $term_id ); ?>
                                            <tr>
                                                <td>
                                                    <div class="pull-left"><a href="<?php echo get_term_link( $term ); ?>"><?php echo $term->name; ?></a></div>
                                                    <div class="pull-right"><?php wp_count_posts( $type, $perm ); ?></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="pull-left"><a href="/catalog/aksessuary/">Аксессуары</a></div>
                                                    <div class="pull-right"><?php wp_count_posts( $type, $perm ); ?></div>
                                                </td>
                                            </tr>
                                            <?php endforeach; ?>
                                            <?php endif; ?>
                                        </tbody>
                                    </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>

<?php */ ?>

                </div><!-- content-taber__tab -->
                <div class="content-taber__tab" id="tab2">
                    <div class="categories-tiles">
                        <ul class="categories-tiles__list horizontal">
                            <li class="categories-tiles__item">
                                <a href="/catalog/l_karnitin/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                L-карнитин                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/aksessuary/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Аксессуары                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/aminokisloty/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Аминокислоты                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/anabolicheskie_dobavki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Анаболические добавки                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/antioksidanty/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Антиоксиданты                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/batonchiki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Батончики                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/beta_alanin/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Бета-аланин                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/braslety/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Браслеты                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/vitaminy_i_mineraly/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Витамины и минералы                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/vsaa/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                ВСАА                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/geynery/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Гейнеры                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/glyutamin/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Глютамин                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/govyazhiy_protein/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Говяжий протеин                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/gotovye_nabory/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Готовые наборы                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/gotovye_proteinovye_kokteyli/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Готовые протеиновые коктейли                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/grim_dlya_vystupleniy/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Грим для выступлений                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/dlya_sna/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Для сна                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/dobavki_dlya_snizheniya_vesa/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Добавки для снижения веса                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/dobavki_dlya_sustavov_i_svyazok/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Добавки для суставов и связок                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/drugie_proteiny/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Другие протеины                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/zhenskaya_odezhda/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Женская одежда                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/zhiroszhigateli/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Жиросжигатели                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/zhurnaly/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Журналы                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/zameniteli_pitaniya/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Заменители питания                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/izotonicheskie_napitki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Изотонические напитки                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/kazeinovyy_protein/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Казеиновый протеин                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/keysy_dlya_kapsul/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Кейсы для капсул                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/kompleksnye_aminokisloty/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Комплексные аминокислоты                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/kompleksnyy_protein/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Комплексный протеин                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/kreatin/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Креатин                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/kreatin_monogidrat/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Креатин моногидрат                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/kreatin_s_transportnoy_sistemoy/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Креатин с транспортной системой                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/mineraly/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Минералы                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/muzhskaya_odezhda/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Мужская одежда                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/muzhskoe_zdorove/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Мужское здоровье                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/odezhda_dlya_sporta/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Одежда для спорта                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/oksid_azota_no2/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Оксид азота (NO2)                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/omega_3/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Омега 3                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/otdelnye_aminokisloty/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Отдельные аминокислоты                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/peptidy/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пептиды                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/perchatki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Перчатки                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/povyshenie_urovnya_testosterona/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Повышение уровня тестостерона                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/posttrenirovochnye_kompleksy/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Посттренировочные комплексы                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/poyasa_lyamki_binty/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пояса, Лямки, Бинты                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/predtrenirovochnye_kompleksy/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Предтренировочные комплексы                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_aminokislotykh_kompleksov/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники аминокислотых комплексов                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_btsaa/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники БЦАА                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_geynerov/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники гейнеров                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_donatorov_oksida_azota/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники донаторов оксида азота                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_zhiroszhigateley/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники жиросжигателей                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_kreatinovykh_kompleksov/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники креатиновых комплексов                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_posttrenirovochnykh_kompleksov/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники посттренировочных комплексов                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_predsonnikov/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники предсонников                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_predtrenirovochnykh_kompleksov/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники предтренировочных комплексов                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/probniki_proteinov/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Пробники протеинов                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/proteinovye_sneki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Протеиновые снеки                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/proteiny/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Протеины                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/sarmy/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                САРМы                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/soevyy_protein/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Соевый протеин                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/spetsialnye_dobavki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Специальные добавки                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/sportivnaya_magneziya/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Спортивная магнезия                         </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/sportivnye_geli_krema/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Спортивные гели, крема                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/sportivnye_sumki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Спортивные сумки                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/syvorotochnyy_protein/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Сывороточный протеин                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/trenazhery/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Тренажеры                           </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/sheykery_i_flyazhki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Шейкеры и фляжки                            </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/energeticheskie_dobavki/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Энергетические добавки                          </span>
                                </a>
                            </li>
                            <li class="categories-tiles__item">
                                <a href="/catalog/yaichnyy_protein/">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom">
                                Яичный протеин                          </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>
