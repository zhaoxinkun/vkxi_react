import {getUserType} from "@/utils/userType.js";

// 侧边导航数据的过滤
export function getPermission(data) {
    const type = getUserType();
    if (type === '2') {
        return data.filter(item => item.name !== 'student');
    } else if (type === '3') {
        return data.filter(item => item.type === 'teacher');
    } else {
        return data;
    }
}