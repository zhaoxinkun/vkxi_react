import {Table, Space, Button, Modal, Form, Input, message} from "antd";
import {createStudentDetail, deleteStudentDetail, getStudentList} from "@/api/api.js";
import {dateFilter} from "@/utils/dateFilter.js";
import MyPagination from "@/components/Pagination/MyPagination.jsx";
import {useList} from "@/Hooks/List/useList.jsx";
import {useFormCrudModal} from "@/Hooks/Modal/useFormCrudModal.jsx";

function Student() {

    // 列表数据
    const {
        data: studentData,
        total: studentTotal,
        query: studentQuery,
        setQuery: setStudentQuery,
        reload: reloadStudent,
        loading: studentLoading,
    } = useList(getStudentList);

    const {
        open: studentOpen,
        modalType: studentModalType,
        record: studentRecord,
        openAdd: openStudentAdd,
        openEdit: openStudentEdit,
        close: closeStudentModal,
        form: studentForm
    } = useFormCrudModal();

    // 列表表头
    const columns = [
        {
            title: '学生姓名',
            dataIndex: 'account',
            key: 'account',
        },
        {
            title: '学生密码',
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
                    <Button onClick={() => openStudentEdit(record)}>编辑</Button>
                    <Button danger onClick={() => {
                        handelDel(record)
                    }}>删除</Button>
                </Space>
            ),
        },
    ];


    const handleOk = () => {
        closeStudentModal();
        studentForm.validateFields().then(async (values) => {
            let res = (await createStudentDetail({...studentRecord, ...values})).data
            if (res.code === 20000) {
                closeStudentModal();
                await reloadStudent()
            } else {
                message.error(res.msg || "操作失败")
            }
        })
    };

    const handleCancel = () => {
        closeStudentModal();
    };

    // 删除学生
    const handelDel = async (record) => {
        let res = (await deleteStudentDetail(record.id)).data
        if (res.code === 20000) {
            message.success("删除成功")
            await reloadStudent()
        } else {
            message.error(res.msg || "删除失败")
        }
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={studentData}
                pagination={false}
                bordered
                rowKey="id"
                style={{
                    marginBottom: 20
                }}
                title={() => (
                    <Button type="primary" onClick={() => openStudentAdd()}>添加学生</Button>
                )}
            />
            <MyPagination
                total={studentTotal} // 分页器总条数
                current={studentQuery.pageNo} // 当前页码
                pageSize={studentQuery.pageSize} // 每页条数
                onChange={(page, size) => {
                    setStudentQuery({
                        ...studentQuery,
                        pageNo: page,
                        pageSize: size
                    })
                }}
            />
            <Modal
                title={studentModalType === "add" ? "添加学生" : "编辑学生"}
                open={studentOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={studentForm} layout="vertical">
                    <Form.Item name="account" label="学生姓名">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="password" label="学生密码">
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    )
}

export default Student;