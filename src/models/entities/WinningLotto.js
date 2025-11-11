import ERROR_MESSAGES from '../../constants/errorMessages.js';
import LOTTO_CONFIG from '../../constants/lottoConfig.js';

class WinningLotto {
  #winningNumbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateNumbersCount(numbers);
    this.#validateNumbersDuplicates(numbers);
    this.#validateBonusNumberDuplicates(numbers, bonusNumber);

    this.#winningNumbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  #validateNumbersCount(numbers) {
    if (numbers.length !== LOTTO_CONFIG.NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.NUMBERS_INVALID_COUNT);
    }
  }

  #validateNumbersDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.NUMBERS_DUPLICATES);
    }
  }

  #validateBonusNumberDuplicates(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATES);
    }
  }

  calculateMatchCount(lottoNumbers) {
    const totalCounts = this.#winningNumbers.length + lottoNumbers.length;

    const unionCounts = new Set([...this.#winningNumbers, ...lottoNumbers])
      .size;

    return totalCounts - unionCounts;
  }

  calculateBonusMatch(lottoNumbers) {
    return lottoNumbers.includes(this.#bonusNumber);
  }
}

export default WinningLotto;
