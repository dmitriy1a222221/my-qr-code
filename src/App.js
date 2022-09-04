import React from "react";
import { Step2 } from "./components/Step2/index";

import { useStyles } from "./app-styles.ts";

function App() {
  const { app } = useStyles();

  return (
    <div className={app}>
      <Step2 />
    </div>
  );
}

export default App;
