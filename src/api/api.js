import http from './http'

// 用户登陆
export const userLogin = data => http.post('/user/login', data)

// 用户退出
export const userLogout = () => http.post('/user/logout')


// 课程管理·······
// 获取课程列表信息
export const getCourseList = params => http.get('/course/list', params)

// 创建或更新课程列表数据
export const createCourseDetail = data => http.post('/course/create-update', data)

// 删除课程列表数据
export const deleteCourseDetail = id => http.delete(`/course/delete/${id}`)


// 教师管理......
// 获取教师列表信息
export const getTeacherList = data => http.get(`/teacher/list`, data);

//添加 编辑 老师
export const createTeacherDetail = data => http.post(`teacher/create-update`, data);

//删除老师
export const deleteTeacherDetail = id => http.delete(`teacher/removeUser/${id}`);