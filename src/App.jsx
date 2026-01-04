import '@/css/App.css'
import {RouterConfig} from "./router/config.jsx";
import {App as AntdApp} from 'antd';


function App() {

    return (
        <AntdApp>
            <div className="App">
                <h1>CI/CD WORKS - 2026-01-04 22:45</h1>
                <RouterConfig/>
            </div>
        </AntdApp>
    )
}

export default App
