import {useNavigate} from "react-router-dom";

import {useEffect, useState} from "react";
import {RouterNames} from "../../routes/routers.ts";
import './home.less'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {incrementByAmount} from "../../redux/counterSlice.ts";
import {Button, Input, Toast} from "antd-mobile";

const Home = () => {
    const reduxCount = useSelector((state: RootState) => state.counter.count)
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch<AppDispatch>();
    const [value, setValue] = useState('')

    // const [count, setCount] = useState(0);
    const navigate = useNavigate()
    useEffect(() => {
        console.log('home page loaded.')

        return () => {
            console.log('home page unloaded.')
        }
    }, [])


    const jump2AboutPage = () => {
        console.log("jump2AboutPage")
        // setCount(count + 1);
        dispatch(incrementByAmount(2))
        setTimeout(() => {
            navigate(RouterNames.About)
        }, 500)
    }

    const handleClick = () => {
        Toast.show(`You enter: ${value}`)
    }


    return (
        <div className='home'>
            <h2>Home</h2>
            <button onClick={jump2AboutPage}>Jump 2 About page: {reduxCount}</button>
            <Input className='input' placeholder='Enter something' value={value} onChange={setValue} clearable={true}/>
            <Button className={'button'} color={"primary"} size={"large"} onClick={handleClick}>Show
                Toast</Button>
        </div>
    )
}

export default Home;