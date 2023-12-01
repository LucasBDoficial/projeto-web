import { Outlet } from "react-router-dom";

import Footer from "./site/components/Footer";

export default function App() {

  return(
    <div>
      <Outlet />

      <Footer />
    </div>
  );
}