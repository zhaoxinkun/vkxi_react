import {useEffect, useState} from "react";

/**
 * 通用列表 Hook（最小版）
 *
 * @param {Function} request - 接收 query，返回 Promise
 * @param {Object} options
 */
export function useList(request, options = {}) {
    const {
        defaultQuery = {pageNo: 1, pageSize: 10},
    } = options;

    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [query, setQuery] = useState(defaultQuery);
    const [loading, setLoading] = useState(false);

    const load = async () => {
        setLoading(true);
        try {
            const res = (await request(query)).data;
            setData(res.data.list);
            setTotal(res.data.rows || 0);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, [query]);

    return {
        data,
        total,
        query,
        setQuery,
        loading,
        reload: load,
    };
}
