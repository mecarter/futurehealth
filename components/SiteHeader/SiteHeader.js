const setupSiteHeader = () => {
  const menuItems = document.getElementsByClassName('menu-item');
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', e => {
      const isHashLink = e.target.href.includes('#');
      if (!isHashLink) return;
      const hashLink = e.target.href.split('#')[1];
      const hashLinkElement = document.getElementById(hashLink);
      if (hashLinkElement) {
        e.preventDefault();
        hashLinkElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    })
  }
}

export default {
  init: setupSiteHeader
};
