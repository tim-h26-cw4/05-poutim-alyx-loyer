import Icons from './utils/Icons.js';

// La ligne suivante devrait être au TOUT début du init() du Main

export default class Poutine {
  constructor() {
    Icons.load();
    this.init();
  }

  init() {
    // console.log('Poutine est instancié');
  }
}
