import Head from "next/head";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Head>
        <title>Bandage</title>
      </Head>
      <div className="flex flex-col w-full min-h-screen font-body">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
