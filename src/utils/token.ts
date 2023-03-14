import Solana from 'assets/svg/Solana.svg';
import Ethereum from 'assets/svg/Ethereum.svg';
import BnB from 'assets/svg/BnB.svg';
import { TokenType } from 'types/Model';

export function getTokenImageByType(type: TokenType) {
  switch (type) {
    case 'Solana':
      return Solana;
    case 'Ethereum':
      return Ethereum;
    case 'BnB':
      return BnB;
    default:
      return Solana;
  }
}

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
