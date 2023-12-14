import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { ProductDetailsPage } from "./pages/ProductDetailsPage.tsx";
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
              <Route path="/" element={<HomePage />} />
              <Route
                path="/products/:productId"
                element={<ProductDetailsPage />}
              />
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
