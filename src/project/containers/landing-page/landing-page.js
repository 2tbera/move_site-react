import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class LandingPage extends Component {

    state = {
        moveList: []
    };

    componentDidMount() {



        // axios.get('https://api.imovies.cc/api/v1/casts/4428/movies?page=1&per_page=12&sort=rand')
        //     .then(e => {
        //         this.setState({
        //             ...this.state,
        //             moveList: e.data
        //         });
        //     })
    }


    render() {
        return (
            <div className='col-9 p-5 h-100vh' style={{background: this.props.color}}>
                <div className="row p-5 h-100 ">


                    <div className='font-Bold font-size-50 w-100'>
                        Room for kiddos & local heroes
                    </div>


                    {/*<div className='w-100 d-flex justify-content-center align-items-center'>*/}
                        {/*<svg xmlns='http://www.w3.org/2000/svg' width='518' viewBox='0 0 518 376'>*/}
                            {/*<clipPath id='hexagonal-mask'>*/}
                                {/*<path id='Shape_2_copy_3' data-name='Shape 2 copy 3'*/}
                                      {/*stroke="5px"*/}
                                      {/*d='M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,100.864,265.919,56.309S525.239,212.294,516.754,137.3,282.329-55.525,181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z'>*/}
                                    {/*<animate id='animation-to-check2' repeatCount='indefinite' fill='freeze'*/}
                                             {/*attributeName='d' dur='15s'*/}
                                             {/*values='M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,100.864,265.919,56.309S525.139,212.294,516.754,137.3,282.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z; M181.562,31.437S-16.292,137.133,2.793,276.944s137.781,100.864,265.919,70.309S505.139,212.294,516.654,137.3,282.329-55.525, 181.562,31.437ZM374.071,271.7S342.6,320.454,329.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.408S419.023,270.2,374.071,271.7Z; M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,150.864,265.919,60.309S545.239,212.294,516.754,137.3,262.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z; M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,100.864,265.919,56.309S525.239,212.294,516.754,137.3,282.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z; M181.562,31.437S-26.292,107.733,100.793,206.944s147.781,100.864,265.919,56.309S525.139,112.194,416.654,90.3,300.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z; M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,100.864,265.919,56.309S525.139,212.294,516.754,137.3,282.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z'/>*/}
                                {/*</path>*/}
                            {/*</clipPath>*/}
                            {/*<g clipPath="url(#hexagonal-mask)">*/}
                                {/*<image width="100%"*/}
                                       {/*href="https://ctl.s6img.com/society6/img/mkby6ZhzOKDhBit7GqenM091c4c/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/5f73068a0f5b4b3ca7cf079fd012a77c/~~/spacce-03-geometric-pastel-minimalist-illustration-prints.jpg?wait=0&attempt=0"/>*/}
                            {/*</g>*/}
                        {/*</svg>*/}
                    {/*</div>*/}


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
