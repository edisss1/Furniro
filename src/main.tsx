import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import { LoadingProvider } from "./context/LoadingContext.tsx"
import ShopPage from "./pages/ShopPage.tsx"
import AboutPage from "./pages/AboutPage.tsx"
import ContactPage from "./pages/ContactPage.tsx"
import { ItemsDisplayProvider } from "./context/ItemsDisplayContext.tsx"

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
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ItemsDisplayProvider>
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </ItemsDisplayProvider>
  </React.StrictMode>
)
