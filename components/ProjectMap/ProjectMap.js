import ProjectOverlayClass from './ProjectOverlay/ProjectOverlay';

const ProjectOverlay = new ProjectOverlayClass();

const setupProjectSite = ProjectSiteEl => {
  const ProjectSiteA = ProjectSiteEl.getElementsByTagName('a')[0];
  const url = ProjectSiteA ? ProjectSiteA.getAttribute('href') : '';
  if (url) {
    ProjectSiteEl.addEventListener('click', e => {
      e.preventDefault();
      const slug = url.split('/').pop();
      ProjectOverlay.open(slug);
    });
  }
}

const setupProjectMap = () => {
  const ProjectSites = document.getElementsByClassName('ProjectSite');
  for (let i = 0; i < ProjectSites.length; i++) {
    setupProjectSite(ProjectSites[i]);
  }
}

export default {
  init: setupProjectMap,
  projectOverlay: ProjectOverlay,
};
