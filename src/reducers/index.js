import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer"; // Assurez-vous que le chemin d'accès est correct

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
