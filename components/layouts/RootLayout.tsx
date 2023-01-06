import Header from "../partials/Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      <main className="font-body">{children}</main>
    </>
  );
};

export default RootLayout;
