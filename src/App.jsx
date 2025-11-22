import { Navigate, Route, Routes } from "react-router";

import ProductPage from "./pages/ProductPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
