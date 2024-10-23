import {useNavigate} from "react-router-dom";
import {RouterNames} from "../../routes/routers.ts";
import './about.less'
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.ts";

const About = () => {
    const reduxCount = useSelector((state: RootState) => state.counter.count)
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    // const dispatch = useDispatch<AppDispatch>();

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
                <button onClick={goBack}>back to last page. count = {reduxCount}</button>
                <button onClick={goHome}>go Home</button>
            </div>

        </>
    )
}

export default About