'use client'

import React from "react";
import { InlineWidget } from "react-calendly";
interface AppProps {
    calendly: string;
  }
  
  const App: React.FC<AppProps> = (props) => {
  return (
    <div className="App shadow" >
      <InlineWidget url={props.calendly} styles={{
  height: '380px',
  width: '300px'
}}/>
    </div>
  );
};

export default App;