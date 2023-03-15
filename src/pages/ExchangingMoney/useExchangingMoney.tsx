import { TokenService } from 'services';
import React from 'react';
import { TokenType } from 'types/Model';
import { useTokenStore } from 'store';

export function useExchangingMoney() {
  const [targetType, setTargetType] = React.useState<TokenType>('Solana');
  const [targetAmount, setTargetAmount] = React.useState('0');
  const [resultType, setResultType] = React.useState<TokenType>('Ethereum');
  const [resultAmount, setResultAmount] = React.useState(0);
  const [noneHoldingError, setNoneHoldingError] = React.useState(false);

  const { tokens } = useTokenStore();

  React.useEffect(() => {
    checkNoneHoldingError();
  }, [targetType]);

  React.useEffect(() => {
    setResultAmount(TokenService.getResultAmount(targetType, targetAmount, resultType));
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
    if (tokens[targetType] <= 0) setNoneHoldingError(true);
    else setNoneHoldingError(false);
  };

  return { targetType, resultType, resultAmount, noneHoldingError, changeTargetType, changeTargetAmount, changeResultType };
}
