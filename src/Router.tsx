import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
const HomePage = lazy(() => import("./pages/HomePage"))
const ShopPage = lazy(() => import("./pages/ShopPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const ProductInformationPage = lazy(
  () => import("./pages/ProductInformationPage")
)
const CartPage = lazy(() => import("./pages/CartPage"))
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"))
const Wishlist = lazy(() => import("./pages/Wishlist"))
const ErrorPage = lazy(() => import("./pages/ErrorPage"))
const Protected = lazy(() => import("./pages/Protected"))
const MobileLoginPage = lazy(() => import("./pages/MobileLoginPage"))

import { ProductProvider } from "./context/ProductsContext"
import { FeedbackProvider } from "./context/FeedbackContext"
import { SpecificProductProvider } from "./context/SpecificProductContext"
import { BillingProvider } from "./context/BillingContext"
import { ReviewsProvider } from "./context/ReviewsContext"

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProductProvider>
            <HomePage />
          </ProductProvider>
        }
      />
      <Route
        path="/shop"
        element={
          <ProductProvider>
            <ShopPage />
          </ProductProvider>
        }
      />
      <Route
        path="/contact"
        element={
          <FeedbackProvider>
            <ContactPage />
          </FeedbackProvider>
        }
      />
      <Route
        path="/product/:productId"
        element={
          <SpecificProductProvider>
            <ReviewsProvider>
              <ProductInformationPage />
            </ReviewsProvider>
          </SpecificProductProvider>
        }
      />
      <Route path="/cart" element={<CartPage />} />
      <Route
        path="/checkout"
        element={
          <BillingProvider>
            <CheckoutPage />
          </BillingProvider>
        }
      />
      <Route
        path="/wishlist"
        element={
          <Protected title="Wishlist">
            <Wishlist />
          </Protected>
        }
      />
      <Route path="/login" element={<MobileLoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
export default Router
