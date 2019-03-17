class ProjectOverlayClass {
  constructor() {
    this.El = document.getElementById('ProjectOverlay');
    this.CloseButton = document.getElementById('ProjectOverlayClose');
    this.slug = null;
    this.listenForEscKey = this.listenForEscKey.bind(this);

    this.CloseButton.addEventListener('click', e => {
      e.preventDefault();
      this.close();
    });
  }

  listenForEscKey(e) {
    if (e.keyCode === 27) this.close();
  }
  
  open(slug) {
    let newClassName = 'open';
    if (this.slug !== slug) {
      newClassName += ' ' + slug;
    }
    this.slug = slug;
    this.El.className = newClassName;

    window.addEventListener('keyup', this.listenForEscKey);
  };

  close() {
    this.El.className = this.El.className.replace('open', 'closing');
    window.removeEventListener('keyup', this.listenForEscKey);
    setTimeout(() => {
      this.El.className = '';
    }, 300);
  };
};

export default ProjectOverlayClass;
