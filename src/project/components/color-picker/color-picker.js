import React, {Component} from 'react';
import * as action from "../../../store/actions";
import {connect} from "react-redux";

const colorList = ['#DC5990', '#FF5978', '#FFC876', '#F2EAE3'];


class ColorPicker extends Component {

    state = {
        color: '',
        colorPickerStatus: false
    };

    colorUpdateHandler = (event) => {
        let value = event.target.value;

        if (value[0] !== '#') {
            value = '#' + value;
        }
        if (this.isValidHex(value)) {
            this.value = value;
            this.props.onColorInit(value)
        }
        this.setState({color: event.target.value})
    };


    isValidHex = (code) => {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(code);
    };


    colorPickerStateHandler = () => {
        this.setState(prevState => {
            return {colorPickerStatus: !prevState.colorPickerStatus};
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.props.isAuthenticated ? (
                    <React.Fragment>
                        <svg className='color-picker-button' onClick={this.colorPickerStateHandler} xmlns='http://www.w3.org/2000/svg' width='50'
                             height='50'
                             viewBox='0 0 600 600'>
                            <path
                                d='M477.2 201.2C504.4 244.7 483.6 319.3 446.1 379 408.5 438.7 354.3 483.3 293.8 486.9 233.3 490.5 166.6 453 139.9 399.6 113.2 346.2 126.5 276.8 159.8 229.8 193.2 182.7 246.6 157.8 310.8 151.6 375.1 145.3 450.1 157.7 477.2 201.2Z'
                                fill='#ff6827'/>
                        </svg>

                        {this.state.colorPickerStatus ? (
                            <div className='color-picker'>

                                <div className='w-100 d-flex justify-content-center align-items-center'
                                     style={{background: this.props.color, height: '150px'}}>
                                    <div>{this.props.color}</div>
                                </div>
                                <div className='d-flex flex-wrap'>
                                    {colorList.map((color, index) => <div key={color + index}
                                                                          style={{background: color}}
                                                                          onClick={() => this.props.onColorInit(color)}
                                                                          className='m-1 color-picker-item'>
                                    </div>)}
                                </div>
                                <div className='p-2'>
                                    <input className="form-control" type="text" value={this.state.color}
                                           onChange={(event) => this.colorUpdateHandler(event)}/>
                                </div>
                            </div>) : null}
                    </React.Fragment>
                ) : null}
            </React.Fragment>
        );
    }
}


const mapStateToProps = store => {
    return {
        isAuthenticated: store.auth.token !== null,
        color: store.color.color
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onColorInit: (color) => {
            dispatch(action.colorInit(color))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
