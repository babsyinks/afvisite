import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

export default(
    <BrowserRouter>
            <Routes>
                <Route exact path = '/'/>
                <Route exact path = '/about'/>
                <Route exact path = '/vision_mission'/>
                <Route exact path = '/components'/>
                <Route exact path = '/contents'/>
                <Route exact path = '/contact'/>
                <Route exact path='/admin'/>
                <Route exact path='/image_folders'/>
                <Route exact path='/images'/> 
                <Route exact path='/videos'/>
            </Routes> 
        </BrowserRouter>
)
