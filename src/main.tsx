import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import { LoadingProvider } from "./context/LoadingContext.tsx"
import ShopPage from "./pages/ShopPage.tsx"
import AboutPage from "./pages/AboutPage.tsx"
import ContactPage from "./pages/ContactPage.tsx"
import { ItemsDisplayProvider } from "./context/ItemsDisplayContext.tsx"
import Loading from "./components/Loading.tsx"

import ProductInformationPage from "./pages/ProductInformationPage.tsx"
import { SpecificProductProvider } from "./context/SpecificProductContext.tsx"
import { CartProvider } from "./context/CartContext.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
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
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <CartProvider>
        <ItemsDisplayProvider>
          <LoadingProvider>
            <RouterProvider router={router} />
          </LoadingProvider>
        </ItemsDisplayProvider>
      </CartProvider>
    </Suspense>
  </React.StrictMode>
)
