//FOR TEN

let result = "x  ";

function mtable(val) {
	let mtable = "";
	let pad = 4 - val;
	while (pad-- > 0) mtable += " ";
	return mtable;
}

for (let i = 0; i < 11; i++) {
	for (let j = 0; j < 11; j++) {
		if (i == 0 && j > 0) {
			result += "[" + j + "]" + mtable((j + "").length + 2);
		} else if (j == 0 && i > 0) {
			result += "[" + i + "]";
		} else if (i > 0 && j > 0) {
			result += mtable((i * j + "").length) + i * j;
		}
	}
	result += "\n";
}

console.log(result);

//FOR TWELVE

let results = "s  ";

function mtable(val) {
	let mtable = "";
	let pad = 4 - val;
	while (pad-- > 0) mtable += " ";
	return mtable;
}

for (let i = 0; i < 13; i++) {
	for (let j = 0; j < 13; j++) {
		if (i == 0 && j > 0) {
			results += "[" + j + "]" + mtable((j + "").length + 2);
		} else if (j == 0 && i > 0) {
			results += "[" + i + "]";
		} else if (i > 0 && j > 0) {
			results += mtable((i * j + "").length) + i * j;
		}
	}
	results += "\n";
}

console.log(results);