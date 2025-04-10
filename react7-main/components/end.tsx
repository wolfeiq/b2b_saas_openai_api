import React from "react"
import IconEmailCheckOutline from "./icon"
import styles from "./select.module.css"

interface EndProps {
    isLoading: boolean;
    onBacktoCustomize: any;
  }
  
  const End: React.FC<EndProps> = (props) => {
  
    return (
      <>
        <div className="mb-6 text-slate-400">
          <p>
          We&apos;ve got your info. Please continue by picking a payment plan in the new tab. 
          </p>  </div>
        &nbsp;
        <button
          className="bg-black opacity-80 w-full p-2 rounded-md text-lg"
          onClick={props.onBacktoCustomize}
        >
          Restart
        </button>
      </>
    );
  };
  
  export default End;