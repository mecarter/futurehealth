import ProjectMap from '../ProjectMap/ProjectMap';

const { projectOverlay } = ProjectMap;

const setupResearcherCards = () => {
  const Buttons = document.getElementsByClassName('ResearcherCard-OpenProject');
  for (let i = 0; i < Buttons.length; i++) {
    const Button = Buttons[i];
    const slug = Button.dataset.project;
    Button.addEventListener('click', e => {
      e.preventDefault();
      projectOverlay.open(slug);
    });
  }
}


export default {
  init: setupResearcherCards,
};
