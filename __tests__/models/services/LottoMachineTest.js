import LottoMachine from '../../../src/models/services/LottoMachine';

describe('로또 머신 클래스 테스트', () => {
  test('구매 금액에 맞는 개수의 로또를 구입한다.', () => {
    const mockNumbersGenerator = {
      generate: jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6]),
    };

    const PURCHASE_PRICE = 3000;
    const QUANTITY = 3;
    const lottoMachine = new LottoMachine(mockNumbersGenerator);

    const lottos = lottoMachine.execute(PURCHASE_PRICE);

    expect(lottos.length).toBe(QUANTITY);
  });
});
