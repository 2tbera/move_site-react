
import {combineReducers} from 'redux';
import colorHandler from './color-handler';
import authHandler from './auth-hanlder';
import playerHandler from './player-handler';

const rootReducer = combineReducers({
    color: colorHandler,
    auth: authHandler,
    player: playerHandler
 });

export {rootReducer};
