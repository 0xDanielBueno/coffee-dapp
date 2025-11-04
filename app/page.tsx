import React, { JSX } from "react";

const Home: React.FC<void> = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold text-purple-500">
        Welcome to the Coffee DApp
      </h1>
    </div>
  );
};

export default Home;
