import React, {Component} from 'react';
import CarouselItem from './carousel-item/carousel-item'
import Button from "../UI/Button/Button";

class Carousel extends Component {

    state = {
        seeker: null,
        rect: null,
        value: 200,
        mouseDown: false
    };

    componentDidMount() {
        this.seeker.addEventListener('mousedown', (event) => this.begin(event));
    }

    begin = event => {
        const process = 'mousemove', end = 'mouseup';

        this.setState({
            ...this.state,
            rect: this.seeker.getBoundingClientRect(),
            prevValue: this.state.value,
            mouseDownX: event.clientX,
            mouseDown: true
        });


        this.seeker.addEventListener(process, this.process, true);
        this.seeker.addEventListener(end, this.end, true);

        this.process(event);


    };

    process = (e) => {
        let change;
        console.log(this.state.mouseDownX - e.clientX);
        // if ( this.state.value > -2500 && this.state.value < 600 ) {
        change = this.state.mouseDownX - e.clientX;
        // }
        this.setState({
            ...this.state,
            value: this.state.prevValue + change * -1
        })
    };

    end = () => {
        this.setState({
            ...this.state,
            prevValue: this.state.value,
            mouseDown: false
        });

        const process = 'mousemove', end = 'mouseup';
        this.seeker.removeEventListener(process, this.process, true);
        this.seeker.removeEventListener(end, this.end, true);
    };

    render() {
        return (
            <div ref={ref => this.seeker = ref}
                 className={"c-carousel h-100 d-flex align-items-center " + (this.state.mouseDown ? 'mouseDown' : null)}>
                <div className='d-flex align-items-center' style={{transform: `translateX(${this.state.value}px) `}}>
                    {this.props.list.map((item, index) => (
                        <div key={item.id} className={"c-carousel-item " + (item.active ? 'active' : null)}>
                            <Button clicked={() => {
                                this.props.clicked(item.id)
                            }}>
                                <CarouselItem index={index} title={item.title} data={item.image}  />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default Carousel;
