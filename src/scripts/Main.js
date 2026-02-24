import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main

export default class Main {
  constructor() {
    Icons.load();
    this.init();
  }

  init() {
    console.log('Main est instancié');

    const chefs = document.querySelector('.chef');

    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      console.log('teste');
      new Chef(chef);
    }
  }
}

new Main();
