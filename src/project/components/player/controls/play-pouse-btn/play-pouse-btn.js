import React, {Component} from 'react';
import {playerStatus} from "../../../../../store/actions";
import {connect} from "react-redux";


import io from "socket.io-client"


let socket = io.connect("https://socket-io-connection.herokuapp.com");

class PlayPauseBtn extends Component {

    componentDidMount() {
        socket.on('navigate', (text) => {
            console.log('ssss');
            this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' :  'play')
        });
    }

    render() {


        return (
            <button onClick={() => {this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' :  'play') }}>
                onPlay
            </button>
        );
    }
}

const mapStateToProps = store => {
    return {
        playerStatus: store.player.playerStatus
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPlay: (status) => dispatch(playerStatus(status)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayPauseBtn);

