import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class Main {
  constructor() {
    Icons.load();
    this.init();
  }

  init() {
    // console.log('Main est instancié');

    const chefs = document.querySelectorAll('.chef');

    //instance de classe Chef
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];

      new Chef(chef);
    }
  }
}

new Main();
