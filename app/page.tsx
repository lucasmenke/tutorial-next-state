"use client";

import { useState } from "react";
import Component1 from "./components/homepage/component1";

export default function AppPage() {
  const [name, setName] = useState("");

  function changeName(): void {
    setName("joe");
  }

  function clearName(): void {
    setName("");
  }

  return (
    <div className="p-4 sm:ml-64 mt-20">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
        <h1 className="mb-4 font-semibold">Parent Page</h1>
        <span>My name is: {name}</span>
        <br />
        <button
          onClick={changeName}
          className="my-4 bg-violet-700 rounded-full p-1 px-2 text-white hover:scale-105 transition-all shadow-lg mr-4"
        >
          Set Name
        </button>
        <button
          onClick={clearName}
          className="my-4 bg-violet-700 rounded-full p-1 px-2 text-white hover:scale-105 transition-all shadow-lg"
        >
          Clear Name
        </button>
        <Component1 name={name} changeName={changeName} clearName={clearName} />
      </div>
    </div>
  );
}
