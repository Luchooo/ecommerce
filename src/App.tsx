import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { Home } from "./pages/Home.tsx";
import { ProductDetails } from "./pages/ProductDetails.tsx";
import { Header } from "./components/Header/index.tsx";
import { Footer } from "./components/Footer/index.tsx";
import { Sidebar } from "./components/Sidebar/index.tsx";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import { SidebarProvider } from "./contexts/SidebarContext.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";

function App() {
  return (
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Sidebar />
            <Footer />
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  );
}

export default App;
