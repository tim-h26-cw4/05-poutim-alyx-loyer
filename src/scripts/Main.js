import Icons from './utils/Icons.js';
import Chef from './Chef.js';
// La ligne suivante devrait être au TOUT début du init() du Main

class Main {
  constructor() {
    Icons.load();
    this.init();
  }

  init() {
    // console.log('Main est instancié');

    const chefs = document.querySelectorAll('.chef');

    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];

      new Chef(chef);
    }
  }
}

new Main();
