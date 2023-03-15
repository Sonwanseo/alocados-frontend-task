import { TokenType } from 'types/Model';

export const getResultAmount = (targetType: TokenType, targetAmount: string, resultType: TokenType) => {
  const targetAmountNumber = parseFloat(targetAmount);
  let resultAmount = targetAmountNumber;

  if (targetType === 'Solana') {
    if (resultType === 'Ethereum') resultAmount = targetAmountNumber / 100;
    else if (resultType === 'BnB') resultAmount = targetAmountNumber / 2;
  } else if (targetType === 'Ethereum') {
    if (resultType === 'Solana') resultAmount = targetAmountNumber * 100;
    else if (resultType === 'BnB') resultAmount = targetAmountNumber * 50;
  } else {
    if (resultType === 'Solana') resultAmount = targetAmountNumber * 2;
    else if (resultType === 'Ethereum') resultAmount = targetAmountNumber / 50;
  }

  return isNaN(resultAmount) ? 0 : resultAmount;
};
