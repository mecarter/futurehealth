import ProjectMap from '../../components/ProjectMap/ProjectMap';
import ResearcherCard from '../../components/ResearcherCard/ResearcherCard';

export default {
  init() {
    ProjectMap.init();
    ResearcherCard.init();

    // Animate the home splash graphic once the image is loaded
    const HomeSplash = document.getElementById('home-splash');
    const PreloadImage = document.getElementById('preload-image');
    const handleImageLoaded = function() { HomeSplash.className = 'loaded'; }
    PreloadImage.addEventListener('load', handleImageLoaded);
    // Failsafe in case image doesn't load:
    setTimeout(function() {
      if (HomeSplash.className !== 'loaded') {
        PreloadImage.removeEventListener('load', handleImageLoaded);
        handleImageLoaded();
      }
     }, 1000);
  },
  finalize() {
  },
};
