import { TokenType } from './Token';

export type ExchangeHistoryType = {
  date: string;
  targetType: TokenType;
  targetAmount: number;
  resultType: TokenType;
  resultAmount: number;
};
