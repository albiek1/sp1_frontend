import {NavLink} from 'react-router-dom';

function Header({facade, loggedIn}){
    return(
        <div>
            <ul className="header">
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                {facade.hasUserAccess('user', loggedIn) && (
                    <li>
                        <NavLink activeClassName="active" to="/profile">
                            Profile
                        </NavLink>
                    </li>
                )}
                {facade.hasUserAccess('admin', loggedIn) && (
                    <li>
                        <NavLink activeClassName="active" to="/createEvent">
                            CreateEvent
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Header;