export var addSubtopic = (subtopic, order, timeCreated) => {
	return {
		type: "ADD_SUBTOPIC",
		subtopic,
		order,
		timeCreated
	}
}

export var changeOrderSubtopic = (subtopic, newOrder) => {
		return {
			type: "CHANGE_ORDER_SUBTOPIC",
			subtopic,
			newOrder
		}
}

export var setInitialState = (stateArray) => {
	return {
		type: "SET_INITIAL_STATE",
		stateArray
	}
}

export var changeActive = (activeSubtopic) => {
	return {
		type: "CHANGE_ACTIVE",
		activeSubtopic
	}
}
