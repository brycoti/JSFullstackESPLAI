
function Gato (props) {

    const estilo = {
        width: props.ancho, 
        height: props.alto
      };

      const estiloDiv = {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        border: '2px solid blue', 
    };

    return (
        <>  
                <div style={estiloDiv}>
                    <img style={estilo} src="gato.jpg" alt="gato" />
                    <strong>{props.nombre}</strong>
                </div>
                
        </>
    )
}

export default Gato;