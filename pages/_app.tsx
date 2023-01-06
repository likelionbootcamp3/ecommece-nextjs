import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import RootLayout from "../components/layouts/RootLayout";

// Set up font family
const montserrat = Montserrat({ subsets: ["latin"] });
const fontVariables = (
  <style jsx global>{`
    :root {
      --font-montserrat: ${montserrat.style.fontFamily};
    }
  `}</style>
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Set font variables */}
      {fontVariables}

      {/* Main Content */}
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
