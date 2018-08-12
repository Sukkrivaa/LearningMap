export var addNumber = (number) => {
	return {
		type: "ADD_NUMBER",
		number: (number + 1)
	};
}

export var toggleNumber = (polarity) => {
	if (polarity = "even"){
		return {
			type: "REVERSE_POLARITY",
			polarity: "odd"
		}
	}else if (polaity = "odd") {
		return {
			type: "REVERSE_POLARITY",
			polarity: "even"
		}
	}else{
		console.log("error on polarity");
	}
}