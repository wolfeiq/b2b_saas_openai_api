'use client'

import Image from "next/image";
import Logo from "./favicon.ico";
import LinkedIn from "./../../public/linkedin.png";
import Screenshot from "./../../public/screenshot.png"
import Page from "../components/vid";
import React, { useEffect, useState } from "react";
import App from "../components/calendl"
import Footer from "@/components/footer";
import Gif from "./../../public/2.png"
import Gif2 from "./../../public/1.png"
import Script from "next/script";
import Head from "next/head";


export default function Home() {

  const [isPounding, setIsPounding] = useState(false);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsPounding(true);
      setTimeout(() => {
        setIsPounding(false);
      }, 500);
    }, 1000);
  

    return () => clearInterval(interval);
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.open('https://ms7k7c0s23z.typeform.com/to/Q6xXwRal', '_blank');
  };

  const openLink = () => {
    window.open('https://app.purepitchapp.com/', '_blank');
  };

  return (
    <>
    <Head>
      
    <title>Personalised AI Avatar Videos for Outreach | PurePitch AI</title>
    <meta
          name="description"
          content="Personalised AI Avatar Videos for Cold Outreach on LinkedIn with Generative AI for sales to book more sales meetings and engage your leads."
          key="desc"
        />
         <meta property="og:title" content="Personalised AI Avatar Videos for Outreach | PurePitch AI" />
        <meta
          property="og:description"
          content="Personalised AI Avatar Videos for Cold Outreach on LinkedIn with Generative AI for sales to book more sales meetings and engage your leads."
        />
        <meta
          property="og:image"
          content="https://purepitchai.com/landing.png"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="twitter:title" content="Personalised AI Avatar Videos for Outreach | PurePitch AI" />
        <meta name="twitter:description" content="Personalised AI Avatar Videos for Cold Outreach on LinkedIn with Generative AI for sales to book more sales meetings and engage your leads." />
        <meta name="twitter:image" content="https://purepitchai.com/landing.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://purepitchai.com" />
        <meta property="og:type" content="website" />
       <meta name="robots" content="index, follow" />
       <meta name="author" content="Maria Koryakina" />
        <meta name="keywords" content="cold outreach on linkedin, linkedin cold outreach, ai avatar generator, ai avatar, ai video avatar, ai avatar video generator, outreach sales, outreach sales tool, sales outreach strategy, cold outreach sales tool, outreach sales engagement platform, how to automate cold outreach sales, automate outreach on linkedin, sales on linkedin, purepitchai, purepitch ai, personalised cold outreach, linkedin, personalised ai avatar, personalised videos,
  sales, cold outreach, automate sales, sales videos, ai sales, sales ai, linkedin ai, cold outreach ai, cold email outreach, linkedin cold outreach, linkedin sales navigator, sales navigator linkedin, what is linkedin sales navigator, linkedin outreach automation, automated linkedin outreach
" />
<meta name="metadataBase" content="https://purepitchai.com" />
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
          <div className="left-0 top-0 flex items-center justify-center w-full lg:static lg:w-auto lg:rounded-xl">
            <Image
              src={Logo}
              alt="PurePitch AI"
              width={60}
              height={80}
              priority />
            <p className="font-bold ml-2"> PurePitch AI</p>
          </div>
          <br />
        </div>


        <div className="relative flex place-items-center">
          <p className="ml-2 text-center">Generate personalised LinkedIn cold outreach videos with AI Avatars</p>
        </div>
        <br />
        <div className="relative flex place-items-center font-bold text-2xl ml-2 text-center">
          Try out our</div>
        <div className="relative flex place-items-center font-bold text-9xl ml-2">
          BETA
        </div>
        <Image
          src={LinkedIn}
          alt="PurePitch AI"
          width={60}
          height={80}
          priority />
        <button className="button" onClick={openLink}>
     Try PurePitch AI for Free  
        </button>
        <div className="bobbi mb-10 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://purepitchai.com/"
            className="group rounded-lg border border-transparent px-5 py-4 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold`}>
              Upload your leads{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              We only need the LinkedIn URLs of your leads. That&apos;s it. Upload easily as a CSV or paste manually.

            </p>
          </a>

          <a
            href="https://purepitchai.com/"
            className="group rounded-lg border border-transparent px-5 py-4 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold`}>
              Give the URL of Your Company{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              We will generate an AI sales pitch and personalise it with each prospect&apos;s name and relevant recent LinkedIn profile info.
            </p>
          </a>

          <a
            href="https://purepitchai.com/"
            className="group rounded-lg border border-transparent px-5 py-4 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold`}>
              Edit & Revise{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              We&apos;ll generate a sample AI video for one of your leads and email you for approval of tone & style.
            </p>
          </a>

          <a
            href="https://purepitchai.com/"
            className="group rounded-lg border border-transparent px-5 py-4 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold`}>
              Review your AI Avatar Videos{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Within 24h of your order, we&apos;ll email you the videos for all your leads in both .mp4 and URL formats.
            </p>
          </a>
        </div>



        <div className="bobbi mb-0 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left text-align:center">
          <div><Page id={"m02DAXv77jiae00odEt01KfyfLv01kU96MEkW02YFnzxmBh00"} />
            <div className="lovelyc">
              <div className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                Version A: Sample Video with AI Generated Atmospheric Content
              </div>
            </div>
          </div>

          <div><Page id={"3x02uStGatYu4700qbhfkT9t02yRz3n6n33GLMMM9vj0002Y"} />
            <div className="lovelyc">
              <div className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                Version B: Sample Video with just the AI Avatar Pitching Your Product
              </div>
            </div>
          </div>
        </div>

        <div className="bobby mb-10 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">


          <div className="column">
            <a
              href="https://purepitchai.com/"
              className="group rounded-lg border border-transparent px-5 py-4 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lovz"> <div className="circle">🌟</div><div className="hide">🌟</div></div>
              <h2 className={`mb-3 text-1xl font-semibold`}>
                Generated AI Effects Fitting Your Brand{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
               Sell your brand&apos;s vision visually - we&apos;ll generate AI visuals to communicate the feeling you&apos;re selling through your product or service.
              </p>
              <br />
              <p className={`m-0 max-w-[30ch] text-sm opacity-30 text-balance`}>
               PurePitch AI&apos;s logo is a volcanic egg. Like a volcano generating lava, we&apos;re generating fiery and unforgettable experiences to sell a vision, not just products.
              </p>
            </a>
          </div>



          <div className="column">
            <a
              href="https://purepitchai.com/"
              className="group rounded-lg border border-transparent px-5 py-4 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lovz"> <div className="circle">📈</div><div className="hide">📈</div></div>
              <h2 className={`mb-3 text-1xl font-semibold`}>
                Video Analytics Emailed to You Daily{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
               With the 20 leads plan, you&apos;ll receive daily updates on your video analytics. 
              </p>
              <br />
              <p className={`m-0 max-w-[30ch] text-sm opacity-30 text-balance`}>
                These include Unique Views, Playing Time, Viewer Experience and many more. Only available if videos are shared through links.
              </p>
            </a>
            </div>


          <div className="column">
            <a
              href="https://purepitchai.com/"
              className="group rounded-lg border border-transparent px-5 py-4 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lovz"> <div className="circle">🖥️</div><div className="hide">🖥️</div></div>
              <h2 className={`mb-3 text-1xl font-semibold`}>
                Your Prospect&apos;s Website in the Background{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>

              <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                We add your prospects&apos; current workplace website as background in the videos for extra personalisation. 
              </p>
              <br />
              <p className={`m-0 max-w-[30ch] text-sm opacity-30 text-balance`}>
                For example, if you&apos;re reaching out to John who works at PurePitch AI, PurePitch AI&apos;s website will be used as his video&apos;s background.
              </p>
            </a>
          </div>

          <div className="column">
            <a
              href="https://share.purepitchapp.com/ce31d8f18e8b4d32a2db3617e7b389a3"
              className="group rounded-lg border border-transparent px-5 py-4 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lovz"> <div className="circle">🔗</div><div className="hide">🔗</div></div>
              <h2 className={`mb-3 text-1xl font-semibold`}>
                Try Out a Sample Link With Calendly Now{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                ↗
                </span>
              </h2>

              <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                This is how the personalised links we send you will look like. 
              </p>
            </a>
            <div className="lovz"> <Image
              src={Screenshot}
              alt="PurePitch AI LinkedIn"
              priority /></div>
          </div>
        </div>
        <div className="fontbold relative flex place-items-center font-bold text-2xl ml-2 text-center">
          Interested? </div>
        <div className="fontboldk ml-2 text-center text-sm opacity-50 text-balance">
          Here&apos;s a way to get one video for free:</div>
        <div className="fontboldk ml-2 text-center text-sm opacity-50 text-balance">
          Book a meeting with us and we will give you the ultimate preview of what awaits you. </div>
        <div className="lovely"><App calendly={"https://calendly.com/mary-m-queen/mary-intros"} /></div>
      <button className="button" onClick={openLink}>
       Try PurePitch AI for Free  
        </button>
        <br />
        <div className="fontbold relative flex place-items-center font-bold text-2xl ml-2 text-center">
          Our BETA Pricing </div>
        <div className="ml-2 text-center fontbold">
          Find the one that works for you </div>






        <div className="mb-5 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
          <div className="column1">   <div className="lov"> <div className="circleframe"><Image src={Gif2} alt={"Volcano"} /></div></div>
            <h2 className={`mb-3 text-4xl `}>
              12 €

            </h2>
            <p className={`widy text-sm opacity-80 text-center`}>
              1 Personalised 20 Second Video for 8 of Your Leads

            </p>
            <p className={`widy text-sm opacity-50 text-center`}>
              24/7 Support

            </p>
          </div>


          <div className="column1">     <div className="lov"> <div className="circleframe"><Image src={Gif} alt={"Volcano"} /></div></div>
            <h2 className={`mb-3 text-4xl`}>
              20 €

            </h2>
            <p className={`widy text-sm opacity-80 text-center`}>
              1 Personalised 20 second Video for 20 of Your Leads
            </p>
            <p className={`widy text-sm opacity-70 text-center`}>
              + Video Analytics Emailed to You Daily

            </p> <p className={`widy text-sm opacity-50 text-center`}>
              24/7 Support

            </p></div>
        </div>
        <button className="button2" onClick={handleButtonClick}>
          Contact Us
        </button>
        <Footer />
      </main></>
  );

 
}
