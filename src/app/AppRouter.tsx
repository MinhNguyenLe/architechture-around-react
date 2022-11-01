import { Route, Routes } from "react-router-dom";
import AppMain from "./AppMain";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppMain />} />
    </Routes>
  );
};

export default AppRouter;
