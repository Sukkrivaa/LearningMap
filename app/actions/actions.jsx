export var addNumber = () => {
	return {
		type: "ADD_NUMBER"
	}
}

export var updateText = (text) => {
	return {
		type: "UPDATE_TEXT",
		text
	}
}
