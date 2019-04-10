import React from 'react';



const DashBoardHeader = (props) => {

    return (
     <div className=' headerbackground row'>
        <div className="col-md-2">
            <img src={props.data.logo} 
           alt={props.data.altText} className='logo'/>
       </div>
       <div className='col-md-6'>
            <h2>{props.data.subhead}</h2>
        </div>
        <div className='col-md-4'>
              <h6 className='justi'>{props.data.name}</h6>
        </div>
       </div>
    );

}

export default DashBoardHeader;