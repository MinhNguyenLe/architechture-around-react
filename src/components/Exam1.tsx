import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Exam1 = () => {
  return (
    <div>
      EXAM 1<Link to="exam">Go to exam2</Link>
      <Outlet/>
    </div>
  );
};

export default Exam1;
