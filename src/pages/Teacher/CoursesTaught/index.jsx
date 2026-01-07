import {Button, Card, DatePicker, Form, Input, notification, Select} from "antd";
import styles from '@/style/form.module.scss';
import {useEffect, useState} from "react";
import {getCourseAll, getTeacherAll, teacherCourseRel} from "@/api/api.js";
import {useNavigate} from "react-router-dom";

function CoursesTaught() {

    // form表单
    const [form] = Form.useForm();

    // 所有的课程
    const [allCourse, setAllCourse] = useState();
    // 所有的老师
    const [allTeacher, setAllTeacher] = useState();

    const Navigator = useNavigate();

    // 请求数据
    const queryData = async () => {
        let {data: {data: courseData}} = await getCourseAll();
        let {data: {data: teacherData}} = await getTeacherAll();
        // console.log(courseData, teacherData);
        setAllCourse(courseData);
        setAllTeacher(teacherData);
    }

    useEffect(() => {
        queryData();
    }, []);

    const onFinish = values => {
        // console.log(values);
    };

    //提交
    const submit = () => {
        //表单校验
        form.validateFields()
            .then(async (value) => {
                if (value) {
                    //请求
                    let {data: {code}} = await teacherCourseRel(value);
                    if (code === 20000) {
                        //跳转
                        notification.open({
                            title: '提交成功',
                            duration: 1,
                            type: 'info'
                        });
                        form.resetFields();
                        Navigator('/home/course');
                    }
                }
            })
            .catch(err => {
                notification.open({
                    title: '提交失败',
                    duration: 1,
                    type: 'error'
                });
            })
    }
    return (
        <Card title="所受课程" variant="borderless">
            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{width: '100%'}}

            >
                <Form.Item
                    name="teacher_id"
                    label="选择教师"
                    rules={[{required: true, message: "请选择教师"}]}
                    className={styles.formItem}
                >
                    <Select
                        allowClear
                        placeholder="Select a teacher"
                        options={allTeacher?.map(item => ({
                            label: item.account,
                            value: item.id,
                        })) || []}
                    />
                </Form.Item>
                <Form.Item
                    name="course_id"
                    label="选择课程"
                    rules={[{required: true, message: "请选择课程"}]}
                    className={styles.formItem}
                >
                    <Select
                        allowClear
                        placeholder="Select a option and change input text above"
                        options={allCourse?.map(item => ({
                            label: item.name,
                            value: item.id,
                        })) || []}
                    />
                </Form.Item>
                <Form.Item label="授课日期" name="time_start" className={styles.formItem}>
                    <DatePicker placeholder='请输入日期' style={{
                        width: 500
                    }}/>
                </Form.Item>

                <Form.Item label="" onClick={submit}>
                    <Button type="primary">提交</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default CoursesTaught;