// pages/ssr-page.js
import React from "react";

function SSRPage({ data }) {
  return (
    <div>
      {console.log({ data }, "this is the ssr page")}
      <h1>Server-Side Rendering Example</h1>
      <p>{data?.info?.seed}</p>
    </div>
  );
}

export async function getServerSideProps() {
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

export default SSRPage;
