'use client'

import React from "react";
import Template from "../components/template";

const nameT="John";
const URLT="purepitchai.com";
const calendlyT="https://calendly.com/mary-m-queen/mary-intros";
const idT = "VX3FU2iWMLQ4kWpWa4y9Stm3m00H00xqqwNWxtsnH6nJE";
const assetidT = "VX3FU2iWMLQ4kWpWa4y9Stm3m00H00xqqwNWxtsnH6nJE";

export default function Home() {

  const [name, setName] = React.useState("");
  const [URL, setURL] = React.useState("");
  const [calendly, setCalendly] = React.useState("");
  const [id, setId] = React.useState("");
  const [assetid, setAssetid] = React.useState("");

const updateNameValue = (text: string) => {
       setName(text); 
};

const updateURLValue = (text: string) => {
    setURL(text); 
};

const updateCalendlyValue = (text: string) => {
  setCalendly(text); 
};

const updateIdValue = (text: string) => {
  setId(text); 
};

const updateAssetidValue = (text: string) => {
  setAssetid(text); 
};

const release = () => {
 
};
 
  return (
    <main>
      <div className="h-screen flex">
        <div className="bg-white p-6 rounded-md">
          <div className="text-center my-6">
          <div className="max-w-md m-auto p-2">
          <input
          className="p-2 w-full rounded-md text-slate-300 bg-slate-100"
          type="text"
          placeholder="name"
          onChange={(e) => updateNameValue(e.currentTarget.value)}
        ></input>
        <br/>
        <br/>
        <input
          className="p-2 w-full rounded-md text-slate-300 bg-slate-100"
          type="text"
          placeholder="URL"
          onChange={(e) => updateURLValue(e.currentTarget.value)}
        ></input>
        <br/>
        <br/>
         <input
          className="p-2 w-full rounded-md text-slate-300 bg-slate-100"
          type="text"
          placeholder="calendly"
          onChange={(e) => updateCalendlyValue(e.currentTarget.value)}
        ></input>
        <br/>
        <br/>
         <input
          className="p-2 w-full rounded-md text-slate-300 bg-slate-100"
          type="text"
          placeholder="playbackid"
          onChange={(e) => updateIdValue(e.currentTarget.value)}
        ></input>
        <br/>
        <br/>
         <input
          className="p-2 w-full rounded-md text-slate-300 bg-slate-100"
          type="text"
          placeholder="assetid"
          onChange={(e) => updateAssetidValue(e.currentTarget.value)}
        ></input>
        <br/>
        &nbsp;
        <button
          className="button5 bg-black opacity-80 w-full p-2 rounded-md text-lg"
          onClick={release}
        >
          Generate Link
        </button>
          </div> 
          </div>
      </div>
    </div>
    </main>

  );
}
