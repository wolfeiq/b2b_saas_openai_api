'use client'
import Image from "next/image";
import Page from "./vid";
import App from "./calendl"
import logo from "../app/favicon.ico"
import Lottie from "react-lottie-player"
import lottieJson from "../app/animation1.json";
import { Suspense, useEffect, useState } from "react";
import Head from "next/head";



var nameS: string | null | undefined;
var URLS: string;
var calendlyS: string;
var idS: string;
var domain: string;



export default function Template ( { 
    params, response
} :  { 
    params: { 
    videoid: string;
    }; response: any
}) {
  
    
    const [isLoading, setIsLoading] = useState(true);
    const [nolink, setNoLink] = useState(false);
      useEffect(() => {
        setIsLoading(true);
            const x = params.videoid.substring(0, 8)
            const y = params.videoid.substring(8, 12)
            const z = params.videoid.substring(12, 16)
            const k = params.videoid.substring(16, 20)
            const m = params.videoid.substring(20, 32)
        
            // Get a specific item
            
            const onJ = async () => {
              
                  nameS=response.data.getShareModel?.name;
                 
                  if (typeof response.data.getShareModel?.URL === 'string')
                  {URLS=response.data.getShareModel?.URL;}
                  if (typeof response.data.getShareModel?.domain === 'string')
                  {domain=response.data.getShareModel?.domain;}
                  if (typeof response.data.getShareModel?.pageId === 'string')
                  {calendlyS=response.data.getShareModel?.pageId;} else 
                  {setNoLink(true)}
                  if (typeof response.data.getShareModel?.videoId === 'string')
                  { idS=response.data.getShareModel?.videoId;}
              };
              onJ().then(() => {
              setTimeout(() => setIsLoading(false), 2000);
              });
              
      }, []);
      
  return (
    <>
    <main>
        {isLoading ? <div className="lovelyp"> <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 300, height: 300 }} />
        </div> : <div className="body">
        <div className="h-screen flex ">
          <div className="bg-black p-6 rounded-md">
            <div className="text-center my-6 relative dark:drop-shadow-[0_0_0.5rem_#ffffff70]">
              <Page id={idS} />
              <div className="lovelyr relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/5 after:bg-gradient-conic after:from-white after:via-orange-400 after:to-red-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-bl before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-[#FF5733] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
               </div>
              <div className="max-w-md m-auto p-2">
                <p className="fonty">How are you, {nameS}?</p>
                <p className="fontyl ">Here&apos;s a video just for you.</p>
              </div>
              <div className="lovely"><button className="button" onClick={() => window.open(`${URLS}`, "_blank", "noreferrer")}>Visit {domain}</button></div>
              <br />
              <div className="max-w-md m-auto p-2">
                {nolink ? <></> : <App calendly={calendlyS} />}
              </div>
            </div>
            <br />
            <div className="lovely relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"

></div>
            <p className="lovely text-white">Made with PurePitch AI</p>
            <div className="lovely">
              <Image
                alt="PurePitch AI Logo"
                src={logo}
                width={42}
                height={42} />
            </div>
            <br />
            </div>
          </div>
        </div>}
      </main></>

  );
}


