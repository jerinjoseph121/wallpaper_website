import React from "react";
import Login from "./login";
import SignUp from "./signup";
import Main from "./main";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Main></Main>
    </AuthProvider>
  );
}

export default App;
