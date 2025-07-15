import { Global, ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "./system/styles/themes";
import { createGlobalStyles } from "./system/styles/globalStyles";
import MainTemplate from "./system/templates/Main";
import { useThemeStore } from "./system/store";

function App() {
  const { darkMode } = useThemeStore();
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={createGlobalStyles(theme)} />
      <MainTemplate />
    </ThemeProvider>
  );
}

export default App;
