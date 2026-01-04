import "@/css/login.css"
import {Button, Form, Input, Checkbox, Flex, App} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {userLogin} from "@/api/api.js";
import md5 from "md5";
import {setToken} from "@/utils/toekn.js";
import {useState} from "react";


function Login() {

    // 路由导航
    const navigate = useNavigate();
    // 表单数据获取
    const [form] = Form.useForm()// ✅ 顶层

    const {message} = App.useApp(); // ✅ v6 使用正解

    const [loading, setLoading] = useState(false); //防止多次点击发送登陆请求

    const onFinish = async (value) => {

        setLoading(true);
        const {account, password} = value;

        try {
            // 获取结果
            let res = (await userLogin({
                account,
                password: md5(password),
            })).data;

            // 判断进入
            if (res.code === 20000) {
                setToken(res.token)
                message.success(res.msg || '登录成功');
                form.resetFields()
                navigate('/home')
            } else {
                message.error(res.msg || '登录失败，请重试');
            }
        } catch (error) {
            message.error('网络异常，请稍后重试');
        } finally {
            setLoading(false);
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
                        initialValues={{
                            account: "admin",
                            password: "admin@123"
                        }}
                        style={{maxWidth: 600}}
                        onFinish={onFinish}
                    >

                        <Form.Item
                            name="account"
                            rules={[
                                {required: true, message: 'Please input your Username!'},
                                {min: 3, message: 'Username must be at least 3 characters long!'}]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder="Username"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {required: true, message: 'Please input your Password!'},
                                {min: 3, message: 'Password must be at least 3 characters long!'}]}
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
                            <Button block type="primary" htmlType="submit" loading={loading}>
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