import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login"
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter(
    [

        {
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/Login',
                    element: <Login />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '*',
                    element: <NotFound />
                }
            ]
        }
        /*         
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
                } */
    ]
)
