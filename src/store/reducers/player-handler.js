import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    playerStatus: 'pause',
    loading: false
};

const playStatusHandler = ( state, action ) => {
    return updateObject( state, { loading: false , playerStatus: action.playerStatus} );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PLAYER_STATUS: return playStatusHandler( state, action );
        default: return state;
    }
};

export default reducer;
