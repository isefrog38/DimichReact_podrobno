import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
}

export const OnMode = () => <OnOff on={true}  onClickButton={action("on of off clicked")}/>;
export const OffMode = () => <OnOff on={false} onClickButton={action("on of off clicked")}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onClickButton={setValue}/>;
}