import React, { useRef } from 'react';

const estilo = {

    button: {
        backgroundColor: "White",
        color: "Black",
        padding: "20px",
        borderColor: "Black",
        borderRadius: "20px",
        width: "150px",
        margin: "20px"
    }
}

const AlertComponent = () => {
    const alertPlaceholder = useRef(null);

    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        if (alertPlaceholder.current) {
            alertPlaceholder.current.append(wrapper);
        }
    };

    const showAlert = () => {
        appendAlert('Esta es una alerta!', 'success');
    };

    return (
        <div>
            <div ref={alertPlaceholder} id="liveAlertPlaceholder"></div>
            <button style={estilo.button}
                type="button"
                className="btn btn-primary"
                onClick={showAlert}
            >
                Boton de alerta
            </button>
        </div>
    );
};

export default AlertComponent;

