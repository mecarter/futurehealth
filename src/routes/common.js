import PostCard from '../../components/PostCard/PostCard';

export default {
  init() {
    // JavaScript to be fired on all pages
    PostCard.init();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
