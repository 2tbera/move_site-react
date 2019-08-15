import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from '../../../http-handlers/axios-music-handler';

// import axios from 'axios';

class MoveDetailPage extends Component {

    state = {
        genres: null
    };

    componentDidMount() {
        // axios.get('/search?&q="Paul Kalkbrenner"&index=1')
        //     .then(e => {
        //         console.log(e.data);
        //         this.setState({
        //             ...this.state,
        //             aTracks: e.data
        //         });
        //     });

        axios.get('/genre')
            .then(e => {
                console.log(e.data.data);
                this.setState({
                    ...this.state,
                    genres: e.data
                });
            });
        // window.onload = () => {
        //     const canvas = document.getElementById("myCanvas");
        //     const ctx = canvas.getContext("2d");
        //     const img = document.getElementById("scream");
        // console.log(canvas,ctx , '<---------------' ,img);
        // ctx.drawImage(img, 10, 10);
        // };

    }


    render() {

        let move = null;

        if (this.state.genres) {
            move = (
                <div>
                    {this.state.genres.data.map(genre =>
                        (
                            <div key={genre.id}>{genre.name}
                                <img src={genre.picture_small} alt=""/>
                            </div>
                        ))}
                </div>
            )
        }

        return (
            <div className='col-10 p-5 ' style={{background: this.props.color}}>

                {move}
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
