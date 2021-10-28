import * as ActionTypes from './ActionTypes';
import { CUSTOMIZATION } from '../shared/customization';

export const Customization = (state = CUSTOMIZATION, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CUSTOMIZATION:
            return {
                categories: action.payload.categories,
                length: action.payload.length
            };
        default:
            return state;
    }
};