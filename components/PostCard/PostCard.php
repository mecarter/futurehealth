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
    <h2><?php the_title(); ?></h2>

    <p><?php the_excerpt(); ?></p>
  </div>
</article>
