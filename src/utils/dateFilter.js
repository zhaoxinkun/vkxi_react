// 年月处理
export function dateFilter(date) {
    const data = new Date(date);
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();
    return `${year}-${month}-${day}`;
}

// 时间处理
export function timeFilter(date) {
    const data = new Date(date);
    const dateTime = data.toLocaleDateString();
    // return `${dateTime}`;
}
