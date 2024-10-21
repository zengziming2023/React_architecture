import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getProductList} from "./network/api/sysApi.ts";
import {isSuccess} from "./network/response/BLResponse.ts";
import VConsole from 'vconsole';

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const vConsole = new VConsole();

        return () => {
            vConsole.destroy()
        }
    }, [])

    const jump2Page1 = () => {
        console.log('jump2Page1')
    }

    const testNetwork = async () => {
        const productListRsp = await getProductList()
        if (!(productListRsp && isSuccess(productListRsp))) {
            console.error("error: " + productListRsp)
            return
        }
        console.log('productListRsp: ' + JSON.stringify(productListRsp))
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={jump2Page1}>jump to page 1</button>
                <button onClick={testNetwork}>test network</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
