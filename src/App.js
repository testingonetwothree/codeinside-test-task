import React from "react";
import {Authorization} from "./components/Authorization";
import {ProvideAuth} from "./hooks/useAuth";
import './App.css';


const App = () => {
  return (
    <ProvideAuth>
      <Authorization />
    </ProvideAuth>
  );
}

export default App;
