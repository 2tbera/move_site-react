import React, {Component} from 'react';

class Seeker extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log(this.props.model, this.props.max);
        return null;
    }

    render() {
        return (
            <div className='seeker'>
                {this.props.model } /{ this.props.max}
                <div
                    className='seeker-inner'
                style={{'width.%': this.props.model / this.props.max * 100}}
                />
            </div>
        );
    }
}

export default Seeker;
