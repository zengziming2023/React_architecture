import {useNavigate} from "react-router-dom";

import {useEffect} from "react";
import {RouterNames} from "../../routes/routers.ts";
import './home.less'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {incrementByAmount} from "../../redux/counterSlice.ts";
import {Button, Image, Input, Toast} from "antd-mobile";
import {useSessionStorage} from "../../utils/cache.ts";
import LazyLoad from 'react-lazyload';


const Home = () => {
    const reduxCount = useSelector((state: RootState) => state.counter.count)
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch<AppDispatch>();
    // const [value, setValue] = useState('')
    // const [value, setValue, _] = useLocalStorage("key_input_value", '')
    const [value, setValue] = useSessionStorage("key_session_input", '')

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

    const jump2AndtDemoPage = () => {
        navigate(RouterNames.AndtDemo)
    }

    const jump2AHooksDemoPage = () => {
        navigate(RouterNames.AHooksDemo)
    }

    const jump2TabbarsDemoPage = () => {
        navigate(RouterNames.TabBarsDemo)
    }


    return (
        <div className='home'>
            <h2 className='title'>Home</h2>
            <button onClick={jump2AboutPage}>Jump 2 About page: {reduxCount}</button>
            <Button onClick={jump2AndtDemoPage}>jump 2 andt demo page.</Button>
            <Button onClick={jump2AHooksDemoPage}>jump 2 ahooks demo page.</Button>
            <Button onClick={jump2TabbarsDemoPage}>jump 2 andt tabbars demo page.</Button>
            <Input className='input' placeholder='Enter something' value={value} onChange={setValue} clearable={true}/>
            <Button className={'button'} color={"primary"} size={"large"} onClick={handleClick}>Show
                Toast</Button>
            <LazyLoad>
                <Image src={"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"} alt={'test.png'}/>
            </LazyLoad>
        </div>
    )
}

export default Home;