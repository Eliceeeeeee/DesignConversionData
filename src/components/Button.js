import React from 'react';

const Button = (props) => {
	return (
		<button className={props.buttonClassName} onClick={props.onClick} >
            {props.textValue}
        </button>
	);
}

export default Button;