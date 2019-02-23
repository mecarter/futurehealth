<article id="post-<?php the_ID(); ?>" class="Post <?php foreach(get_post_class() as $class) { echo $class . ' '; } ?>">
  <?php if (get_the_category() === 'events'): ?>
    <a href="/events" class="breadcrumb">Events &gt;</a>
  <?php else: ?>
    <a href="/stories"class="breadcrumb">Stories &gt;</a>
  <?php endif; ?>

  <h1><?php the_title(); ?></h1>

  <?php the_content() ?>
</article>
