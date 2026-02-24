import Icons from './utils/Icons.js';
import Poutine from './Poutine.js';
// La ligne suivante devrait être au TOUT début du init() du Main

export default class Chef {
  constructor(chef) {
    Icons.load();
    this.element = chef;
    // console.log(this.element);
    this.menu = [];
    // console.log(this.menu);
    this.container = this.element.querySelector('.chef__order');
    // console.log(this.container);
    this.init();
  }

  init() {
    // console.log('Chef est instancié');
    const poutines = this.element.querySelectorAll('.poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      // console.log(poutine);

      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }
    // console.log(this.menu);

    const confirmCommande = this.element.querySelector('.button-secondary');
    confirmCommande.addEventListener('click', this.sendOrder.bind(this));
    console.log();
  }

  sendOrder() {
    this.container.innerText = '';
    console.log('odre envoyer');
    let nbPoutine = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      // console.log(poutine.selectedType);
      if (poutine.selectedType != '') {
        nbPoutine++;
      }
    }
    const p = document.createElement('p');

    p.innerText = `Nombre total de poutine(s): ${nbPoutine}`;
    this.container.appendChild(p);
  }
}
