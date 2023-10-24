// pages/ssr-page.js
import React from "react";

function SSGPage({ data }) {
  const a = 3;
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>{data.info.seed}</p>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from an API or a local data source
  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api");
    const result = await response.json();
    return result;
  };
  const data = await fetchData();

  return {
    props: { data },
  };
}

export default SSGPage;
