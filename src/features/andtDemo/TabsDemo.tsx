import {Swiper, SwiperRef, Tabs} from "antd-mobile";
import "./tabs_demo.less"
import {useRef, useState} from "react";
import {SwiperItem} from "antd-mobile/es/components/swiper/swiper-item";

const TabsDemo = () => {
    const tabItems = [
        {key: 'fruits', title: '水果'},
        {key: 'vegetables', title: '蔬菜'},
        {key: 'animals', title: '动物'},
    ]

    const swipeRef = useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <div className={"tabsDemo"}>
            <Tabs activeKey={tabItems[activeIndex].key} onChange={(key) => {
                const index = tabItems.findIndex(item => item.key === key)
                setActiveIndex(index)
                swipeRef.current?.swipeTo(index)
            }}>
                {tabItems.map((item) => {
                    return (
                        <Tabs.Tab title={item.title} key={item.key}/>
                    )
                })}
            </Tabs>
            <Swiper direction="horizontal" ref={swipeRef} onIndexChange={setActiveIndex} className={"swiper"} indicator={()=>null} defaultIndex={activeIndex} allowTouchMove={true} >
                {tabItems.map((item, index) => {
                    return (
                        <SwiperItem className={"swiper-item"} key={item.key}>
                            <span>{`${item.title} ${index}`}</span>
                        </SwiperItem>
                    )
                })}
            </Swiper>
        </div>

    )
}

export default TabsDemo