const actionStrings = require("./../../config/magicStrings").actionStrings;

export var addSubtopic = (subtopic, order, timeCreated) => {
	return {
		type: actionStrings.SubtopicListActions.ADD_SUBTOPIC,
		subtopic,
		order,
		timeCreated
	};
};

export var changeOrderSubtopic = (subtopic, newOrder) => {
		return {
			type: actionStrings.SubtopicListActions.CHANGE_ORDER_SUBTOPIC,
			subtopic,
			newOrder
		};
};

export var setInitialState = (stateArray) => {
	return {
		type: actionStrings.SubtopicListActions.SET_INITIAL_STATE,
		stateArray
	};
};

export var changeActive = (activeSubtopic) => {
	return {
		type: actionStrings.activeStateActions.CHANGE_ACTIVE,
		activeSubtopic
	};
};

export var changeSubtopicContent = (content, activeSubtopic) => {
	return {
		type: actionStrings.SubtopicListActions.CHANGE_SUBTOPIC_CONTENT,
		content,
		activeSubtopic
	};
};

export var deleteSubtopic = (subtopic) => {
	return {
		type: actionStrings.SubtopicListActions.DELETE_SUBTOPIC,
		subtopic
	};
};
