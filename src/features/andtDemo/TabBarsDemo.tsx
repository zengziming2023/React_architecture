import './tab_bars_demo.less'
import {useRef, useState} from "react";
import {AppOutline, MessageFill, MessageOutline, UnorderedListOutline, UserOutline} from "antd-mobile-icons";
import {Badge, Swiper, SwiperRef, TabBar} from "antd-mobile";
import {TabBarItem} from "antd-mobile/es/components/tab-bar/tab-bar";
import {SwiperItem} from "antd-mobile/es/components/swiper/swiper-item";

const TabBarDemo = () => {
    const [activeKey, setActiveKey] = useState('1')
    const swiperRef = useRef<SwiperRef | null>(null)

    const tabs = [
        {
            key: '0',
            title: '首页',
            icon: <AppOutline/>,
            badge: Badge.dot,
        },
        {
            key: '1',
            title: '待办',
            icon: <UnorderedListOutline/>,
            badge: '5',
        },
        {
            key: '2',
            title: '消息',
            icon: (active: boolean) =>
                active ? <MessageFill/> : <MessageOutline/>,
            badge: '99+',
        },
        {
            key: '3',
            title: '我的',
            icon: <UserOutline/>,
        },
    ]


    return (
        <div className={'tabBarDemo'}>
            <Swiper className={'swiper'} ref={swiperRef} indicator={() => null}
                    defaultIndex={Number(activeKey)}
                    onIndexChange={index => {
                        setActiveKey(`${index}`);
                    }}>
                <SwiperItem className={'swiper-item'}>
                    <span>Home content</span>
                </SwiperItem>
                <SwiperItem className={'swiper-item'}>
                    <span>To do content</span>
                </SwiperItem>
                <SwiperItem className={'swiper-item'}>
                    <span>Message content</span>
                </SwiperItem>
                <SwiperItem className={'swiper-item'}>
                    <span>Mine content</span>
                </SwiperItem>
            </Swiper>


            <TabBar onChange={(key) => {
                console.log(key)
                setActiveKey(key)
                swiperRef.current?.swipeTo(Number(key))
            }} activeKey={activeKey}>
                {tabs.map(item => {
                    return <TabBarItem key={item.key} icon={item.icon} title={item.title} badge={item.badge}/>
                })}
            </TabBar>
        </div>
    )
}

export default TabBarDemo