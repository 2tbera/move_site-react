import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class MoveDetailPage extends Component {

    state = {
        aTracks: null
    };

    // API_KEY = CFEFES9JPKBN4T7H


    componentDidMount() {
        const headers = {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "6c486e6840msh24f792e5ee226d3p17e473jsn51960995c05b"
        }

        axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?&q="eminem"&index=25', {
            headers: headers
        })
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
