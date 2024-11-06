import React, { useState, useEffect } from "react";

import Snooker from "./Snooker";
import { BallContextProvider } from "./context";

function App() {
  return (
    <BallContextProvider>
      <Snooker />
    </BallContextProvider>
  );
}

export default App;
