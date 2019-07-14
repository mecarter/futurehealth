<div class="ResearcherCard">
  <div class="ResearcherCard-ThumbnailWrapper">
    <?php if (has_post_thumbnail()): ?>
      <?php the_post_thumbnail('thumbnail'); ?>
    <?php endif; ?>
  </div>
  <div class="ResearcherCard-Content">
    <h4><?php the_title(); ?></h4>
    <?php the_content(); ?>
  </div>
  <?php if ($post->post_name != 'emily-yates-doerr'): ?>
    <button
      class="ResearcherCard-OpenProject"
      <?php
        if ($post->post_name == 'andie-thompson') { echo 'data-project="philippines"'; }
        if ($post->post_name == 'shivani-kaul') { echo 'data-project="bhutan"'; }
        if ($post->post_name == 'kimberly-kim-sigmund-mphil') { echo 'data-project="guatemala-la"'; }
      ?>
    >
      Read about their project
    </button>
  <?php endif; ?>
</div>
