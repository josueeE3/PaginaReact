import React from 'react';

const TooltipButton = () => {
    return (
        <div style={{ margin: "20px", textAlign: "center" }}>
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="¡Este es un Tooltip!"
            >
                Pasa el cursor por aquí
            </button>
        </div>
    );
};

export default TooltipButton;
