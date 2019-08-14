import React, {Component} from 'react';
import {connect} from 'react-redux';

// ACTIONS
import {playerStatus, playerCondition} from "../../../store/actions";

// COMPONENTS

import Fullscreen from './controls/fullscreen/fullscreen';
import PlayPause from './controls/play-pause/play-pause';
import ProgressSeeker from './controls/progress-seeker/progress-seeker';

// SOCKET
import io from "socket.io-client";

let socket = io.connect("https://socket-io-connection.herokuapp.com");

// VARIABLES
let index;
let holder;

class Player extends Component {

    state = {
        duration: 0,
        currentTime: 0
    };

    componentDidMount() {
        // socket.on('navigate', () => {
        //     this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' : 'play')
        // });
    }

    render() {

        return (
            <React.Fragment>
                <div className='w-50 h-100vh d-flex justify-content-center align-items-center'
                     ref={ref => holder = ref}>
                    <div className='w-100 m-auto'>

                        <PlayPause player={index} playerStatus={this.props.playerStatus}
                                   onPlay={(e) => {this.props.onPlay(e)}}/>

                        <Fullscreen holder={holder} playerCondition={this.props.playerCondition}
                                    onConditionChange={(e) => this.props.onConditionChange(e)}/>

                        <div className="w-50 m-auto">
                            <ProgressSeeker
                                index={index}
                                max={this.state.duration}
                                model={this.state.currentTime}
                                onPlay={(e) => {this.props.onPlay(e)}}
                            />

                        </div>
                    </div>
                    <video
                        onTimeUpdate={
                            () => {
                                this.setState({
                                    duration: index.duration,
                                    currentTime: index.currentTime
                                });
                            }
                        }
                        className='w-75' ref={ref => index = ref} controls
                        src="http://imge-ssd-02-l01.imovies.cc/video/imovie_hash_code/8/2018022407561435_high_eng.mp4?md5=rFPe3z2TsSwcRwu_wHahcQ&expires=1565848937&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTI6IjMxLjE0Ni4yLjE3MCI7czoxMDoidXNlcl9hZ2VudCI7czoxMTU6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83Ni4wLjM4MDkuMTAwIFNhZmFyaS81MzcuMzYiO3M6NzoicmVmZXJlciI7czo0OToiaHR0cHM6Ly93d3cuaW1vdmllcy5jYy9rYS9tb3ZpZXMvMjg3OS9WYW4tSGVsc2luZyI7fQ=="/>
                </div>

            </React.Fragment>
        );
    }

}

const mapStateToProps = store => {
    return {
        playerStatus: store.player.playerStatus,
        playerCondition: store.player.playerCondition
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPlay: (status) => dispatch(playerStatus(status)),
        onConditionChange: (status) => dispatch(playerCondition(status)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
