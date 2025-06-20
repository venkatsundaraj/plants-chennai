import type React from "react";
import type { FC } from "react";
import Header from "~/app/_components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="bg-background">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
