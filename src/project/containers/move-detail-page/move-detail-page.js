import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from '../../../http-handlers/axios-music-handler';

class MoveDetailPage extends Component {

    state = {
        aTracks: null
    };

    // API_KEY = CFEFES9JPKBN4T7H


    componentDidMount() {


        axios.get('"ishome"&index=1')
            .then(e => {
                console.log(e.data);
                this.setState({
                    ...this.state,
                    aTracks: e.data
                });
            })
    }


    render() {

        let move = null;

        if (this.state.aTracks) {
            move = (
                <div>
                    {this.state.aTracks.data.map(alboms =>
                        (
                            <div key={alboms.id}>{alboms.title}
                                <audio src={alboms.preview} controls/>

                            </div>
                        ))}
                </div>
            )
        }

        return (
            <div className='col-10 p-5 ' style={{background: this.props.color}}>
                {move}asd
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        color: store.color.color
    }
};


export default connect(mapStateToProps)(MoveDetailPage);
