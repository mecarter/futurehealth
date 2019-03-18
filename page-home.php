<?php get_header(); ?>
  <div id="Top"></div>

  <main id="page-home-main" role="main" aria-label="Content">
    <?php /*
    <section
      id="one-thousand-image"
      <?php if (has_post_thumbnail()): ?>
        style="background-image: url('<?php echo the_post_thumbnail_url('large'); ?>');"
      <?php endif; ?>
    >
    </section>
    
    <section id="one-thousand-splash">
      <span>The first</span>
      <div id="one-thousand-splash-number">
        <span>1</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
      </div>
      <span>days of life</span>
    </section>

    <!-- section -->
    <section>
    */ ?>

    <?php if (have_posts()): while (have_posts()) : the_post(); ?>

      <!-- article -->
      <article id="About" <?php post_class(); ?>>
      
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

    <section id="Projects">
      <?php include 'components/ProjectMap/ProjectMap.php'; ?>
    </section>

    <?php /*
    <section id="Researchers">
      <h2>Research Team</h2>

      <?php $query = new WP_Query(array('category_name' => 'researchers', 'orderby' => 'rand')); ?>

      <?php if ($query->have_posts()): while ($query->have_posts()) : $query->the_post(); ?>

        <?php include 'components/ResearcherCard/ResearcherCard.php'; ?>

      <?php endwhile; ?>

      <?php else: ?>

        <!-- article -->
        <article>

          <h2><?php _e( 'Sorry, there are no events to display.', 'html5blank' ); ?></h2>

        </article>
        <!-- /article -->

      <?php endif; ?>
    </section>
    */ ?>
  </main>

<?php get_footer(); ?>