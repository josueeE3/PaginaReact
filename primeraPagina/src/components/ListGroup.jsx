import React from 'react';

const ListGroup = () => {
    return (
        <div className="list-group" style={{ margin: "20px", width: "300px" }}>
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                Elemento activo
            </a>
            <a href="#" className="list-group-item list-group-item-action">Elemento 2</a>
            <a href="#" className="list-group-item list-group-item-action">Elemento 3</a>
            <a href="#" className="list-group-item list-group-item-action disabled" tabIndex="-1" aria-disabled="true">
                Elemento deshabilitado
            </a>
        </div>
    );
};

export default ListGroup;
