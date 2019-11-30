import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// a pure function, cannot mofify the state directly here in the reducer,
// can only do an immutable change and return an updated version of the state from this reducer
export const Reducer = (state = initialState, action) => {
    return state;
};