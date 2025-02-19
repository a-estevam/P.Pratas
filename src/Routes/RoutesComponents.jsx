import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ItemDetail from "../Pages/ItemDetail/ItemDetail";
import CartView from "../Components/CartView/CartView";
import Aneis from "../Pages/Aneis/Aneis";

const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ItemDetail/:id" element={<ItemDetail />} />
      <Route path="/Aneis/:categoryId" element={<Aneis />} />
      <Route path="/cartView" element={<CartView />} />
    </Routes>
  );
};

export default RoutesComponents;
