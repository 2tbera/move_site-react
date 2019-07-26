import React from 'react';
import LandingPage from './project/containers/landing-page/landing-page';
import MoveDetailPage from './project/containers/move-detail-page/move-detail-page';
import {Route, Switch} from 'react-router';
import ColorPicker from './project/components/color-picker/color-picker';
import SideBar from './project/components/navigation/side-bar/side-bar';
import Auth from './project/components/auth/auth';
import Player from './project/components/player/player';



function App() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <SideBar></SideBar>
                <ColorPicker></ColorPicker>
                <Player></Player>
                {/*<Switch>*/}
                    {/*<Route path="/movies" component={LandingPage}/>*/}
                    {/*<Route path="/move/:id" exact component={MoveDetailPage}/>*/}
                    {/*<Route path="/auth" component={Auth}/>*/}
                    {/*<Route path="/" exact component={LandingPage}/>*/}
                {/*</Switch>*/}
            </div>
        </div>
    );
}

export default App;
