import {Button, DatePicker, Form, Input, message, Modal, notification, Space, Table, Pagination} from 'antd';
import {useEffect, useState} from "react";
import {createCourseDetail, deleteCourseDetail, getCourseList} from "@/api/api.js";
import {dateFilter} from "@/utils/dateFilter.js";
import dayjs from 'dayjs';


/**
 * 列表配置
 * title 列表标题
 * dataIndex 数据索引
 * key 列表键值
 * render 渲染函数 接受三个参数
 * text 列表项文本
 * record 列表项数据
 * index 列表项索引
 */


export function Course() {

    // 列表数据
    const [data, setData] = useState([]);

    const [row, setRow] = useState(); //每一行的数据对象

    const [total, setTotal] = useState(0); // 总条数

    // 弹窗是否显示
    const [modalOpen, setModalOpen] = useState(false);

    // 弹窗显示
    const showModal = (record, type) => {
        setMode(type) //保存类型,用于展示不同的title
        setModalOpen(true); //打开modal框
        setRow(record); //保存行数据

        const value = type === "add" ? form.resetFields() : {
            ...record,
            created: record.created ? dayjs(record.created) : null
        };
        form.setFieldsValue(value); //设置form的值
    };

    // 弹窗确认
    const handleOk = async () => {
        form.validateFields().then(async (values) => {
            let res = (await createCourseDetail({...row, ...values})).data
            if (res.code === 20000) {
                setModalOpen(false);
                queryData()
            } else {
                message.error(res.msg || "操作失败")
            }
        })
    };

    // 弹窗取消
    const handleCancel = () => {
        setModalOpen(false);
        form.resetFields();
    };

    // model的类型
    const [mode, setMode] = useState('add')

    // modal里的form配置
    const [form] = Form.useForm();

    // 删除数据
    const handleDel = (id) => {
        deleteCourseDetail(id).then(res => {
            if (res.data.code === 20000) {
                notification.open({
                    title: '删除成功',
                    duration: 1,
                    type: 'info'
                });
                queryData()
            } else {
                message.error(res.msg || "操作失败")
            }
        })
    }


    const columns = [
        {
            title: '教师名字',
            dataIndex: 'name',
        },
        {
            title: '创建时间',
            dataIndex: 'created',
            render: (text) => (
                `${dateFilter(text)} `
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => showModal(record, "edit")}>编辑</Button>
                    <Button danger onClick={() => handleDel(record.id)}>删除</Button>
                </Space>
            ),
        },
    ];

    // 查询数据
    const [listQuery, setListQuery] = useState({
        pageNo: 1,
        pageSize: 10,
    });

    // 获取课程列表信息
    const queryData = async () => {
        let res = (await getCourseList(listQuery)).data;
        if (res.code === 20000) {
            setData(res.data.list || [])
            setTotal(res.data.rows || 0)
        }
    }

    useEffect(() => {
        // 获取课程列表信息
        queryData()
    }, [listQuery])

    return (
        <div>
            <Table columns={columns}
                   dataSource={data}
                   bordered
                   style={{marginBottom: 20}}
                   rowKey="id"
                   pagination={false}   // 👈 关键就在这里
                   title={() => (
                       <Button type="primary" onClick={() => showModal(null, 'add')}>创建课程</Button>
                   )}
            />

            <Pagination
                total={total}
                showSizeChanger
                showQuickJumper
                showTotal={total => `Total ${total} items`}
                onChange={(page, size) => {
                    setListQuery(() => ({
                        pageNo: page,
                        pageSize: size
                    }));
                }}
            />

            <Modal
                title={mode === 'add' ? '新增课程' : '编辑课程'}
                closable={{'aria-label': 'Custom Close Button'}}
                open={modalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText={'取消'}
                okText={mode === 'add' ? '新增' : '更新'}
            >
                <Form
                    form={form}
                    style={{maxWidth: 600}}
                >
                    <div>
                        <Form.Item label="课程名称"
                                   name="name"
                                   rules={[{required: true, message: 'Please input!'}]}>
                            <Input placeholder="请输入课程名称"/>
                        </Form.Item>
                        <Form.Item
                            label="创建日期"
                            name="created"
                            rules={[{required: true, message: 'Please input!'}]}
                        >
                            <DatePicker placeholder="请选择创建日期" style={{width: '100%'}}/>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>

        </div>
    );
}

export default Course;