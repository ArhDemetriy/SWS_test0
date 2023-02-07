import { FC, MutableRefObject } from "react";
import page from "./ico/page.svg";

interface PaginationItemProps {
    readonly caption: string
}

const PaginationItem: FC<PaginationItemProps> = p => {
    return <div>
        <img src={page} alt="" />
        <span>{p.caption}</span>
    </div>
}

interface PaginationProps {
    readonly items: PaginationItemProps[]
    readonly select: MutableRefObject<readonly number[]>
}

export const Pagination: FC<PaginationProps> = _ => {
    return <div>
        <PaginationItem caption="По проекту"/>
        <PaginationItem caption="Объекты"/>
    </div>
}