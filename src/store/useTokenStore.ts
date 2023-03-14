import { create } from 'zustand';

type TokenStoreType = {
  solana: number;
  ethereum: number;
  BnB: number;
  setSolana: (target: number) => void;
  setEthereum: (target: number) => void;
  setBnB: (target: number) => void;
};

export const useTokenStore = create<TokenStoreType>((set) => ({
  solana: 1211023512.34,
  ethereum: 512.01,
  BnB: 0.35,
  setSolana: (target: number) => set(() => ({ solana: target })),
  setEthereum: (target: number) => set(() => ({ ethereum: target })),
  setBnB: (target: number) => set(() => ({ BnB: target })),
}));
