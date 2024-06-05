import React from 'react';
import { createStore } from 'redux';
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const store = createStore(reducer);

const LikeCounter = () => {
    const handleIncrement = () => {
        store.dispatch(incrementLike());
    };

    const handleDecrement = () => {
        store.dispatch(decrementLike());
    };

    return (
        <div>
            <h2>Like Counter</h2>
            <p>Count: {store.getState().likeCount}</p>
            <button onClick={handleIncrement}>Like</button>
            <button onClick={handleDecrement}>Unlike</button>
        </div>
    );
};

export default LikeCounter;
