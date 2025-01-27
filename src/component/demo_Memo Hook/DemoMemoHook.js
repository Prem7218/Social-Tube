import React, { useMemo, useState } from "react";
import { nthPrime } from "../../utils/data/data";

const DemoMemoHook = () => {
  const [pageTheme, setPageTheme] = useState(false);
  const [prime, setPrime] = useState(0);
  const primeNumber = useMemo(() => nthPrime(prime), [prime]);

  return (
    <div
      className={`border border-black border-double ml-[15%] w-4/12  ${
        pageTheme ? "bg-gray-200 text-violet-200" : "bg-black text-white"
      }`}
    >
      <div className="mt-4 rounded-md">
        <h1 className="text-center font-bold bg-red-950 rounded-lg">
          Demo of MEMO's
        </h1>
        <label
          className={
            "mt-5 ml-5 font-bold" +
            `${
              pageTheme ? "bg-gray-200 text-black" : "bg-black text-white"
            }`
          }
        >
          Find Prime:{" "}
        </label>
        <input
          onChange={(e) => setPrime(e.target.value)}
          type="number"
          className="mt-5 mb-5 ml-5 text-black border border-black"
          placeholder="Enter Number Here..."
        />
        <h1 className="font-bold text-center bg-green-500 text-black p-2 ml-5 w-[30%] mt-5 rounded-lg">
          {" "}
          Check Prime: {primeNumber}
        </h1>
        <div>
          <button
            onClick={() => setPageTheme(!pageTheme)}
            className="ml-5 mt-10 bg-green-200 text-black rounded-lg p-3"
          >
            Change Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoMemoHook;
