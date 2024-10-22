import {useEffect} from 'react'
import './App.css'
import VConsole from 'vconsole';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routers} from "./routes/routers.ts";

function App() {
    // const [count, setCount] = useState(0)

    useEffect(() => {
        const vConsole = new VConsole();

        return () => {
            vConsole.destroy()
        }
    }, [])

    // const jump2Page1 = () => {
    //     console.log('jump2Page1')
    // }
    //
    // const testNetwork = async () => {
    //     const productListRsp = await getProductList()
    //     if (!(productListRsp && isSuccess(productListRsp))) {
    //         console.error("error: " + productListRsp)
    //         return
    //     }
    //     console.log('productListRsp: ' + JSON.stringify(productListRsp))
    // }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {routers.map(routerProps => <Route key={routerProps.path} {...routerProps}/>)}
                </Routes>
            </BrowserRouter>


            {/*<div>*/}
            {/*    <a href="https://vitejs.dev" target="_blank">*/}
            {/*        <img src={viteLogo} className="logo" alt="Vite logo"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://react.dev" target="_blank">*/}
            {/*        <img src={reactLogo} className="logo react" alt="React logo"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*<h1>Vite + React</h1>*/}
            {/*<div className="card">*/}
            {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*        count is {count}*/}
            {/*    </button>*/}
            {/*    <button onClick={jump2Page1}>jump to page 1</button>*/}
            {/*    <button onClick={testNetwork}>test network</button>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.tsx</code> and save to test HMR*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<p className="read-the-docs">*/}
            {/*    Click on the Vite and React logos to learn more*/}
            {/*</p>*/}
        </>
    )
}

export default App
