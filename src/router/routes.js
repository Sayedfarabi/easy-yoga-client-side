import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import AddReview from "../components/reviews/AddReview";
import MyReview from "../components/reviews/MyReview";
import Reviews from "../components/reviews/Reviews";
import Root from "../components/Root";
import AddService from "../components/services/AddService";
import Services from "../components/services/Services";
import Login from "../components/user/Login";
import Profile from "../components/user/Profile";
import Register from "../components/user/Register";
import Setting from "../components/user/Setting";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: "/",
                element: <Home></Home>,


            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch("https:/easy-yoga-server-side.vercel.app/")

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
                element: <Services></Services>,
                loader: () => fetch("https://easy-yoga-server-side.vercel.app/services")

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
            },
            {
                path: "add-review",
                element: <AddReview></AddReview>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/setting",
                element: <Setting></Setting>
            },
        ]


    }

])

export default router;