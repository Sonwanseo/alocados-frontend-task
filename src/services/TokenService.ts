import { TokenType } from 'types/Model';

export const getResultAmount = (targetType: TokenType, targetAmount: string, resultType: TokenType) => {
  const targetAmountNumber = parseFloat(targetAmount);
  let resultAmount = targetAmountNumber;

  switch (targetType) {
    case 'Solana':
      if (resultType === 'Ethereum') resultAmount = resultAmount / 100;
      else if (resultType === 'BnB') resultAmount = resultAmount / 2;
      break;
    case 'Ethereum':
      if (resultType === 'Solana') resultAmount = resultAmount * 100;
      else if (resultType === 'BnB') resultAmount = resultAmount * 50;
      break;
    case 'BnB':
      if (resultType === 'Solana') resultAmount = resultAmount * 2;
      else if (resultType === 'Ethereum') resultAmount = resultAmount / 50;
      break;
  }

  return isNaN(resultAmount) ? 0 : parseFloat(resultAmount.toFixed(2));
};

export const checkNoneHoldingError = (holdingToken: number) => {
  return holdingToken <= 0;
};

export const checkOverExchangeError = (targetAmount: string, holdingToken: number) => {
  return parseFloat(targetAmount) > holdingToken;
};

export const checkMinimumAmountSortageError = (targetAmount: string) => {
  return parseFloat(targetAmount) === 0 || targetAmount === '';
};
