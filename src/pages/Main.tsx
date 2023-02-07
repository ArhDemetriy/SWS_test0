import { FC } from "react";
import { Header } from "../features/Header/Header";
import { Pagination } from "../features/Pagination/Pagination";
import { CustomTable } from "../features/CustomTable/CustomTable";

interface MainProps {
}

export const Main: FC<MainProps> = _ => {
    return <div>
        <Header />
        <Pagination />
        <CustomTable />
    </div>
}