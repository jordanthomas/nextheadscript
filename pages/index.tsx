import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

function trackPageView() {
  window._sift.push(["_trackPageview"]);
}

const Home: NextPage = () => {
  const [showSift, setShowSift] = useState(false);

  const loadLabel = showSift ? "Remove Sift Script" : "Add Sift Script";

  return (
    <div>
      {showSift && (
        <Head>
          <script async src="https://cdn.sift.com/s.js" key="sift-sdk" />
        </Head>
      )}
      <button onClick={() => setShowSift(!showSift)}>{loadLabel}</button>
      <button onClick={trackPageView}>Send Pageview</button>
    </div>
  );
};

export default Home;
