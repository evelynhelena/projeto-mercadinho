import React from 'react';
import {FaBell, FaUser, FaSearch} from 'react-icons/fa';
function Header(){
    return(
        <div className="wraper-header">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><FaBell/></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="search">
                            <div className="row">
                                <div className="col s12">
                                    <div className="row">
                                       <div className="input-field col s8">
                                            <input placeholder="Pesquisar" id="first_name" type="text" className="validate"/>
                                            <a className="btn-floating btn-large waves-effect waves-light grey btn-search"><i><FaSearch/></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="btn-alert">
                                <FaBell/>
                            </button>
                            <span className="circle-alert">1</span>
                        </li>
                        <li>
                            <button className="btn-alert">
                                <FaUser/>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;