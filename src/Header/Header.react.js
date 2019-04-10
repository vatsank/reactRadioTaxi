import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

    return (
        <div>
        <h1>{props.majorHeading}</h1>

        <nav>
            <ul>
                <li><Link exact='true' to='/'>Home</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to="/driver">Driver</Link></li>

            </ul>
        </nav>
        <nav>
        </nav>
        </div>
    );

}

export default Header;