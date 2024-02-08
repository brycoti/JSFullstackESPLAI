
function FotoBola ({src, radio}) {
    const estilo = {
        borderRadius: radio,
        width: "100%",
        backgroundColor: "black",
        color: "white"
    }

    return (
        <div style={estilo} >
            <img src={src} alt="Foto de una Bola" />
        </div>
    )
}

export default FotoBola;