import "./ahooks_demo.less"
import {useRequest, useToggle} from "ahooks";
import {Button} from "antd-mobile";
import {Product} from "../../network/response/sys/Product.ts";
import {BLResponse} from "../../network/response/BLResponse.ts"
import {getProductList} from "../../network/api/sysApi.ts";

const AHooksDemo = () => {
    const [state, {toggle}] = useToggle()
    const {
        loading,
        data,
        runAsync
    } = useRequest<(BLResponse<Product[]> | undefined), []>(() => {
        return getProductList()
    }, {
        manual: true,
    })

    return (<>
        <div className="ahooks-demo">
            <span>current state: {String(state)}</span>
            <Button onClick={toggle}>Toggle state</Button>
            <Button onClick={async () => {
                await runAsync()
            }}>Test UseRequest.</Button>
            {
                loading ? <span>loading...</span> : null
            }
            {
                (!loading && data != undefined) ? <span>{JSON.stringify(data)}</span> : null
            }
        </div>
    </>)
}

export default AHooksDemo