import React, {Component} from 'react';
import Button from '../../UI/button/button';

class Fullscreen extends Component {

    state = {
        playerCondition: 'normal',
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.playerCondition === this.props.playerCondition) {return}

        console.log(this.props.holder, '<-----');
        this.props.playerCondition === 'normal' ? this.disable() : this.enable();
        this.setState({playerCondition: this.props.playerCondition})

    }


    componentDidMount() {
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

    // Fullscreen

    isEnabled() {
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
            this.props.holder[this.requestFullScreenMethodName]();
        }
    }

    disable() {
        if (this.fullScreenIsSupported() && this.document.fullscreen) {
            this.document[this.exitFullScreenMethodName]();
        }
    }

    render() {
        return (

            <Button title={this.props.playerCondition === 'normal' ? 'full' : 'normal'} clicked={() => {
                this.props.onConditionChange(this.props.playerCondition === 'normal' ? 'full' : 'normal')
            }}/>

        );
    }
}

export default Fullscreen;
