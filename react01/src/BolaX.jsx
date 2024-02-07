function BolaX({ talla, margen, fondo }) {
    const estilo = {
      width: talla,
      height: talla,
      backgroundColor: fondo,
      borderRadius: '50%',
      margin: margen,
    };
  
    return <div style={estilo}></div>;
     
    
  }
  export default BolaX;