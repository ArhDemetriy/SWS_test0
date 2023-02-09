import { FC } from "react";
import styles from './Pagination.module.scss';
import page from "./ico/page.svg";

const SELECT = 3

const ITEMS = [
    "По проекту",
    "Объекты",
    "РД",
    "СМР",
    "График",
    "МиМ",
    "Рабочие",
    "Капвложения",
    "Бюджет",
    "Финансирование",
    "Панорамы",
    "Камеры",
    "Поручения",
    "Контрагенты",
]

interface PaginationItemProps {
    readonly caption: string
    readonly select?: boolean
}

const PaginationItem: FC<PaginationItemProps> = p => {
    const className = styles["pagination__item"] + (p.select ? " " + styles["pagination__item-select"] : "")
    return <div className={className}>
        <img src={page} className={styles["pagination__item__ico"]} alt="" />
        <span className={styles["pagination__item__caption"]} >{p.caption}</span>
    </div>
}

interface PaginationProps {}

export const Pagination: FC<PaginationProps> = _ => {
    return <div className={styles["pagination"]} >{
        ITEMS
            .map((caption, i) => <PaginationItem caption={caption} select={i === SELECT} key={i} />)
    }</div>
}