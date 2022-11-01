import { PropsWithChildren } from "react";
import Layout from "../Layout/Layout";

interface MainLayoutProps {}

const MainLayout = ({ children }: PropsWithChildren<MainLayoutProps>) => {
  return <Layout>{children}</Layout>;
};

export default MainLayout;
