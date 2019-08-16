import React, {Component} from 'react';
import {connect} from 'react-redux';

import image_1 from '../../../assets/images/christian-1.jpg';
import image_2 from '../../../assets/images/ishome-1.jpg';
import image_3 from '../../../assets/images/paul-2.jpg';
import image_4 from '../../../assets/images/christian-2.jpg';
import image_5 from '../../../assets/images/ishome-2.jpg';
import image_6 from '../../../assets/images/maxresdefault.jpg';

import Carousel from '../../components/carousel/carousel';
import axios from '../../../http-handlers/axios-music-handler';


class LandingPage extends Component {

    state = {
        artistList: []
    };

    componentDidMount() {
        this.setState({
            ...this.state, artistList: [
                {id: 1631052, image: image_1 , title : 's',active: true},
                {id: 384890, image: image_2, title : 's',},
                {id: 6377, image: image_3, title : 's',},
                {id: 6376, image: image_4, title : 's',},
                {id: 6372, image: image_5, title : 's',},
                {id: 6371, image: image_6, title : 's',}
            ]
        });

    }

    artistFetchHandler = (id) => {
        axios.get('/artist/' + id)
            .then(e => {
                this.setState({
                    ...this.state,
                    artist: e.data,
                });
            });
    };


    render() {
        return (
            <React.Fragment>
                <div className="w-100 h-100vh justify-content-center align-items-center">
                    <Carousel list={this.state.artistList} clicked={(id) => this.artistFetchHandler(id)}/>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = store => {
    return {
        color: store.color.color
    }
};


export default connect(mapStateToProps)(LandingPage);
