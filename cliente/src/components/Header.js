import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import '../css/index.css';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="#" className="navbar-brand">
                <div id="img_wrap"><img src="./logo.png" alt="Logo-Inicio" className="imgLogo" /></div>
            </Link>

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Empadronamiento
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="dropdown-item" >
                        <NavLink 
                            to='/empadronamientos'
                            className="nav-link"
                            activeClassName="active">
                                LISTAR
                        </NavLink> 
                    </div>
                    <div className="dropdown-item" >
                        <NavLink 
                            to='/nuevo-empadronamiento'
                            className="nav-link"
                            activeClassName="active">
                                AGREGAR
                        </NavLink>
                    </div>
                </div>
            </div>


            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorias
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="dropdown-item" ><NavLink 
                        to='/categorias'
                        className="nav-link"
                        activeClassName="active">
                            LISTAR
                    </NavLink> </div>
                    <div className="dropdown-item" ><NavLink 
                        to='/nueva-categoria'
                        className="nav-link"
                        activeClassName="active">
                            AGREGAR
                    </NavLink></div>
                </div>
            </div>

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actividades
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="dropdown-item" ><NavLink 
                        to='/actividades'
                        className="nav-link"
                        activeClassName="active">
                            LISTAR
                    </NavLink> </div>
                    <div className="dropdown-item" ><NavLink 
                        to='/nueva-actividad'
                        className="nav-link"
                        activeClassName="active">
                            AGREGAR
                    </NavLink></div>
                </div>
            </div>

        </div>
    </nav>
);

export default Header;