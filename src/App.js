import React from 'react';
import './App.css';
import { 
  PrimaryButton, 
  SecondaryButton,
  TertiaryButton
} from './components/StyledButton'
import { GlobalStyles } from './utils'

function App() {
  return (
    <div className="App">
     <PrimaryButton modifiers={["small", "warning"]}>Hello World</PrimaryButton>
     <SecondaryButton modifiers={["large", "warning", "secondaryButtonModifiers"]}>Hello World</SecondaryButton>
     <TertiaryButton modifiers={["large", "warning"]}>Hello World</TertiaryButton>
     <GlobalStyles />
    </div>
  );
}

export default App;
