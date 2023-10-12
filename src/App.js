import { useState } from "react";
export default function App() {
  let [val, setVal] = useState(0);
  // if want to limit the conter: upto certain number you cant increase and decrease
  if (val<0){
    alert(" You can't decrease number below 0")
    setVal(0)
    
  }
  if(val>20){
    alert("You cant increment more than 20")
    setVal(20)
  
  }
//........................................//

  const addVal = () => {
    val = val + 1;
    setVal(val);
  };
  const subtractVal = () => {
    val = val - 1;
    setVal(val);
  };

  return (
    <div className="h-screen grid items-center place-content-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-6xl font-bold mb-8">Counter App</h1>
      <h2 className="text-2xl font-bold mb-8 flex item-center justify-center">
        Counter Value:{val}
      </h2>
      <div className="flex  items-center justify-center space-x-12 text-4xl">
        <button
          onClick={addVal}
          type="button"
          className="font-medium rounded-full text-sm px-6 py-3  mr-2 mb-2 dark:bg-gray-800 dark:text-white  dark:hover:bg-gray-700  "
        >
          Increment
        </button>
        <button
        onClick={subtractVal}
          type="button"
          className="font-medium rounded-full text-sm px-6 py-3 mr-2 mb-2 dark:bg-gray-800 dark:text-white  dark:hover:bg-gray-700  "
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
