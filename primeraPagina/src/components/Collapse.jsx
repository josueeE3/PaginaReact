import React, { useState } from 'react';

const Collapse = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ margin: "20px" }}>
            <button
                className="btn btn-primary"
                type="button"
                onClick={toggleCollapse}
                aria-expanded={isOpen}
                aria-controls="collapseExample"
            >
                Mostrar/Ocultar contenido
            </button>
            <div
                className={`collapse ${isOpen ? 'show' : ''}`}
                id="collapseExample"
                style={{ marginTop: "15px" }}
            >
                <div className="card card-body">
                    Este es el contenido dentro del componente Collapse. Puedes agregar aquí cualquier información o elementos adicionales.
                </div>
            </div>
        </div>
    );
};

export default Collapse;
