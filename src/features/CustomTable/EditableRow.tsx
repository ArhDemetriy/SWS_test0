import { FC, useCallback, useState } from 'react';
import { IncludeClassName } from '../../types/reactTypes';
import { Controls, ControlsProps } from './Controls';
import styles from './EditableRow.module.scss';

interface EditableRowProps extends ControlsProps {
    readonly data: {
        readonly rowName: string
        readonly salary: number
        readonly equipmentCosts: number
        readonly overheads: number
        readonly estimatedProfit: number
    }
}

type TChangeInput = React.ChangeEventHandler<HTMLInputElement>

export const EditableRow: FC<IncludeClassName<EditableRowProps>> = p => {
    let tdClassName = styles['editable_row__item'] ?? ''
    if (tdClassName.length)
        tdClassName = ' ' + tdClassName
    tdClassName = p.requiredClass + tdClassName


    const [rowName, setRowName] = useState(p.data.rowName)
    const changeRowName = useCallback<TChangeInput>(e => setRowName(e.currentTarget.value), [setRowName])

    const [salary, setSalary] = useState(p.data.salary.toString())
    const changeSalary = useCallback<TChangeInput>(e => setSalary(e.currentTarget.value), [setSalary])

    const [equipmentCosts, setEquipmentCosts] = useState(p.data.equipmentCosts.toString())
    const changeEquipmentCosts = useCallback<TChangeInput>(e => setEquipmentCosts(e.currentTarget.value), [setEquipmentCosts])

    const [overheads, setOverheads] = useState(p.data.overheads.toString())
    const changeOverheads = useCallback<TChangeInput>(e => setOverheads(e.currentTarget.value), [setOverheads])

    const [estimatedProfit, setEstimatedProfit] = useState(p.data.estimatedProfit.toString())
    const changeEstimatedProfit = useCallback<TChangeInput>(e => setEstimatedProfit(e.currentTarget.value), [setEstimatedProfit])


    return <tr className={styles['editable_row']}>
        <td className={tdClassName}>
            <Controls linesMask={p.linesMask} existOutputLine={p.existOutputLine} /></td>
        <td className={tdClassName}>
            <input type="text" value={rowName} onChange={changeRowName} name="rowName" className={styles['editable_row__input']} /></td>
        <td className={tdClassName}>
            <input type="number" value={salary} onChange={changeSalary} name="salary" className={styles['editable_row__input']} /></td>
        <td className={tdClassName}>
            <input type="number" value={equipmentCosts} onChange={changeEquipmentCosts} name="equipmentCosts" className={styles['editable_row__input']} /></td>
        <td className={tdClassName}>
            <input type="number" value={overheads} onChange={changeOverheads} name="overheads" className={styles['editable_row__input']} /></td>
        <td className={tdClassName}>
            <input type="number" value={estimatedProfit} onChange={changeEstimatedProfit} name="estimatedProfit" className={styles['editable_row__input']} /></td>
    </tr>
}