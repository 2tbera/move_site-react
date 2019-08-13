import React, {Component} from 'react';
import {connect} from 'react-redux';

// ACTIONS
import {playerStatus, playerCondition} from "../../../store/actions";

// COMPONENTS
import Button from './controls/button/button';
import Seeker from './controls/seeker/seeker';

// SOCKET
import io from "socket.io-client";

let socket = io.connect("https://socket-io-connection.herokuapp.com");

// VARIABLES
let player;
let holder;

class Player extends Component {

    state = {
        playerStatus: 'pause',
        playerCondition: 'normal',
        duration: 0,
        currentTime: 0,
        videoLoadProcent: 0
    };

    componentDidMount() {
        // socket.on('navigate', () => {
        //     this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' : 'play')
        // });

        // fullscreen
        this.document = document;
        this.fullScreenPropertyName = [
            'fullscreen',
            'fullScreen',
            'mozFullScreen',
            'webkitIsFullScreen'
        ].find((property) => {
            return typeof this.document[property] !== 'undefined';
        });

        this.requestFullScreenMethodName = [
            'requestFullScreen',
            'mozRequestFullScreen',
            'webkitEnterFullscreen',
            'webkitRequestFullscreen',
            'msRequestFullscreen',
            'webkitExitFullscreen'
        ].find((property) => {
            return typeof this.document.documentElement[property] !== 'undefined';
        });

        this.exitFullScreenMethodName = [
            'mozExitFullScreen',
            'exitFullscreen',
            'cancelFullscreen',
            'mozCancelFullScreen',
            'msExitFullscreen',
            'webkitExitFullscreen'
        ].find((property) => {
            return typeof this.document[property] !== 'undefined';
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.playerStatus !== this.props.playerStatus) {
            console.log(this.props.playerStatus , '<-----');
            this.props.playerStatus === 'play' ? player.play() : player.pause();
            this.setState({playerStatus: this.props.playerStatus})
        }

        if (this.state.playerCondition !== this.props.playerCondition) {
            this.props.playerCondition === 'normal' ? this.disable() : this.enable();
            this.setState({playerCondition: this.props.playerCondition})
        }

    }

    // Load Seeker
    load(event) {
        if (event.target.buffered.length > 0) {
            const procent = (event.target.buffered.end(event.target.buffered.length - 1) / event.target.duration) * 100;
            this.setState({videoLoadProcent: procent + '%'});
        }
    }

    // Fullscreen

    isEnabled() {
        console.log('s <---', this.document[this.fullScreenPropertyName]);
        if (this.fullScreenIsSupported()) {
            return this.document[this.fullScreenPropertyName];
        }
        return false;
    }


    fullScreenIsSupported() {
        return !!this.fullScreenPropertyName;
    }

    enable() {
        if (this.fullScreenIsSupported()) {
            holder[this.requestFullScreenMethodName]();
        }
    }

    disable() {
        if (this.fullScreenIsSupported() && this.document.fullscreen) {
            this.document[this.exitFullScreenMethodName]();
        }
    }


    render() {

        return (
            <React.Fragment>
                <div className='w-50 h-100vh d-flex justify-content-center align-items-center '
                     ref={ref => holder = ref}>
                    <div className='w-100 m-auto'>
                        <Button title={this.props.playerStatus === 'play' ? 'pause' : 'play'} clicked={() => {
                            this.props.onPlay(this.props.playerStatus === 'play' ? 'pause' : 'play')
                        }}/>

                        <Button title={this.props.playerCondition  === 'normal' ? 'full' : 'normal'} clicked={() => {
                            this.props.onConditionChange(this.props.playerCondition  === 'normal' ? 'full' : 'normal')
                            }}/>

                        <div className="w-50 m-auto">
                            <Seeker
                                videoLoadProcent={this.state.videoLoadProcent}
                                max={this.state.duration}
                                model={this.state.currentTime}
                                onTimeChangeStart={(e) => {
                                    player.currentTime = e;
                                    this.props.onPlay('pause' );
                                }}

                                onTimeChangeEnd={(e) => {
                                    player.currentTime = e;
                                    this.props.onPlay('play')
                                }}

                            />
                        </div>
                    </div>
                    <video
                        onTimeUpdate={
                            (event) => {
                                this.load(event);
                                this.setState({
                                    duration: player.duration,
                                    currentTime: player.currentTime
                                });
                            }
                        }
                        className='w-75' ref={ref => player = ref} controls
                        src="http://s1436-l02.imovies.cc/video/imovie_hash_code/8/2015062409482416_high_eng.mp4?md5=p1_3WtsHvNyBwBZdkXm80g&expires=1565712406&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTI6IjMxLjE0Ni4yLjE3MCI7czoxMDoidXNlcl9hZ2VudCI7czoxMTU6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83Ni4wLjM4MDkuMTAwIFNhZmFyaS81MzcuMzYiO3M6NzoicmVmZXJlciI7czo2MjoiaHR0cHM6Ly93d3cuaW1vdmllcy5jYy9rYS9tb3ZpZXMvMzQwMy9UaGUtTWFuLWluLXRoZS1Jcm9uLU1hc2siO30="/>
                    <button onClick={() => this.isEnabled()}>
                        asd
                    </button>
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
