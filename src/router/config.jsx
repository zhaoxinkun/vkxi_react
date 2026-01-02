import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "@/router/routes.jsx";


function RouterData(routesData) {
    return routesData.map(route =>
        route.path
            ?
            <Route key={route.path} path={route.path} element={route.element}>
                {route.children && RouterData(route.children)}
            </Route>
            :
            <Route path={route.from} element={<Navigate to={route.to}/>}></Route>
    )
}

export const RouterConfig = () => {
    return (
        <>
            <Routes>

                {
                    RouterData(routes)
                }


                {/*普通遍历*/}
                {/*{routes.map(route => (<Route key={route.path} path={route.path} element={route.element}/>*/}
                {/*))}*/}

                {/*普通写法*/}
                {/*<Route path="/login" element={<Login/>}></Route>*/}
                {/*<Route path="/home" element={<LayoutPage/>}>*/}
                {/*    <Route path="index" element={<Home/>}></Route>*/}
                {/*    <Route path="course" element={<Course/>}></Route>*/}
                {/*    <Route path="student" element={<Student/>}></Route>*/}
                {/*    <Route path="teacher" element={<Teacher/>}>*/}
                {/*        <Route path="info" element={<TeacherInfo/>}></Route>*/}
                {/*        <Route path="course" element={<CoursesTaught/>}></Route>*/}
                {/*    </Route>*/}
                {/*</Route>*/}


            </Routes>

        </>
    )
}