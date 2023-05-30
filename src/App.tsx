import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import ShippingAddress from "./pages/ShippingAddress"
import Payment from "./pages/Payment"
import Success from "./pages/Success"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/shop/:id",
        element: <ProductDetails />
      },
      {
        path:"/checkout/shipping",
        element: <ShippingAddress />
      },
      {
        path: "/checkout/payment",
        element: <Payment />
      },
      {
        path: "/success",
        element: <Success />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App