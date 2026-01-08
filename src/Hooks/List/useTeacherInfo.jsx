import {useEffect, useState} from "react";
import {getTeacherList} from "@/api/api.js";

export function useTeacherList() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    const [query, setQuery] = useState({
        pageNo: 1,
        pageSize: 10,
    });

    const queryData = async () => {
        const res = (await getTeacherList(query)).data;
        setData(res.data.list);
        setTotal(res.data.rows || 0);
    };

    useEffect(() => {
        queryData();
    }, [query]);

    return {
        data,
        total,
        query,
        setQuery,
        reload: queryData,
    };
}
