import React from 'react';

const Pagination = () => {
    return (
        <nav aria-label="Page navigation example" style={{ margin: "20px" }}>
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Anterior</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Siguiente</a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
