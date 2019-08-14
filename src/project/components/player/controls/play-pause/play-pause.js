import React, {Component} from 'react';
import Button from '../../UI/button/button';

class PlayPause extends Component {
    state = {
        playerStatus: 'pause'
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.playerStatus === this.props.playerStatus) {
            return
        }
        this.props.playerStatus === 'play' ? this.props.player.play() : this.props.player.pause();
        this.setState({playerStatus: this.props.playerStatus})
    }

    render() {
        return (
            <Button title={this.props.playerStatus === 'play' ? 'pause' : 'play'} clicked={() => {

                console.log(this.props.playerStatus === 'play', this.props.playerStatus);
                this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' : 'play')
            }}/>
        );
    }
}

export default PlayPause;
