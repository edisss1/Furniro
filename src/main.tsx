import ReactDOM from "react-dom/client"
import "./index.css"

import { HashRouter } from "react-router-dom"
import { LoadingProvider } from "./context/LoadingContext.tsx"
import { ItemsDisplayProvider } from "./context/ItemsDisplayContext.tsx"
import { CartProvider } from "./context/CartContext.tsx"
import ErrorBoundary from "./components/utilityComponents/ErrorBoundary.tsx"
import { AuthProvider } from "./context/AuthContext.tsx"
import { QueryClientProvider } from "@tanstack/react-query"
import client from "./react-query-client/client.ts"
import { WishlistProvider } from "./context/WishlistContext.tsx"
import Router from "./Router.tsx"
import { Suspense } from "react"
import Loading from "./components/utilityComponents/Loading.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <HashRouter>
      <ErrorBoundary>
        <AuthProvider>
          <WishlistProvider>
            <QueryClientProvider client={client}>
              <CartProvider>
                <ItemsDisplayProvider>
                  <LoadingProvider>
                    <Router />
                  </LoadingProvider>
                </ItemsDisplayProvider>
              </CartProvider>
            </QueryClientProvider>
          </WishlistProvider>
        </AuthProvider>
      </ErrorBoundary>
    </HashRouter>
  </Suspense>
)
