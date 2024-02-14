
function Titol({contingut, variant}){

    const estils = {
        textDecoration: "underline", //text-decoration
        color: variant,
    }

    const classe =  "text-"+variant+"-500" ;

    return (
        <>
            <h1 className={classe} style={estils}>{contingut}</h1>
        </>
    )
}

export default Titol;