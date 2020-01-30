<?php get_header(); ?>

  <main role="main" aria-label="Content">
    <!-- section -->
    <section>

      <h1><?php the_title(); ?></h1>

      <div id="publications-wrapper">

        <?php $publications_query = new WP_Query(array(
          'category_name' => 'publications',
          'orderby' => 'meta_value',
          'meta_key' => 'date_published',
          'order' => 'DESC',
          'posts_per_page' => -1,
        )); ?>

        <?php $year = null; ?>

        <?php if ($publications_query->have_posts()): while ($publications_query->have_posts()) : $publications_query->the_post(); ?>

          <?php $publicationYear = date('Y', strtotime(CFS()->get('date_published'))); ?>

          <?php if ($year != $publicationYear): ?>
            <?php $year = $publicationYear; ?>
            <h2><?php echo $year; ?></h2>
          <?php endif;?>

          <div><?php the_content(); ?></div>

        <?php endwhile; endif; ?>
      </div>

    </section>
    <!-- /section -->
  </main>
<?php get_footer(); ?>
