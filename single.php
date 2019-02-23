<?php get_header(); ?>

  <main role="main" aria-label="Content">

    <!-- section -->
    <section>

    <?php if (have_posts()): while (have_posts()) : the_post(); ?>

      <?php include 'components/Post/Post.php'; ?>

    <?php endwhile; ?>

    <?php else: ?>

      <!-- article -->
      <article>

        <h2><?php _e( 'Sorry, page not found.', 'html5blank' ); ?></h2>

      </article>
      <!-- /article -->

    <?php endif; ?>

    </section>
    <!-- /section -->
  </main>

<?php get_footer(); ?>
