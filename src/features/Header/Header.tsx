import { FC } from "react";
import logo from "./ico/logo.svg";
import backward from "./ico/backward.svg";

interface HeaderProps {
}

export const Header: FC<HeaderProps> = _ => {
    return <div>
        <img src={logo} alt="" />
        <img src={backward} alt="" />
    </div>
}