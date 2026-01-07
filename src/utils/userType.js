const typekey = "userType";

// 管理员1
// 老师2
// 学生3
export function getUserType() {
    return sessionStorage.getItem(typekey);
}

export function setUserType(type) {
    sessionStorage.setItem(typekey, type);
}

export function clearUserType() {
    sessionStorage.removeItem(typekey);
}
