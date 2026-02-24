import Icons from './utils/Icons.js';
import Main from './Main.js';
// La ligne suivante devrait être au TOUT début du init() du Main

class Chef {
  constructor(chef) {
    Icons.load();
    this.element = chef;
    console.log(chef);
    this.init();
  }

  init() {
    console.log('Chef est instancié');
  }
}
