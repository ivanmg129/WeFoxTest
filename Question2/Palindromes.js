function palindrome(str) {
	var lowRegStr = replaceAccents(str);
	lowRegStr = lowRegStr.toLowerCase().replace(/ /g, '');
	var reverseStr = lowRegStr.split('').reverse().join(''); 
	return reverseStr === lowRegStr;
}

var replaceAccents=function(str){
	var chars={
		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
		"À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U"}
	var expr=/[áàéèíìóòúù]/ig;
	var res=str.replace(expr,function(e){return chars[e]});
	
	return res;
}

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

console.log('----------PALINDROME SENTENCES----------');
	readline.question(`Give me a sentence -> `, (sentence) => {
		if(palindrome(sentence)){
			console.log(`The sentence "${sentence}" IS a palindrome`);
		}else{
			console.log(`The sentence "${sentence}" IS NOT a palindrome`);
		}
	readline.close()
})