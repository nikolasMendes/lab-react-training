export function IdCard(props) {
    return (
        <div className="id-card"> 
      <img src={props.picture}/>
      <span> lastName: {props.lastName} </span>
      <span> firstName: {props.firstName}  </span>
      <span> gender: {props.gender}  </span>
      <span> height: {props.height}  </span> 
      <span> birth: {props.newDate}  </span> 
        </div>
    );

}

export default IdCard