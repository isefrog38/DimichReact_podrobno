import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion",
    component: Accordion,
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
let array = [{value: 1, title: "Olya"},{value: 2, title: "Pasha"}];


 export const MenuCollapsedMode = Template.bind({})

    MenuCollapsedMode.args = {
        titleValue: "Menu",
        collapsed: true,
    }


    export const UsersUnCollapsedMode = Template.bind({})

    UsersUnCollapsedMode.args = {
        titleValue: "Menu",
        collapsed: false,
    }

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={"Users"} setCollapsed={() => setValue(!value)} collapsed={value} items={array} onClick={setValue}/>

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
