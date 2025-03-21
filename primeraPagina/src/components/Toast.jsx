import React, { useState } from 'react';

const Toast = () => {
    const [show, setShow] = useState(false);

    const toggleToast = () => {
        setShow(!show);
    };

    return (
        <div style={{ margin: "20px" }}>
            <button
                className="btn btn-primary"
                onClick={toggleToast}
            >
                Mostrar Toast
            </button>

            {show && (
                <div
                    className="toast show"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    style={{ position: "absolute", top: "20px", right: "20px", minWidth: "250px" }}
                >
                    <div className="toast-header">
                        <strong className="me-auto">Notificación</strong>
                        <button type="button" className="btn-close" aria-label="Close" onClick={toggleToast}></button>
                    </div>
                    <div className="toast-body">
                        Este es un mensaje Toast. Puedes personalizar su contenido.
                    </div>
                </div>
            )}
        </div>
    );
};

export default Toast;
