<?php get_header(); ?>

  <main id="page-home-main" role="main" aria-label="Content">
    <section id="one-thousand-splash">
      <span>The first</span>
      <div id="one-thousand-splash-number">
        <span style="background-image: url('http://lorempixel.com/400/400/people');">1</span>
        <span style="background-image: url('http://lorempixel.com/400/400/city');">0</span>
        <span style="background-image: url('http://lorempixel.com/400/400/nature');">0</span>
        <span style="background-image: url('http://lorempixel.com/400/400/transport');">0</span>
      </div>
      <span>days of life</span>
    </section>

    <!-- section -->
    <section>

    <?php if (have_posts()): while (have_posts()) : the_post(); ?>

      <!-- article -->
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      
        <?php the_content(); ?>
        

        <?php edit_post_link(); ?>

      </article>
      <!-- /article -->

    <?php endwhile; ?>

    <?php else: ?>

      <!-- article -->
      <article>

        <h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

      </article>
      <!-- /article -->

    <?php endif; ?>

    </section>
    <!-- /section -->
  </main>
<?php get_footer(); ?>