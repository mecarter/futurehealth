<?php get_header(); ?>

  <main role="main" aria-label="Content">
    
    <h1>Stories</h1>
    
    <!-- section -->
    <section class="cards-wrapper">

    <?php if (have_posts()): while (have_posts()) : the_post(); ?>

      <?php if (in_category('uncategorized')) { include 'components/PostCard/PostCard.php'; } ?>

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
