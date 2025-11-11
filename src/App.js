import LottoController from './controllers/LottoController.js';
import DIContainer from './DIContainer.js';
import Calculator from './models/services/Calculator.js';
import Checker from './models/services/Checker.js';
import LottoFactory from './models/services/LottoFactory.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
class App {
  async run() {
    const container = new DIContainer();
    container.register('inputView', InputView);
    container.register('outputView', OutputView);
    container.register('checker', Checker);
    container.register('calculator', Calculator);
    container.register('lottoFactory', LottoFactory);

    container.register('lottoController', LottoController, [
      'inputView',
      'outputView',
      'checker',
      'calculator',
      'lottoFactory',
    ]);

    const controller = container.resolve('lottoController');
    await controller.start();
  }
}

export default App;
