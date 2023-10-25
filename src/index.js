import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//bibliothèque redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";


// Récupération du token depuis le localStorage et sessionstorage
const persistedState = {
  auth: {
    token: localStorage.getItem('token') || sessionStorage.getItem('token'),
  },
};


// Configuration du store Redux
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
