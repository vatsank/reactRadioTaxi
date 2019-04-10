import React from 'react';



const Footer = (props) => {

    return (
        <footer>

      <p><span>Designed by  </span> 
          {props.info.designer}
         <span>CopyRight :{props.info.copyRight}</span>
         </p>
        </footer>
    );

}

export default Footer;