import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

interface AppProviderProps {}

const AppProvider = ({ children }: PropsWithChildren<AppProviderProps>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
