import { TokenService } from 'pages/services';
import React from 'react';
import { TokenType } from 'types/Model';

export function useExchangingMoney() {
  const [targetType, setTargetType] = React.useState<TokenType>('Solana');
  const [targetAmount, setTargetAmount] = React.useState('0');
  const [resultType, setResultType] = React.useState<TokenType>('Ethereum');
  const [resultAmount, setResultAmount] = React.useState(0);

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

  return { targetType, resultType, resultAmount, changeTargetType, changeTargetAmount, changeResultType };
}
