import styled from "styled-components";

const H1_alerta = styled.h1`
    border: 1px solid red;
    padding: 20px;
    color: ${(props) => props.color};
    font-size: ${(props) => props.mida};
`;



function Alerta({missatge, variant}){

    return <H1_alerta color={variant} mida="3em">{missatge}</H1_alerta>;

}


export default Alerta;