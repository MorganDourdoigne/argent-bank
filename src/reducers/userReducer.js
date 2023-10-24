// État initial du reducer
const initialState = {
    user: null,
  };
  
  // Reducer utilisateur
  function userReducer(state = initialState, action) {
    switch (action.type) {
      // Si 'USER_PROFILE_LOADED', l'utilisateur se met à jour avec la payload de l'action
      case "USER_PROFILE_LOADED":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  }
  
  export default userReducer;
  