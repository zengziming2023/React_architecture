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
        runAsync,
        cancel,
    } = useRequest<(BLResponse<Product[]> | undefined), []>(() => {
        return getProductList()
    }, {
        manual: false,
        ready: state,
        loadingDelay: 200,      // 200ms 内返回了数据，不会展示loading. 避免闪烁
        pollingInterval: 3000,
        pollingErrorRetryCount: 3,
        pollingWhenHidden: false,   // 页面隐藏时，轮询暂停
        defaultParams: [],
        refreshDeps: [],     // 依赖刷新，如果入参变化，自动刷新。
        refreshOnWindowFocus: true,     // 屏幕聚焦自动刷新
        focusTimespan: 5000,  // 重新请求间隔
        debounceWait: 300,  // 防抖
        retryCount: 3,      // 自动重试3次
        onBefore: (params: []) => {
            console.log(params, "onBefore");
        },
        onSuccess: (data?: BLResponse<Product[]>) => {
            console.log(data, "onSuccess");
        },
        onError: (error: Error, params: []) => {
            console.log(error, params, "onError");
        },
        onFinally: (params: [], data?: BLResponse<Product[]>) => {
            console.log(params, data, "onFinally");
        }
    })

    return (<>
        <div className="ahooks-demo">
            <span>current state: {String(state)}</span>
            <Button onClick={toggle}>Toggle state</Button>
            <Button onClick={async () => {
                await runAsync()
            }}>Test UseRequest.(start timing.)</Button>
            <Button onClick={cancel}>Cancel request timing.</Button>
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