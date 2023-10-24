// pages/csr-page.js
import React, { useState, useEffect } from "react";

function CSRPage() {
  const [data, setData] = useState("");

  useEffect(() => {
    // Fetch data on the client side
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api");
      const result = await response.json();
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Client-Side Rendering Example</h1>
      <p>{data}</p>
    </div>
  );
}

export default CSRPage;
