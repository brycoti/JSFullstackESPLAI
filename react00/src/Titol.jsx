const colorVerd = {
    color: "green",
    border: "1px solid red",
    padding: "4px",
    backgroundColor: "white",
    fontSize: "3em"
}

const Titol1 = (props) => <h1 style={colorVerd}>{props.text}</h1>
const Titol2 = (props) => <h1>{props.text}</h1>
const Titol3 = (props) => <h1>{props.text}</h1>


export {Titol1, Titol2, Titol3}
/* function Titol(props) {
    return <h1>{props.test}</h1>
   
}

export default Titol;
*/