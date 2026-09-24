function firstChar(text) {
  // your code here
	let trimmed = text.trimStart();
	if(trimmed === "") return "";
	return trimmedStr.charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
