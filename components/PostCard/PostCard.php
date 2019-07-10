<article id="post-<?php the_ID(); ?>" class="PostCard <?php foreach(get_post_class() as $class) { echo $class . ' '; } ?>">
  <div class="image-wrapper">
    <a href="<?php the_permalink(); ?>">
      <?php if (has_post_thumbnail()): ?>
        <?php the_post_thumbnail('thumbnail'); ?>
      <?php else: ?>
        <div class="image-placeholder"></div>
      <?php endif; ?>
    </a>
  </div>

  <div class="content">
    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

    <?php if (get_the_category()[0]->slug == 'events'): ?>
      <h4>
        <?php echo date('D, j M Y', strtotime(CFS()->get('event_date'))); ?> at <?php echo CFS()->get('event_time'); ?><br>
        <?php echo CFS()->get('event_location'); ?>
      </h4>
    <?php endif; ?>

    <p><?php the_excerpt(); ?></p>
  </div>
</article>
