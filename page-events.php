<?php get_header(); ?>

  <main role="main" aria-label="Content">

    <h1>Events</h1>
    
    <!-- section -->
    <section class="cards-wrapper">

    <?php $query = new WP_Query(array(
      'category_name' => 'events',
      'order_by' => 'meta_value',
      'meta_key' => 'event_date',
      'order' => 'DESC'
    )); ?>

    <?php if ($query->have_posts()): while ($query->have_posts()) : $query->the_post(); ?>

      <h2><?php echo date('D, j M Y', strtotime(CFS()->get('event_date'))); ?></h2>

      <?php include 'components/PostCard/PostCard.php'; ?>

    <?php endwhile; ?>

    <?php else: ?>

      <!-- article -->
      <article>

        <h2><?php _e( 'Sorry, there are no events to display.', 'html5blank' ); ?></h2>

      </article>
      <!-- /article -->

    <?php endif; ?>

    </section>
    <!-- /section -->
  </main>

<?php get_footer(); ?>
