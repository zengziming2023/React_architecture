import {
    AutoCenter,
    Avatar,
    Badge,
    Button,
    CapsuleTabs,
    Card,
    Collapse,
    Divider,
    DotLoading,
    Ellipsis,
    Grid,
    Image,
    ImageViewer,
    InfiniteScroll,
    List,
    NavBar,
    SafeArea,
    Space,
    TabBar,
    Toast
} from "antd-mobile";
import "./andt_demo.less"
import {useNavigate} from "react-router-dom";
import {
    AppOutline,
    DownOutline,
    MessageFill,
    MessageOutline,
    MoreOutline,
    SearchOutline,
    UnorderedListOutline,
    UpOutline,
    UserOutline
} from 'antd-mobile-icons'
import {sleep} from "antd-mobile/es/utils/sleep";
import {GridItem} from "antd-mobile/es/components/grid/grid";
import {useState} from "react";
import {TabBarItem} from "antd-mobile/es/components/tab-bar/tab-bar";
import {CollapsePanel} from "antd-mobile/es/components/collapse/collapse";
import {useRafState} from "ahooks";
import {ListItem} from "antd-mobile/es/components/list/list-item";

let count = 0;

const AndtDemo = () => {
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState('todo')
    const [activeColKey, setActiveColKey] = useState("1")

    const [visible, setVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

    const goBack = () => {
        navigate(-1)
    }

    const right = (<Space>
        <SearchOutline/>
        <MoreOutline/>
    </Space>)

    const tabs = [
        {
            key: 'home',
            title: '首页',
            icon: <AppOutline/>,
            badge: Badge.dot,
        },
        {
            key: 'todo',
            title: '待办',
            icon: <UnorderedListOutline/>,
            badge: '5',
        },
        {
            key: 'message',
            title: '消息',
            icon: (active: boolean) =>
                active ? <MessageFill/> : <MessageOutline/>,
            badge: '99+',
        },
        {
            key: 'personalCenter',
            title: '我的',
            icon: <UserOutline/>,
        },
    ]

    const demoAvatarImages = [
        'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
        'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    ]

    const content =
        '蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。'

    // const anchors = [window.innerHeight * 0.1, window.innerHeight * 0.1, window.innerHeight * 0.9];
    // const floatingData = [
    //     'A',
    //     'B',
    //     'C',
    //     'D',
    //     'E',
    //     'F',
    //     'G',
    //     'H',
    //     'I',
    //     'J',
    //     'K',
    //     'L',
    //     'M',
    //     'N',
    //     'O',
    //     'P',
    //     'Q',
    // ]

    const demoSrc =
        'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'
    const demoSrc2 =
        'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'

    const [listData, setListData] = useRafState<string[]>([])
    const [hasMore, setHasMore] = useState<boolean>(true)

    const loadMore = async () => {
        if (count >= 3) {
            setHasMore(false)
            return
        }
        await sleep(2000);
        count++;
        setListData(data => [...data, ...['A', 'B', 'C', 'D', 'E', 'F']]);
        setHasMore(true)
    }

    const InfiniteScrollContent = ({hasMore}: { hasMore?: boolean }) => {
        return <>
            {hasMore ? (<><span>loading</span><DotLoading/></>) : (<span>---- 我是有底线的 ----</span>)}
        </>
    }

    return (
        <div className="andtDemo">
            <SafeArea position={"top"}/>

            <NavBar back={'返回'} backIcon={true} right={right}>标题</NavBar>

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
                <Button loading={true} loadingIcon={<DotLoading color={"primary"}/>}/>
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

            <AutoCenter className="longAutoCenter">auto center text.</AutoCenter>
            <AutoCenter className="longAutoCenter">auto center text.auto center text.auto center text.auto center
                text.auto center text.auto center text.auto center text.auto center text.auto center text.auto center
                text.auto center text.</AutoCenter>

            <Divider className="divider"/>
            <Divider className="divider">分割线内容默认在中间</Divider>
            <Space wrap={true}>
                <span>Text1</span>
                <Divider className="divider" direction={"vertical"}/>
                <span>Text2</span>
                <Divider className="divider" direction={"vertical"}/>
                <span>Text3</span>
            </Space>

            <Grid columns={3} gap={"8px"}>
                <GridItem>
                    <span>A</span>
                </GridItem>
                <GridItem>
                    <span>B</span>
                </GridItem>
                <GridItem>
                    <span>C</span>
                </GridItem>
                <GridItem>
                    <span>D</span>
                </GridItem>
                <GridItem>
                    <span>E</span>
                </GridItem>
                <GridItem>
                    <span>F</span>
                </GridItem>
            </Grid>

            <Grid className="grid" columns={3} gap={"8px"}>
                <GridItem>
                    <span>A</span>
                </GridItem>
                <GridItem span={2}>
                    <span>B</span>
                </GridItem>
                <GridItem span={2}>
                    <span>C</span>
                </GridItem>
                <GridItem>
                    <span>D</span>
                </GridItem>
                <GridItem span={3}>
                    <span>E</span>
                </GridItem>
                <GridItem>
                    <span>F</span>
                </GridItem>
            </Grid>

            <CapsuleTabs defaultActiveKey={"vegetables"} onChange={(key) => {
                console.log(key);
            }}>
                <CapsuleTabs.Tab title={'水果'} key={'fruits'}>1</CapsuleTabs.Tab>
                <CapsuleTabs.Tab title={'蔬菜'} key={'vegetables'}>2</CapsuleTabs.Tab>
                <CapsuleTabs.Tab title={'动物'} key={'animals'}>3</CapsuleTabs.Tab>
            </CapsuleTabs>

            <TabBar onChange={(key) => {
                console.log(key)
                setActiveKey(key)
            }} activeKey={activeKey}>
                {tabs.map(item => {
                    return <TabBarItem key={item.key} icon={item.icon} title={item.title} badge={item.badge}/>
                })}
            </TabBar>

            <Space className={"avatar"} wrap={true}>
                <Avatar className={"avatar-item"} src={demoAvatarImages[0]}/>
                <Avatar src={demoAvatarImages[1]}/>
                <Avatar src={demoAvatarImages[2]}/>
                <Avatar src={demoAvatarImages[3]}/>
                <Avatar src={""}/>
            </Space>

            <Card title={"card title"} onClick={() => {
                Toast.show("click card.")
            }}>card content.</Card>

            <Collapse activeKey={activeColKey} accordion={true} onChange={(key) => {
                setActiveColKey(key ?? "")
            }}>
                <CollapsePanel key={"1"} title={"First"}>
                    First Detail
                </CollapsePanel>
                <CollapsePanel key={"2"} title={"Second"}>
                    Second Detail
                </CollapsePanel>
                <CollapsePanel key={"3"} title={"Third"}>
                    Third Detail
                </CollapsePanel>
            </Collapse>

            <div>
                <Ellipsis content={content} direction={"end"} expandText={<>
                    展开
                    <DownOutline/>
                </>} collapseText={<>
                    收起
                    <UpOutline/></>}/>
                <Ellipsis content={content} direction={"start"} expandText={<>
                    展开
                    <DownOutline/>
                </>} collapseText={<>
                    收起
                    <UpOutline/></>}/>
                <Ellipsis content={content} direction={"middle"}/>
                <Ellipsis content={content} rows={2} direction={"end"}/>
            </div>

            {/*<FloatingPanel anchors={anchors}>*/}
            {/*    <List>*/}
            {/*        {floatingData.map(item => {*/}
            {/*            return <ListItem>{item}</ListItem>*/}
            {/*        })}*/}
            {/*    </List>*/}
            {/*</FloatingPanel>*/}

            <Space>
                <Image src={demoSrc}/>

            </Space>

            <Space wrap={true}>
                <Image src={demoSrc} width={100} height={100} fit={"fill"} style={{borderRadius: "8%"}}
                       onClick={() => {
                           setImageSrc(demoSrc);
                           setVisible(true)
                       }}
                />
                <Image src={demoSrc} width={100} height={100} fit={"contain"} style={{borderRadius: "8%"}}/>
                <Image src={demoSrc} width={100} height={100} fit={"cover"} style={{borderRadius: "8%"}}/>
                <Image src={demoSrc} width={100} height={100} fit={"scale-down"} style={{borderRadius: "8%"}}/>
                <Image src={demoSrc} width={100} height={100} fit={"none"} style={{borderRadius: "8%"}}/>
                <Image src={"/404"} width={100} height={100} fit={"none"} style={{borderRadius: "8%"}} alt={"xxxx.png"}
                       fallback={"x.png"}/>
            </Space>

            <Space wrap={true}>
                <Image lazy={true} src={demoSrc2}/>
            </Space>

            <ImageViewer classNames={{
                mask: 'customize-mask',
                body: 'customize-body'
            }} image={imageSrc} visible={visible} onClose={() => setVisible(false)}></ImageViewer>

            <List>
                {listData?.map(item => {
                    return <ListItem>{item}</ListItem>
                })}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
                <InfiniteScrollContent hasMore={hasMore}></InfiniteScrollContent>
            </InfiniteScroll>

            <SafeArea position={"bottom"}/>
        </div>
    )
}

export default AndtDemo