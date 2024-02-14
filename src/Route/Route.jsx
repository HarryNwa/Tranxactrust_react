import Home from "../pages/Home/Index";
import Layout from "../Layout/Index";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Trustmonie from "../Products/Trustmonie";
import About from "../pages/AboutUs/AboutUs";
import Investrust from "../Products/Investrust";

export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element:<Home/>,
            },
            {
                path: "home",
                element:<Home/>,
            },
            {
                path: "login",
                element: <Login/>,
            },

            {
                path: "/about",
                element: <About />,
            },

            {
                path: "/investrust",
                element: <Investrust /> 
                // <a href="#intro" />,
            },
        ]
        
    }, 

    // {
    //     path: '/login',
    //     element: <Login/>,
    // },

    {
        path: '/signup',
        element: <Signup />
    },

    {
        path: '/trustmonie',
        element: <Trustmonie />
    }
]