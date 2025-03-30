import { Collapse } from "antd";
import React from "react";

const AboutList: React.FC = () => {
  const items = [
    {
      key: "1",
      label: <b>Komitmen Untuk Melayani Pelanggan</b>,
      children:
        "BPR Bank Wonosobo memiliki komitmen yang kuat dalam memberikan pelayanan terbaik kepada para pelanggan. Kami selalu siap membantu dan mengakomodasi kebutuhan perbankan Anda dengan cepat dan profesioal.",
    },
    {
      key: "2",
      label: <b>Penawaran Produk & Layanan yang Beragam</b>,
      children:
        "Bank Wonosobo menyediakan berbagai produk dan layanan yang dirancang untuk memenuhi kebutuhan finansial masyarakat, baik perorangan maupun bisnis. Dengan komitmen untuk memberikan solusi perbankan yang inovatif.",
    },
    {
      key: "3",
      label: <b>Kepercayaan dan Reputasi yang Baik</b>,
      children:
        "Bank Wonosobo telah membangun kepercayaan dan reputasi yang kuat di masyarakat berkat komitmennya dalam memberikan layanan perbankan yang aman, transparan, dan profesional. Dengan pengalaman yang telah teruji.",
    },
    {
      key: "4",
      label: <b>Keterbukaan dan Transparansi</b>,
      children:
        "Bank Wonosobo berkomitmen untuk menjaga keterbukaan dan transparansi dalam setiap aspek layanan perbankan. Dengan prinsip ini, nasabah dapat merasa lebih aman, percaya, dan nyaman dalam mengelola keuangan mereka.",
    },
  ];

  return (
    <Collapse
      items={items}
      bordered={false}
      defaultActiveKey={["1"]}
      className="text-lg bg-white"
    />
  );
};

export default AboutList;
