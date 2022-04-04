import axios from "axios";
import React from "react";
import lodash from "lodash";
import { useRef, useState } from "react/cjs/react.development";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const handleFetchData = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div className="bg-blue-500 mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-blue-500 focus:border-blue-400 transition-all p-5 block w-full rounded-md"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={handleUpdateQuery}
        ></input>
        <button className="bg-white text-blue-500 font-semibold p-5 rounded-md flex-shrink-0">
          Fetching
        </button>
      </div>
      {loading && (
        <div className="mx-auto loading w-8 h-8 rounded-full border-white border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3 className="p-3 bg-gray-100 rounded-md" key={item.title}>
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;