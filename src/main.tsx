import { lazy, Suspense } from "react"
const HomePage = lazy(() => import("./pages/HomePage.tsx"))
const ShopPage = lazy(() => import("./pages/ShopPage.tsx"))
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"))
const ProductInformationPage = lazy(
  () => import("./pages/ProductInformationPage.tsx")
)
const CheckoutPage = lazy(() => import("./pages/CheckoutPage.tsx"))
const CartPage = lazy(() => import("./pages/CartPage.tsx"))
const ErrorPage = lazy(() => import("./pages/ErrorPage.tsx"))
const Wishlist = lazy(() => import("./pages/Wishlist.tsx"))
const Protected = lazy(() => import("./pages/Protected.tsx"))
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoadingProvider } from "./context/LoadingContext.tsx"
import { ItemsDisplayProvider } from "./context/ItemsDisplayContext.tsx"
import { SpecificProductProvider } from "./context/SpecificProductContext.tsx"
import { CartProvider } from "./context/CartContext.tsx"
import ErrorBoundary from "./components/utilityComponents/ErrorBoundary.tsx"
import { BillingProvider } from "./context/BillingContext.tsx"
import { ProductProvider } from "./context/ProductsContext.tsx"
import { FeedbackProvider } from "./context/FeedbackContext.tsx"
import { AuthProvider } from "./context/AuthContext.tsx"
import { QueryClientProvider } from "@tanstack/react-query"
import client from "./react-query-client/client.ts"
import { WishlistProvider } from "./context/WishlistContext.tsx"
import MobileLoginPage from "./pages/MobileLoginPage.tsx"
import Loading from "./components/utilityComponents/Loading.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductProvider>
          <HomePage />
        </ProductProvider>
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductProvider>
          <ShopPage />
        </ProductProvider>
      </Suspense>
    ),
  },

  {
    path: "/contact",
    element: (
      <Suspense fallback={<Loading />}>
        <FeedbackProvider>
          <ContactPage />
        </FeedbackProvider>
      </Suspense>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <Suspense fallback={<Loading />}>
        <SpecificProductProvider>
          <ProductInformationPage />
        </SpecificProductProvider>
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<Loading />}>
        <CartPage />
      </Suspense>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<Loading />}>
        <BillingProvider>
          <CheckoutPage />
        </BillingProvider>
      </Suspense>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <Suspense fallback={<Loading />}>
        <Protected title="Wishlist">
          <Wishlist />
        </Protected>
      </Suspense>
    ),
  },
  {
    path: "/login",

    element: (
      <Suspense fallback={<Loading />}>
        <MobileLoginPage />
      </Suspense>
    ),
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <ErrorPage />
      </Suspense>
    ),
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <AuthProvider>
      <WishlistProvider>
        <QueryClientProvider client={client}>
          <CartProvider>
            <ItemsDisplayProvider>
              <LoadingProvider>
                <RouterProvider router={router} />
              </LoadingProvider>
            </ItemsDisplayProvider>
          </CartProvider>
        </QueryClientProvider>
      </WishlistProvider>
    </AuthProvider>
  </ErrorBoundary>
)
