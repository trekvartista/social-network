import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";

const Sidebar = (p) => {

    // const closeButtonRef = useRef(null);
    // const [visible, setVisibility] = useState(false);

    const closeNav = () => {
        // document.getElementById("ddt").setAttribute('aria-expanded', 'false');
        // console.log(document.getElementById("ddt").getAttribute('aria-expanded'));
        document.getElementById("mySidebar").style.width = "0";

        // setVisibility(false);
        // console.log('Value: ', closeButtonRef.current?.value)
    }

    return (
        <div>
            {  

                <ul id="mySidebar" className={s.sidebar}>
                <a className={s.closebtn} onClick={closeNav}>&times;</a>
                <li>
                    <NavLink activeClassName={s.active} to='/' exact={true}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <a href="#toolsSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Tools </a>
                    <ul className="collapse list-unstyled" id="toolsSubmenu">
                        <li>
                            <NavLink to='/profile' activeClassName={s.active}>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' activeClassName={s.active}>
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/calculator" activeClassName={s.active}> Calculator </NavLink>
                        </li>
                        <li>
                            {/* <NavLink to="/https://www.youtube.com/watch?v=dQw4w9WgXcQ"> something else. </NavLink> */}
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                                something else...
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink activeClassName={s.active} to="/contact">
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={s.active} to="/portfolio">
                        Portfolio
                    </NavLink>
                </li>
            </ul>
            }
        </div>
    );
};

export default Sidebar;
