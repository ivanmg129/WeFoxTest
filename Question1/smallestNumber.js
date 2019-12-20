const readline = require('readline');

const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});

rl.question('What is the range random number? ', (rangeNumber) => {
	rl.question('What is the smallest number? ', (answer) => {
		var randomNumbers = new Array();
	
		for (i=0;i<500;++i){
			randomNumbers[i]=Math.floor((Math.random() * rangeNumber) + 1);
		}
	
		var i, j,t=0;
		
		for(i = 0; i < randomNumbers.length; i++){
		    for(j = 1; j < (randomNumbers.length-i); j++){
		    if(randomNumbers[j-1] > randomNumbers[j]){
		      t = randomNumbers[j-1];
		      randomNumbers[j-1]=randomNumbers[j];
		      randomNumbers[j]=t;
		    }
		  }
		}
		    
		console.log(`This is the ${answer}th smallest number : ${randomNumbers[answer-1]}`);
		
		rl.close();
	});
});
    