import React from 'react';



const ShowList = (props) => {

    return (
        <div >
          <ul>
           {
               props.items.map(item =>{
                   return <li key={item}>{item}</li>
               })
           }
          </ul>
        </div>
    );

}

export default ShowList;