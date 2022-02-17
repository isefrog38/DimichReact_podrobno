import React , {KeyboardEvent} from 'react';
import s from "./Select.module.css";

type SelectItem = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    items: Array<SelectItem>
    onClick: (state: boolean) => void
    collapsed: boolean
    onChange: (value: any) => void
}

export const Select = ({collapsed, items, value, onClick, onChange}: SelectPropsType) => {

    const selectedItem = items.find(e => e.value === value)

    const onClickHandler = () => {
        onClick(!collapsed)
    }
    const onClickItem = (v: number) => {
        onChange(v);
        onClickHandler();
    }

    return (
        <div>
            <div onClick={onClickHandler} className={s.divH}>
                <h3>{selectedItem && selectedItem.title}</h3><div className={s.arrow}></div>
            </div>
            <div className={s.invisibleDiv + " " + (collapsed ? s.active : " ")}>
            {collapsed && items.map(i => (
                <div tabIndex={0} onClick={ () => onClickItem(i.value) } className={s.item} key={i.value} >{i.title}</div>))}
            </div>
        </div>
    );
};
