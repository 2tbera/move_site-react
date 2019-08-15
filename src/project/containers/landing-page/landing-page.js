import React, {Component} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios';
import axios from '../../../http-handlers/axios-music-handler';


class LandingPage extends Component {

    state = {};

    componentDidMount() {


        axios.get('/genre')
            .then(e => {
                console.log(e.data.data);
                this.setState({
                    ...this.state,
                    genres: e.data
                });
            });

        axios.get('/chart')
            .then(e => {
                console.log(e.data);
                this.setState({
                    ...this.state,
                    chart: e.data
                });
            });

        // axios.get('https://api.imovies.cc/api/v1/casts/4428/movies?page=1&per_page=12&sort=rand')
        //     .then(e => {
        //         this.setState({
        //             ...this.state,
        //             moveList: e.data
        //         });
        //     })
    }


    render() {

        let move = null;

        if (this.state.genres) {
            move = (
                <div>
                    {this.state.genres.data.map(genre =>
                        (
                            <div key={genre.id}>{genre.name}
                                <img src={genre['picture_small']} alt=""/>
                            </div>
                        ))}
                </div>
            )
        }
        //
        let chart = null;

        if (this.state.chart && this.state.chart.tracks) {
            chart = (
                <div>
                    {this.state.chart.tracks.data.map(genre =>
                        (
                            <div key={genre.id}>{genre.title}
                                <audio src={genre.preview} controls />
                            </div>
                        ))}
                </div>
            )
        }


        return (
            <div className='col-9 p-5 h-100vh' style={{background: this.props.color}}>
                <div className="row p-5 h-100 ">


                    {move}
                    {chart}
                    {/*<canvas width="1536" height="775" style="width: 1920px; height: 969px;"></canvas>*/}


                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        color: store.color.color
    }
};


export default connect(mapStateToProps)(LandingPage);
