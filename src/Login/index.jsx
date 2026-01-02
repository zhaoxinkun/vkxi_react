import "@/css/login.css"
import {Button, Form, Input, Checkbox, Flex, App} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";


function Login() {

    // 路由导航
    const navigate = useNavigate();
    // 表单数据获取
    const [form] = Form.useForm()// ✅ 顶层

    const {message} = App.useApp(); // ✅ v6 使用正解

    const onFinish = () => {

        // 显示loading
        const hide = message.loading('登录中...', 0);

        try {

            // 发送接口请求

            // ok提示
            hide()
            message.success('登录成功')
            form.resetFields()
            navigate('/home')

        } catch (err) {
            hide();
            message.error('登录失败，请重试');
            console.log('validateFields error', err)
        }
    };

    return (
        <div className="login">
            <div className="login-content">
                <div className="login-form">
                    <p className="login-title">
                        高校教务管理系统
                    </p>

                    <Form
                        form={form}
                        name="login"
                        initialValues={{remember: true}}
                        style={{maxWidth: 600}}
                        onFinish={onFinish}
                    >

                        <Form.Item
                            name="username"
                            rules={[
                                {required: true, message: 'Please input your Username!'},
                                {min: 6, message: 'Username must be at least 6 characters long!'}]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder="Username"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {required: true, message: 'Please input your Password!'},
                                {min: 6, message: 'Password must be at least 6 characters long!'}]}
                        >
                            <Input prefix={<LockOutlined/>} type="password" placeholder="Password"/>
                        </Form.Item>

                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a href="">Forgot password</a>
                            </Flex>
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Log in
                            </Button>
                            or <a href="">Register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;