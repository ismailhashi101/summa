import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { Provider as StoreProvider } from "react-redux";
import { light } from "./theme/theme";
import Home from "./views/Home";
import { configureStore } from "./store";

const store = configureStore();

export default function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </StoreProvider>
  );
}