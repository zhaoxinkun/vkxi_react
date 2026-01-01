import {Route, Routes} from "react-router-dom";
import {routes} from "./routes.jsx"

export const RouterConfig = () => {
    return (
        <>
            <Routes>
                {routes.map(route => (<Route key={route.path} path={route.path} element={route.element}/>
                ))}
            </Routes>

        </>
    )
}