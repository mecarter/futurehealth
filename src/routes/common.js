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
  },
};
