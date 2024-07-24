import Header from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Body = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
};

export default Body;
