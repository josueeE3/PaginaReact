import React from 'react';

const Form = () => {
    return (
        <form style={{ margin: "20px" }}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Dirección de correo electrónico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Nunca compartiremos tu correo con nadie más.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Recuérdame</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};

export default Form;
