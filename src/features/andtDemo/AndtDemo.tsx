import {Button, DotLoading, Space} from "antd-mobile";
import "./andt_demo.less"
import {useNavigate} from "react-router-dom";
import {SearchOutline} from 'antd-mobile-icons'
import {sleep} from "antd-mobile/es/utils/sleep";


const AndtDemo = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className="andtDemo">
            <Space wrap={true}>
                <Button color="primary" fill="solid" onClick={() => console.log("solid btn click")}>Solid</Button>
                <Button color="primary" fill="outline">Outline</Button>
                <Button color="primary" fill="none">None</Button>
            </Space>
            <Button className="goBack" onClick={goBack}>go back</Button>
            <Button className="blockBtn" color="primary" size="large" block={true}>Block Button</Button>
            <Space className="btnSpace" wrap={true} align="center">
                <Button color={"primary"} size={"mini"}>Mini Btn</Button>
                <Button color="primary" size="small">Small Btn</Button>
                <Button color="primary" size="middle">Middle Btn</Button>
                <Button color="primary" size="large">Large Btn</Button>
            </Space>
            <Space className="btnSpace">
                <Button size={"middle"} color={"primary"}>
                    <Space direction={"horizontal"}>
                        <SearchOutline/>
                        <span>Search</span>
                    </Space>
                </Button>
            </Space>
            <Space className="btnSpace">
                <Button shape={"default"} color={"primary"}>Default Shape Btn</Button>
                <Button shape={"rounded"} color={"primary"}>Rounded Shape Btn</Button>
                <Button shape={"rectangular"} color={"primary"}>Rectangular Shape Btn</Button>
            </Space>
            <Space className="btnSpace">
                <Button loading={true} color={"primary"} loadingText={"正在加载"}>Loading</Button>
                <Button loading={true} loadingIcon={<DotLoading color={"primary"}/> }/>
                <Button loading={"auto"} onClick={async () => {
                    await sleep(2000)
                }}>auto loading.</Button>
            </Space>
            <Space className="btnSpace">
                <Button disabled={true}>Disabled</Button>
                <Button disabled={true} color={"primary"}>Disabled</Button>
            </Space>
            <Space className="btnSpace">
                <Button disabled={false}>Enable</Button>
                <Button disabled={false} color={"primary"}>Enable</Button>
            </Space>
            <Space className="btnSpace">
                <DotLoading color={"primary"}/>
            </Space>
        </div>
    )
}

export default AndtDemo