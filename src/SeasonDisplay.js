import './SeasonDisplay.css'
import React from 'react';

const seasonConfig={
	Summer:{
		text:"Let's hit the beach!",
		iconName:'sun'
	},
	Winter:{
		text:"Burr its cold here!",
		iconName:'snowflake'
	}
}

const getSeason=(lat,month)=>{
	if(month>2 && month<9){
		//if we are in between months 3 to 8 and in northern hemisphere then its summer or else its winter
		return lat>0?'Summer':'Winter';
	}else{
		//if we are not in between months 3 to 8 and in northern hemisphere then its winter or else its summer
		return lat>0?'Winter':'Summer';
	}
}

const SeasonDisplay=(props)=>{
	
	const season=getSeason(props.lat, new Date().getMonth());
	const {text,iconName}=seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h2>{text}</h2>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
		);
};

export default SeasonDisplay;