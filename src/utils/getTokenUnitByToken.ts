import { TokenType } from 'types/Model';

export function getTokenUnitByType(type: TokenType) {
  switch (type) {
    case 'Solana':
      return 'SOL';
    case 'Ethereum':
      return 'ETH';
    case 'BnB':
      return 'BNB';
    default:
      return 'SOL';
  }
}
