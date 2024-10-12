import Image from "next/image";
import axios from "axios";
import React from "react";
import { getSession, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import Account from "../components/profile/Account";
import Password from "../components/profile/Password";
import Order from "../components/profile/Order";
import Footer from "../components/admin/Footer";
import { useRouter } from "next/router";

const Profile = ({ user }) => {
  const {data:session}=useSession();
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();

  const handleSignOut = () => {
    if (confirm("Are you sure want to sign out")) {
      signOut({ redirect: false });
      push("/auth/login");
    }
  };

  useEffect(() => {
    if (!session) {
      push("/auth/login")
    }
  }, [session, push])

  return (
    <div className="flex px-10 min-h-[calc(100vh_-433px)] lg:flex-row flex-col lg:mb-0 mb-10">
      <div className=" lg:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b ">
          <Image
            src={user.image ? user.image: "/images/client2.jpg"}
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">{user.fullName}</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={
              'border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs===0 && "bg-primary text-white"}'
            }
            onClick={() => setTabs(0)}
          >
            <i className="fa fa-home"></i>
            <button className="ml-1">Account</button>
          </li>
          <li
            className={
              'border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs===1 && "bg-primary text-white"}'
            }
            onClick={() => setTabs(1)}
          >
            <i className="fa fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li
            className={
              'border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs===2 && "bg-primary text-white"}'
            }
            onClick={() => setTabs(2)}
          >
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li
            className={
              "border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all }"
            }
            onClick={handleSignOut}
          >
            <i className="fa fa-sign-out"> </i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account user={user} />}
      {tabs === 1 && <Password user={user}/>}
      {tabs === 2 && <Order></Order>}
    </div>
  );
};
export async function getServerSideProps({ req, params }) {
 
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`)
  return {
    props: {
      user:user? user.data:null,
    },
  };
}

export default Profile;
