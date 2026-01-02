import Login from "@/Login/index.jsx";
import LayoutPage from "@/layout/index.jsx";
import Home from "@/pages/Home/index.jsx";
import Students from "@/pages/Student/index.jsx";
import Teacher from "@/pages/Teacher/index.jsx";
import Course from "@/pages/Course/index.jsx";
import TeacherInfo from "@/pages/Teacher/TeacherInfo/index.jsx";
import CoursesTaught from "@/pages/Teacher/CoursesTaught/index.jsx";


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
        children: [
            {
                path: "/home/index",
                name: "home_index",
                element: <Home/>,
            },
            {
                path: "/home/course",
                name: "home_course",
                element: <Course/>,
            },
            {
                path: "/home/student",
                name: "home_student",
                element: <Students/>,
            },
            {
                path: "/home/teacher",
                name: "home_teacher",
                element: <Teacher/>,
                children: [
                    {
                        path: "/home/teacher/info",
                        name: "home_teacher_info",
                        element: <TeacherInfo/>,
                    },
                    {
                        path: "/home/teacher/course",
                        name: "home_teacher_course",
                        element: <CoursesTaught/>,
                    },
                ]
            },

        ]
    }
]
