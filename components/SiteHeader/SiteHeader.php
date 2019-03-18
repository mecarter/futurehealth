<header id="SiteHeader">
  <ul>
    <li id="logo" class="menu-item">
      <a href="<?php echo is_home() ? get_bloginfo('url') : '#Top'; ?>">
        <?php echo get_bloginfo('name'); ?>
      </a>
    </li>
    <?php /* wp_nav_menu(
      array(
        'container' => false,
        'items_wrap' => '%3$s',
        'menu' => 'Primary Navigation'
      )
    ); */ ?>
  </ul>
</header>
