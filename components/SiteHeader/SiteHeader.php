<header id="SiteHeader">
  <ul id="SiteHeader-MainMenu">
    <li id="logo" class="menu-item">
      <a href="<?php echo is_home() ? get_bloginfo('url') : '/#Top'; ?>">
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
    <li id="SiteHeader-MobileMenu-Toggle"><a href="#">Navigation</a></li>
  </ul>
  <ul id="SiteHeader-MobileMenu">
    <li id="SiteHeader-MobileMenu-Close"><button title="Close Menu">&times;</button></li>
    <?php wp_nav_menu(
      array(
        'container' => false,
        'items_wrap' => '%3$s',
        'menu' => 'Primary Navigation'
      )
    ); ?>
  </ul>
</header>
