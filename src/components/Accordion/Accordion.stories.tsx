import React from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

const callback = action("accorion mode change event fired");
const onClickCallback = action("some item was clicked");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const MenuCollapsedMode = Template.bind({})

MenuCollapsedMode.args = {
    titleValue:"Menu",
    setCollapsed: callback,
    collapsed: true
}


export const UsersUnCollapsedMode = Template.bind({})

UsersUnCollapsedMode.args = {
    titleValue:"Menu",
    setCollapsed: callback,
    collapsed: true
}

































/*import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

export const CollapsedMode = () => <Accordion titleValue={"Menu"} setCollapsed={action("Collapsed change")} collapsed={true}/>;
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} setCollapsed={action("Collapsed change")} collapsed={false}/>;

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>;
}*/
