import { Provider } from "react-redux";
import { store } from "../store/store";
import AppRouter from "./AppRouter";


const AppProvider = () => {
  // return <Provider store={store}>{children}</Provider>;
  return <AppRouter></AppRouter>;
};

export default AppProvider;
