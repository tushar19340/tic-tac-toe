import './box.css'

function Box(props){

    return(
    <button onClick={props.onClick} className="square">{props.value}</button>
    );
}

export default Box;