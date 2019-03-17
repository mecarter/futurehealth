import ProjectMap from '../../components/ProjectMap/ProjectMap';
import ResearcherCard from '../../components/ResearcherCard/ResearcherCard';

export default {
  init() {
     ProjectMap.init();
     ResearcherCard.init();
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
