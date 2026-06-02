import { Route, Routes } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
