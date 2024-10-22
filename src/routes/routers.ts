import {RouteProps} from "react-router-dom";
import Home from "../features/home/Home.tsx";
import About from "../features/about/About.tsx";

export enum RouterNames {
    Home = "/",
    About = "/about"
}

export const routers: RouteProps[] = [{
    path: RouterNames.Home,
    Component: Home,
},
    {
        path: RouterNames.About,
        Component: About
    }
]