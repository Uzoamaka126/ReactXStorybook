import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { 
  PrimaryButton, 
  SecondaryButton,
  TertiaryButton,
  SignupModal
} from './components';
import { GlobalStyles, darkTheme, defaultTheme } from './utils'

function App() {

  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div className="App">
        <div style={{
          background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}>
          <button style={{ 
              margin: "0 16px 24px",
              padding: "8px",
              background: "none"
            }}
            onClick={() => setUseDarkTheme(true)}
            >
              Dark theme
          </button>
          <button style={{ 
              margin: "0 16px 24px",
              padding: "8px",
              background: "none"
            }}
            onClick={() => setUseDarkTheme(false)}
            >
              Default theme
          </button>
        <PrimaryButton modifiers={["small", "warning"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Hello World</SecondaryButton>
        <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>Hello World</TertiaryButton>
        <SignupModal />
        <GlobalStyles />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
