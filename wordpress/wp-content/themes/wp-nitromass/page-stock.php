<?php /* Template Name: Акции*/ get_header(); ?>
<div class="main">
        <div class="inside">
        <?php easy_breadcrumbs(); ?>
            <div class="content">

<p class="MsoNormal"><?php the_post(); the_content(); ?></p>
<?php echo do_shortcode('[contact-form-7 id="56" title="Акции"]'); ?>

            </div>
              </div>
      </div>
<?php get_footer(); ?>
