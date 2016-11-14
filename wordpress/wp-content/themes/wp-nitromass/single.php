<?php get_header(); ?>
  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <h1 class="single-title inner-title"><?php the_title(); ?></h1>
    <article id="post-<?php the_ID(); ?>" <?php post_class('formated-content'); ?>>

      <?php the_content(); ?>

      <?php the_tags( __( 'Tags: ', 'wpeasy' ), ', ', '<br>'); // Separated by commas with a line break at the end ?>

      <p><?php _e( 'Categorised in: ', 'wpeasy' ); the_category(', '); // Separated by commas ?></p>

      <p><?php _e( 'This post was written by ', 'wpeasy' ); the_author(); ?></p>

      <?php edit_post_link(); ?>

      <?php comments_template(); ?>

    </article>
  <?php endwhile; else: ?>
    <article>

      <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>

    </article>
  <?php endif; ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
