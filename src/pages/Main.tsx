import { FC } from "react";
import { CustomTable } from "../features/CustomTable/CustomTable";

interface MainProps {
}

export const Main: FC<MainProps> = p => {
    return <div>
        <CustomTable />
    </div>
}