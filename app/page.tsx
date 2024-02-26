import dynamic from "next/dynamic";
import React from "react";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="h-screen relative">
      <Scene />
      <div className="absolute font-mono bottom-0 bg-black w-full text-white flex justify-center">
        <span>developed by akhil272</span>
      </div>
    </div>
  );
};

export default Home;
