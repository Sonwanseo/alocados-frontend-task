import { TokenType } from 'types/Model';
import Solana from 'assets/svg/Solana.svg';
import Ethereum from 'assets/svg/Ethereum.svg';
import BnB from 'assets/svg/BnB.svg';

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
