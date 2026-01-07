import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "@/router/routes.jsx";
import {getToken} from "@/utils/token.js";


function RouterData(routesData) {
    return routesData.map(route =>
        route.path
            ?
            <Route key={route.path} path={route.path} element={<Auth {...route}>{route.element}</Auth>}>
                {route.children && RouterData(route.children)}
            </Route>
            :
            <Route path={route.from} element={<Navigate to={route.to}/>}></Route>
    )
}

//是否有token，如果有正常跳转，如果没有跳转login
function Auth(props) {
    //如果是登录不需要判断
    if (props.path === '/login') return props.children;
    if (getToken()) {
        return props.children;
    } else {
        return <Navigate to='/login'/> //重定向登录
    }
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