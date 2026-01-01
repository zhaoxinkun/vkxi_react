import Login from "@/pages/Login/index.jsx";
import Home from "@/pages/Home/index.jsx";

export const routes = [
    {
        path: "/login",
        name: "login",
        element: <Login/>,
    },
    {
        path: "/home",
        name: "home",
        element: <Home/>,
    }
]
