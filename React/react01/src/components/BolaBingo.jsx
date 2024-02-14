import './bolaBingo.css';
function BolaBingo(props) {

   const style = {
        color : 'green',
        fontSize : '40px',
        textAlign : 'center',
    }

    return (
        <div className="circuloBingo">
            <p style={style}>{props.num}</p>
        </div>
    );
}

export default BolaBingo;