import { Route } from "react-router";
import PageNotFound from "../pages/PageNotFound";

const RootRouting = () => {
  return <Route path="/page-not-found" element={<PageNotFound />} />;
};

export default RootRouting;
