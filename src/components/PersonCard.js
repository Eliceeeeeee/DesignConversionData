import React from 'react';

const PersonCard = (props) => {
	return (
		<div className="personCard">
            <p>ID: {props.id}</p>
            <img src={props.imageUrl} id={props.id} alt={props.firstName}/>
            <p>{props.firstName} ,</p>
            <p>{props.lastName}</p>
        </div>
	);
}

export default PersonCard;