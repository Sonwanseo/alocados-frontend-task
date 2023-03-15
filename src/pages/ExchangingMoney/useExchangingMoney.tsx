import React from 'react';
import { TokenType } from 'types/Model';

export function useExchangingMoney() {
  const [targetType, setTargetType] = React.useState<TokenType>('Solana');
  const [resultType, setResultType] = React.useState<TokenType>('Ethereum');

  const changeTargetType = React.useCallback((token: TokenType) => {
    setTargetType(token);
  }, []);

  const changeResultType = React.useCallback((token: TokenType) => {
    setResultType(token);
  }, []);

  return { targetType, resultType, changeTargetType, changeResultType };
}
