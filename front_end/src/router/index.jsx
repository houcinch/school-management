import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login"
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

export const LOGIN_ROUTE = '/login'
export const STUDENT_DASHBOARD_ROUTE = '/student/dashboard'
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
                    path: LOGIN_ROUTE,
                    element: <Login />
                },
                {
                    path: STUDENT_DASHBOARD_ROUTE,
                    element: 'Student Dashboard'
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
