import React from "react";

const CuadradoB = ({ talla, margen, grosor, color }) => {
    const estilo = {
      width: talla, // Usando la prop talla para el ancho y alto asegura que sea cuadrado
      height: talla,
      margin: margen,
      border: `${grosor} solid ${color}`, // Construye la cadena del borde usando grosor y color
    };
    return <div style={estilo}></div>;
     
    
  }
  export default CuadradoB;