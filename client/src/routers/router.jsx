import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/Books/CartPage"
import CheckoutPage from "../pages/Books/CheckoutPage";
import BookDetail from "../pages/Books/BookDetail";
import CheckPermissionPage from "./checkPermissionPage";
import OrderPage from "../pages/Books/OrderPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <>
                    <Home />
                </>,
            },
            {
                path: "/orders",
                element: <CheckPermissionPage><OrderPage /></CheckPermissionPage>,
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element: <CheckPermissionPage><CheckoutPage /></CheckPermissionPage>
            },
            {
                path: "/book/:id",
                element: <BookDetail />
            }
        ]
    },
]);

export default router;