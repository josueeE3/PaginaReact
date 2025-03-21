import React from 'react';

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ margin: "20px" }}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://e.rpp-noticias.io/medium/2020/05/24/370137_946530.jpg" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Fdeportes%2Fcristiano-ronaldo-show-final-feliz-alemania-combo-viral-lujos-sprint-usain-bolt-nuevo-record-caer_0_B3STbapww.html&psig=AOvVaw1ik4ZF_OkmU-RPbxMQzFNN&ust=1742672470404000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjgg4H3m4wDFQAAAAAdAAAAABAS" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpain-less.co.il%2Fw-shops1.php%3FIDNO%3DNu164452500%26cid%3D79%26g%3D14%26m%3D1&psig=AOvVaw1ik4ZF_OkmU-RPbxMQzFNN&ust=1742672470404000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjgg4H3m4wDFQAAAAAdAAAAABAl" className="d-block w-100" alt="Slide 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
