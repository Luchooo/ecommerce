import { Footer, Header, Sidebar } from "@components";
import { CartProvider, ProductProvider, SidebarProvider } from "@contexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
