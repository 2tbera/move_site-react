import React, {Component} from 'react';
import {connect} from 'react-redux';

import {playerStatus} from '../../../store/actions/index'
import PlayPauseBtn from './controls/play-pouse-btn/play-pouse-btn'

let player;

class Player extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.playserStateHandler();
    }

    render() {
        return (
            <div className='w-75 h-100vh d-flex justify-content-center align-items-center '>
                <PlayPauseBtn/>
                <video className='w-75' ref={ref => player = ref} controls
                       src="http://imge-ssd-02-l03.imovies.cc/video/imovie_hash_code/13/2019072517020395_high_geo.mp4?md5=qr1g1Rlszl1zKPZhODYAig&expires=1564211833&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTI6IjMxLjE0Ni4yLjE3MCI7czoxMDoidXNlcl9hZ2VudCI7czoxMTU6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83NS4wLjM3NzAuMTQyIFNhZmFyaS81MzcuMzYiO3M6NzoicmVmZXJlciI7czo1OToiaHR0cHM6Ly93d3cuaW1vdmllcy5jYy9rYS9tb3ZpZXMvNDUwMTQ3MzAzL0Fzc2Fzc2luJ3MtQ3JlZWQiO30="/>
            </div>
        );
    }


    playserStateHandler = () => {
        console.log(player ,'<---- ');
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
