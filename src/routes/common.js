import PostCard from '../../components/PostCard/PostCard';
import SiteHeader from '../../components/SiteHeader/SiteHeader';

export default {
  init() {
    // JavaScript to be fired on all pages
    PostCard.init();
    SiteHeader.init();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

    // Change the header style when the page is scrolled past 50 pixels
    const SiteHeader = document.getElementById('SiteHeader');
    const toggleSiteHeaderScrolled = function() {
      if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        SiteHeader.className = 'scrolled';
        return;
      }
      SiteHeader.className = '';
    }
    document.addEventListener('scroll', toggleSiteHeaderScrolled);
    toggleSiteHeaderScrolled();
  },
};
