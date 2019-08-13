import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    playerStatus: 'pause',
    playerCondition: 'normal',
    loading: false

    // playingLanguage(pin): "GEO"
    // playingSeason(pin): 1
    // playingEpisode(pin): 10
    // playingQuality(pin): "HIGH"
    // playingTrailer(pin): null
    // openSeason(pin): 1
    // openEpisode(pin): 10
    // playerState(pin): "playing"
    // playerWasPlaying(pin): ""
};

const playerStatusHandler = ( state, action ) => {
    return updateObject( state, { loading: false , playerStatus: action.playerStatus} );
};

const playerConditionHandler = ( state, action ) => {
    return updateObject( state, { loading: false , playerCondition: action.playerCondition} );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PLAYER_STATUS: return playerStatusHandler( state, action );
        case actionTypes.PLAYER_CONDITION: return playerConditionHandler( state, action );
        default: return state;
    }
};

export default reducer;
