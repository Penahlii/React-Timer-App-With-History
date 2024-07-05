import React from "react";
import Timer from "./components/Timer/Timer";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <h1>React Timer with History</h1>
        <Timer />
      </div>
    </ThemeProvider>
  );
};

export default App;
