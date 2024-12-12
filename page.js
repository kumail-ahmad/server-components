// "use client";
import Image from "next/image";
// import { useState } from "react";
import fs from "fs/promises";
export default function Home() {
  // const [count, setCount] = useState(0);
  console.log("hey i am kumail");
  let a = fs.readFile(".gitignore");
  a.then((e) => {
    console.log(e.toString());
  });
  return (
    <div>
      <p>I am a component </p>
      {/* {count} */}
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button> */}
    </div>
  );
}
