import {Space, Table, notification,} from 'antd';
import {useState, useEffect} from 'react';
import {getMaterial} from '@/api/api.js'
import {dateFilter} from '@/utils/dateFilter.js'
import MyPagination from '@/components/Pagination/MyPagination.jsx' //分页组件
import {getToken} from '@/utils/token.js'


function DataDownload() {
    const [data, setData] = useState([]); //列表数据
    const [total, setTotal] = useState(1); //每一页的总数

    const [listQuery, setListQuery] = useState({  //分页数据定义
        pageNo: 1, //当前页面
        pageSize: 10, //条数
    });

    //发送请求
    const queryData = async () => {
        let res = await getMaterial(listQuery);
        setData(res.data.data.list);
        setTotal(res.data.data.rows); //获取总数
    };
    //生命周期勾子
    useEffect(() => {
        queryData();
    }, [listQuery])

    //下载
    const download = record => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', record.path);
        xhr.responseType = 'blob';//字节流
        xhr.setRequestHeader('token', getToken()); //头部携带token
        xhr.send();
        xhr.onload = () => {
            console.log(xhr.response)
            notification.open({
                title: '文件下载成功！',
                duration: 4,
                type: 'info'
            });
            //将blob流读取成一个url
            let urlObject = window.URL;
            let _blob = new Blob([xhr.response]);
            let a = document.createElement('a'); //创建a标签
            a.href = urlObject.createObjectURL(_blob);
            a.download = record.path;
            a.click(); //触发a标签
        }
    }

    //数据列
    const columns = [
        {
            title: '文件名称',
            dataIndex: 'name'
        },
        {
            title: '创建日期',
            dataIndex: 'created',
            //数据格式化
            render: (text, record, index) => <span>{dateFilter(text)}</span>,
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => download(record)}>下载</a>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                rowKey={record => record.id}
                bordered
                style={{marginBottom: 20}}
            />
            <MyPagination
                total={total}
                pageSize={listQuery.pageSize}
                current={listQuery.pageNo}
                onChange={(page, size) => {
                    setListQuery({  //分页数据定义
                        pageNo: page, //当前页面
                        pageSize: size, //条数
                    });
                }}
            />
        </div>
    )
}

export default DataDownload;


