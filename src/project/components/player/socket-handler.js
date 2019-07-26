import React, {Component} from 'react';
import {connect} from 'react-redux';

import io from "socket.io-client"
import {playerStatus} from "../../../store/actions";
let socket = io.connect("https://socket-io-connection.herokuapp.com");


class SocketHandler extends Component {

    componentDidMount() {
        socket.on('navigate', (text) => {
            this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' :  'play')
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.playerStatus);
    }
    render() {
        return null;
    }
}

const setStateToProps = store => {
    return {
        playerStatus: store.player.playerStatus
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPlay: (status) => dispatch(playerStatus(status)),
    }
};

export default connect(setStateToProps, mapDispatchToProps)(SocketHandler);

