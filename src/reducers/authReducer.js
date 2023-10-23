// état du reducer initial = null
const initialState = {
  token: null,
};

// reducer authentification
function authReducer(state = initialState, action) {
  switch (action.type) {
    // si 'USER_LOGIN' le token se met à jour avec la payload de l'action
    case "USER_LOGIN":
      return { ...state, token: action.payload };
    // si 'USER_LOGOUT',  le token se met à null
    case "USER_LOGOUT":
      return { ...state, token: null };
    default:
      return state;
  }
}

export default authReducer;
