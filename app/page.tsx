import dynamic from "next/dynamic";
import React from "react";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="h-screen relative">
      <Scene />
    </div>
  );
};

export default Home;
