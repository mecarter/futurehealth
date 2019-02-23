const setupPostCards = () => {
  const PostCards = document.getElementsByClassName('PostCard');
     for (let i = 0; i < PostCards.length; i++) {
        const PostCard = PostCards[i];
        const url = PostCard.getElementsByTagName('a')[0].getAttribute('href');
        PostCard.addEventListener('click', e => {
          if (e.target.tagName !== 'a') {
            window.location = url;
          }
        });
     }
}

export default {
  init: setupPostCards
};
