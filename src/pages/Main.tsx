import { FC } from "react";
import styles from './Main.module.scss';
import { Header } from "../features/Header/Header";
import { Pagination } from "../features/Pagination/Pagination";
import { CustomTable } from "../features/CustomTable/CustomTable";

interface MainProps {
}

export const Main: FC<MainProps> = _ => {
    return <div className={styles['main']}>
        <div className={styles['main__header']}>
            <Header /></div>
        <div className={styles['main__pagination']}>
            <Pagination /></div>
        <div className={styles['main__table']}>
            <CustomTable /></div>
    </div>
}