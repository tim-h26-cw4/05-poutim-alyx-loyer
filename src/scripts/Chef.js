import Icons from './utils/Icons.js';
import Poutine from './Poutine.js';
// La ligne suivante devrait être au TOUT début du init() du Main

export default class Chef {
  constructor(chef) {
    Icons.load();
    this.element = chef;
    // console.log(this.element);
    this.menu = this.element.querySelectorAll('.poutine');
    // console.log(this.menu);
    this.container = this.element.querySelector('.chef__order');
    // console.log(this.container);
    this.init();
  }

  init() {
    // console.log('Chef est instancié');

    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];

      const instance = new Poutine(poutine);
      console.log(poutine);

      this.menu.push(instance);
    }

    console.log(this.menu);

    const confirmCommande = this.element.querySelector('.button-secondary');
    confirmCommande.addEventListener('click', this.sendOrder.bind(this));
    console.log();
  }

  sendOrder() {
    console.log('odre envoyer');
  }
}
