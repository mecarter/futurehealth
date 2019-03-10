<div class="ResearcherCard">
  <div class="thumbnail-wrapper">
    <?php if (has_post_thumbnail()): ?>
      <?php the_post_thumbnail('thumbnail'); ?>
    <?php endif; ?>
  </div>
  <div class="content">
    <h4><?php the_title(); ?></h4>
    <?php the_content(); ?>
  </div>
</div>
