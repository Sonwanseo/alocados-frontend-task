import { TokenType } from 'types/Model';
import { create } from 'zustand';

type TokenStoreType = {
  tokens: {
    [token in TokenType]: number;
  };
  setSolana: (target: number) => void;
  setEthereum: (target: number) => void;
  setBnB: (target: number) => void;
};

export const useTokenStore = create<TokenStoreType>((set) => ({
  tokens: {
    Solana: 1211023512.34,
    Ethereum: 512.01,
    BnB: 0,
  },
  setSolana: (target: number) => set((state) => ({ ...state, solana: target })),
  setEthereum: (target: number) => set((state) => ({ ...state, ethereum: target })),
  setBnB: (target: number) => set((state) => ({ ...state, BnB: target })),
}));
