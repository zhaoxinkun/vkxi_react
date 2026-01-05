import '@/css/App.css'
import {RouterConfig} from "./router/config.jsx";
import {App as AntdApp} from 'antd';


function App() {

    return (
        <AntdApp>
            <div className="App">
                <RouterConfig/>
            </div>
        </AntdApp>
    )
}

export default App
