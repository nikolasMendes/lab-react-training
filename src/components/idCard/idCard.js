export function IdCard(props) {
  return (
      <div className="id-card"> 
    <img src={props.picture}/>
    <div className="info-div">
    <span> <strong>lastName:</strong> {props.lastName} </span>
    <span> <strong>firstName:</strong> {props.firstName}  </span>
    <span> <strong> gender:</strong> {props.gender}  </span>
    <span> <strong> height:</strong> {props.height/100} m  </span> 
    <span> <strong>birth:</strong> {props.newDate}  </span> 
    </div>
      </div>
  );

}

export default IdCard