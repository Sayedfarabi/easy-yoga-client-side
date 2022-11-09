import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import MyReview from "../components/reviews/MyReview";
import Reviews from "../components/reviews/Reviews";
import Root from "../components/Root";
import AddService from "../components/services/AddService";
import Services from "../components/services/Services";
import Login from "../components/user/Login";
import Register from "../components/user/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "add-service",
                element: <AddService></AddService>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/my-review",
                element: <MyReview></MyReview>
            },
            {
                path: "review-all",
                element: <Reviews></Reviews>
            }
        ]


    }

])

export default router;