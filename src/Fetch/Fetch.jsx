import React, { useState, useEffect } from "react";

/**
 * @param {object} param0
 * @property {string} url
 * @property {(boolean, any, Error) => React.ReactElement} children
 * @returns {React.ReactElement}
 */
const Fetch = ({ url, children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Fetch.fetch(url).then(results => {
      setLoading(false);
      setData(results.data);
      setError(results.error);
    });
  }, [url]);

  return children(loading, data, error);
};

/**
 * @param {string} url
 * @returns {Promise<any>}
 */
Fetch.fetch = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      data,
      error: null
    };
  } catch (err) {
    return {
      data: null,
      error: err
    };
  }
};

export default Fetch;
