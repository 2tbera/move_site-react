import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from '../../../http-handlers/axios-music-handler';

// import axios from 'axios';

class MoveDetailPage extends Component {

    state = {

    };

    componentDidMount() {

    }

    tracksFetchHandler = (url) => {
        console.log(url);
        axios.get('https://cors-anywhere.herokuapp.com/' + url)
            .then(e => {
                this.setState({
                    ...this.state,
                    artist: {
                        ...this.state.artist,
                        artistTracks: e.data
                    }
                });
            });
    };


    render() {

        let artists = null;

        if (this.state.artist) {
            artists = (
                <div>
                    <div>
                        {this.state.artist.name}
                        <img src={this.state.artist['picture']} alt=""/>
                        <button onClick={() => this.tracksFetchHandler(this.state.artist['tracklist'])}>
                            track list
                        </button>
                    </div>
                </div>
            )
        }

        let artistsTraks = null;

        if (this.state.artist && this.state.artist.artistTracks) {
            artistsTraks = (
                <div>
                    {this.state.artist['artistTracks'].data.map(e =>
                        <div key={e.id}>
                            title: -> {e.title}
                            <br/>
                            <audio src={e['preview']} controls/>
                        </div>
                    )}
                </div>
            )
        }


        return (
            <div className='col-10 p-5 ' style={{background: this.props.color}}>

                {/*{artists}*/}
                {/*{artistsTraks}*/}
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
