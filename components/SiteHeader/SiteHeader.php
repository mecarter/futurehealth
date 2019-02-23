<header id="SiteHeader">
  <ul>
    <li id="logo">
      <a href="<?php echo get_bloginfo('url'); ?>">
        <?php echo get_bloginfo('name'); ?>
      </a>
    </li>
    <?php wp_nav_menu(
      array(
        'container' => false,
        'items_wrap' => '%3$s',
        'menu' => 'Primary Navigation'
      )
    ); ?>
  </ul>
</header>
