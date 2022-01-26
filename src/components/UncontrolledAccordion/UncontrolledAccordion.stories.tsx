import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion story',
    component: UncontrolledAccordion,
}

export const UncontrolledAccordionChanging1 = () => <UncontrolledAccordion titleValue={"Menu"} />;
export const UncontrolledAccordionChanging2 = () => <UncontrolledAccordion titleValue={"Users"} />;
