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
