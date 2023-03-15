import Solana from 'assets/svg/Solana.svg';
import Ethereum from 'assets/svg/Ethereum.svg';
import BnB from 'assets/svg/BnB.svg';
import { TokenType } from 'types/Model';

export function getTokenImageByType(token: TokenType) {
  switch (token) {
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

export function getTokenUnitByType(token: TokenType) {
  switch (token) {
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

export function getUnselectedToken(selectedToken: TokenType) {
  const tokenArr: TokenType[] = ['Solana', 'Ethereum', 'BnB'];

  return tokenArr.filter((item) => item !== selectedToken);
}
