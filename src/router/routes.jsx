import Login from "@/Login/index.jsx";
import LayoutPage from "@/layout/index.jsx";
import common from "@/router/common.jsx";
import {Navigate} from "react-router-dom";


// 路由数据
const setRouterData = data => {
    return data.map(item => ({
        path: item.url,
        name: item.name,
        meta: {
            title: item.title,
        },
        element: item.element,
        children: item.children && setRouterData(item.children),
    }))
}


// home页面的重定向
const homeRedirect = {
    path: "/home",
    element: <Navigate to="/home/index"/>
}

export const routes = [
    {
        from: "*",
        to: "/login",
    },
    {
        path: "/login",
        name: "login",
        element: <Login/>,
    },
    {
        path: "/home",
        name: "home",
        element: <LayoutPage/>,
        children: [homeRedirect, ...setRouterData(common)],
    },
    // 旧的路由数据
    // {
    //     path: "/home",
    //     name: "home",
    //     element: <LayoutPage/>,
    //     children: [
    //         {
    //             path: "/home/index",
    //             name: "home_index",
    //             element: <Home/>,
    //         },
    //         {
    //             path: "/home/course",
    //             name: "home_course",
    //             element: <Course/>,
    //         },
    //         {
    //             path: "/home/student",
    //             name: "home_student",
    //             element: <Students/>,
    //         },
    //         {
    //             path: "/home/teacher",
    //             name: "home_teacher",
    //             element: <Teacher/>,
    //             children: [
    //                 {
    //                     path: "/home/teacher/info",
    //                     name: "home_teacher_info",
    //                     element: <TeacherInfo/>,
    //                 },
    //                 {
    //                     path: "/home/teacher/course",
    //                     name: "home_teacher_course",
    //                     element: <CoursesTaught/>,
    //                 },
    //             ]
    //         },
    //         {
    //             path: '/home/information',
    //             name: 'information',
    //             element: <InformationsCom/>,
    //             children: [
    //                 {
    //                     path: '/home/information/dataUpload',
    //                     name: 'dataUpload',
    //                     element: <DataUpload/>,
    //                 },
    //                 {
    //                     path: '/home/information/dataDownload',
    //                     name: 'dataDownload',
    //                     element: <DataDownload/>
    //                 }
    //             ]
    //
    //         },
    //
    //     ]
    // }
]
