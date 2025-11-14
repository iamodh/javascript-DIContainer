import { Console } from '@woowacourse/mission-utils';
import MENU_OPTIONS from '../constants/menuOptions';

class MenuView {
  async getOption(state) {
    this.#valiateState(state);
    this.#showOptions(state);

    const input = await Console.readLineAsync('옵션을 선택해주세요.\n');

    const number = Number(input.trim());

    this.#valiateOption(state, number);

    return number;
  }

  #showOptions(state) {
    for (const [number, text] of Object.entries(MENU_OPTIONS[state])) {
      Console.print(`${number} - ${text}`);
    }
  }

  #valiateState(state) {
    if (!MENU_OPTIONS[state]) {
      throw new Error('[ERROR] 존재하지 않는 메뉴 상태입니다.');
    }
  }

  #valiateOption(state, number) {
    if (!MENU_OPTIONS[state][number]) {
      throw new Error('[ERROR] 존재하지 않는 메뉴 옵션입니다.');
    }
  }
}

export default MenuView;
