import React from "react";

const CharacterCard = props => {
  const healthPercent = Math.round((props.healthLeft/props.character.health)*100)
  const healthColor = () => {
    if (healthPercent > 50) {
      return "bg-success"
    } else if (healthPercent > 15) {
      return "bg-warning"
    } else {
      return "bg-danger"
    }
  }
  return (
    <div className="card m-4" style={{width: "20rem"}} key={props.character.id} onClick={() => {props.handleDivClick(props.character)}}>
      <img className="card-img-top" alt={props.character.name} src={props.character.image_url} />
      <div className="card-body">
        <h3 className="card-title">{props.character.name}</h3>
        <p className="card-title">{props.character.catchphrase}</p>
        <p><i className="icon large circular red heart" /> {props.displayHealthProgress ? props.healthLeft + "/" + props.character.health : props.character.health}</p>
        { props.displayHealthProgress &&
          <div className="progress">
            <div className={"progress-bar " + healthColor()} role="progressbar" style={{width: healthPercent+"%"}} aria-valuenow={healthPercent} aria-valuemin="0" aria-valuemax="100">
              {healthPercent}%
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default CharacterCard;
