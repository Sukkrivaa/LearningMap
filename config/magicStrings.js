//Strings used more than once throughout the app so as to avoid typo-related bugs
//do not include paths

module.exports = {
  actionStrings:  {
    SubtopicListActions: {
      ADD_SUBTOPIC: "ADD_SUBTOPIC",
      CHANGE_ORDER_SUBTOPIC: "CHANGE_ORDER_SUBTOPIC",
      SET_INITIAL_STATE: "SET_INITIAL_STATE",
      CHANGE_SUBTOPIC_CONTENT: "CHANGE_SUBTOPIC_CONTENT",
      DELETE_SUBTOPIC: "DELETE_SUBTOPIC"
    },
    activeStateActions: {
      CHANGE_ACTIVE: "CHANGE_ACTIVE"
    }
  },
  Routes: {
    apiRoutesString: {
      mongoRoutesString: {
        getInitialSubtopics: "/api/getInitialSubtopics",
        updateMongoOnSubtopics: "/api/updateMongoOnSubtopics",
        deleteMongoSubtopic: "/api/deleteMongoSubtopic",
        pushChangesMongo: "/api/pushChangesMongo"
      }
    },
    authRoutesString: {
      generalRoutesString:{
        getCookieValue: "/getCookieValue",
        logout: "/auth/logout"
      },
      googleStrategyRoutesString: {
        googleAuthInitial: "/auth/google",
        googleAuthCodeDecryption: "/auth/google/redirect"
      }
    }
  }
}
