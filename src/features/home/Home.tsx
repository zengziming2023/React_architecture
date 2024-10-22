import {useNavigate} from "react-router-dom";

import {useEffect, useState} from "react";
import {RouterNames} from "../../routes/routers.ts";
import './home.less'

const Home = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate()
    useEffect(() => {
        console.log('home page loaded.')

        return () => {
            console.log('home page unloaded.')
        }
    }, [])


    const jump2AboutPage = () => {
        console.log("jump2AboutPage")
        setCount(count + 1);
        setTimeout(() => {
            navigate(RouterNames.About)
        }, 500)
    }

    return (
        <div className='home'>
            <h2>Home</h2>
            <button onClick={jump2AboutPage}>Jump 2 About page: {count}</button>
        </div>
    )
}

export default Home;