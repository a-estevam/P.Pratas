import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import RoutesComponents from "./Routes/RoutesComponents";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "./Context/CartProvider.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <RoutesComponents />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
