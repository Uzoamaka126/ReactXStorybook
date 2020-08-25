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
     <PrimaryButton>Hello World</PrimaryButton>
     <SecondaryButton>Hello World</SecondaryButton>
     <TertiaryButton>Hello World</TertiaryButton>
     <GlobalStyles />
    </div>
  );
}

export default App;
