import React from "react";
import RootLayout from "../componets/Layout/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>next home test</title>
        <meta name="home" description="this is home page" />
      </Head>
      <h1>next</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
