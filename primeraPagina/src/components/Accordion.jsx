const accordion = ({titulo})=> {

    const estilo = {

        accordion: {
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

    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Ejemplo de accordion</strong> 
      </div>
    </div>
  </div>

</div>

)

}

export default accordion;