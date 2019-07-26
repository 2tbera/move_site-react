import React, {Component} from 'react';

class Seeker extends Component {


    render() {
        return (
            <div className='seeker'>
                {this.props.model} /{this.props.max}
                <div
                    className='seeker-inner'
                    style={{'width': (this.props.model / this.props.max * 100) + '%'}}
                />
            </div>
        );
    }
}

export default Seeker;
