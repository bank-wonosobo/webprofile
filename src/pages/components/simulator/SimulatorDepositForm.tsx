import { useDepositStore } from "@/stores/depositStore";
import { Col, InputNumber, Row, Slider } from "antd";
import { useEffect } from "react";

const SimulatorDepositForm: React.FC = () => {
  const { setValues, principal, years, calculateDeposit } = useDepositStore();

  useEffect(() => {
    calculateDeposit();
  }, [principal, years]);

  return (
    <>
      <div className="flex flex-col mt-10">
        <span className="font-bold text-md mb-5 text-black/70">
          Jumlah Deposito
        </span>
        <InputNumber
          prefix={<b> Rp. </b>}
          size="large"
          min={0}
          max={9000000000}
          placeholder="Jumlah"
          variant="underlined"
          className="w-full rounded-none "
          value={principal}
          onChange={(e) => setValues({ principal: Number(e) })}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col mt-7">
          <span className="font-bold text-md mb-5 text-black/70">
            Jangka Waktu
          </span>
          <Row className="w-full">
            <Col span={12}>
              <Slider
                min={1}
                max={20}
                onChange={(e) => setValues({ years: Number(e) })}
                value={typeof years === "number" ? years : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={20}
                suffix="tahun"
                style={{ margin: "0 16px" }}
                value={years}
                onChange={(e) => setValues({ years: Number(e) })}
              />
            </Col>
          </Row>
        </div>
        <div className="flex flex-col my-5">
          <span className="font-bold text-md mb-5 text-black/70">
            Suku Bunga Efektif
          </span>
          <InputNumber
            min={1}
            max={20}
            defaultValue={5}
            suffix="%"
            disabled={true}
          />
        </div>
      </div>
    </>
  );
};

export default SimulatorDepositForm;
