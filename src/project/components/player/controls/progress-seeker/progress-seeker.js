import React, {Component} from 'react';
import Seeker from '../../UI/seeker/seeker';

class ProgressSeeker extends Component {

    state = {
        duration: 0,
    };


    componentDidMount() {
        // if (this.props.index) {
        //     console.log(this.props.index , this.props.max);
        //     this.props.index.addEventListener('progress' , this.load, true)
        // }
    }


    // Load Seeker
    load(event) {
        if (event.target.buffered.length > 0) {
            const procent = (event.target.buffered.end(event.target.buffered.length - 1) / event.target.duration) * 100;
            this.setState({videoLoadProcent: procent + '%'});
        }
    }


    render() {
        return (
            <Seeker
                videoLoadProcent={this.state.videoLoadProcent}
                max={this.props.max}
                model={this.props.currentTime}
                onTimeChangeStart={(e) => {
                    if (this.props.player) {

                        console.log(this.props.player.currentTime , e);
                        // this.props.player.currentTime = e;
                        this.props.onPlay('pause');

                    }
                }}

                onTimeChangeEnd={(e) => {
                    if (this.props.player) {
                        console.log(this.props.player);
                        // this.props.player.currentTime = e;
                        this.props.onPlay('play')
                    }
                }}

            />
        );
    }
}

export default ProgressSeeker;
