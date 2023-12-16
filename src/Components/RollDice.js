import React from "react";
import _, {forEach} from 'lodash';

function createWeightedDiceArray(favoredFace, favoredFactor) {
	let diceArray = [];
	for (let i = 1; i <= 6; i++) {
			diceArray.push(i);
	}
	
	for(let j = 1; j <= Number(favoredFactor); j++) {
		diceArray.push(Number(favoredFace))
	}
	
	return diceArray;
}

	function RollDice({props}) {
		const {numRolls, favoredFace, favoredFactor} = props;
		console.log(favoredFace)
		
		let results = [];
		if (Number(numRolls) > 0 && Number(favoredFace) > 0 && Number(favoredFactor) > 0) {
			let diceArray = createWeightedDiceArray(favoredFace, favoredFactor);
			
			for (let i = 0; i < numRolls; i++) {
				 let rollIndex = Math.floor(Math.random() * diceArray.length);
				 results.push(diceArray[rollIndex]);
			}
			
			 console.log(results)
		}
	
	return (
		<>
		<div>
			<label>
				Number of Rolls: {numRolls}
			</label>
			<br/>
			<label>
				The favored dice face: {favoredFace}
			
			</label>
			<br/>
			<label>
				The favored factor: {favoredFactor}
			
			</label>
			<br/>
			{results && results.length > 0 && (
				_.map(results, (x, index) => {
					return (
						<div key={`${x}${index}`}>roll result: {x}</div>
					)
				})
			)}
		</div>
		<div>
		
		</div>
		
		</>
	)
}

export default RollDice;