import {useState, useEffect} from 'react'
import {Button, Form, Input, Select, Card, notification, Upload} from 'antd';
import {getCourseAll, materialCreate} from '@/api/api'
import {InboxOutlined} from '@ant-design/icons';

export default function DataUpload() {
    // 表单
    const [form] = Form.useForm();

    // 所有课程
    const [allCourse, setAllCourse] = useState();
    //请求
    const queryData = async () => {
        let {data: {data: c}} = await getCourseAll();
        setAllCourse(c.map(v => ({...v, label: v.name, value: v.id})));
    }
    useEffect(() => {
        queryData();
    }, [])

    //提交
    const submit = () => {
        //表单校验
        form.validateFields()
            .then(async (value) => {
                if (value) {
                    console.log("🚀 ~  ~ value: ", value);

                    let formData = new FormData();
                    formData.append('name', value.name);
                    formData.append('course_id', value.course_id);
                    formData.append('file', value.file[0].originFileObj);
                    console.log("🚀 ~  ~ formData: ", formData);

                    //请求
                    let {data: {code}} = await materialCreate(formData);
                    if (code === 20000) {
                        //跳转
                        notification.open({
                            title: '提交成功',
                            duration: 1,
                            type: 'info'
                        });

                        form.resetFields();
                    } else {
                        notification.open({
                            title: '提交失败',
                            duration: 1,
                            type: 'error'
                        });
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    // 上传前校验
    const beforeUpload = (file) => {
        const fileSize = file.size / 1024 / 1024 <= 1;
        if (!fileSize) {
            notification.open({
                title: '上传文件大小不能超过1MB',
                duration: 1,
                type: 'error'
            });

            return Upload.LIST_IGNORE //不符合就不能选择文件
        }
        return false;
    }


    return (
        <Card title="资料上传">

            <Form
                form={form}
                name="control-hooks"
                style={{
                    maxWidth: '100%', height: '100%'
                }}
            >

                <Form.Item
                    name="course_id"
                    label="选择课程"
                    rules={[
                        {
                            required: true,
                            message: "请选择课程"
                        },
                    ]}
                >
                    <Select
                        placeholder="请选择课程"
                        style={{
                            width: 500
                        }}
                        options={allCourse}
                    >
                    </Select>
                </Form.Item>

                <Form.Item
                    name="name"
                    label="文件名称"
                    rules={[
                        {
                            required: true,
                            message: "请输入文件名称"
                        },
                    ]}
                >
                    <Input
                        placeholder="请输入文件名称"
                        style={{
                            width: 500
                        }}
                    >
                    </Input>
                </Form.Item>

                {/* 上传 */}
                <Form.Item label="上传文件">
                    <Form.Item name="file" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="file"
                                        accept=".xlsx,.xls,.rar,.mp4"
                                        beforeUpload={beforeUpload}
                                        multiple
                                        style={{
                                            width: 500
                                        }}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined/>
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>

                <Form.Item label="" onClick={submit}>
                    <Button type="primary">资料上传</Button>
                </Form.Item>

            </Form>
        </Card>
    )
}