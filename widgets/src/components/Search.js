import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const responce = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(responce.data.query.search);
    };
    const timeOutId = setTimeout(() => {
      if (term !== "") {
        search();
      }
    }, 200);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <p>{result.snippet}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}
