import React, {Component} from 'react';
import {connect} from 'react-redux';

// ACTIONS
import {playerStatus} from "../../../store/actions";

// COMPONENTS
import Button from './controls/button/button';
import Seeker from './controls/seeker/seeker';

// SOCKET
import io from "socket.io-client";

let socket = io.connect("https://socket-io-connection.herokuapp.com");

// VARIABLES
let player;

class Player extends Component {

    state = {
        playerStatus: 'pause',
        duration: 0,
        currentTime: 0
    };

    componentDidMount() {
        socket.on('navigate', () => {
            this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' : 'play')
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
     if (this.state.playerStatus !== this.props.playerStatus) {
         this.playserStateHandler();
         this.setState({playerStatus : this.props.playerStatus})
        }
    }


    render() {

        return (
            <React.Fragment>

                <div className='w-100'>
                    <Button title={this.props.playerStatus === 'play' ? 'pause' : 'play'} clicked={() => {
                    this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' : 'play')
                    }}/>
                    <Seeker max={this.state.duration} model={this.state.currentTime}/>
                </div>
                <div className='w-100 h-100vh d-flex justify-content-center align-items-center '>

                    <video
                        onTimeUpdate={
                            () => {
                                this.setState({
                                    duration: player.duration,
                                    currentTime: player.currentTime
                                });
                            }
                        }
                        className='w-75' ref={ref => player = ref} controls
                        src="http://imge-ssd-02-l03.imovies.cc/video/imovie_hash_code/13/2019072517020395_high_geo.mp4?md5=qr1g1Rlszl1zKPZhODYAig&expires=1564211833&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTI6IjMxLjE0Ni4yLjE3MCI7czoxMDoidXNlcl9hZ2VudCI7czoxMTU6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83NS4wLjM3NzAuMTQyIFNhZmFyaS81MzcuMzYiO3M6NzoicmVmZXJlciI7czo1OToiaHR0cHM6Ly93d3cuaW1vdmllcy5jYy9rYS9tb3ZpZXMvNDUwMTQ3MzAzL0Fzc2Fzc2luJ3MtQ3JlZWQiO30="/>
                </div>
            </React.Fragment>
        );
    }


    playserStateHandler = () => {
        if (this.props.playerStatus === 'play') {
            player.play()
        }
        if (this.props.playerStatus === 'pause') {
            player.pause()
        }
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
export default connect(mapStateToProps, mapDispatchToProps)(Player);
