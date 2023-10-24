import React, { useState, useEffect } from "react";

const Test = () => {
  const [value, setValue] = useState(2);
  useEffect(() => {
    console.log("hi this is the useeffect.");
  });
  return <div>{value}</div>;
};

export default Test;
