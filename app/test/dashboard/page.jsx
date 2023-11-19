import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import UserInfo from "@/components/TestSession";
import Navbar2 from "@/components/Navbar_2";
import FormCaso from "@/components/formularios/formCaso";

const Dashboard = async () => {
  const session = await getServerSession();
  return (
    <div>
      <FormCaso/>

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar2 />
        Dashboard

        <button className="bg-black text-white w-43 p-3 hover:bg-white hover:text-cuarto">
          Este es un boton
        </button>

        <UserInfo></UserInfo>
      </div>
    </div>
  );
};

export default Dashboard;
