import { create } from "zustand";

interface SimulatorState {
  error: boolean;
  loading: boolean;
  principal: number;
  rate: number;
  years: number;
  frequency: number; // 1 untuk tahunan, 12 untuk bulanan
  finalAmount: number;
  setValues: (values: Partial<SimulatorState>) => void;
  calculateDeposit: () => void;
}

export const useDepositStore = create<SimulatorState>((set, get) => ({
  error: false,
  loading: true,
  principal: 0,
  rate: 5,
  years: 1,
  frequency: 12,
  finalAmount: 0,
  setValues: (values) => set((state) => ({ ...state, ...values })),
  calculateDeposit: () => {
    const { principal, rate, years, frequency } = get();

    const finalAmount =
      principal * Math.pow(1 + rate / 100 / frequency, frequency * years);
    set({ finalAmount });
  },
}));
