import LottoController from './controllers/LottoController.js';
import DIContainer from './DIContainer.js';
import LottoConfig from './models/configs/LottoConfig.js';
import PrizeConfig from './models/configs/PrizeConfig.js';
import LottoMachine from './models/domains/LottoMachine.js';
import RandomStrategy from './models/domains/strategies/RandomStrategy.js';
import LottoChecker from './models/services/LottoChecker.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    const container = new DIContainer();

    container.register('lottoConfig', LottoConfig, 'singleton');
    container.register('prizeConfig', PrizeConfig, 'singleton');

    container.register('inputView', InputView, 'singleton', ['lottoConfig']);
    container.register('outputView', OutputView, 'singleton', ['prizeConfig']);

    container.register('randomStrategy', RandomStrategy, 'singleton', [
      'lottoConfig',
    ]);
    container.register('lottoMachine', LottoMachine, 'transient', [
      'lottoConfig',
      'randomStrategy',
    ]);

    container.register('lottoChecker', LottoChecker, 'singleton');
    container.register('lottoController', LottoController, 'transient', [
      'lottoConfig',
      'prizeConfig',
      'inputView',
      'outputView',
      'lottoMachine',
      'lottoChecker',
    ]);

    const controller = container.resolve('lottoController');
    await controller.start();
  }
}

export default App;
