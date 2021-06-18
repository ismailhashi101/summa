import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { light } from "./theme/theme";
import { configureStore } from "./store";
import { GoogleAnalytics } from "./components";

import Home from "./views/Home";

const { store, persistor } = configureStore();

export default function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={light}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <GoogleAnalytics />
          <Home />
        </PersistGate>
      </ThemeProvider>
    </StoreProvider>
  );
}
