const setupSiteHeader = () => {
  // Change the header style when the page is scrolled past 50 pixels
  const SiteHeader = document.getElementById('SiteHeader');
  const toggleSiteHeaderScrolled = function() {
    if ((document.documentElement.scrollTop > 50 || document.body.scrollTop > 50)) {
      SiteHeader.classList.add('scrolled');
      return;
    }
    SiteHeader.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleSiteHeaderScrolled);
  toggleSiteHeaderScrolled();

  // Add smooth scrolling to menu item clicks (that are hash links)
  const MenuItems = document.getElementsByClassName('menu-item');
  for (let i = 0; i < MenuItems.length; i++) {
    MenuItems[i].addEventListener('click', e => {
      const isHashLink = e.target.href.includes('#');
      if (!isHashLink) return;
      const hashLink = e.target.href.split('#')[1];
      const hashLinkElement = document.getElementById(hashLink);
      if (hashLink && hashLinkElement) {
        e.preventDefault();
        SiteHeader.classList.remove('show-mobile-menu');
        hashLinkElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    })
  }

  // Add toggle handling for the mobile menu
  const MobileMenuToggle = document.getElementById('SiteHeader-MobileMenu-Toggle');
  MobileMenuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    SiteHeader.classList.toggle('show-mobile-menu');
  });

  const MobileMenuClose = document.getElementById('SiteHeader-MobileMenu-Close');
  MobileMenuClose.addEventListener('click', function(e) {
    e.preventDefault();
    SiteHeader.classList.remove('show-mobile-menu');
  });
}

export default {
  init: setupSiteHeader
};
