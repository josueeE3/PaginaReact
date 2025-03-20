const button = ({titulo})=> {

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

return (

    <button type="button" class="btn btn-primary" style={estilo.button}>
    {titulo}
    </button>

)

}

export default button;