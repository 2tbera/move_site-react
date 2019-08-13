import * as actionTypes from './actionTypes';

export const playerStatus = (status) => {
    return {
        type: actionTypes.PLAYER_STATUS,
        playerStatus: status
    };
};
export const playerCondition = (status) => {
    return {
        type: actionTypes.PLAYER_CONDITION,
        playerCondition: status
    };
};

