import { TokenType } from 'types/Model';
import { create } from 'zustand';

type TokenStoreType = {
  tokens: {
    Solana: number;
    Ethereum: number;
    BnB: number;
  };
  addTokens: (targetToken: TokenType, targetAmount: number) => void;
  subtractTokens: (targetToken: TokenType, targetAmount: number) => void;
};

export const useTokenStore = create<TokenStoreType>((set) => ({
  tokens: {
    Solana: 1211023512.34,
    Ethereum: 512.01,
    BnB: 0.35,
  },
  addTokens: (targetToken, targetAmount) =>
    set((state) => ({ tokens: { ...state.tokens, [targetToken]: parseFloat((state.tokens[targetToken] + targetAmount).toFixed(2)) } })),
  subtractTokens: (targetToken, targetAmount) =>
    set((state) => ({ tokens: { ...state.tokens, [targetToken]: parseFloat((state.tokens[targetToken] - targetAmount).toFixed(2)) } })),
}));
