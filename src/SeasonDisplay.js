import React from 'react';

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
	const text=season==='Winter'?'Burr,its chilly!':'Lets hit the beach!';
	const icon=season==='Winter'?'snowflake':'sun';

	return (
		<div>
			<i className={`${icon} icon`} />
			<h2>You are in the {props.lat>0?'northern':'southern'} hemisphere.</h2>
			<p>The season is {season}.</p>
			<h4>{text}</h4>
			<i className={`${icon} icon`} />
		</div>
		);
};

export default SeasonDisplay;