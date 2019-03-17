<div id="ProjectOverlay">
  <button id="ProjectOverlayClose">&times;</button>
  <?php
    global $post;
    $current_page = $post;
    $result = new WP_Query(array('pagename' => 'projects'));
    $projects = get_children($result->post->ID);

    if (count($projects) > 0) {
      foreach($projects as $project => $post) {
        setup_postdata($post);
  ?>
    <div class="<?php echo $post->post_name; ?> ProjectOverlayScroller">
      <div class="ProjectOverlayContentWrapper">
        <?php if (has_post_thumbnail()): ?>
          <div class="ProjectOverlayImage">
            <?php the_post_thumbnail('large'); ?>
          </div>
        <?php endif; ?>
        <h1><?php the_title(); ?></h1>
        <div class="ProjectOverlayContent">
          <?php the_content(); ?>
        </div>
      </div>
    </div>
  <?php
      } // endforeach
    } // endif
    $post = $current_page;
  ?>
</div>
