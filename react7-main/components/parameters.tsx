import React from "react"
import ReactDOM from "react-dom/client"
import App from "./statedropdown"

interface ParameterProps {
    parameters: any;
    setParameters: any;
    onSubmitParameters: any;
    isLoading: boolean;
    onBacktoAI: any;
  }
  
  const Parameters: React.FC<ParameterProps> = (props) => {
  
    return (
      <>
        <div className="mb-6 text-slate-400">
          <p>
          Please select your desired features of the videos.
          </p>
        </div>

  <React.StrictMode>
    <App
     parameters={props.parameters}
     isLoading={props.isLoading}
     onSubmitParameters={props.onSubmitParameters}
     setParameters={props.setParameters}
     onBacktoAI={props.onBacktoAI} />
  </React.StrictMode>
           &nbsp;
         <p className="mb-6 text-slate-400 text-sm">
           You can find examples on our landing page. We will send you one video to preview per email to get your confirmation. After we will create personalised videos for the rest of the prospects.
            </p>
            &nbsp;
        <button
          className="bg-black disabled:opacity-50 w-full p-2 rounded-md text-lg"
         onClick={(...args) =>  props.onSubmitParameters(props.parameters)}
        
          disabled={props.isLoading}
        >
          Submit
        </button>
        &nbsp;
        <button
          className="bg-black opacity-80 w-full p-2 rounded-md text-lg"
          onClick={props.onBacktoAI}
        >
          Back
        </button>
      </>
    );
  };
  
  export default Parameters;