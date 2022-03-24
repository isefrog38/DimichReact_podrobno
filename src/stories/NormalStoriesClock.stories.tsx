import {ClocksComponent} from "../components/CLOCK/Clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "MyComponents/Clock",
    component: ClocksComponent,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['tiny', 'small', 'medium', 'large'],
        },
        /*onClickHandler: {action: 'clicked'},*/
    },
    decorators: [story =>
        <div style={{padding: '3rem'}}>{story()}</div>
    ],
} as ComponentMeta<typeof ClocksComponent>;

const Template: ComponentStory<typeof ClocksComponent> = (args) => <ClocksComponent {...args}/>;

export const ClockAnalog = Template.bind({});
ClockAnalog.args = {
    changeMode: 'analog'
};
export const ClockDigital = Template.bind({});
ClockDigital.args = {
    changeMode: 'digital'
};