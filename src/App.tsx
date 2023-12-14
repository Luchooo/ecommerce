import { CartProvider } from "@my-contexts/CartContext.tsx";
import { ProductProvider } from "@my-contexts/ProductContext.tsx";
import { SidebarProvider } from "@my-contexts/SidebarContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/index.tsx";
import { Header } from "./components/Header/index.tsx";
import { Sidebar } from "./components/Sidebar/index.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { ProductDetailsPage } from "./pages/ProductDetailsPage.tsx";

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
