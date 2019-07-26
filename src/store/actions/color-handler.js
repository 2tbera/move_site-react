import * as actionTypes from './actionTypes';

export const colorInit = ( color ) => {
    return {
        type: actionTypes.COLOR_FETCH,
        color: color
    };
};
