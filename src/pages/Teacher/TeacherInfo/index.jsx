import {Table, Space, Button, Modal, Form, Input, DatePicker, message, Pagination} from "antd";
import {useEffect, useState} from "react";
import {createTeacherDetail, deleteTeacherDetail, getTeacherList} from "@/api/api.js";
import {dateFilter} from "@/utils/dateFilter.js";
import dayjs from "dayjs";
import MyPagination from "@/components/Pagination/MyPagination.jsx";

function TeacherInfo() {

    // 列表数据
    const [data, setData] = useState([]);

    // 列表表头
    const columns = [
        {
            title: '教师姓名',
            dataIndex: 'account',
            key: 'account',
        },
        {
            title: '教师密码',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: '加入时间',
            dataIndex: 'created',
            key: 'created',
            render: (_, {created}) => (
                dateFilter(created)
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => showModal(record, 'edit')}>编辑</Button>
                    <Button danger onClick={() => {
                        handelDel(record)
                    }}>删除</Button>
                </Space>
            ),
        },
    ];

    // query数据
    const [query, setQuery] = useState({
        pageNo: 1,
        pageSize: 10
    });
    // 请求数据
    const queryData = async () => {
        let res = (await getTeacherList(query)).data;

        console.log(res)
        setData(res.data.list);
        setTotal(res.data.rows || 0);
    }
    // 获取教师列表
    useEffect(() => {
        queryData()
    }, [query]);

    // 分页器总条数
    const [total, setTotal] = useState(0);

    // modal
    const [modalOpen, setModalOpen] = useState(false);
    // modal 类型
    const [modalType, setModalType] = useState('add');

    // modal的表单
    const [form] = Form.useForm();

    // 单行数据
    const [record, setRecord] = useState(null);

    const showModal = (record, type) => {
        setModalType(type);
        setModalOpen(true);
        setRecord(record);
        const value = type === "add" ? form.resetFields() : {
            ...record,
            created: record.created ? dayjs(record.created) : null
        };
        form.setFieldsValue(value); //设置form的值
    };

    const handleOk = () => {
        setModalOpen(false);
        form.validateFields().then(async (values) => {
            let res = (await createTeacherDetail({...record, ...values})).data
            if (res.code === 20000) {
                setModalOpen(false);
                queryData()
            } else {
                message.error(res.msg || "操作失败")
            }
        })
    };

    const handleCancel = () => {
        setModalOpen(false);
    };

    // 删除教师
    const handelDel = async (record) => {
        let res = (await deleteTeacherDetail(record.id)).data
        if (res.code === 20000) {
            message.success("删除成功")
            setQuery(prev => ({
                ...prev,
                pageNo: 1
            }));
        } else {
            message.error(res.msg || "删除失败")
        }
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                rowKey="id"
                style={{
                    marginBottom: 20
                }}
                title={() => (
                    <Button type="primary" onClick={() => showModal(null, 'add')}>添加老师</Button>
                )}
            />

            <Pagination
                total={total} // 分页器总条数
                showSizeChanger // 显示分页器每页条数选择器
                showQuickJumper // 显示分页器快速跳转
                showTotal={total => `Total ${total} items`} // 分页器总条数显示
                defaultCurrent={query.pageNo}
                defaultPageSize={query.pageSize}
                onChange={(page, size) => {
                    console.log("分页器的页码", page, size)
                    // prev 是上一次的 query
                    setQuery(prev => ({
                        pageNo: page,
                        pageSize: size
                    }));
                }}
            />

            下边是自己封装的分页器
            <MyPagination total={total}
                          current={query.pageNo}
                          pageSize={query.pageSize}
                          onChange={(page, size) => {
                              setQuery({
                                  pageNo: page,
                                  pageSize: size
                              });
                          }}></MyPagination>


            <Modal
                title={modalType === 'add' ? '添加老师' : '更新老师'}
                closable={{'aria-label': 'Custom Close Button'}}
                open={modalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={modalType === 'add' ? '添加' : '更新'}
                cancelText="取消"
            >
                <Form
                    form={form}
                    style={{maxWidth: 600}}
                >
                    <div>
                        <Form.Item label="教师姓名"
                                   name="account"
                                   rules={[{required: true, message: 'Please input!'}]}>
                            <Input placeholder="请输入教师姓名"/>
                        </Form.Item>
                        <Form.Item
                            label="教师密码"
                            name="password"
                            rules={[{required: true, message: 'Please input!'}]}
                        >
                            <Input.Password placeholder="请输入教师密码"/>
                        </Form.Item>

                        <Form.Item label="创建日期" name="created">
                            <DatePicker placeholder='请输入日期'/>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default TeacherInfo;