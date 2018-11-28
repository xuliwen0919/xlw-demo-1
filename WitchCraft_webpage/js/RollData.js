console.log("hello world")
function dice(diceVal){
	return Math.ceil(Math.random() * diceVal);
}

function nDice(n, x){
	var diceValSum = 0;
	while(n>0){
		diceValSum = diceValSum + dice(x);
		n--;
	}
	return diceValSum;
}

// for(var i = 1; i<10; i++){
// 	console.log(nDice(3,6))
// }