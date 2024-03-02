import React from "react";
import { Outlet } from "react-router-dom";
import LiveChat from "../pages/LiveChat";

export default function OuterPage() {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-[url('../src/assets/outer-bg.jpeg')] ">
      <div className="w-full h-full bg-gradient-to-t from-brown to-transparent bg-cover bg-center flex justify-center items-center">
        <LiveChat />
        <Outlet />
      </div>
    </div>
  );
}
