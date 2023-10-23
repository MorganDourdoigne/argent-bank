import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//bibliothèque redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// Configuration du store Redux
const store = configureStore({
  reducer: rootReducer,
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
