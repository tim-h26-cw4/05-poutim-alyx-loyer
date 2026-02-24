import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main

export default class Poutine {
  constructor(poutine) {
    Icons.load();
    this.element = poutine;
    this.types = this.element.querySelectorAll('.button');
    this.selectedType = '';
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
    for (let i = 0; i < this.types.length; i++) {
      const btn = this.types[i];

      btn.classList.remove('is-active');
    }

    e.currentTarget.classList.add('is-active');
    this.selectedType = e.currentTarget.innerText;
    // console.log(this.selectedType);
    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('.poutine__image');
    // console.log(image);
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
