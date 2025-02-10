import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";

let router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/in/:email',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    }
]);

export default router;