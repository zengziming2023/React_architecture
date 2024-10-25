import {useNavigate} from "react-router-dom";
import {RouterNames} from "../../routes/routers.ts";
import './about.less'
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.ts";
import {useSessionStorage} from "../../utils/cache.ts";
import {Button} from "antd-mobile";

const About = () => {
    const reduxCount = useSelector((state: RootState) => state.counter.count)
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    // const dispatch = useDispatch<AppDispatch>();

    // const [value, _, removeValue] = useLocalStorage("key_input_value", '')
    const [value, _, removeValue] = useSessionStorage("key_session_input", '')

    const navigate = useNavigate();
    useEffect(() => {
        console.log('about page loaded.')

        return () => {
            console.log('about page unloaded.')
        }
    }, [])


    const goBack = () => {
        navigate(-1)
    }
    const goHome = () => {
        navigate(RouterNames.Home, {replace: true})
    }

    return (
        <>
            <h2>About</h2>
            <div className="buttonContainer">
                <button onClick={goBack}>back to last page. count = {reduxCount}, input value = {value}</button>
                <button onClick={goHome}>go Home</button>
                <Button onClick={removeValue}>click to clear input cache.</Button>
            </div>

        </>
    )
}

export default About