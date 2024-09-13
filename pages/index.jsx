
import Head from "next/head";
import Header from "./components/layout/Header";
import Input from "./components/form/Input";

import Home from "./home";
import Footer from "./components/layout/Footer";

export default function Index({ }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

</Head>
<Header></Header>
<Home />
<Footer/>

      
    </div>
  );
};

