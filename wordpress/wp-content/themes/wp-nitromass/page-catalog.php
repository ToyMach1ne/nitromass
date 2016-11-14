<?php /* Template Name: Каталог */ get_header(); ?>
<div class="main">
    <div class="inside">
        <?php easy_breadcrumbs(); ?>
        <div class="products-catalog__title">
            <h2><?php the_title(); ?></h2></div>
        <div class="content-taber">
            <div class="content-taber__head">
                <ul class="content-taber__head__list horizontal">
                    <li class="content-taber__head__item active rows"><a href="#tab1">rows</a></li>
                    <li class="content-taber__head__item tiles"><a href="#tab2">tiles</a></li>
                </ul>
            </div>
            <div class="content-taber__body">
                <div class="content-taber__tab" id="tab1">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <table class="categories-rows__table">
                                        <tbody>
                                        <?php $hiterms = get_terms("categories", array("orderby" => "slug", "parent" => 0)); ?>
                                        <?php foreach($hiterms as $key => $hiterm) : ?>
                                            <tr>
                                                <td>
                                                    <div class="pull-left"><a href="<?php echo get_term_link( $hiterm ); ?>"><?php echo $hiterm->name; ?></a></div>
                                                    <div class="pull-right"></div>
                                                </td>
                                            </tr>
                                            <?php $loterms = get_terms("categories", array("orderby" => "slug", "parent" => $hiterm->term_id)); ?>
                                            <?php if($loterms) : ?>
                                            <?php foreach($loterms as $key => $loterm) : ?>
                                            <tr>
                                                <td>
                                                    <div class="pull-left">
                                                      <a href="<?php echo get_term_link( $loterm ); ?>" class="dochern"><?php echo $loterm->name; ?></a>
                                                    </div>
                                                    <div class="pull-right"></div>
                                                </td>
                                            </tr>
                                            <?php endforeach; ?>
                                            <?php endif; ?>
                                            <?php endforeach; ?>
                                        </tbody>
                                    </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                </div><!-- content-taber__tab -->
                <div class="content-taber__tab" id="tab2">
                    <div class="categories-tiles">
                        <ul class="categories-tiles__list horizontal">
                                <?php $hiterms = get_terms("categories", array("orderby" => "slug", "parent" => 0)); ?>
                                <?php foreach($hiterms as $key => $hiterm) : ?>
                            <li class="categories-tiles__item">
                                <a href="<?php echo get_term_link( $hiterm ); ?>">
                                    <span class="top"><span class="icon-nitromass"></span></span>
                                    <span class="bottom"><?php echo $hiterm->name; ?> </span>
                                </a>
                            </li>
                                <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>
