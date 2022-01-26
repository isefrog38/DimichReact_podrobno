import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Rating, {RatingValueType} from "./Raiting";

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} onClickStar={x => x}/>;
export const Rating1 = () => <Rating value={1} onClickStar={x => x}/>;
export const Rating2 = () => <Rating value={2} onClickStar={x => x}/>;
export const Rating3 = () => <Rating value={3} onClickStar={x => x}/>;
export const Rating4 = () => <Rating value={4} onClickStar={x => x}/>;
export const Rating5 = () => <Rating value={5} onClickStar={x => x}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClickStar={setRating}/>;
}