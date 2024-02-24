import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login"
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/Login',
        element: <Login/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
])
