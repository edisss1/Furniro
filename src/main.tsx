import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import { LoadingProvider } from "./context/LoadingContext.tsx"
import ShopPage from "./pages/ShopPage.tsx"
import ContactPage from "./pages/ContactPage.tsx"
import { ItemsDisplayProvider } from "./context/ItemsDisplayContext.tsx"
import Loading from "./components/utilityComponents/Loading.tsx"

import ProductInformationPage from "./pages/ProductInformationPage.tsx"
import { SpecificProductProvider } from "./context/SpecificProductContext.tsx"
import { CartProvider } from "./context/CartContext.tsx"
import CartPage from "./pages/CartPage.tsx"
import CheckoutPage from "./pages/CheckoutPage.tsx"
import ErrorBoundary from "./components/utilityComponents/ErrorBoundary.tsx"
import { BillingProvider } from "./context/BillingContext.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import { ProductProvider } from "./context/ProductsContext.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProductProvider>
        <HomePage />
      </ProductProvider>
    ),
  },
  {
    path: "/shop",
    element: (
      <ProductProvider>
        <ShopPage />
      </ProductProvider>
    ),
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/product/:productId",
    element: (
      <SpecificProductProvider>
        <ProductInformationPage />
      </SpecificProductProvider>
    ),
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: (
      <BillingProvider>
        <CheckoutPage />
      </BillingProvider>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <ErrorBoundary>
        <CartProvider>
          <ItemsDisplayProvider>
            <LoadingProvider>
              <RouterProvider router={router} />
            </LoadingProvider>
          </ItemsDisplayProvider>
        </CartProvider>
      </ErrorBoundary>
    </React.StrictMode>
  </Suspense>
)
