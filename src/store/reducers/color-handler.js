import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    color: '',
};

const colorInit = ( state, action ) => {
    return updateObject( state, { loading: false , color: action.color} );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.COLOR_FETCH: return colorInit( state, action );
        default: return state;
    }
};

export default reducer;
