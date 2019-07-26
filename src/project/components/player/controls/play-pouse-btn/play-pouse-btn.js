import React, {Component} from 'react';
import {playerStatus} from "../../../../../store/actions";
import {connect} from "react-redux";

class PlayPauseBtn extends Component {
    render() {
        return (
            <button onClick={() => {this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' :  'play') }}>
                {this.props.playerStatus}
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

