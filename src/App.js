import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserProfilePage from "./pages/UserProfilePage";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/profile">
            <UserProfilePage />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
