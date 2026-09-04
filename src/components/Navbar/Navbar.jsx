import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const navbarClasses = theme === 'dark'
        ? 'navbar navbar-expand-lg navbar-dark bg-dark'
        : 'navbar navbar-expand-lg navbar-light bg-light';

    return (
        <nav className={navbarClasses}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="Logo Plataforma TI" height="32" /> Gestión de proyectos TI
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/" end>
                            <i className="fa-solid fa-house"></i> Inicio
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            <i className="fa-solid fa-plus"></i> Ingreso solicitud
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/request-detail">
                            <i className="fa-solid fa-list-check"></i> Detalle de Solicitudes
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/project-list">
                            <i className="fa-solid fa-table-list"></i> Listado Proyectos
                        </NavLink>
                        </li>
                    </ul>

                    <button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        title="Cambiar tema"
                        onClick={toggleTheme}
                    >
                        <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;