import {RouteProps} from "react-router-dom";
import Home from "../features/home/Home.tsx";
import About from "../features/about/About.tsx";
import AndtDemo from "../features/andtDemo/AndtDemo.tsx";

export enum RouterNames {
    Home = "/",
    About = "/about",
    AndtDemo = "/andt-demo",
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
    }
]