import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Snooker from "./Snooker";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <Snooker />;
}

export default App;
