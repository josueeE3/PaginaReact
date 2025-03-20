const Breadcrumb = () => {
    const estilo = {
        nav: {
            backgroundColor: "White",
            color: "Black",
            padding: "20px",
            borderColor: "Black",
            borderRadius: "20px",
            width: "150px",
            margin: "20px"
        }
    };

    return (
        <nav
            style={{ ...estilo.nav, "--bs-breadcrumb-divider": ">" }}
            aria-label="breadcrumb"
        >
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
