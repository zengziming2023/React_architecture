import "./ahooks_demo.less"
import {useToggle} from "ahooks";
import {Button} from "antd-mobile";

const AHooksDemo = () => {
    const [state, {toggle}] = useToggle()

    return (<>
        <div className="ahooks-demo">
            <span>current state: {String(state)}</span>
            <Button onClick={toggle}>Toggle state</Button>
        </div>
    </>)
}

export default AHooksDemo