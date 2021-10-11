import React from "react";
import { ViewContextProvider } from "./context/viewContext";
import { SwithTheme } from "./components/SwithTheme";
import { AddInput } from "./components/AddInput";
import { Container } from "./components/Container";

const App = () => {
  return (
    <ViewContextProvider>
      <header className="w-full h-16 bg-aquamarine-700 flex items-center justify-center dark:bg-cloud-burst-400 transition-all">
        <h1 className="text-lg text-cloud-burst-400 dark:text-aquamarine-700 transition-all sm:text-xl">TASK APP</h1>
        <SwithTheme></SwithTheme>
      </header>
      <main>
        <AddInput></AddInput>
        <Container></Container>
      </main>
    </ViewContextProvider>
  );
};

export default App;
