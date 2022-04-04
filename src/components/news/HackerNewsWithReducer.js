import axios from "axios";
import React from "react";
import { useRef, useState } from "react/cjs/react.development";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }

    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }

    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }

    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }

    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
};

const HackerNewsWithReducer = () => {
  const [state, dispatch] = React.useReducer(hackerNewsReducer, initialState);
  const handleFetchData = useRef();
  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `The error happend ${error}`,
      });
    }
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  return (
    <div className="bg-blue-500 mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-blue-500 focus:border-blue-400 transition-all p-5 block w-full rounded-md"
          placeholder="Typing your keyword..."
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        ></input>
        <button
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
          className="bg-white text-blue-500 font-semibold p-5 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="mx-auto loading w-8 h-8 rounded-full border-white border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="p-3 bg-gray-100 rounded-md" key={item.title}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;
