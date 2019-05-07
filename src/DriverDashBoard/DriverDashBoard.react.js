import React from 'react';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader.react';
import DashBoardDataGrid from '../DashBoardDataGrid/DashBoardDataGrid.react';
import DashBoardLinks from '../DashBoardLinks/DashBoardLinks.react';



class DriverDashBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            likeCount :1,
            dislikeCount:0,
            driverList:[{}]
        }
    }

    componentDidMount(){

    const url = process.env.REACT_APP_API_URL;
    
    fetch(url).
         then(res => res.json()).
          then(data =>
             this.setState({"driverList":data}));

    }
    driverData= {
        name:"Ramesh",
        alt:"Driver Logo",
        logo:"/images/driver.jpg",
        subhead:"Driver Page"
    }
    increment = ()=>{

        this.setState({'likeCount':this.state.likeCount+1})
    }

    dislike = ()=>{

        this.setState({'dislikeCount':this.state.dislikeCount+1})
    }

    render() {
        return (
            <div >

            <DashBoardHeader data={this.driverData}/>
            <DashBoardLinks/>
            
            <table className='table table-striped'>
            <tbody>
            <DashBoardDataGrid driverList={this.state.driverList}></DashBoardDataGrid>
            
            </tbody>
          </table>
            

                <div>
                <i className={'fa fa-thumbs-up'} onClick={this.increment}></i>
                 <span>{this.state.likeCount} </span>
                 
                 <i className={'fa fa-thumbs-down'} onClick={this.dislike}></i>
                 <span>{this.state.dislikeCount}</span>
                 
                </div>
               
            </div>

            
        );
    }
}

export default DriverDashBoard;