import type React from "react";
import type { FC } from "react";
import Header from "../_components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="bg-background min-h-screen w-screen">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
