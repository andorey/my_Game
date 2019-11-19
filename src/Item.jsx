import React from 'react';

import './App.css';
import smileImg from "./img/smile.png";

const Item = (props) => {
	let imgClass = props.index === props.randomIndex ? 'photo show' : 'photo';

	let onClickHandler = props.index === props.randomIndex ? props.onClickHandler : () => {};

	return (
		<div className="item" onClick={onClickHandler}>
			<img className={imgClass} src={smileImg} alt=""/>
		</div>
	);
}


export default Item;
