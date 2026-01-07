import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@/index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

// 创建节点
createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*路由模式*/}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
