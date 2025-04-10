"use client";

import Image from "next/image";
import React from "react";
import Form from "./form";
import ExampleComponent from "./table";
import Parameters from "./parameters";
import Results from "./results";
import End from "./end";
import logo from "../public/purepitchailogo.svg";

const HomePage: React.FC = () => {
  const CHARACTER_LIMIT: number = 32;
  const CHARACTER_PITCH_LIMIT: number = 150;
  const ENDPOINT: string =
    ""; 
  const [prompt, setPrompt] = React.useState("");
  const [leadlist, setLeadList] = React.useState("");
  const [pitch, setPitch] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [parameters, setParameters] = React.useState("");
  const [hasResult, setHasResult] = React.useState(false);
  const [needstoSubmitParameters, setHasParameters] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [needstoURL, setURL] = React.useState(false);
  const [isDone, setisDone] = React.useState(false);
  const [needstoUpload, setUpload] = React.useState(true);
 

  const onUploadLeads = (leadlistdata: any) => {
    console.log("Uploading: " + leadlistdata);
    setIsLoading(true);
    setLeadList(leadlistdata);
      onUploaded(); 
  };

  const onUploaded = () => {
    setIsLoading(false);
    setURL(true);
    setUpload(false);
  };

  const onSubmit = () => {
    console.log("Submitting: " + prompt);
    setIsLoading(true);
    fetch(`${ENDPOINT}?prompt=${prompt}`)
    .then((res) => res.json())
    .then(onResult);
  };

  const onSubmitPitch = () => {
    console.log("Submitting Pitch: " + pitch);
    setPitch(pitch);
    setIsLoading(true);
    onResultPitch(); 
  };

  const onSubmitParameters = (parameters: any) => {
    console.log("Submitting Parameters: " + parameters);
    setIsLoading(true);
    setParameters(parameters);
    onUploadedParameters(); 
    window.open("https://www.purepitchai.com/plans-pricing", "_blank", "noreferrer");
  };

  const onUploadedParameters = () => {
    setIsLoading(false);
    setHasParameters(false);
    setisDone(true);
  };

  
  //'data.snippet'
  const onResult = (data: any) => {
    setSnippet(data.snippet);
    setHasResult(true);
    setIsLoading(false);
    setURL(false);
  };


  const onResultPitch = () => {
    setHasResult(true);
    setIsLoading(false);
    setHasResult(false);
    setHasParameters(true);
  };

  const onReset = () => {
    setPrompt("");
    setPitch("");
    setHasResult(false);
    setIsLoading(false);
    setURL(true);
  };
  const onResetLeads = () => {
    setIsLoading(false);
    setURL(false);
    setUpload(true);
  };


  const onBacktoAI = () => {
    setHasParameters(false);
    setIsLoading(false);
    setHasResult(true);
  };

  const onBacktoCustomize = () => {
    setHasParameters(true);
    setIsLoading(false);
    setisDone(false);
  };

  let displayedElement = null;
  let displayedTitle = "";
  let displayedSubtitle = "";
  if (hasResult) {
    displayedTitle = (
      "Great!"
    );
    displayedSubtitle = (
      "Time to customize your sales pitch."
    );
    displayedElement = (
      <Results
        snippet={snippet}
        onBack={onReset}
        prompt={prompt}
        pitch={pitch}
        setPitch={setPitch}
        onSubmitPitch={onSubmitPitch}
        characterPitchLimit={CHARACTER_PITCH_LIMIT}
      />
    );
  } else if (needstoURL) {
    displayedTitle = (
      "Great!"
    );
    displayedSubtitle = (
      "Time to customize your sales pitch."
    );
    displayedElement = (
      <Form
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={onSubmit}
        isLoading={isLoading}
        characterLimit={CHARACTER_LIMIT}
        onBackLeads={onResetLeads}
      />
    );
  } else if (needstoUpload) {
    displayedTitle = (
      "Let's Begin!"
    );
    displayedSubtitle = (
      "Upload your LinkedIn leads."
    );
    displayedElement = (
  
   <ExampleComponent
    isLoading={isLoading}
    onUploadLeads={onUploadLeads}
    setLeadList={setLeadList}
    />

    );
  } else if (needstoSubmitParameters) {
    displayedTitle = (
      "Finishing touches..."
    );
    displayedSubtitle = (
      "Customize your output."
    );
    displayedElement = (
  
   <Parameters
    parameters={parameters}
    isLoading={isLoading}
    onSubmitParameters={onSubmitParameters}
    setParameters={setParameters}
    onBacktoAI={onBacktoAI}
    />

    );
  } else if (isDone) {
    displayedTitle = (
      "Perfect, Done."
    );
    displayedSubtitle = (
      ""
    );
    displayedElement = (
  
   <End
   isLoading={isLoading}
   onBacktoCustomize={onBacktoCustomize}
    />

    );
  }
//text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-500 
  const gradientTextStyle =
    "text-black font-dark w-fit mx-auto";

  return (
    <div className="h-screen flex">
      <div className="max-w-md m-auto p-2">
        <div className="bg-white p-6 rounded-md text-white">
          <div className="text-center my-6">
            <Image src={logo} width={42} height={42} alt={""} />
            <h1 className={gradientTextStyle + " text-3xl font-light"}>
            {displayedTitle}
            </h1>
            <div className={gradientTextStyle}>{displayedSubtitle}</div>
          </div>
          {displayedElement}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
