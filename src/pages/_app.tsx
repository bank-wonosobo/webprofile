import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";

const opensans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
  weight: ["300", "400", "500", "600", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={opensans.className}>
      <Component {...pageProps} />;
    </main>
  );
}
