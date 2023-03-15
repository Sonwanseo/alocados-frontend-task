import { TokenService } from 'services';
import React from 'react';
import { TokenType } from 'types/Model';
import { useTokenStore } from 'store';

export function useExchangingMoney() {
  const [targetType, setTargetType] = React.useState<TokenType | undefined>(undefined);
  const [targetAmount, setTargetAmount] = React.useState('1');
  const [resultType, setResultType] = React.useState<TokenType | undefined>(undefined);
  const [resultAmount, setResultAmount] = React.useState(0);
  const [noneHoldingError, setNoneHoldingError] = React.useState(false);
  const [overExchangeError, setOverExchangeError] = React.useState(false);
  const [minimumAmountShortageError, setMinimumAmountShortageError] = React.useState(false);

  const { tokens, addTokens, subtractTokens } = useTokenStore();

  React.useEffect(() => {
    checkNoneHoldingError();
  }, [targetType]);

  React.useEffect(() => {
    checkOverExchangeError();
    checkMinimumAmountShortageError();
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
    setTargetAmount(amount);
  };

  const checkNoneHoldingError = () => {
    if (!targetType) return;

    if (tokens[targetType] <= 0) setNoneHoldingError(true);
    else setNoneHoldingError(false);
  };

  const checkOverExchangeError = () => {
    if (!targetType) return;

    if (parseFloat(targetAmount) > tokens[targetType]) setOverExchangeError(true);
    else setOverExchangeError(false);
  };

  const checkMinimumAmountShortageError = () => {
    if (parseFloat(targetAmount) === 0 || targetAmount === '') setMinimumAmountShortageError(true);
    else setMinimumAmountShortageError(false);
  };

  const exchangeToken = () => {
    if (!targetType || !resultType) return;

    subtractTokens(targetType, parseFloat(targetAmount));
    addTokens(resultType, resultAmount);

    setTargetType(undefined);
    setTargetAmount('1');
    setResultType(undefined);
  };

  return {
    targetType,
    targetAmount,
    resultType,
    resultAmount,
    noneHoldingError,
    overExchangeError,
    minimumAmountShortageError,
    changeTargetType,
    changeTargetAmount,
    changeResultType,
    exchangeToken,
  };
}
