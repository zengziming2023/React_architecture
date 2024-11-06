import {RouteProps} from "react-router-dom";
import Home from "../features/home/Home.tsx";
import About from "../features/about/About.tsx";
import AndtDemo from "../features/andtDemo/AndtDemo.tsx";
import AHooksDemo from "../features/ahooksDemo/AHooksDemo.tsx";
import TabBarDemo from "../features/andtDemo/TabBarsDemo.tsx";

export enum RouterNames {
    Home = "/",
    About = "/about",
    AndtDemo = "/andt-demo",
    AHooksDemo = '/ahooks-demo',
    TabBarsDemo = "/tab-bars-demo"
}

export const routers: RouteProps[] = [{
    path: RouterNames.Home,
    Component: Home,
},
    {
        path: RouterNames.About,
        Component: About
    },
    {
        path: RouterNames.AndtDemo,
        Component: AndtDemo
    },
    {
        path: RouterNames.AHooksDemo,
        Component: AHooksDemo
    },
    {
        path: RouterNames.TabBarsDemo,
        Component: TabBarDemo
    }
]