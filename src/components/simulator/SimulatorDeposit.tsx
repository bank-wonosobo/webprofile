import { Card } from "antd";
import SimulatorDisplay from "./SimulatorDisplay";
import SimulatorDepositForm from "./SimulatorDepositForm";

const SimulatorDeposit: React.FC = () => {
  return (
    <Card className="max-w-[400px] w-[400px]">
      <h3 className="text-xl font-bold mb-3">Simulasi Deposito</h3>
      <SimulatorDisplay />
      <SimulatorDepositForm />
    </Card>
  );
};

export default SimulatorDeposit;
