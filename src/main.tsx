import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    // <StrictMode>     // strict 会导致 useEffect 多次执行。。
    <App/>
    // </StrictMode>,
)
