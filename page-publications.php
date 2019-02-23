<?php get_header(); ?>

  <main role="main" aria-label="Content">

    <h1>Publications</h1>
    
    <!-- section -->
    <section>

    <?php $query = new WP_Query(array('category_name' => 'publications')); ?>

    <?php if ($query->have_posts()): while ($query->have_posts()) : $query->the_post(); ?>

      <?php include 'components/PostCard/PostCard.php'; ?>

    <?php endwhile; ?>

    <?php else: ?>

      <!-- article -->
      <article>

        <h2><?php _e( 'Sorry, there are no publications to display.', 'html5blank' ); ?></h2>

      </article>
      <!-- /article -->

    <?php endif; ?>

    </section>
    <!-- /section -->
  </main>

<?php get_footer(); ?>
