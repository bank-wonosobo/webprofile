import { useDepositStore } from "@/stores/depositStore";

const SimulatorDisplay: React.FC = () => {
  const { finalAmount } = useDepositStore();
  return (
    <div className="w-full bg-primary/90 text-white shadow-md shadow-primary text-center py-5 rounded-md">
      <h3 className="mb-2 text-sm">Estimasi Penerimaan</h3>
      <h2 className="text-2xl font-bold">Rp. {finalAmount.toLocaleString()}</h2>
    </div>
  );
};

export default SimulatorDisplay;
