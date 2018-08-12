import React from 'react';
import PersonCard from './PersonCard';

const PersonCardList = (props) => {

	if (!props.dataList || props.dataList.length === 0) {
		return (<div></div>);
	}

	const personCard = props.dataList.map((item, index) => {
		return (
			<PersonCard key={index}
                id={item.id}
                imageUrl={item.avatar}
                firstName={item.first_name}
				lastName={item.last_name} />
		);
	});

	return (
		<div>
			{personCard}
		</div>
	);
};

export default PersonCardList;