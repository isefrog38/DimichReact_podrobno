import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRaiting";

export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
}

export const EmptyUncontrolledRating = () => <UncontrolledRating defaultValue={1}/>;
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} />;
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} />;
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} />;
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} />;
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} />;

export const UncontrolledRatingChanging = () => {
    const [rating, setRating] = useState<number>(3)
    return <UncontrolledRating />;
}