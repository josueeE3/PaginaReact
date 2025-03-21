import React from 'react';

const Card = () => {
    return (
        <div className="card" style={{ width: "18rem", margin: "20px" }}>
            <img src="https://imagenes.elpais.com/resizer/v2/6Y76H4LCVYH37S7IMFP3WLLFEA.jpg?auth=85ead13bbc0595de3fb8220cba8ccadaa92d243871b274efa4ee11f3e9ecbe3d&width=414" className="card-img-top" alt="Card Image" />
            <div className="card-body">
                <h5 className="card-title">Titulo ejemplo</h5>
                <p className="card-text">Cristiano el mejor del mundo.</p>
                <a href="https://imagenes.elpais.com/resizer/v2/6Y76H4LCVYH37S7IMFP3WLLFEA.jpg?auth=85ead13bbc0595de3fb8220cba8ccadaa92d243871b274efa4ee11f3e9ecbe3d&width=414" className="btn btn-primary">Ir a algún lugar</a>
            </div>
        </div>
    );
};

export default Card;
