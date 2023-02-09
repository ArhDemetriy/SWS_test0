import { FC } from "react";
import styles from './Header.module.scss';
import logo from "./ico/logo.svg";
import backward from "./ico/backward.svg";

interface HeaderProps {
}

export const Header: FC<HeaderProps> = _ => {
    return <div className={styles['header']}>
        <img src={logo} alt="" />
        <img src={backward} alt="" />
        <span className={styles['header__target']} >Просмотр</span>
        <span>Управление</span>
    </div>
}