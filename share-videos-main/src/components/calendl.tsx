'use client'

import React from "react";
import { InlineWidget } from "react-calendly";
interface AppProps {
    calendly: string;
  }
  
  const App: React.FC<AppProps> = (props) => {
  return (
    <div className="App">
      <InlineWidget url={props.calendly} />
    </div>
  );
};

export default App;