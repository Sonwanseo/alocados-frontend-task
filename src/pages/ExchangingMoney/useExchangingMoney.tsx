import { TokenService } from 'services';
import React from 'react';
import { TokenType } from 'types/Model';
import { useHistoryStore, useTokenStore } from 'store';
import { checkIsNumber } from 'utils';

export function useExchangingMoney() {
  const [targetType, setTargetType] = React.useState<TokenType | undefined>(undefined);
  const [targetAmount, setTargetAmount] = React.useState('1');
  const [resultType, setResultType] = React.useState<TokenType | undefined>(undefined);
  const [resultAmount, setResultAmount] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [noneHoldingError, setNoneHoldingError] = React.useState(false);

  const { tokens, addTokens, subtractTokens } = useTokenStore();
  const { addHistory } = useHistoryStore();

  React.useEffect(() => {
    if (!targetType) return;

    const isError = TokenService.checkNoneHoldingError(tokens[targetType]);

    setNoneHoldingError(isError);
    setError(isError);
  }, [targetType]);

  React.useEffect(() => {
    if (!targetType) return;

    setError(TokenService.checkOverExchangeError(targetAmount, tokens[targetType]));
    setError(TokenService.checkMinimumAmountSortageError(targetAmount));
    setError(!checkIsNumber(targetAmount));
  }, [targetAmount]);

  React.useEffect(() => {
    if (!targetType || !resultType) setResultAmount(0);
    else setResultAmount(TokenService.getResultAmount(targetType, targetAmount, resultType));
  }, [targetType, targetAmount, resultType]);

  const changeTargetType = React.useCallback((token: TokenType) => {
    setTargetType(token);
  }, []);

  const changeResultType = React.useCallback((token: TokenType) => {
    setResultType(token);
  }, []);

  const changeTargetAmount = (amount: string) => {
    if (amount.includes('.') && amount.split('.')[1].length > 10) setTargetAmount(amount.slice(0, -1));
    else setTargetAmount(amount);
  };

  const initInput = () => {
    setTargetType(undefined);
    setTargetAmount('1');
    setResultType(undefined);
  };

  const exchangeToken = () => {
    if (!targetType || !resultType) return;

    subtractTokens(targetType, parseFloat(targetAmount));
    addTokens(resultType, resultAmount);

    addHistory({
      date: new Date(),
      targetType,
      targetAmount: parseFloat(targetAmount),
      resultType,
      resultAmount,
    });

    initInput();
  };

  return {
    targetType,
    targetAmount,
    resultType,
    resultAmount,
    error,
    noneHoldingError,
    changeTargetType,
    changeTargetAmount,
    changeResultType,
    exchangeToken,
  };
}
