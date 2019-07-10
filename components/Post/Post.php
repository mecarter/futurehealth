<article id="post-<?php the_ID(); ?>" class="Post <?php foreach(get_post_class() as $class) { echo $class . ' '; } ?>">
  <?php if (get_the_category()[0]->slug == 'events'): ?>
    <a href="/events" class="breadcrumb">Events &gt;</a>
  <?php else: ?>
    <a href="/stories"class="breadcrumb">Stories &gt;</a>
  <?php endif; ?>

  <h1><?php the_title(); ?></h1>

  <?php if (get_the_category()[0]->slug == 'events'): ?>
    <h4>
      <?php echo date('D, j M Y', strtotime(CFS()->get('event_date'))); ?> at <?php echo CFS()->get('event_time'); ?><br>
      <?php echo CFS()->get('event_location'); ?>
    </h4>
  <?php endif; ?>

  <?php the_content() ?>
</article>
