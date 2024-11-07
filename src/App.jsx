import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Snooker from "./Snooker";
import { useBallContext } from "./context";

function App() {
  const { id } = useParams();
  const { setId } = useBallContext();

  useEffect(() => {
    if (id) {
      setId(id); // Store the ID in context
    }
  }, [id, setId]);
  return <Snooker />;
}

export default App;
