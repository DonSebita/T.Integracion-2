import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import UserInfo from "@/components/TestSession";
import Navbar2 from "@/components/Navbar_2";

const Dashboard = async () => {
  const session = await getServerSession();
  console.log(session)
   return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar2/>
      Dashboard
      <div class="static ... bg-blue-500">
  <div class="static ... bg-red-700"><p>Static child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
  <div class="absolute ..."><p>Absolute child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
</div>
      <UserInfo></UserInfo>
    </div>
  );
};

export default Dashboard;
