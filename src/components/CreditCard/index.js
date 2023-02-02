import style from "./style.module.css"


export function CreditCard(props){
return (
<div
style={{
    backgroundColor: {props.bgColor}
}} >
<p>{props.type}</p>
<h1>{props.number}</h1>
<p>{props.expirationMonth}</p> <p>{props.expirationYear}</p>
<p>{props.bank}</p>
<p>{props.owner}</p>

</div>

);
}

