import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (url) => {
    setLoading(true);
    try {
      const result = await fetch(url);
      const updated = await result.json();
      setData(updated);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return loading ? (
    <p>loading</p>
  ) : (
    <>
      <div>
        <div>
          {data?.map((item) => {
            return (
              <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchData;
