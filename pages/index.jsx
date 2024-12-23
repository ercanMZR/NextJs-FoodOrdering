import axios from "axios";
import Head from "next/head";

import Input from "./components/form/Input";

import Home from "./home";


export default function Index({categoryList}) {
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

<Home categoryList={categoryList} />


      
    </div>
  );
};

export const  getServerSideProps =async () => {
const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
return{
  props:{
    categoryList:res.data? res.data:[]
  }
}
}

