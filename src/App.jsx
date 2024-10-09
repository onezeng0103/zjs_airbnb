import { memo, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import router from "@/route/index.js";
import { useDispatch } from "react-redux";
import { changeFixedAction } from "@/store/modules/main.js";
import Header from "components/header/index.jsx";
import Footer from "components/footer/index.jsx";
const App = memo(() => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/entire") {
      dispatch(changeFixedAction(true));
    } else {
      dispatch(changeFixedAction(false));
    }
    window.scrollTo(0, 0);
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <Header />
      {useRoutes(router)}
      <Footer />
    </>
  );
});

export default App;
