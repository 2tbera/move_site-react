import React, {Component} from 'react';

class Seeker extends Component {

    state = {
        seeker: null,
        rect: null,
        value: 0,
    };

    componentDidMount() {
        this.seeker.addEventListener('mousedown', (event) => this.begin(event));
    }

    begin = event => {
        const process = 'mousemove', end = 'mouseup';
        this.setState({rect: this.seeker.getBoundingClientRect()});
        this.seeker.addEventListener(process, this.process, true);
        this.seeker.addEventListener(end, this.end, true);
        this.process(event);
        this.props.onTimeChangeStart(this.state.value);
    };


    end = () => {
        const process = 'mousemove', end = 'mouseup';
        this.seeker.removeEventListener(process, this.process, true);
        this.seeker.removeEventListener(end, this.end, true);
        this.props.onTimeChangeEnd(this.state.value);
    };

    process = (e) => {
        let value;
        value = e.clientX - this.state.rect.left;
        value = Math.max(value, 0);
        value = Math.min(value, this.state.rect.width);
        value = value / this.state.rect.width;
        value = this.props.max * value;
        this.setState({value: value});
    };

    render() {
        return (
            <div ref={ref => this.seeker = ref} className='seeker'>
                {/*seeker line */}
                <div
                    className='seeker-inner'
                    style={{'width': (this.props.model / this.props.max * 100) + '%'}}
                />
                {/*mouse over line*/}
                <div
                    className='seeker-inner'
                    style={{'width': (this.state.value / this.props.max * 100) + '%'}}
                />
                {/*video load line*/}
                <div
                    className='seeker-inner'
                    style={{'width': this.props.videoLoadProcent}}
                />
            </div>
        );
    }
}

export default Seeker;
