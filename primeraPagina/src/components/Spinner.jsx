import React from 'react';

const Spinner = () => {
    return (
        <div style={{ margin: "20px", textAlign: "center" }}>
            <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    );
};

export default Spinner;
