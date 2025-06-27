import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { css } from "@emotion/css";

import Nav from "./Common/Nav";
// import ProtectedRoute from "./Common/ProtectedRoute";
import Products from "./Products/Products";
// import Product from "./Products/Product";
// import ProductsIndex from "./Products/ProductsIndex";
import Admin from "./Admin/Admin";

const AppStyles = css`
  margin: 50px auto;
  width: 380px;
  .Container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`;

const App = () => {
  console.log("App component start executing...");

  // const [authenticated] = useState(false);
  // const [authenticated] = useState(true);

  return (
    <div className={AppStyles}>
      <Router>
        <div className="Container">
          <Nav />
          <Routes>
            <Route path="/*" element={<Products />} />
            {/* <Route path="/products/*" element={<Products />} /> */}
            {/* <Route path="/" element={<Products />}>
              <Route path="/" element={<ProductsIndex />} />
              <Route path="/list" element={<ProductsIndex />} />
              <Route path="/:id" element={<Product />} />
            </Route> */}
            {/* <Route
              path="/admin"
              element={
                <ProtectedRoute
                  element={<Admin />}
                  authenticated={authenticated}
                  redirectTo="/"
                />
              }
            /> */}
            <Route path="/admin/*" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
