import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    playerStatus: 'pause',
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
