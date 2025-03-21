import React from 'react';

const Dropdown = () => {
    return (
        <div className="dropdown" style={{ margin: "20px" }}>
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Menú desplegable
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Opción 1</a></li>
                <li><a className="dropdown-item" href="#">Opción 2</a></li>
                <li><a className="dropdown-item" href="#">Opción 3</a></li>
            </ul>
        </div>
    );
};

export default Dropdown;
