import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class MoveDetailPage extends Component {

    state = {
        movie: null
    };

    componentDidMount() {
        axios.get('http://devapi.adjaranet.com/api/v1/item/22380')
            .then(e => {
                console.log(e.data);
                this.setState({
                    ...this.state,
                    movie: e.data
                });
            })
    }


    render() {

        let move = null;

        if (this.state.movie) {
            move = (
                <div>{this.state.movie.translations.title}
                    {this.state.movie.files.video.file}
                    <video src={this.state.movie.files.video.file}/>
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
