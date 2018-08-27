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

export var addSubtopic = (subtopic) => {
	return {
		type: "ADD_SUBTOPIC",
		subtopic
	}
}
