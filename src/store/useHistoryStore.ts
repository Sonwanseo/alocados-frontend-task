import { ExchangeHistoryType } from 'types/Model';
import { create } from 'zustand';

type HistoryStoreType = {
  histories: ExchangeHistoryType[];
  addHistory: (historyItem: ExchangeHistoryType) => void;
};

export const useHistoryStore = create<HistoryStoreType>((set) => ({
  histories: [{ date: new Date(), targetType: 'Ethereum', targetAmount: 1302.44, resultType: 'Solana', resultAmount: 1302.44 }],
  addHistory: (historyItem) => set((state) => ({ histories: state.histories.concat(historyItem) })),
}));
