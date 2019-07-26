import React from 'react';

// import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className='pl-5 logo font-color-white font-size-22 cursor-pointer font-Bold' style={{height: props.height}}>
        TEMPO
        {/*<img src={burgerLogo} alt="MyBurger" />*/}
    </div>
);

export default logo;
