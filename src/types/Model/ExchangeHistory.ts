import { TokenType } from './Token';

export type ExchangeHistoryType = {
  date: Date;
  targetType: TokenType;
  targetAmount: number;
  resultType: TokenType;
  resultAmount: number;
};
