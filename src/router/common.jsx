import {BankOutlined, IdcardOutlined, MenuUnfoldOutlined, SolutionOutlined, UserOutlined} from "@ant-design/icons";
import Home from "@/pages/Home/index.jsx";
import Course from "@/pages/Course/index.jsx";
import Teacher from "@/pages/Teacher/index.jsx";
import TeacherInfo from "@/pages/Teacher/TeacherInfo/index.jsx";
import CoursesTaught from "@/pages/Teacher/CoursesTaught/index.jsx";
import Student from "@/pages/Student/index.jsx";
import InformationsCom from "@/pages/Informations/index.jsx";
import DataUpload from "@/pages/Informations/dataUpload.jsx";
import DataDownload from "@/pages/Informations/dataDownload.jsx";

// 路由和侧边导航的公共数据
export default [
    {title: '管理首页', icon: <UserOutlined/>, url: '/home/index', name: 'index', element: <Home/>},
    {title: '课程管理', icon: <BankOutlined/>, url: '/home/course', name: 'course', element: <Course/>},
    {
        title: '教师管理',
        icon: <IdcardOutlined/>,
        url: '/home/teacher',
        name: 'teacher',
        element: <Teacher/>,
        children: [
            {
                title: '教师信息',
                icon: <UserOutlined/>,
                url: '/home/teacher/teacherInfo',
                name: 'teacherInfo',
                element: <TeacherInfo/>
            },
            {
                title: '所授课程',
                icon: <BankOutlined/>,
                url: '/home/teacher/coursesTaught',
                name: 'coursesTaught',
                element: <CoursesTaught/>
            },
        ]
    },
    {title: '学生管理', icon: <SolutionOutlined/>, url: '/home/student', name: 'student', element: <Student/>},
    {
        title: '资料管理',
        icon: <MenuUnfoldOutlined/>,
        url: '/home/information',
        name: 'information',
        element: <InformationsCom/>,
        children: [
            {
                title: '资料上传',
                icon: <UserOutlined/>,
                url: '/home/information/dataUpload',
                name: 'dataUpload',
                element: <DataUpload/>
            },
            {
                title: '资料下载',
                icon: <BankOutlined/>,
                url: '/home/information/dataDownload',
                name: 'dataDownload',
                element: <DataDownload/>
            },
        ]
    },
]