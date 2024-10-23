import {useNavigate} from "react-router-dom";

import {useEffect} from "react";
import {RouterNames} from "../../routes/routers.ts";
import './home.less'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {increment} from "../../redux/counterSlice.ts";

const Home = () => {
    const reduxCount = useSelector((state: RootState) => state.counter.count)
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch<AppDispatch>();


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
        dispatch(increment())
        setTimeout(() => {
            navigate(RouterNames.About)
        }, 500)
    }

    return (
        <div className='home'>
            <h2>Home</h2>
            <button onClick={jump2AboutPage}>Jump 2 About page: {reduxCount}</button>
        </div>
    )
}

export default Home;