import "@/styles/globals.css";
// import "antd/dist/reset.css"; // Ant Design styles
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
