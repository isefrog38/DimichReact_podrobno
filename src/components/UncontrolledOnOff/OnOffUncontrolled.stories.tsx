import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'OnOffUncontrolled story',
    component: UncontrolledOnOff,
}

export const OnMode = () => <UncontrolledOnOff setOn={action("on or off clicked")} defaultValue={true} />
export const OffMode = () => <UncontrolledOnOff setOn={action("on or off clicked")} defaultValue={false} />

