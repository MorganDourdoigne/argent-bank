// état initial du reducer utilisateur. L'utilisateur est initialisé à null.
const initialState = {
  user: null,
};


// Reducer utilisateur
function userReducer(state = initialState, action) {
   switch (action.type) {
      // Si 'USER_PROFILE_LOADED', l'utilisateur se met à jour avec la payload de l'action
      case "USER_PROFILE_LOADED":
          return { ...state, user: action.payload };
      // Lorsque l'action 'USER_PROFILE_LOADED' est dispatchée, l'utilisateur dans l'état de Redux est mis à jour avec la payload de l'action.

      // Si 'UPDATE_USERNAME', le nom d'utilisateur se met à jour avec la payload de l'action
      case "UPDATE_USERNAME":
          const newState = { ...state, user: { ...state.user, userName: action.payload } };
          return newState;
      // Lorsque l'action 'UPDATE_USERNAME' est dispatchée, le nom d'utilisateur dans l'état de Redux est mis à jour avec la payload de l'action.

      default:
          return state;
  }
}


export default userReducer;
// export du reducer utilisateur pour l'utiliser dans le store Redux.
