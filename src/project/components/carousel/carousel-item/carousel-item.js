import React from 'react';

const carouselItem = (props) => (

    <React.Fragment>

        {/*svg title*/}
        {/*<svg viewBox="0 0 800 600">*/}
            {/*<symbol id="s-text">*/}
                {/*<text textAnchor="middle" x="50%" y="35%" className="text--line font-Bold font-size-50">*/}
                    {/*Elastic*/}
                {/*</text>*/}
            {/*</symbol>*/}
            {/*<g className="g-ants">*/}
                {/*<use xlinkHref="#s-text" className="text-copy"/>*/}
                {/*<use xlinkHref="#s-text" className="text-copy"/>*/}
                {/*<use xlinkHref="#s-text" className="text-copy"/>*/}
                {/*<use xlinkHref="#s-text" className="text-copy"/>*/}
                {/*<use xlinkHref="#s-text" className="text-copy"/>*/}
            {/*</g>*/}
        {/*</svg>*/}


        {/*svg image*/}
        <svg
            className='w-100'
            xmlns='http://www.w3.org/2000/svg' width='518' viewBox='0 0 518 376'>
            <clipPath id='hexagonal-mask'>
                <path id='Shape_2_copy_3' data-name='Shape 2 copy 3'
                      d='M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,100.864,265.919,56.309S525.239,212.294,516.754,137.3,282.329-55.525,181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z'>
                    <animate id='animation-to-check2' repeatCount='indefinite' fill='freeze'
                             attributeName='d' dur='15s'
                             values='M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,100.864,265.919,56.309S525.139,212.294,516.754,137.3,282.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z; M181.562,31.437S-16.292,137.133,2.793,276.944s137.781,100.864,265.919,70.309S505.139,212.294,516.654,137.3,282.329-55.525, 181.562,31.437ZM374.071,271.7S342.6,320.454,329.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.408S419.023,270.2,374.071,271.7Z; M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,150.864,265.919,60.309S545.239,212.294,516.754,137.3,262.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z; M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,100.864,265.919,56.309S525.239,212.294,516.754,137.3,282.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z; M181.562,31.437S-26.292,107.733,100.793,206.944s147.781,100.864,265.919,56.309S525.139,112.194,416.654,90.3,300.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z; M181.562,31.437S-26.292,147.733,2.793,276.944s147.781,100.864,265.919,56.309S525.139,212.294,516.754,137.3,282.329-55.525, 181.562,31.437ZM394.071,291.7S342.6,320.454,349.8,352.4s36.593,24.937,65.847,13.921,63.521-29.906,61.42-48.448S419.023,270.2,394.071,291.7Z'/>
                </path>
            </clipPath>
            <g clipPath="url(#hexagonal-mask)">
                <image height="100%"
                       href={props.data}/>
            </g>
        </svg>
    </React.Fragment>
);

export default carouselItem;
