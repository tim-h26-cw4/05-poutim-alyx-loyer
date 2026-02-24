import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main

export default class Poutine {
  constructor(poutine) {
    Icons.load();
    this.element = poutine;
    this.types = this.element.querySelectorAll('.button');
    this.selectedType = '';
    this.image = this.element.querySelector('.poutine__image');
    this.init();
  }

  init() {
    // console.log('Poutine est instancié');
    for (let i = 0; i < this.types.length; i++) {
      const btn = this.types[i];

      btn.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(e) {
    let isRetourEtatNormal = false;

    for (let i = 0; i < this.types.length; i++) {
      const btn = this.types[i];

      if (
        e.currentTarget.classList.contains('is-active') &&
        isRetourEtatNormal != true
      ) {
        btn.classList.remove('is-active');

        this.selectedType = '';
        isRetourEtatNormal = !isRetourEtatNormal;
        this.updatePhoto();
      } else {
        btn.classList.remove('is-active');
      }
    }
    // console.log(isClickedAgain);

    if (isRetourEtatNormal == false) {
      e.currentTarget.classList.add('is-active');
      this.selectedType = e.currentTarget.innerText;

      this.updatePhoto();
    }
  }

  updatePhoto() {
    // /*avant bonus */ const image = this.element.querySelector('.poutine__image');
    // console.log(image);
    if (this.selectedType != '') {
      this.image.classList.add('is-active');
      this.image.src = `assets/images/${this.selectedType}.png`;
    } else {
      // console.log('remove');
      this.image.classList.remove('is-active');
      this.image.src = `assets/images/poutine.png`;
    }
  }
}
