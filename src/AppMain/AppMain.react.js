import React from 'react';
import {Route,Switch}  from '../../node_modules/react-router-dom';
import DriverDashBoard from '../DriverDashBoard/DriverDashBoard.react';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard.react';



const AppMain = () => {

    return (
        <div >

        <Switch>
        <Route exact='true' path='/'
         render={()=><h2>Home Page</h2>}></Route>
        <Route path="/driver" 
          component={DriverDashBoard}></Route>
        <Route path="/admin" 
           component={AdminDashBoard}></Route>
        </Switch>
        </div>
    );

}

export default AppMain;