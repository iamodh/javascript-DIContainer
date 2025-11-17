const MAIN_OPTIONS = Object.freeze({
  1: '게임 시작',
  2: '전략 변경',
  3: '설정',
  4: '종료',
});

const STRATEGY_OPTIONS = Object.freeze({
  1: '랜덤 숫자 사용',
  2: '고정 숫자 사용',
});

const SETTING_OPTIONS = Object.freeze({
  1: '로또 설정',
  2: '우승 금액 설정',
});

export const MENU_OPTIONS = Object.freeze({
  MAIN_OPTIONS,
  STRATEGY_OPTIONS,
  SETTING_OPTIONS,
});

export default MENU_OPTIONS;
