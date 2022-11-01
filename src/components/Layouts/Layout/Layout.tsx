import { PropsWithChildren } from "react";

interface LayoutProps {}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <>{children}</>;
};

export default Layout;
